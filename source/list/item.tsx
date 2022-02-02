
import * as React from 'react'
import cx from 'classnames'

export interface ItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    isActive?: boolean
    children?: any
}

export const Item = ({ isActive, children, ...rest }: ItemProps) => {
    return (
        <div
            className={cx('list-item', { isActive })}
            {...rest}
        >{children}</div>
    )
}
