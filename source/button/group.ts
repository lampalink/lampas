
import { createElement } from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

export interface ButtonGroupProps {
    children?: React.ReactNode
}

export const ButtonGroup = ({ children }: ButtonGroupProps) => {
    return createElement('div', {
        className: cx('button-group-container')
    }, children)
}
