
import * as React from 'react'
import * as cx from 'classnames'
import * as _ from 'lodash'

import './styles.scss'

interface Option {
    value: string
    text: string
}

export interface SwitchProps {
    value?: string
    options?: Option[]
    size?: 'large'
    color?: 'blue'|'purple'
    onChange?: (value: string) => any
}

export const Switch = ({ value, options, size, color, onChange }: SwitchProps) => {
    return (
        <div className={cx('switch-container', size, color || 'blue')}>
            {(options || []).map(option =>
                <div
                    key={option.value}
                    className={cx('switch-option', { active: option.value === value })}
                    onClick={() => {
                        if (typeof onChange === 'function') {
                            onChange(option.value)
                        }
                    }}
                >{option.text}</div>)}
        </div>
    )
}
