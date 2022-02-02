
import {
    ChangeEventHandler,
    createElement,
    useState,
} from 'react'
import cx from 'classnames'

export interface SliderProps {
    value: number
    minValue?: number
    maxValue?: number
    precision?: number
    onChange?(value: number): any
}

export const Slider = ({ value, minValue, maxValue, precision, onChange }: SliderProps) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        if (typeof onChange === 'function') {
            onChange(Number(event.target.value))
        }
    }

    return createElement('div', {
        className: cx('slider-container'),
    }, [
        createElement('input', {
            value,
            min: minValue,
            max: maxValue,
            step: precision,
            type: 'range',
            className: cx('slider'),
            onChange: handleChange,
        })
    ])
}
