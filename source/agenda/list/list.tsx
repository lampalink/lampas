
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'
import * as moment from 'moment'

import './styles.scss'

interface GroupedItem<Item extends AgendaItem> {
    item: Item
    group: string
    sort: number
}

export interface AgendaItem {
    start: Date
    end: Date
}

export interface AgendaListProps<Item extends AgendaItem> {
    items: Item[]
    renderItem: (item: Item) => React.ReactNode
    onClick?: (item: Item) => any
    getItemClassName?: (item: Item) => string
}

export const AgendaList = <Item extends AgendaItem>({ items, onClick, getItemClassName, renderItem }: AgendaListProps<Item>) => {
    const handleItemClick = (item: Item) => {
        if (typeof onClick === 'function') {
            onClick(item)
        }
    }

    const groupedItems: GroupedItem<Item>[] = _.groupBy(
        items
            .map(item => ({
                item,
                group: moment(item.start).startOf('day').toISOString(),
                sort: moment(item.start).unix(),
            }))
            .sort((a, b) => a.sort > b.sort ? 1 : -1),
        'group',
    )

    const hasCustomItemClassName = typeof getItemClassName === 'function'
    const renderGroupedItem = ({ item, sort }: GroupedItem<Item>, index: number) => {
        return (
            <div
                key={`${index}-${sort}`}
                className={cx('date-item', hasCustomItemClassName ? getItemClassName(item) : null, {
                    clickable: typeof onClick === 'function',
                })}
                onClick={() =>
                    handleItemClick(item)}
            >{renderItem(item)}</div>
        )
    }

    const renderGroupedItems = (groupedItems: GroupedItem<Item>[], index: number, group: any) => {
        return (
            <div
                key={`${index}-${group}`}
                className={cx('agenda-list-date')}
            >
                <div className={cx('date-header')}>
                    {moment(group).format('ddd, DD MMM')}
                </div>
                <div className={cx('date-items')}>
                    {groupedItems.map(renderGroupedItem)}
                </div>
            </div>
        )
    }

    return (
        <div className={cx('agenda-list-container')}>
            {Object.keys(groupedItems)
                .map((group, index) => renderGroupedItems(groupedItems[group], index, group))}
        </div>
    )
}
