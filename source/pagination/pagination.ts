
import { createElement, CSSProperties, ReactNode } from 'react'
import cx from 'classnames'
import Paginate from 'react-paginate'

import { Pagination } from '../../utils'
import { Dropdown } from '../dropdown'
import { Button } from '../button'
import { Icon } from '../icon'

export interface PaginationControllerProps {
    pagination: Pagination
    total: number
    style?: CSSProperties
    formatTotal?(total: number): ReactNode
}

export const PaginationController = ({ pagination, total, style, formatTotal }: PaginationControllerProps) => {
    const handlePageChange = page => {
        const offset = (page?.selected || 0) * pagination.pageSize
        pagination.setOffset(offset)
    }

    const _formatTotal = () => {
        if (typeof formatTotal === 'function') {
            return formatTotal(total)
        }

        return `found ${total} records`
    }

    return createElement('div', {
        style,
        className: 'pagination-container',
    }, [
        createElement('div', {
            key: 'total',
            className: cx('pagination-total'),
        }, _formatTotal()),
        createElement(Paginate, {
            key: 'pagination',
            pageCount: total / pagination.pageSize,
            pageRangeDisplayed: true,
            marginPagesDisplayed: 2,
            forcePage: Math.floor(pagination.offset / pagination.pageSize),
            onPageChange: handlePageChange,
            containerClassName: cx('pagination'),
            pageClassName: cx('pagination-page'),
            pageLinkClassName: cx('pagination-link'),
            previousLinkClassName: cx('pagination-link'),
            nextLinkClassName: cx('pagination-link'),
            activeClassName: cx('active'),
            previousClassName: cx('pagination-previous'),
            nextClassName: cx('pagination-next'),
            // previousLabel: createElement(Icon, { type: 'chevron-left', size: '1em' }),
            // nextLabel: createElement(Icon, { type: 'chevron-right', size: '1em' }),
            previousLabel: 'Previous',
            nextLabel: 'Next',
            breakLabel: '...',
        }),
        createElement('div', {
            key: 'pagesize',
            className: cx('pagination-page-size'),
        }, createElement(Dropdown, {
            key: 'pagesize',
            placement: 'top-left',
            optionsStyle: {
                whiteSpace: 'nowrap',
            },
            options: [5, 10, 15, 20, 30, 50, 75, 100].map(size => ({
                value: size,
                text: `${size} / page`,
                onClick: () =>
                    pagination.set(size, 0),
            })),
        }, createElement(Button, {
            mode: 'ghost',
            size: 'kinda-small',
            color: 'grey',
        }, `${pagination.pageSize} / page`))),
    ])
}
