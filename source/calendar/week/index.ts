
import { createElement, useState, useEffect, Fragment, CSSProperties, useRef } from 'react'
import {
    isArray,
    times,
    max,
    get,
} from 'lodash'
import * as cx from 'classnames'
import * as moment from 'moment'

import './styles.scss'

import { Icon } from '../../icon'

export interface WeekCalendarItem {
    start: Date
    end: Date
}

export interface WeekCalendarProps<T extends WeekCalendarItem> {
    anchor: Date
    items?: T[]
    mode?: 'vertical'|'horizontal'
    hourLength?: {
        vertical?: number
        horizontal?: number
    }
    // containerRef?: React.MutableRefObject<HTMLDivElement>
    enableAdd?: boolean
    addText?: string
    renderItem?: (item: T) => React.ReactNode
    onResize?: (widthPx: number, heightPx: number) => any
    onAdd?: (dateAnchor: Date) => any
    defaultStartHour?: Date
}

let hoverDateTimeout
export const WeekCalendar = <T extends WeekCalendarItem>({
    anchor, items, defaultStartHour, enableAdd, addText, onResize, onAdd,
    hourLength,
    mode: _mode,
    ...rest
}: WeekCalendarProps<T>) => {
    const mode = _mode || 'vertical'

    const verticalHourLengthPx = typeof hourLength?.vertical === 'number' ?
        hourLength.vertical : 50
    const horizontalHourLengthPx = typeof hourLength?.horizontal === 'number' ?
        hourLength.horizontal : 88

    const verticalLegendWidthPx = 64
    const verticalLegendOffsetPx = 64

    const startOfTheWeek = moment(anchor).startOf('week').toDate()

    const defaultRangeStart = moment(startOfTheWeek).hours(8).toDate()
    const defaultRangeEnd = moment(startOfTheWeek).hours(16).toDate()

    const [ rangeStart, setRangeStart ] = useState(defaultRangeStart)
    const [ rangeEnd, setRangeEnd ] = useState(defaultRangeEnd)
    useEffect(() => {
        setRangeStart(defaultRangeStart)
        setRangeEnd(defaultRangeEnd)
    }, [anchor, items])

    const containerElement = useRef<HTMLDivElement>()
    const legendElement = useRef<HTMLDivElement>()

    useEffect(() => {
        if (legendElement?.current && typeof onResize === 'function') {
            let topOffsetPx = 0
            switch (mode) {
            case 'vertical':
                topOffsetPx = verticalLegendOffsetPx
                break
            case 'horizontal':
                topOffsetPx = 24
                break
            }

            onResize(legendElement.current.clientWidth, legendElement.current.clientHeight + topOffsetPx)
        }
    }, [legendElement, rangeStart, rangeEnd, mode])

    const renderLegendItem = (text: string, index: number) => {
        let itemStyle: CSSProperties = {}
        let labelStyle: CSSProperties = {}

        switch (mode) {
        case 'vertical':
            itemStyle['height'] = `${verticalHourLengthPx}px`
            labelStyle['width'] = `${verticalLegendWidthPx}px`
            break
        case 'horizontal':
            const horizontalFlexItemLengthPx = ((containerElement?.current?.clientWidth || 0) - horizontalHourLengthPx) / ((!!rangeStart && !!rangeEnd) ? (rangeEnd.getHours() - rangeStart.getHours() + 1) : 1)

            itemStyle['width'] = `${max([horizontalFlexItemLengthPx, horizontalHourLengthPx])}px`
            labelStyle['height'] = 'auto'
            break
        }

        return createElement('div', {
            key: `${index}-${text}`,
            className: cx('week-calendar-legend-item'),
            style: itemStyle,
        }, createElement('div', {
            className: cx('label'),
            style: labelStyle,
        }, text))
    }

    const renderLegend = () => {
        const items = []
        const stropHours = moment(rangeEnd).hours()

        let cursor = moment(rangeStart).clone()
        while (cursor.hours() <= stropHours) {
            items.push(cursor.format('HH:00'))
            cursor = cursor.clone().add(1, 'hour')
        }

        const style: CSSProperties = {}
        switch (mode) {
        case 'vertical':
            style['top'] = `${verticalLegendOffsetPx}px`
            break
        case 'horizontal':
            style['left'] = `${horizontalHourLengthPx}px`
            break
        }

        return createElement('div', {
            style,
            ref: legendElement,
            key: 'legend',
            className: cx('week-calendar-legend'),
        }, items.map(renderLegendItem))
    }

    const renderWeekendBackground = () => {
        const style: CSSProperties = {}

        switch (mode) {
        case 'vertical':
            const heightPx = verticalLegendOffsetPx + (moment(rangeEnd).hours() - moment(rangeStart).hours() + 1) * verticalHourLengthPx

            style['top'] = `0`
            style['height'] = `${heightPx}px`
            break
        case 'horizontal':
            // style['left'] = `0`
            // style['width'] = `100%`
            break
        }

        return createElement('div', {
            style,
            key: 'weekendbackground',
            className: cx('items-weekend-background'),
        })
    }

    const [ hoveredDateKey, setHoveredDateKey ] = useState(null)

    const renderHoverableBackground = (key: string, dateAnchor: Date) => {
        const style: CSSProperties = {}

        switch (mode) {
        case 'vertical':
            const heightPx = verticalLegendOffsetPx + (moment(rangeEnd).hours() - moment(rangeStart).hours() + 1) * verticalHourLengthPx

            style['top'] = `0`
            style['height'] = `${heightPx}px`
            break
        case 'horizontal':
            // style['left'] = `0`
            // style['width'] = `100%`
            break
        }

        return createElement('div', {
            style,
            key: 'hoverablebackground',
            className: cx('items-hoverable-background', {
                isActive: key === hoveredDateKey,
            }),
            onClick: () => {
                if (typeof onAdd === 'function') {
                    onAdd(dateAnchor)
                }
            },
            onMouseEnter: () => {
                if (hoverDateTimeout) {
                    clearTimeout(hoverDateTimeout)
                }
                hoverDateTimeout = setTimeout(() => {
                    setHoveredDateKey(key)
                }, 160)
            },
            onMouseLeave: () => {
                if (hoverDateTimeout) {
                    clearTimeout(hoverDateTimeout)
                }
                setHoveredDateKey(null)
            },
        })
    }

    const renderItem = (item: T, index: number) => {
        if (typeof rest.renderItem !== 'function') {
            return null
        }

        const style: CSSProperties = {
            position: 'absolute',
        }

        const baseItemLengthPx = ((moment(item.end).unix() - moment(item.start).unix()) / 3600)
        const baseOffsetPx = (moment(item.start).hours() - moment(rangeStart).hours()) + (moment(item.start).minutes() - moment(rangeStart).minutes()) / 60

        switch (mode) {
        case 'vertical':
            const verticalOffsetPx = (baseOffsetPx * verticalHourLengthPx) + verticalLegendOffsetPx
            const verticalItemLengthPx = baseItemLengthPx * verticalHourLengthPx

            style['width'] = 'calc(100% - 2px)',
            style['top'] = `${verticalOffsetPx}px`
            style['height'] = `${verticalItemLengthPx}px`
            break
        case 'horizontal':
            const horizontalFlexItemLengthPx = ((containerElement?.current?.clientWidth || 0) - horizontalHourLengthPx) / ((!!rangeStart && !!rangeEnd) ? (rangeEnd.getHours() - rangeStart.getHours() + 1) : 1)
            const horizontalItemLengthPx = baseItemLengthPx * max([
                horizontalFlexItemLengthPx,
                horizontalHourLengthPx,
            ])

            const horizontalOffsetPx = (baseOffsetPx * horizontalItemLengthPx) + horizontalHourLengthPx


            style['height'] = '100%',
            style['top'] = `1px`
            style['left'] = `${horizontalOffsetPx}px`
            style['width'] = `${horizontalItemLengthPx}px`
            break
        }

        return createElement('div', {
            style,
            key: `${index}-${baseOffsetPx}-${baseItemLengthPx}`,
        }, rest.renderItem(item))
    }

    const renderDate = (anchor: Date, index: number) => {
        const anchorMoment = moment(anchor)
        const key = `${index}-${anchorMoment.toISOString()}`

        const weedayIndex = anchorMoment.days()
        const isWeekend = weedayIndex % 6 === 0

        const dayItems = (isArray(items) ? items : []).filter(item => {
            // TODO: move setRangeStart from render function into effect function
            if (moment(rangeStart).hours() > moment(item.start).hours()) {
                setRangeStart(moment(item.start).toDate())
            }

            // TODO: move setRangeEnd from render function into effect function
            if (moment(rangeEnd).hours() < moment(item.end).hours()) {
                setRangeEnd(moment(item.end).toDate())
            }

            const startEpoch = moment(item.start).unix()
            return (
                startEpoch >= anchorMoment.clone().startOf('day').unix()
                && startEpoch <= anchorMoment.clone().endOf('day').unix()
            )
        })

        const style: CSSProperties = {}
        switch (mode) {
        case 'vertical':
            style['paddingTop'] = '16px'
            break
        case 'horizontal':
            style['width'] = `${horizontalHourLengthPx}px`
            break
        }

        return createElement('div', {
            key,
            className: cx('week-calendar-days-day'),
        }, [
            createElement('div', {
                style,
                key: 'date',
                className: cx('week-calendar-days-date'),
            }, (enableAdd && hoveredDateKey === key) ?
                createElement(Fragment, {}, [
                    createElement(Icon, {
                        key: 'icon',
                        type: 'plus',
                        color: 'purple',
                        size: '16px',
                    }),
                    createElement('br', { key: 'nl' }),
                    addText &&
                        createElement('strong', {
                            key: 'text',
                            className: cx('color-purple'),
                            style: { lineHeight: '24px' },
                        }, addText),
                ]) :
                createElement(Fragment, {}, [
                    anchorMoment.format('ddd').toUpperCase(),
                    createElement('br', { key: 'nl' }),
                    createElement('strong', { key: 'date' }, anchorMoment.format('D')),
                ])),
            createElement('div', {
                key: 'items',
                className: cx('week-calendar-days-items'),
            }, [
                isWeekend &&
                    renderWeekendBackground(),
                enableAdd &&
                    renderHoverableBackground(key, anchorMoment.toDate()),
                ...dayItems.map(renderItem),
            ]),
        ])
    }

    const renderDays = () => {
        const days = times(7, index =>
            renderDate(moment(startOfTheWeek).add(index, 'days').toDate(), index))

        const style: CSSProperties = {}
        switch (mode) {
        case 'vertical':
            style['left'] = `${verticalLegendWidthPx}px`
            style['width'] = `calc(100% - ${verticalLegendWidthPx}px)`
            break
        case 'horizontal':
            const horizontalFlexItemLengthPx = ((containerElement?.current?.clientWidth || 0) - horizontalHourLengthPx) / ((!!rangeStart && !!rangeEnd) ? (rangeEnd.getHours() - rangeStart.getHours() + 1) : 1)

            const horizontalDaysWidthPx = horizontalHourLengthPx + max([
                horizontalFlexItemLengthPx,
                horizontalHourLengthPx,
            ]) * ((!!rangeStart && !!rangeEnd) ? (rangeEnd.getHours() - rangeStart.getHours() + 1) : 1)

            style['left'] = '0'
            style['width'] = `${horizontalDaysWidthPx}px`
            break
        }

        return createElement('div', {
            style,
            key: 'days',
            className: cx('week-calendar-days'),
        }, days)
    }

    return createElement('div', {
        ref: containerElement,
        className: cx('week-calendar-container', mode),
    }, [
        renderLegend(),
        renderDays(),
    ])
}
