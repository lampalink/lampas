
import { createElement } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

import { Panel } from '../../../panel'

export interface PanelPageProps extends RouteComponentProps<{}> {
    className?: string
    containerClassName?: string
    panelClassName?: string
    footerClassName?: string
    headerClassName?: string
    isLoading?: boolean
    noHeaderBorder?: boolean
    children?: React.ReactNode
    renderHeader?: () => React.ReactNode
    renderFooter?: () => React.ReactNode
}

export const PanelPage = ({ className, containerClassName, footerClassName, headerClassName, panelClassName, isLoading, noHeaderBorder, children, renderHeader, renderFooter }: PanelPageProps) => {
    return createElement('div', {
        className: cx('panel-page-container', containerClassName),
    }, [
        createElement(Panel, {
            isLoading,
            key: 'page',
            container: { className: cx('panel-page', className) },
            className: panelClassName,
            headerClassName: headerClassName,
            renderHeading: renderHeader,
            noHeaderBorder: noHeaderBorder,
        }, children),
        typeof renderFooter === 'function' &&
            createElement('div', {
                key: 'footer',
                className: cx('page-footer', footerClassName),
            }, renderFooter()),
    ])
}
