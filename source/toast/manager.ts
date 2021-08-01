
import { v4 as uuidv4 } from 'uuid'
import {
    Context,
    FunctionComponent,
    createContext,
    createElement,
    Fragment,
} from 'react'
import {
    RouteComponentProps,
    Route,
} from 'react-router-dom'
import {
    get,
    set,
    isNumber,
    isEmpty,
    isNil,
    sortBy,
} from 'lodash'
import { Store, useStore } from '@mylampa/store'

import { Toast, ToastProps } from './toast'

interface ActiveToast {
    tid: string
    props: ToastProps
    close(): void
}

type DisplayProps = ToastProps&{
    timeout?: number|null
}

export interface ToastsStoreState {
    activeToasts: ActiveToast[]
}

export interface ToastsManager {
    toastsStore: Store<ToastsStoreState>
    renderToasts: FunctionComponent<RouteComponentProps>
    mount: FunctionComponent
    addToast(toast: ActiveToast): void
    removeToast(toastTid: string): void
    display(props: DisplayProps): ActiveToast
}

export const toastsManager: ToastsManager = {
    toastsStore: new Store<ToastsStoreState>({
        activeToasts: [],
    }),
    renderToasts: (props: RouteComponentProps) => {
        const { activeToasts } = useStore(toastsManager.toastsStore)

        const renderToast = (toast: ActiveToast, index: number) => {
            return createElement(Toast, {
                key: `${index}-${toast.tid}`,
                onClose: () =>
                    toastsManager.removeToast(toast.tid),
                ...props,
                ...toast.props,
            })
        }

        return createElement(
            'div',
            { className: 'toasts-container' },
            activeToasts.map(renderToast),
        )
    },
    mount: () =>
        createElement(Route, {
            render: props =>
                createElement(toastsManager.renderToasts, props),
            }),
    addToast: (toast: ActiveToast) => {
        const { activeToasts } = toastsManager.toastsStore.getState()

        toastsManager.toastsStore.setState({
            activeToasts: [...activeToasts, toast],
        }, false)
    },
    removeToast: (toastTid: string) => {
        const { activeToasts } = toastsManager.toastsStore.getState()

        toastsManager.toastsStore.setState({
            activeToasts: activeToasts.filter(item => item.tid !== toastTid),
        }, false)
    },
    display: ({ timeout, ...props }: DisplayProps): ActiveToast => {
        const toast: ActiveToast = {
            tid: uuidv4(),
            props,
            close: () =>
                toastsManager.removeToast(toast.tid),
        }

        if (timeout !== null && timeout !== 0) {
            setTimeout(
                toast.close,
                timeout === undefined ? 5000 : timeout,
            )
        }

        toastsManager.addToast(toast)
        return toast
    },
}
