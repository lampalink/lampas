
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

import { Icon } from '../icon'

interface Column<T> {
    key: string
    title?: React.ReactNode
    width?: number|string
    hideOnMobile?: boolean
    renderRow?: (row: T) => React.ReactNode
}

export interface TableProps<T> {
    columns?: Column<T>[]
    data?: T[]
    disableHeader?: boolean
    disableStripe?: boolean
    disableHover?: boolean
    isLoading?: boolean
    containerClassName?: string
    containerStyle?: React.CSSProperties
    renderEmptyState?: () => React.ReactNode
    setRowClassName?: (row: T) => string
    setRowStyle?: (row: T) => React.CSSProperties
}

export const Table = <T extends { key: string }>({
    columns, data,
    disableHeader, disableStripe, disableHover, isLoading,
    containerClassName, containerStyle,
    renderEmptyState, setRowClassName, setRowStyle,
}: TableProps<T>) => {
    const hasRowClassName = typeof setRowClassName === 'function'
    const hasRowStyle = typeof setRowStyle === 'function'

    const renderDataRow = (item: T, index: number) => {
        return (
            <tr
                key={`${index}-${item.key}`}
                className={cx('table-row')}
            >
                {columns.map(column =>
                    <td
                        key={`${item.key}-${column.key}`}
                        className={cx('table-cell', hasRowClassName && setRowClassName(item), {
                            hideOnMobile: column.hideOnMobile,
                        })}
                        style={{
                            width: _.isNil(column.width) ?
                                undefined : column.width,
                            ...(hasRowStyle ?
                                setRowStyle(item) : {}),
                        }}
                    >{typeof column.renderRow === 'function' && column.renderRow(item)}</td>)}
            </tr>
        )
    }

    const renderContent = () => {
        if ((!data || data.length < 1) && typeof renderEmptyState === 'function') {
            return (
                <tr
                    key='emptystate'
                    className={cx('table-row')}
                >
                    <td
                        className={cx('table-cell', 'empty-state')}
                        colSpan={columns.length}
                    >{renderEmptyState()}</td>
                </tr>
            )
        }

        return data.map(renderDataRow)
    }

    return (
        <div
            className={cx('table-container', containerClassName, { disableStripe, disableHover })}
            style={containerStyle}
        >
            {isLoading &&
                <div className={cx('table-loader-overlay')}>
                    <Icon
                        className={cx('table-loader')}
                        type='loader'
                        color='purple'
                        size='3rem'
                        isRotating
                    />
                </div>}
            <table className={cx('table')}>
                {!disableHeader &&
                    <thead className={cx('table-head')}>
                        <tr className={cx('table-row')}>
                            {columns.map(column =>
                                <th
                                    key={`${column.key}`}
                                    className={cx('table-cell', { hideOnMobile: column.hideOnMobile })}
                                    style={{ width: _.isNil(column.width) ? undefined : column.width }}
                                >{column.title}</th>)}
                        </tr>
                    </thead>}
                <tbody className={cx('table-body')}>
                    {renderContent()}
                </tbody>
            </table>
        </div>
    )
}
