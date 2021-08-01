
import * as React from 'react'
import * as cx from 'classnames'

import './styles.scss'

import { Icon } from '../icon'

export interface RadioProps {
    label?: React.ReactNode
    color?: 'blue'|'green'|'red'|'grey'|'yellow'|'purple'
    isChecked?: boolean
    onChange?: (isChecked: boolean) => any
}

export const Radio = ({ color, isChecked, label, onChange }: RadioProps) => {
    const iconType = isChecked ? 'radio-checked' : 'radio-unchecked'
    const iconColor = isChecked ? (color || 'blue') : 'grey'

    return (
        <div
            className={cx('radio-container')}
            onClick={() => {
                if (typeof onChange === 'function') {
                    onChange(!isChecked)
                }
            }}
        >
            <div
                className={cx('radio-icon')}
            ><Icon type={iconType} size='14px' color={iconColor} /></div>
            {label &&
                <div
                    className={cx('radio-label')}
                >{label}</div>}
        </div>
    )
}
