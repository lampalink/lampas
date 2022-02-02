
import {
    ReactNode,
    createElement,
    Fragment,
    useState,
} from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import * as _ from 'lodash'
import cx from 'classnames'

import {
    LayoutNavigation,
    LayoutNavigationProps,
    LayoutNavigationOptions,
} from './navigation'
import { provideNavigationContext, RenderContextBase } from './controller'
import { NavigationRenderer } from './content'

export interface LayoutProps<RenderContext extends {}> extends RouteComponentProps<{}> {
    context: RenderContext
    navigation: LayoutNavigationOptions<RenderContext>
    fallbackRedirectPath?: string
    renderFullscreen?(): ReactNode
}

export const Layout = <RenderContext extends {}>({ context, navigation, fallbackRedirectPath, renderFullscreen }: LayoutProps<RenderContext>) => {
    const [ history, setHistory ] = useState<string[]>([])

    let content: ReactNode
    if (typeof renderFullscreen !== 'function' || (content = renderFullscreen()) === null) {
        content = createElement(Fragment, {}, [
            createElement(Route, {
                key: 'navigation',
                render: props =>
                    createElement(LayoutNavigation, {
                        ...navigation as any,
                        ...props,
                    }),
            }),
            createElement('div', {
                key: 'renderer',
                className: cx('layout'),
            }, createElement(Route, {
                render: props =>
                    createElement(NavigationRenderer, {
                        fallbackRedirectPath,
                        items: navigation.items,
                        ...props,
                    }),
            })),
        ])
    }

    return provideNavigationContext(
        context, history, setHistory,
        createElement('div', { className: cx('layout-container') }, content),
    )
}
