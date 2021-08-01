
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

export interface TabsProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    tabs: {
        key: string
        title: string
        badge?: string
        highlightAnyway?: boolean
        disabled?: boolean
    }[]
    selectedKey?: string
    addonRight?: string|JSX.Element
    noBottomBorder?: boolean
    isCompact?: boolean
    color?: 'blue'|'purple'
    size?: 'base'|'big'
    tabStyle?: React.CSSProperties
    onTabSelect?: (key: string) => any
    children?: React.ReactNode
}

export const Tabs = ({ selectedKey, tabs, addonRight, noBottomBorder, isCompact, color, size, tabStyle, onTabSelect, className, children, ...rest }: TabsProps) => {
    let activeChild = null
    const childrenArray = React.Children.toArray(children)
    if (childrenArray.length > 0) {
        for (const i in childrenArray) {
            if (RegExp(`${selectedKey}$`).test(_.get(childrenArray[i], 'key'))) {
                activeChild = childrenArray[i]
                break
            }
        }
    }

    return (
        <React.Fragment>
            <div
                className={cx('tabs-container', className, color, size, { noBottomBorder: noBottomBorder, isCompact: isCompact })}
                {...rest}
            >
                {tabs.map(tab =>
                    <div
                        key={tab.key}
                        style={tabStyle}
                        className={cx('tab', {
                            active: tab.key === selectedKey,
                            disabled: tab.disabled,
                            'highlight-anyway': tab.highlightAnyway,
                        })}
                        onClick={() => {
                            if (tab.disabled) {
                                return null
                            }

                            if (typeof onTabSelect === 'function') {
                                onTabSelect(tab.key)
                            }
                        }}
                    >
                        {tab.title}
                        {typeof tab.badge === 'string' &&
                            <span className={cx('tab-badge')}>{tab.badge}</span>}
                    </div>)}
                    {!isCompact && <div className={cx('tab-spacer')} />}
                    {addonRight && <div className={cx('tab-addon')}>{addonRight}</div>}
            </div>
            {activeChild}
        </React.Fragment>
    )
}
