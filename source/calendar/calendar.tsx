
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'
import * as moment from 'moment'

import { Icon } from '../icon'
import { WeekCalendar } from './week'

import './styles.scss'

const resolveDateOffset = (date, offset: number) => {
    if (offset < 0) {
        return moment(date).subtract(Math.abs(offset), 'days')
    }
    return moment(date).add(offset, 'days')
}

const isDateWeekend = (date: Date): boolean => {
    const day = date.getDay()
    return day === 0 || day == 6
}

export interface CalendarProps {
    selectedDates?: Date|Date[]
    selectionRange?: 'day'|'week'
    color?: 'blue'|'purple'
    hoverable?: boolean
    onDateClick?: (date: Date) => any
}

const Calendar = ({ selectedDates, selectionRange, color, hoverable, onDateClick }: CalendarProps) => {
    const isDateSelected = date => {
        const dates = _.isArray(selectedDates) ?
            selectedDates as Date[] :
            [selectedDates] as Date[]

        if (dates.length < 1) {
            return false
        }

        let startOf: any = 'day'
        switch (selectionRange) {
        case 'week':
            startOf = 'week'
            break
        case 'day':
            startOf = 'day'
            break
        }

        const dateMoment = moment(date)
        for (const i in dates) {
            const dateItemMoment = moment(dates[i])
            if (
                dateItemMoment.clone().startOf(startOf).isSameOrBefore(dateMoment)
                && dateItemMoment.clone().endOf(startOf).isSameOrAfter(dateMoment)
            ) {
                return true
            }
        }

        return false
    }

    const [ displayedMonth, setDisplayedMonth ] = React.useState(new Date())

    const displayPreviousMonth = () => {
        setDisplayedMonth(moment(displayedMonth).subtract(1, 'month').toDate())
    }

    const displayNextMonth = () => {
        setDisplayedMonth(moment(displayedMonth).add(1, 'month').toDate())
    }

    const startOfMonth = moment(displayedMonth).startOf('month')
    const isInCurrentMonth = date => moment(date).month() === startOfMonth.month()

    const weeks = [[]]

    const ceilingFilling = (startOfMonth.daysInMonth() + startOfMonth.day()) % 7
    const ceiling = startOfMonth.daysInMonth() + (ceilingFilling < 1 ? 0 : 7 - ceilingFilling) + 1 // +1 = week starts with Mo; +0 = week starts with Su
    let offset = -startOfMonth.day() + 1 // +1 = week starts with Mo; +0 = week starts with Su
    for (; offset < ceiling; offset += 1) {
        if (weeks[weeks.length - 1].length < 7) {
            weeks[weeks.length - 1].push({
                key: offset,
                date: resolveDateOffset(startOfMonth, offset).toDate(),
            })
            continue
        }
        weeks[weeks.length] = [{
            key: offset,
            date: resolveDateOffset(startOfMonth, offset).toDate(),
        }]
    }

    return (
        <div className={cx('calendar-container', color, { hoverable })}>
            <div className={cx('calendar-header')}>
                <div className={cx('calendar-header-navigation')}>
                    <Icon
                        type='chevron-left'
                        size='1rem'
                        color={color}
                        onClick={displayPreviousMonth}
                    />
                </div>
                <div className={cx('calendar-header-month')}>
                    {moment(displayedMonth).format('MMMM YYYY')}
                </div>
                <div className={cx('calendar-header-navigation')}>
                    <Icon
                        type='chevron-right'
                        size='1rem'
                        color={color}
                        onClick={displayNextMonth}
                    />
                </div>
            </div>
            <div className={cx('calendar-month')}>
                <div className={cx('calendar-week', 'header')}>
                    {weeks[0].map(({ key, date }) =>
                        <div
                            key={key}
                            className={cx('calendar-day')}
                        >
                            <span className={cx('label')}>
                                {moment(date).format('dd').substring(0, 1)}
                            </span>
                        </div>)}
                </div>
                {weeks.map((week, ind) =>
                    <div
                        key={ind}
                        className={cx('calendar-week', { hoverable: selectionRange === 'week' })}
                    >
                        {week.map(({ key, date }) =>
                            <div
                                key={key}
                                className={cx('calendar-day', {
                                    isWeeked: isDateWeekend(moment(date).toDate()),
                                    isDisplayedMonth: isInCurrentMonth(date),
                                    isSelected: isDateSelected(date),
                                })}
                                onClick={() => {
                                    if (typeof onDateClick === 'function') {
                                        onDateClick(date)
                                    }
                                }}
                            ><span
                                className={cx('label')}
                            >{moment(date).format('D')}</span></div>)}
                    </div>)}
            </div>
        </div>
    )
}

Calendar.Week = WeekCalendar

export { Calendar }
