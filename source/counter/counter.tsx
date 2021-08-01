
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

import { Icon } from '../icon'

export interface CounterProps {
    value?: number
    color?: 'blue'|'purple'
    style?: React.CSSProperties
    hasError?: boolean
    onChange?: (value: number) => any
    parseLabel?: (value: number) => string
}

export const Counter = ({ value, color, style, hasError, onChange, parseLabel }: CounterProps) => {
    const [ state, setState ] = React.useState(isNaN(value) ? 0 : Number(value))
    React.useEffect(() => setState(isNaN(value) ? state : Number(value)), [value])

    const handleChange = (value: number) => {
        if (typeof onChange === 'function') {
            onChange(value)
            return
        }
        setState(value)
    }

    return (
        <div
            className={cx('counter-container', { hasError })}
            style={style}
        >
            <div
                className={cx('counter-changer', 'left', color || 'blue')}
                onClick={e => handleChange(state - 1)}
            ><Icon type='minus' color={color || 'blue'} size='.8rem' /></div>
            <div
                className={cx('counter-label')}
            >{typeof parseLabel === 'function' ? parseLabel(state) : state}</div>
            <div
                className={cx('counter-changer', 'right', color || 'blue')}
                onClick={e => handleChange(state + 1)}
            ><Icon type='plus' color={color || 'blue'} size='.8rem' /></div>
        </div>
    )
}
