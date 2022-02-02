
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'
import * as moment from 'moment'

import './styles.scss'

import { Icon } from '../../icon'

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

interface MonthCalendarItem {
    start: Date
    end: Date
}

export interface MonthCalendarProps<T extends MonthCalendarItem> {
    anchor: Date
    items?: T[]
    color?: 'blue'|'purple'
    hoverable?: boolean
    resolveItemClassName?: (item: T) => string
    renderItemText?: (item: T) => React.ReactNode
    onItemClick?: (item: T) => any
}

export const MonthCalendar = <T extends MonthCalendarItem>({ anchor, items, color, hoverable, resolveItemClassName, renderItemText: _renderItemText, onItemClick }: MonthCalendarProps<T>) => {
    const anchorMoment = moment(anchor)
    const startOfMonth = anchorMoment.clone().startOf('month')

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

    const handleItemClick = (item: T) => {
        if (typeof onItemClick === 'function') {
            onItemClick(item)
        }
    }

    const renderItemText = (item: T) => {
        if (typeof _renderItemText === 'function') {
            return _renderItemText(item)
        }

        return <strong>{moment(item.start).format('HH:mm')}</strong>
    }

    const hasItemClassNameResolver =
        typeof resolveItemClassName === 'function'

    const renderItem = (item: T, index: number) => {
        const itemClassName = hasItemClassNameResolver ?
            resolveItemClassName(item) : null

        return (
            <div
                key={`${index}-${item.start.toString()}`}
                className={cx('grid-item', itemClassName)}
                onClick={() =>
                    handleItemClick(item)}
            >{renderItemText(item)}</div>
        )
    }

    const [ actualGridItemWidth, setActualGridItemWidth ] = React.useState(1)
    const gridItemHeight = actualGridItemWidth * 1.5

    const renderDay = ({ key, date }: { key: string; date: Date; }, index: number) => {
        const dateMoment = moment(date)

        const dayItems = (_.isArray(items) ? items : []).filter(item => {
            const startEpoch = moment(item.start).unix()
            return (
                startEpoch >= dateMoment.clone().startOf('day').unix()
                && startEpoch <= dateMoment.clone().endOf('day').unix()
            )
        })

        return (
            <div
                key={`${index}-${key}`}
                style={{ height: gridItemHeight }}
                className={cx('grid-day', {
                    isWeeked: isDateWeekend(moment(date).toDate()),
                })}
                ref={element => {
                    if (element && element.clientWidth) {
                        setActualGridItemWidth(element.clientWidth)
                    }
                }}
            >
                <span
                    className={cx('grid-day-label')}
                >{moment(date).format('DD')}</span>
                {dayItems.map(renderItem)}
            </div>
        )
    }

    const renderWeek = (week: { key: string; date: Date; }[], index: number) => {
        return (
            <div
                key={`${index}`}
                className={cx('grid-row')}
            >{week.map(renderDay)}</div>
        )
    }

    return (
        <div className={cx('calendar-month-container', color)}>
            <div
                className={cx('calendar-month-grid')}
            >{weeks.map(renderWeek)}</div>
        </div>
    )
}
