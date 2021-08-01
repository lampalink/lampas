
import { v4 as uuidv4 } from 'uuid'
import {
    Context,
    FunctionComponent,
    Fragment,
    useState,
    useEffect,
    createElement,
    createContext,
} from 'react'
import { RouteComponentProps, Route } from 'react-router-dom'
import { Store, useStore } from '@mylampa/store'
import {
    get,
    set,
    isNumber,
    isEmpty,
    sortBy,
} from 'lodash'

import { useNavigationController } from '../navigation'

interface ModalComponentProps extends RouteComponentProps {
    onClose: () => any
}

interface CreateModalOptions {
    key?: string
    singleInstanceOnly?: boolean
    sticky?: boolean

    // defaultParams?: 
}

interface RegisteredModal<Props> extends CreateModalOptions {
    readonly tid: string
    readonly Component: FunctionComponent<Props&ModalComponentProps>
    display(props: Props): Layer<Props>
    getInstanceCount(): number
    closeAllInstances(): void
}

interface Layer<Props> {
    readonly zIndex: number
    readonly modalId: string
    readonly modal: RegisteredModal<Props>
    readonly Component: FunctionComponent<Props&ModalComponentProps>
    readonly props: Props
    close(): void
}

interface ModalsManager {
    readonly initialZIndex: number
    readonly currentHighestZIndex: number
    readonly layersStore: Store<{
        [zIndex: number]: Layer<{}>
    }>
    renderLayers: FunctionComponent<RouteComponentProps>
    renderModals: FunctionComponent<RouteComponentProps>
    mount: FunctionComponent
    // propagateSickyLayers(): void
    // recoverSickyLayers(): void
    inspectLayers(): Layer<{}>[]
    setLayer(zIndex: number, layer: Layer<{}>): void
    deleteLayer(layer: Layer<{}>): void
    deleteAllLayers(): void
    displayLayer<Props>(registeredModal: RegisteredModal<Props>, props: Props): Layer<Props>
    createModal<Props>(ModalComponent: FunctionComponent<Props&ModalComponentProps>, options?: CreateModalOptions): RegisteredModal<Props>
}

export const layerContext = createContext<Layer<{}>>(null)

const modalsRegister: RegisteredModal<any>[] = []

