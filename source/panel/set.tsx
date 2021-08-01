
import * as React from 'react'
import * as cx from 'classnames'

export interface SetProps {
    className?: string
    style?: React.CSSProperties
    children?: React.ReactNode
}

export const Set = ({ className, style, children }: SetProps) => {
    return (
        <div
            className={cx('panel-set', className)}
            style={style}
        >{children}</div>
    )
}
