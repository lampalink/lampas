
import { createElement } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import * as _ from 'lodash'
import cx from 'classnames'

import './styles.scss'

import { useNavigationController } from '../navigation'
import { Breadcrumbs, BreadcrumbItemProps } from '../breadcrumbs'

export interface ArtboardProps<RouteParams extends object = {}> extends RouteComponentProps<RouteParams> {
    isNarrow?: boolean
    centerContent?: boolean
    contentClassName?: string
    headerClassName?: string
    containerClassName?: string
    containerStyle?: React.CSSProperties
    contentStyle?: React.CSSProperties
    plain?: boolean
    noPadding?: boolean
    enableWidescreen?: boolean
    containerRef?: (containerElement: HTMLDivElement) => any
    contentRef?: (contentElement: HTMLDivElement) => any
    setBreadcrumbs?: (navigatePath: (path: string) => any) => BreadcrumbItemProps[]
    renderActions?: () => React.ReactNode
    renderHeading?: () => React.ReactNode
    renderExtras?: (props: { className: string }) => React.ReactNode
    children?: React.ReactNode
}

export const Artboard = <RouteParams extends object = {}>({ isNarrow, centerContent, contentClassName, headerClassName, containerClassName, containerStyle, contentStyle, plain, noPadding, containerRef, contentRef, setBreadcrumbs, renderActions, renderHeading: renderHeadingProp, renderExtras, enableWidescreen, children, ...rest }: ArtboardProps<RouteParams>) => {
    const { navigatePath } = useNavigationController(rest)

    const hasExtras = typeof renderExtras === 'function'

    const renderHeading = () => {
        if (typeof renderHeadingProp === 'function') {
            return createElement('div', {
                key: 'customheading',
                className: cx('artboard-heading', headerClassName),
            }, renderHeadingProp())
        }

        if (typeof setBreadcrumbs !== 'function' && typeof renderActions !== 'function') {
            return null
        }

        return createElement('div', {
            key: 'heading',
            className: cx('artboard-heading'),
        }, [
            typeof setBreadcrumbs === 'function' &&
                createElement(Breadcrumbs, {
                    key: 'breadcrumbs',
                }, setBreadcrumbs(navigatePath)
                    .map((item, index) =>
                        createElement(Breadcrumbs.Item, {
                            key: `${index}-${item.text}`,
                            ...item,
                        }))),
            typeof renderActions === 'function' &&
                createElement('div', {
                    key: 'actions',
                    className: cx('artboard-heading-actions'),
                }, renderActions()),
        ])
    }

    return createElement('div', {
        className: cx('artboard-container', containerClassName, { plain, isNarrow, enableWidescreen, hasExtras, centerContent }),
        style: containerStyle,
        ref: containerRef,
    }, [
        renderHeading(),
        (children || hasExtras) &&
            createElement('div', {
                key: 'line',
                className: cx('artboard-line'),
            }, [
                createElement('div', {
                    key: 'content',
                    className: cx('artboard-content', contentClassName, { plain, noPadding, enableWidescreen }),
                    style: contentStyle,
                    ref: contentRef,
                }, children),
                hasExtras &&
                    createElement('div', {
                        key: 'extras',
                        className: cx('artboard-extras'),
                    }, renderExtras({ className: cx('artboard-extra') })),
            ]),
    ])
}
