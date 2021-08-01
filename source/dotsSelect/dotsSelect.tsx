
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

export interface Option {
    key: string
    text: React.ReactNode
}

export interface DotsSelectProps {
    options: Option[]
    value?: string[]
    color?: 'blue'|'purple'
    size?: 'small'
    oneOnly?: boolean
    onChange?: (value: string[]) => any
}

export const DotsSelect = ({ options, color, size, value, oneOnly, onChange }: DotsSelectProps) => {
    const [ selectedOptions, setSelectedOptions ] = React.useState(_.isArray(value) ? value : [])
    React.useEffect(() => setSelectedOptions(_.isArray(value) ? value : selectedOptions), [value])

    return (
        <div className={cx('dots-select-container', color, size)}>
            {options.map(({ key, text }) => {
                const isActive = ~selectedOptions.indexOf(key)

                return (
                    <div
                        key={`${key}-${isActive}`}
                        className={cx('dots-select-option', { isActive })}
                        onClick={() => {
                            if (oneOnly) {
                                if (typeof onChange === 'function') {
                                    onChange([key])
                                }
                                return
                            }

                            const st = _.concat([], selectedOptions)
                            if (~st.indexOf(key)) {
                                st.splice(st.indexOf(key), 1)
                            } else {
                                st.push(key)
                            }
                            if (typeof onChange === 'function') {
                                onChange(st)
                            }
                        }}
                    ><span className={cx('label')}>{text}</span></div>
                )
            })}
        </div>
    )
}
