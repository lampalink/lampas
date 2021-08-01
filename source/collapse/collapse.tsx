
import * as React from 'react'
import * as cx from 'classnames'

import './styles.scss'

import { Icon } from '../icon'

export interface CollapseProps {
    isCollapsed?: boolean
    children?: React.ReactNode
}

export const Collapse = ({ isCollapsed, children }: CollapseProps) => {
    return React.createElement(React.Fragment, {}, [
        isCollapsed && children,
    ])
}
