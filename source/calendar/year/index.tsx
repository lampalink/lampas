
import * as React from 'react'
import * as _ from 'lodash'
import cx from 'classnames'
import * as moment from 'moment'

import './styles.scss'

import { Icon } from '../../icon'

export interface YearCalendarProps {
    value: Date
    color?: 'blue'|'purple'
    hoverable?: boolean
    onChange?: (anchor: Date) => any
}

export const YearCalendar = ({ value, color, hoverable, onChange }: YearCalendarProps) => {
    const [ anchor, setAnchor ] = React.useState(value)
    const anchorMoment = moment(anchor)

    const handleChange = (value: Date) => {
        if (typeof onChange === 'function') {
            onChange(value)
        }
    }

    const displayPreviousYear = () =>
        setAnchor(anchorMoment.clone().subtract(1, 'year').toDate())

    const displayNextYear = () =>
        setAnchor(anchorMoment.clone().add(1, 'year').toDate())

    const isWithinValue = (date: Date) => {
        const valueStartMoment = moment(value).startOf('month')
        const valueStartEpoch = valueStartMoment.unix()
        const valueEndEpoch = valueStartMoment.clone().endOf('month').unix()
        const dateEpoch = moment(date).unix()
        return dateEpoch >= valueStartEpoch && dateEpoch <= valueEndEpoch
    }

    const months = []
    let cursor = anchorMoment.clone().startOf('year').startOf('month')
    for (let i = 0; i < 12; i++) {
        months.push({
            key: cursor.toISOString(),
            date: cursor.toDate(),
            text: cursor.format('MMM'),
        })
        cursor = cursor.clone().add(1, 'month')
    }

    return (
        <div className={cx('calendar-year-container', color, { hoverable })}>
            <div className={cx('calendar-year-header')}>
                <div className={cx('header-navigation')}>
                    <Icon
                        type='chevron-left'
                        size='1rem'
                        color={color}
                        onClick={displayPreviousYear}
                    />
                </div>
                <div
                    className={cx('header-year')}
                >{anchorMoment.format('YYYY')}</div>
                <div className={cx('header-navigation')}>
                    <Icon
                        type='chevron-right'
                        size='1rem'
                        color={color}
                        onClick={displayNextYear}
                    />
                </div>
            </div>
            <div className={cx('calendar-year-grid')}>
                {_.chunk(months, 3).map((row, index) =>
                    <div
                        key={`${index}`}
                        className={cx('grid-row')}
                    >{row.map(item =>
                        <div
                            key={`${index}-${item.key}`}
                            className={cx('grid-month', { isActive: isWithinValue(item.date) })}
                            onClick={() =>
                                handleChange(item.date)}
                        >{item.text}</div>)}</div>)}
            </div>
        </div>
    )
}
