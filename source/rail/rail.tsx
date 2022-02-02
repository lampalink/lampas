
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

export interface RailProps {
    flexLine?: boolean
    containerClassName?: string
    className?: string
    headerClassName?: string
    renderHeader?: () => React.ReactNode
    children?: React.ReactNode
}

export const Rail = ({ flexLine, containerClassName, className, headerClassName, renderHeader, children }: RailProps) => {
    return (
        <div className={cx('rail-container', containerClassName, { flexLine })}>
            {typeof renderHeader === 'function' &&
                <div
                    className={cx('rail-header', headerClassName)}
                >{renderHeader()}</div>}
            <div
                className={cx('rail-line', className)}
            >{children}</div>
        </div>
    )
}
