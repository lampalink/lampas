
import { OmitProperties, DeepPartial } from 'ts-essentials'
import { v4 as uuidv4 } from 'uuid'
import {
    Context,
    FunctionComponent,
    createContext,
    createElement,
    Fragment,
    useEffect,
    MutableRefObject,
    ReactNode,
} from 'react'
import {
    Route,
    RouteComponentProps,
} from 'react-router-dom'
import {
    get,
    set,
    isNil,
    isNumber,
    isEmpty,
    sortBy,
} from 'lodash'
import { Store, useStore } from '@mylampa/store'
import Reactour, { ReactourStep, ReactourProps } from 'reactour'
import * as cx from 'classnames'

const ToursLSFlagPrefix = '_tourflag_'

const getTourLSFlags = () => {
    const lsKeys = Object.keys(localStorage)

    for (const i in lsKeys) {
        if (lsKeys[i].startsWith(ToursLSFlagPrefix)) {
            const items = lsKeys[i].split('_')
            if (items.length === 4) {

            }

            const value = localStorage.getItem(lsKeys[i])
        }
    }

    localStorage['']
}

export interface IndexedReactourStep extends ReactourStep {
    tid?: string
}

export interface FocusOptions {
    element?: HTMLElement
    selector?: string
}

export interface RenderOptions extends RouteComponentProps {
    gotoStep?(tourStep: TourStep<HTMLElement>): void
    gotoFirst?(): void
    gotoLast?(): void
}

export interface TourStepOptions {
    focus?: FocusOptions
    position?: [number|string, number|string]|'bottom'|'center'|'left'|'right'|'top'
    onMount?(props: RouteComponentProps): void
    onUnmount?(props: RouteComponentProps): void
}

export interface TourStep<FocusedElement extends HTMLElement> extends TourStepOptions {
    tid?: string
    focusSelector?: string

    renderStep(tour: Tour): IndexedReactourStep
}

export type BadgeTextFormater =
    (currentStep: number, totalSteps: number) => string

export interface TourOptions {
    key: string
    color?: string
    borderRadius?: number
    formatBadgeText?: BadgeTextFormater
    enableCloseButton?: boolean
    enableBackdropClose?: boolean
    enableDotsNavigation?: boolean
    enableNavigationButtons?: boolean
    enableFocusedInteraction?: boolean
    renderEndButton?(): ReactNode
    afterClose?(props: RouteComponentProps): any
}

export interface Tour {
    readonly tid: string
    readonly key: string
    readonly options: TourOptions

    readonly hasCloseButtonEnabled: boolean
    readonly hasBackdropCloseEnabled: boolean
    readonly hasDotsNavigationEnabled: boolean
    readonly hasNavigationButtonsEnabled: boolean
    readonly hasFocusedInteractionEnabled: boolean
    readonly color: string
    readonly borderRadius: number
    readonly hasBadgeTextEnabled: boolean
    readonly formatBadgeText: BadgeTextFormater

    // hasSilenceRequest(): boolean
    // requestSilence(): void
    // clearSilenceRequest(): void

    exit(): void
    display(overrideHideRequest?: boolean): void
    forceRender(): void
    getSteps(): IndexedReactourStep[]
    gotoStep<T extends HTMLElement>(tourStep: TourStep<T>): void
    gotoFirstStep(): void
    gotoLastStep(): void
    afterClose(props: RouteComponentProps): void
}

interface TourStoreState {
    activeTour: Tour
    activeStepIndex: number
    renderToken: string
}

export interface ToursManager {
    readonly DefaultColor: string
    readonly DefaultBorderRadius: number
    readonly activeSteps: IndexedReactourStep[]
    readonly isMounted: boolean
    mountpointRouteProps: RouteComponentProps

    tourStore: Store<TourStoreState>
    mount: FunctionComponent
    renderActiveTour: FunctionComponent

    regenerateRenderToken(): void
    handleCurrentStepChange(currentStepIndex: number)
    enterTour(tour: Tour)
    exitTour()
}

