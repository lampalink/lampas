
import * as React from 'react'
import * as cx from 'classnames'

import './styles.scss'

export interface ListProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    backgroundColor?: 'white'|'purple'
    hoverable?: boolean
    darkBackground?: boolean
    renderHeading?: () => React.ReactNode
}

export const List = ({ children, className, backgroundColor, hoverable, darkBackground, renderHeading, ...rest }: ListProps) => {
    return (
        <div
            className={cx('list-container', className, backgroundColor, { hoverable: hoverable, darkBackground: darkBackground })}
            {...rest}
        >
            {typeof renderHeading === 'function' &&
                <div className={cx('list-header')}>{renderHeading()}</div>}
            {children}
        </div>
    )
}
