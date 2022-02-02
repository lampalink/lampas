
import * as React from 'react'
import cx from 'classnames'

import './styles.scss'

import { Icon } from '../icon'

export interface CheckboxProps {
    color?: 'grey'|'purple'|'blue'|'red'
    size?: 'medium'|'big'
    checked?: boolean
    className?: string
    label?: React.ReactNode
    hasError?: boolean
    onChange?: (checked: boolean) => any
}

export const Checkbox = ({ checked, className, color, label, size, hasError, onChange }: CheckboxProps) => {
    const [ state, setState ] = React.useState(!!checked)
    React.useEffect(() => setState(!!checked), [checked])

    const handleToggle = () => {
        if (typeof onChange === 'function') {
            onChange(!state)
            return
        }
        setState(!state)
    }

    const hasLabel = !!label

    let iconSize = '16px'
    switch (size) {
    case 'medium':
        iconSize = '16px'
        break
    case 'big':
        iconSize = '20px'
        break
    }

    return (
        <div
            className={cx('checkbox-container', className, color, size ? size : 'medium', {
                hasLabel, hasError,
                checked: state,
            })}
            onClick={handleToggle}
        >
            {state ?
                <Icon type='checkbox-filled' size={iconSize} color={hasError ? 'red' : color} /> :
                <Icon type='checkbox' size={iconSize} color={hasError ? 'red' : undefined} />}
            {hasLabel &&
                <label className={cx('checkbox-label')}>{label}</label>}
        </div>
    )
}