export const toursManager: ToursManager = {
    DefaultColor: 'rgba(92,38,201,1)',
    DefaultBorderRadius: 10,
    tourStore: new Store<TourStoreState>({
        activeTour: null,
        activeStepIndex: 0,
        renderToken: null,
    }),
    get activeSteps(): IndexedReactourStep[] {
        const { activeTour } = toursManager.tourStore.getState()

        if (activeTour) {
            return activeTour.getSteps()
        }

        return []
    },
    get isMounted() {
        return !isEmpty(toursManager.mountpointRouteProps)
    },
    mountpointRouteProps: null,
    mount: () => {
        return createElement(Route, {
            component: (props: RouteComponentProps) => {
                useEffect(() => {
                    toursManager.mountpointRouteProps = props
                    return () => {
                        toursManager.mountpointRouteProps = null
                    }
                }, [props])

                return createElement(toursManager.renderActiveTour, {})
            },
        })
    },
    renderActiveTour: () => {
        const {
            activeTour,
            activeStepIndex,
            renderToken,
        } = useStore(toursManager.tourStore)
        const isActiveTour = !isEmpty(activeTour)

        const reactourProps: ReactourProps = {
            isOpen: isActiveTour,
            className: cx('tour-dialog'),
            steps: toursManager.activeSteps,
            onRequestClose: toursManager.exitTour,
        }

        if (isActiveTour) {
            reactourProps.update = `${activeTour.tid}:${renderToken}`

            reactourProps.getCurrentStep = toursManager.handleCurrentStepChange
            reactourProps.goToStep = activeStepIndex

            reactourProps.closeWithMask = activeTour.hasBackdropCloseEnabled
            reactourProps.showCloseButton = activeTour.hasCloseButtonEnabled
            reactourProps.showNavigation = activeTour.hasDotsNavigationEnabled
            reactourProps.showButtons = activeTour.hasNavigationButtonsEnabled
            reactourProps.disableInteraction = !activeTour.hasFocusedInteractionEnabled

            reactourProps.accentColor = activeTour.color
            reactourProps.rounded = activeTour.borderRadius

            reactourProps.showNumber = activeTour.hasBadgeTextEnabled
            reactourProps.badgeContent = activeTour.formatBadgeText

            if (typeof get(activeTour, 'options.renderEndButton') === 'function') {
                reactourProps.lastStepNextButton = activeTour.options.renderEndButton()
            }
        }

        return createElement(Reactour, reactourProps)
    },
    regenerateRenderToken: () => {
        const { renderToken } = toursManager.tourStore.getState()
        if (renderToken === null) {
            return
        }

        toursManager.tourStore.setState({ renderToken: uuidv4() })
    },
    handleCurrentStepChange: (currentStepIndex: number) => {
        const { activeStepIndex } = toursManager.tourStore.getState()
        if (currentStepIndex !== activeStepIndex) {
            toursManager.tourStore.setState({
                activeStepIndex: currentStepIndex,
            })
        }
    },
    enterTour: (tour: Tour) => {
        toursManager.tourStore.setState({
            activeTour: tour,
            renderToken: uuidv4(),
        })
    },
    exitTour: () => {
        const { activeTour } = toursManager.tourStore.getState()

        toursManager.tourStore.setState({
            activeTour: null,
            activeStepIndex: 0,
            renderToken: null,
        })

        if (typeof activeTour?.afterClose === 'function') {
            activeTour.afterClose(toursManager.mountpointRouteProps)
        }
    },
}

