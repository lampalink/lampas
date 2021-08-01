
import * as React from 'react'
import * as cx from 'classnames'

import './styles.scss'

export interface StatusBoxProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    color?: 'purple'|'blue'|'green'|'red'|'grey'|'yellow'|'white'
    size?: 'small'
    noBorder?: boolean
}

export const StatusBox = ({ color, size, noBorder, children, ...rest }: StatusBoxProps) => {
    return (
        <div
            className={cx('status-box-container', color, size, { noBorder })}
            {...rest}
        >{children}</div>
    )
}
