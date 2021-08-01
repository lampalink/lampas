
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

export interface ButtonGroupProps {
    children?: React.ReactNode
}

export const ButtonGroup = ({ children }: ButtonGroupProps) => {
    return (
        <div className={cx('button-group-container')}>
            {children}
        </div>
    )
}
