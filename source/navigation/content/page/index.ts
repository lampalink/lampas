
import { createElement } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

export interface PageProps extends RouteComponentProps<{}> {
    className?: string
    containerRef?: React.RefObject<HTMLDivElement>
    // containerClassName?: string
    children?: React.ReactNode
}

export const Page = ({ className, containerRef, children }: PageProps) => {
    return createElement('div', {
        className: cx('page-container', className),
        ref: containerRef,
    }, children)
}
