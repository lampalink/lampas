
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'
import * as moment from 'moment'

import './styles.scss'

import { Input } from '../input'
import { Popover } from '../popover'
import { YearCalendar } from '../calendar'
import { Icon } from '../icon'

export interface InputMonthProps {
    anchor?: Date
    placeholder?: string
    color?: 'blue'|'purple'
    enableClear?: boolean
    onChange?: (anchor: Date) => any
}

export const InputMonth = ({ anchor, placeholder, color, enableClear, onChange }: InputMonthProps) => {

    const handleDateClick = (date: Date) => {
        if (typeof onChange === 'function') {
            onChange(date)
        }
    }

    return (
        <Popover
            renderOverlay={() =>
                <div style={{ padding: '8px' }}>
                    <YearCalendar
                        value={anchor}
                        // selectedDates={value ? [value] : []}
                        // onDateClick={handleDateClick}
                        color='purple'
                        hoverable
                    />
                </div>}
        >
            <Input
                placeholder={placeholder}
                color={color}
                value={anchor ?
                    moment(anchor).format('MMMM YYYY') : null}
                renderPostfix={({ icon }) =>
                    [!!enableClear ?
                        <span
                            key='InputMonth_clearButton'
                            style={{ marginRight: '6px', cursor: 'pointer' }}
                        >
                            <Icon
                                type='close-inverted'
                                onClick={() => {
                                    if (typeof onChange === 'function') {
                                        onChange(null)
                                    }
                                }}
                                {...icon}
                            />
                        </span> : null,
                        <Icon
                            key='InputMonth_icon'
                            type='calendar-simple'
                            {...icon}
                        />]
                }
                readonly
            />
        </Popover>
    )
}