export const createTour = (steps: TourStep<HTMLElement>[], options: TourOptions): Tour => {
    let tour: Tour

    return (tour = {
        options,
        tid: uuidv4(),
        key: options.key,
        get hasCloseButtonEnabled() {
            return !!options.enableCloseButton
        },
        get hasBackdropCloseEnabled() {
            if (typeof options.enableBackdropClose === 'boolean') {
                return options.enableBackdropClose
            }

            return true
        },
        get hasDotsNavigationEnabled() {
            return !!options.enableDotsNavigation
        },
        get hasNavigationButtonsEnabled() {
            return !!options.enableNavigationButtons
        },
        get hasFocusedInteractionEnabled() {
            return !!options.enableFocusedInteraction
        },
        get hasBadgeTextEnabled() {
            return typeof options.formatBadgeText === 'function'
        },
        color: typeof options.color === 'string' ?
            options.color : toursManager.DefaultColor,
        borderRadius: typeof options.borderRadius === 'number' ?
            options.borderRadius : toursManager.DefaultBorderRadius,
        // hasSilenceRequest: (): boolean => {
        //     localStorage.getItem(`${ToursLSStatePrefix}`)
        // },
        // requestSilence: (): void => {},
        // clearSilenceRequest: (): void => {},
        afterClose: (props: RouteComponentProps) => {
            if (typeof options.afterClose === 'function') {
                options.afterClose(props)
            }
        },
        formatBadgeText: (currentStep: number, totalSteps: number): string => {
            if (tour.hasBadgeTextEnabled) {
                return options.formatBadgeText(currentStep, totalSteps)
            }

            return null
        },
        getSteps: (): IndexedReactourStep[] => {
            return steps.map(step => step.renderStep(tour))
        },
        display: (overrideHideRequest: boolean = false) => {
            toursManager.enterTour(tour)
        },
        exit: toursManager.exitTour,
        forceRender: toursManager.regenerateRenderToken,
        gotoStep: <T extends HTMLElement>(tourStep: TourStep<T>) => {
            const { activeTour } = toursManager.tourStore.getState()

            if (tour.tid === activeTour.tid) {
                let activeStepIndex = null
                for (const i in steps) {
                    if (steps[i].tid === tourStep.tid) {
                        activeStepIndex = Number(i)
                        break
                    }
                }

                if (activeStepIndex) {
                    toursManager.tourStore.setState({ activeStepIndex })
                }
            }
        },
        gotoFirstStep: () => {
            const { activeTour } = toursManager.tourStore.getState()

            if (tour.tid === activeTour.tid) {
                toursManager.tourStore.setState({
                    activeStepIndex: 0,
                })
            }
        },
        gotoLastStep: () => {
            const { activeTour } = toursManager.tourStore.getState()

            if (tour.tid === activeTour.tid) {
                toursManager.tourStore.setState({
                    activeStepIndex: steps.length - 1,
                })
            }
        },
    })
}

export const createTourStep = <FocusedElement extends HTMLElement>(
    Content: FunctionComponent<RenderOptions>,
    { focus, position, onMount, onUnmount }: TourStepOptions,
): TourStep<FocusedElement> => {
    let tourStep: TourStep<FocusedElement>

    return (tourStep = {
        tid: uuidv4(),
        focus: { ...focus },
        focusSelector: undefined,
        renderStep: (tour: Tour): IndexedReactourStep => {
            if (tourStep.focus.element) {
                tourStep.focus.element
                    .setAttribute('data-tourstepid', tourStep.tid)
                tourStep.focusSelector = `[data-tourstepid="${tourStep.tid}"]`
            } else if (tourStep.focus.selector) {
                tourStep.focusSelector = tourStep.focus.selector
            }

            return {
                position: position as any,
                tid: tourStep.tid,
                selector: tourStep.focusSelector,
                content: ({ close, goTo, inDOM, step: index }) =>
                    createElement(Route, {
                        render: routeProps =>
                            createElement<RenderOptions>(props => {
                                useEffect(() => {
                                    if (typeof onMount === 'function') {
                                        onMount(routeProps)
                                    }

                                    return () => {
                                        if (typeof onUnmount === 'function') {
                                            onUnmount(routeProps)
                                        }
                                    }
                                }, [])

                                return createElement(Content, props)
                            }, {
                                ...routeProps,
                                gotoFirst: () =>
                                    tour.gotoFirstStep(),
                                gotoLast: () =>
                                    tour.gotoLastStep(),
                                gotoStep: <T extends HTMLElement>(tourStep: TourStep<T>) =>
                                    tour.gotoStep(tourStep),
                            } as RenderOptions),
                    }),
            }
        },
    })
}