export const modalsManager: ModalsManager = {
    initialZIndex: 700,
    get currentHighestZIndex(): number {
        const layers = modalsManager.inspectLayers()

        let currentHighestZIndex = modalsManager.initialZIndex
        if (layers.length < 1) {
            return currentHighestZIndex
        }

        for (const i in layers) {
            const { zIndex } = layers[i]
            if (zIndex > currentHighestZIndex) {
                currentHighestZIndex = zIndex
            }
        }

        return currentHighestZIndex
    },
    layersStore: new Store<{ [zIndex: number]: Layer<{}> }>({}),
    renderLayers: (props: RouteComponentProps) => {
        const layersStoreState = useStore(modalsManager.layersStore)
        const layers: Layer<any>[] = sortBy(
            Object
                .keys(layersStoreState)
                .filter(zIndex => !isEmpty(layersStoreState[zIndex]))
                .map(zIndex => layersStoreState[zIndex]),
            layer => layer.zIndex,
        )

        const onKeydown = (event: KeyboardEvent) => {
            switch (event.key) {
            case 'Escape':
                if (layers.length > 0) {
                    const currentHighestZIndex = modalsManager.currentHighestZIndex
                    for (const i in layers) {
                        if (layers[i].zIndex === currentHighestZIndex) {
                            layers[i].close()
                            return
                        }
                    }
                }
                return
            }
        }

        useEffect(() => {
            window.addEventListener('keydown', onKeydown)
            return () =>
                window.removeEventListener('keydown', onKeydown)
        }, [layers])

        if (layers.length < 1) {
            return null
        }

        const renderLayer = (layer: Layer<any>, index: number) =>
            createElement('div', {
                key: `${index}-${layer.zIndex}`,
                className: 'modal-overlay',
                style: { zIndex: layer.zIndex },
            }, createElement(layerContext.Provider, { value: layer },
                createElement(layer.Component, {
                    onClose: () =>
                        layer.close(),
                    ...layer.props,
                    ...props,
                })))

        return createElement(Fragment, {}, layers.map(renderLayer))
    },
    renderModals: (props: RouteComponentProps) => {
        const { actualPath, getQueryParams } = useNavigationController<any, any, { modal?: string }>(props)

        const [ _actualPath, _setActualPath ] = useState(actualPath)
        useEffect(() => {
            if (actualPath !== _actualPath) {
                _setActualPath(actualPath)
                modalsManager.deleteAllLayers()
            }
        }, [actualPath])

        // useEffect(() => {
        //     modalsManager.layersStore.connect(modalsManager.propagateSickyLayers)
        //     return () =>
        //         modalsManager.layersStore.disconnect(modalsManager.propagateSickyLayers)
        // }, [])

        // TODO: Completely re-do this fucking half baked sticky modal shit
        useEffect(() => {
            const queryParams = getQueryParams()
            if (queryParams.modal) {
                for (const index in modalsRegister) {
                    if (modalsRegister[index]?.key && modalsRegister[index].key === queryParams.modal) {
                        // TODO: tide this feature to authentication
                        // const { isAuthenticated } = authStore.getState()

                        const parseLiteral = (value: any) => {
                            if (value === 'true') {
                                return value
                            } else if (value === 'false') {
                                return value
                            } else if (!isNaN(value)) {
                                return value
                            } else if (/^\[.*\]$/.test(value) || /^\{.*\}$/.test(value)) {
                                return JSON.parse(value)
                            }

                            return value
                        }

                        const props = {}
                        for (const name in queryParams) {
                            props[name] = parseLiteral(queryParams[name])
                        }

                        modalsRegister[index].display(props)
                    }
                }
            }
        }, [])

        return createElement(Route, {
            render: props => createElement(modalsManager.renderLayers, props),
        })
    },
    mount: () =>
        createElement(Route, {
            render: props => createElement(modalsManager.renderModals, props),
        }),
    // propagateSickyLayers: () => {
    //     const stickyLayers = modalsManager
    //         .inspectLayers()
    //         .filter(layer => typeof get(layer, 'modal.key') === 'string')
    //     const stickyLayersState = []
    //     for (const i in stickyLayers) {
    //         stickyLayersState.push({
    //             zIndex: stickyLayers[i].zIndex,
    //             key: stickyLayers[i].modal.key,
    //             props: stickyLayers[i].props,
    //         })
    //     }
    //     localStorage.setItem('__stickylayersstate', JSON.stringify(stickyLayersState))
    // },
    // recoverSickyLayers: () => {
    //     // localStorage.getItem('__stickylayersstate')
    // },
    inspectLayers: () => {
        const layers = modalsManager.layersStore.getState()
        return Object
            .keys(layers)
            .filter((zIndex: any) => !isNaN(zIndex))
            .map(zIndex => ({
                zIndex: Number(zIndex),
                ...layers[zIndex],
            }))
    },
    setLayer: (zIndex: number, layer: Layer<{}>) =>
        modalsManager.layersStore.setState({ [zIndex]: layer }, false),
    deleteLayer: (layer: Layer<{}>) =>
        modalsManager.setLayer(layer.zIndex, null),
    deleteAllLayers: () => {
        modalsManager
            .inspectLayers()
            .forEach(layer =>
                modalsManager
                    .setLayer(layer.zIndex, null))
    },
    displayLayer: <Props>(registeredModal: RegisteredModal<Props>, props: Props): Layer<Props> => {
        const layer: Layer<Props> = {
            props,
            modalId: registeredModal.tid,
            modal: registeredModal,
            Component: registeredModal.Component,
            zIndex: modalsManager.currentHighestZIndex + 1,
            close: () => {
                if (registeredModal.sticky) {
                    history.replaceState(null, null, '?')
                }

                modalsManager.deleteLayer(layer)
            },
        }

        modalsManager.setLayer(layer.zIndex, layer)

        return layer
    },
    createModal: <Props>(
        Component: FunctionComponent<Props&ModalComponentProps>,
        options: CreateModalOptions = {},
    ) => {
        const registeredModal: RegisteredModal<Props> = {
            ...options,
            Component,
            tid: uuidv4(),
            display: (props: Props) => {
                if (options.singleInstanceOnly) {
                    registeredModal.closeAllInstances()
                }

                if (options.sticky && options.key) {
                    const queryParams = new URLSearchParams(window.location.search)

                    queryParams.set('modal', options.key)
                    for (const name in props) {
                        if (typeof props[name] !== 'function') {
                            queryParams.set(name, typeof props[name] !== 'string' ? JSON.stringify(props[name]) : props[name] as any)
                        }
                    }

                    history.replaceState(null, null, `?${queryParams.toString()}`)
                }

                return modalsManager.displayLayer(registeredModal, props)
            },
            getInstanceCount: (): number =>
                modalsManager.inspectLayers().map(layer => {
                    if (layer.modalId === registeredModal.tid) {
                        return 1
                    }

                    return 0
                }).reduce((a, b) => a + b, 0),
            closeAllInstances: () =>
                modalsManager
                    .inspectLayers()
                    .map(layer => {
                        if (layer.modalId === registeredModal.tid) {
                            modalsManager.deleteLayer(layer)
                        }
                    }),
        }

        modalsRegister.push(registeredModal)

        return registeredModal
    },
}

