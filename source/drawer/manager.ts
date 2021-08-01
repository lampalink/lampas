
import { DeepPartial } from 'ts-essentials'
import { v4 as uuidv4 } from 'uuid'
import {
    FunctionComponent,
    useEffect,
    useState,
    createElement,
    Fragment,
} from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import { isEmpty } from 'lodash'
import { jSignal } from 'jsignal'

import { DrawerProps } from './drawer'

export type DisplayDrawerProps<Props> =
    DeepPartial<Props>

export type DisplayDrawer<Props> =
    (props: DisplayDrawerProps<Props>) => void

export interface DrawersManager {
    [key: string]: any
    displaySignal: jSignal
    currentDrawer: {
        Component: FunctionComponent<DeepPartial<DrawerProps>>
        props: DeepPartial<DrawerProps>
    }
    renderDrawers: FunctionComponent<RouteComponentProps&{ defaultProps?: DeepPartial<DrawerProps> }>
    mount: FunctionComponent<DeepPartial<DrawerProps>>
    display<Props extends DeepPartial<DrawerProps>>(Component: FunctionComponent<Props>, props: Props): void
    close(): void
    createDrawer<Props>(Component: FunctionComponent<Props&DrawerProps>): {
        tid: string
        display: DisplayDrawer<Props>
    }
}

export const drawersManager: DrawersManager = {
    _currentDrawer: null,
    displaySignal: new jSignal(),
    get currentDrawer(): {
        Component: FunctionComponent<DeepPartial<DrawerProps>>
        props: DeepPartial<DrawerProps>
    } {
        return drawersManager._currentDrawer
    },
    set currentDrawer(value: {
        Component: FunctionComponent<DeepPartial<DrawerProps>>
        props: DeepPartial<DrawerProps>
    }) {
        drawersManager._currentDrawer = value
        drawersManager.displaySignal.dispatch()
    },
    renderDrawers: ({ defaultProps, ...rest }: RouteComponentProps&{ defaultProps: DeepPartial<DrawerProps> }) => {
        const [ currentDrawer, setCurrentDrawer ] = useState(drawersManager.currentDrawer)
        const onDisplaySignal = () =>
            setCurrentDrawer(drawersManager.currentDrawer)

        useEffect(() => {
            drawersManager.displaySignal.listen(onDisplaySignal)
            return () =>
                drawersManager.displaySignal.unlisten(onDisplaySignal)
        }, [])

        const drawers = [
            isEmpty(currentDrawer) ? null :
                createElement(currentDrawer.Component, {
                    key: 'Drawer',
                    ...rest,
                    ...defaultProps,
                    ...currentDrawer.props,
                }),
        ]

        return createElement(Fragment, {}, drawers)
    },
    mount: (defaultProps: DeepPartial<DrawerProps>) => {
        return createElement(Route, {
            render: props =>
                createElement(drawersManager.renderDrawers, { defaultProps, ...props })
        })
    },
    display: <Props extends DeepPartial<DrawerProps>>(Component: FunctionComponent<Props>, props: Props) =>
        drawersManager.currentDrawer = { Component, props },
    close: () =>
        drawersManager.currentDrawer = null,
    createDrawer: <Props extends DeepPartial<DrawerProps>>(Component: FunctionComponent<Props&DrawerProps>) => ({
        tid: uuidv4(),
        display: (props: DisplayDrawerProps<Props>) =>
            drawersManager.display(Component, { ...props,
                onClose: () =>
                    drawersManager.close(),
            } as Props&DrawerProps),
    }),
}

export const createDrawer =
    <Props>(Component: FunctionComponent<Props&DrawerProps>): {
        tid: string
        display: DisplayDrawer<Props>
    } => drawersManager.createDrawer(Component)
