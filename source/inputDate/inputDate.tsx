
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'
import * as moment from 'moment'

import './styles.scss'

import { Input } from '../input'
import { Popover } from '../popover'
import { Calendar } from '../calendar'
import { Icon } from '../icon'

export interface InputDateProps {
    valueRange?: 'day'|'week'
    value?: Date
    placeholder?: string
    color?: 'blue'|'purple'
    enableClear?: boolean
    hasError?: boolean
    preserveTime?: boolean
    containerStyle?: React.CSSProperties
    onChange?: (value: Date) => any
}

export const InputDate = ({ valueRange, value, placeholder, color, enableClear, preserveTime, containerStyle, hasError, onChange }: InputDateProps) => {
    const cloneTime = (date: Date) => {
        const valueMoment = moment(value)

        return moment(date)
            .hours(valueMoment.hours())
            .minutes(valueMoment.minutes())
            .seconds(valueMoment.seconds())
            .toDate()
    }

    const handleChange = (date: Date) => {
        if (typeof onChange === 'function') {
            onChange(preserveTime ? cloneTime(date) : date)
        }
    }

    const handleDateClick = (date: Date) => {
        switch (valueRange) {
        case 'week':
            return handleChange(moment(date).startOf('week').toDate())
        case 'day':
        default:
            return handleChange(date)
        }
    }

    return (
        <Popover
            renderOverlay={() =>
                <div style={{ padding: '8px' }}>
                    <Calendar
                        selectedDates={value ? [value] : []}
                        onDateClick={handleDateClick}
                        color='purple'
                        selectionRange={valueRange}
                        hoverable
                    />
                </div>}
            trigger='click'
        >
            <Input
                placeholder={placeholder}
                color={color}
                value={value ? moment(value).format('YYYY/MM/DD') : null}
                hasError={hasError}
                containerStyle={{
                    minWidth: '180px',
                    ...containerStyle,
                }}
                prefixIcon='calendar'
                postfix={
                    <Icon
                        type='chevron-down'
                        size='16px'
                        // color='purple'
                    />
                }
                readonly
            />
        </Popover>
    )
}
