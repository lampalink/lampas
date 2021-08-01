
import {
    createElement,
    useState,
    useEffect,
} from 'react'
import * as cx from 'classnames'
import * as moment from 'moment'

import './styles.scss'

import { Icon } from '../icon'
import { Popover } from '../popover'
import { Calendar } from '../calendar'

export interface DateStepperProps {
    value: Date
    size?: 'small'
    onChange?(value: Date): void
}

export const DateStepper = ({ value, size, onChange }: DateStepperProps) => {
    const valueMoment = moment(value)

    const handleChange = (value: Date) => {
        if (typeof onChange === 'function') {
            onChange(value)
        }
    }

    const handleSubtractDay = () =>
        handleChange(valueMoment.subtract(1, 'day').toDate())

    const handleAddDay = () =>
        handleChange(valueMoment.add(1, 'day').toDate())

    const today = moment()
    const isToday =
        today.startOf('day').unix() <= valueMoment.unix()
        && valueMoment.unix() <= today.endOf('day').unix()

    return createElement('div', {
        className: cx('date-stepper-container', size),
    }, [
        createElement('div', {
            key: 'previous',
            className: cx('date-stepper-previous'),
            onClick: handleSubtractDay,
        }, createElement(Icon, {
            type: 'chevron-left',
            size: '1em',
        })),
        createElement(Popover, {
            key: 'selected',
            trigger: 'click',
            container: { className: cx('date-stepper-selected-container') },
            className: cx('date-stepper-selected'),
            renderOverlay: () =>
                createElement('div',
                    { style: { padding: '8px' } },
                    createElement(Calendar, {
                        selectedDates: [value],
                        onDateClick: handleChange,
                        color: 'purple',
                        hoverable: true,
                    })),
        }, [
            valueMoment.format('dddd, D MMM'),
            isToday &&
                createElement('div', {
                    key: 'today',
                    className: cx('selected-today'),
                }, 'today'),
        ]),
        createElement('div', {
            key: 'next',
            className: cx('date-stepper-next'),
            onClick: handleAddDay,
        }, createElement(Icon, {
            type: 'chevron-right',
            size: '1em',
        })),
    ])
}
