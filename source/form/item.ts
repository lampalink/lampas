
import {
    createElement,
    createContext,
    useContext,
} from 'react'
import * as _ from 'lodash'
import cx from 'classnames'

export interface ItemContext {
    status: 'default'|'error'
    statusText: string
}

export const itemContext = createContext<ItemContext>({
    status: 'default',
    statusText: null,
})

export const useItemContext = () =>
    useContext(itemContext)

export interface ItemProps extends Partial<ItemContext>, React.HTMLAttributes<HTMLDivElement> {
    label?: string|React.ReactNode
    inline?: boolean
    labelProps?: React.HTMLAttributes<HTMLLabelElement>
    style?: React.CSSProperties
    containerStyle?: React.CSSProperties
    containerClassName?: string
}

export const Item = ({ label, inline, labelProps, className, containerStyle, containerClassName, status, statusText, ...rest }: ItemProps) => {
    const {
        children: labelChildren,
        className: labelClassName,
        style: labelStyle,
        ...restLabel
    } = labelProps || {}

    const renderLabel = () => {
        if (typeof label === 'string') {
            return createElement('label', {
                key: 'label',
                className: cx('form-item-label', labelClassName),
                style: labelStyle,
                ...restLabel,
            }, label)
        }

        if (label) {
            return createElement('div', {
                key: 'label',
                className: cx('form-item-label', labelClassName),
                style: labelStyle,
            }, label)
        }

        return null
    }

    return createElement(itemContext.Provider, { value: { status, statusText } }, createElement('div', {
        className: cx('form-item', `status-${status}`, containerClassName, { inline }),
        style: containerStyle,
    }, [
        renderLabel(),
        createElement('div', {
            key: 'content',
            className: cx('form-item-content', className),
            ...rest,
        }),
        statusText &&
            createElement('div', {
                key: 'status',
                className: cx('form-item-status'),
            }, statusText),
    ]))
}
