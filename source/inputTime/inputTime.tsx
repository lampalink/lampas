
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'
import * as moment from 'moment'

import './styles.scss'

import { Icon } from '../icon'
import { Button } from '../button'
import { DotsSelect } from '../dotsSelect'

enum FocusField {
    hours = 'hours',
    minutes = 'minutes',
}

export interface InputTimeProps {
    value: Date
    containerStyle?: React.CSSProperties
    onChange?: (value: Date) => any
}

export const InputTime = ({ value, onChange, containerStyle }: InputTimeProps) => {
    const handleChange = (date: Date) => {
        if (typeof onChange === 'function') {
            onChange(date)
        }
    }

    const [ focusField, setFocusField ] = React.useState(null)
    const [ isFocused, setIsFocused ] = React.useState(false)

    const hoursInputRef = React.useRef()
    const minutesInputRef = React.useRef()

    const focusHoursInput = () =>
        hoursInputRef.current ?
            (hoursInputRef.current as any).focus() :
            void 0

    const focusMinutesInput = () =>
        minutesInputRef.current ?
            (minutesInputRef.current as any).focus() :
            void 0

    const valueMoment = moment(value)
    const valueHours = valueMoment.hours()
    const valueMinutes = valueMoment.minutes()

    const setHours = (hours: number) => {
        if (hours < 0) {
            hours = 0
        } else if (hours > 23) {
            hours = 23
        }

        handleChange(moment(value).clone().hours(hours).toDate())
    }

    const setMinutes = (minutes: number) => {
        if (minutes < 0) {
            minutes = 0
        } else if (minutes > 59) {
            minutes = 59
        }

        handleChange(moment(value).clone().minutes(minutes).toDate())
    }

    const parseTimeInputValue = (value: string): number => {
        let pre = String(value)
            .replace(/![0-9]/g, '')
            .replace(/^0+/, '')

        if (pre.length > 2) {
            pre = pre.slice(0, 2)
        } else if (pre.length < 1) {
            pre = '0'
        }

        return Math.round(Number(pre))
    }

    const handleHoursInputChange = (value: string) =>
        setHours(parseTimeInputValue(value))

    const handleMinutesInputChange = (value: string) =>
        setMinutes(parseTimeInputValue(value))

    const handleHoursInputFocus = () => {
        setFocusField(FocusField.hours)
        setIsFocused(true)
    }
    
    const handleMinutesInputFocus = () => {
        setFocusField(FocusField.minutes)
        setIsFocused(true)
    }

    const handleHoursInputBlur = () =>
        setIsFocused(false)

    const handleMinutesInputBlur = () =>
        setIsFocused(false)

    const handleIncrease = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e) {
            e.preventDefault()
            e.stopPropagation()
        }

        switch (focusField) {
        case FocusField.hours:
            setHours(valueHours + 1)
            focusHoursInput()
            return
        case FocusField.minutes:
            setMinutes(valueMinutes + 5)
            focusMinutesInput()
            return
        }
    }

    const handleDecrease = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e) {
            e.preventDefault()
            e.stopPropagation()
        }

        switch (focusField) {
        case FocusField.hours:
            setHours(valueHours - 1)
            focusHoursInput()
            return
        case FocusField.minutes:
            setMinutes(valueMinutes - 5)
            focusMinutesInput()
            return
        }
    }

    return (
        <div
            className={cx('input-time-container')}
            style={containerStyle}
        >
            <input
                className={cx('input-time-hours')}
                ref={hoursInputRef}
                value={valueHours < 10 ?
                    `0${valueHours}` : String(valueHours)}
                onChange={e =>
                    handleHoursInputChange(e.target.value)}
                onFocus={handleHoursInputFocus}
                onBlur={handleHoursInputBlur}
            />
            <div
                className={cx('input-time-divider')}
            >:</div>
            <input
                className={cx('input-time-minutes')}
                ref={minutesInputRef}
                value={valueMinutes < 10 ?
                    `0${valueMinutes}` : String(valueMinutes)}
                onChange={e =>
                    handleMinutesInputChange(e.target.value)}
                onFocus={handleMinutesInputFocus}
                onBlur={handleMinutesInputBlur}
            />
            <div className={cx('input-time-modifier')}>
                <div className={cx('input-time-modifier-arrow')}>
                    <Icon
                        type='chevron-up'
                        size='16px'
                        color={isFocused ?
                            'purple' : 'transparent'}
                        onClick={handleIncrease}
                    />
                </div>
                <div className={cx('input-time-modifier-arrow')}>
                    <Icon
                        type='chevron-down'
                        size='16px'
                        color={isFocused ?
                            'purple' : 'transparent'}
                        onClick={handleDecrease}
                    />
                </div>
            </div>
        </div>
    )
}






// export const InputTimeOld = ({ value, onChange }: InputTimeProps) => {
//     const handleChange = (date: Date) => {
//         if (typeof onChange === 'function') {
//             onChange(date)
//         }
//     }

//     let hoursAm = moment(value).hours()
//     let ampm = 'am'
//     if (hoursAm > 11) {
//         hoursAm -= 12
//         ampm = 'pm'
//     }

//     const handleSwitchAmPm = (values: ('am'|'pm')[]) => {
//         if (ampm === 'am' && values[0] === 'pm') {
//             handleChange(moment(value).clone().hours(hoursAm + 12).toDate())
//         } else if (ampm === 'pm' && values[0] === 'am') {
//             handleChange(moment(value).clone().hours(hoursAm).toDate())
//         }
//     }

//     const handleSetHours = (hours: string) => {
//         if (!isNaN(hours as any)) {
//             let h = Math.round(Number(hours))
//             if (h < 0) { 
//                 h = 0
//             } else if (h > 23) {
//                 h = 23
//             }
//             handleChange(moment(value).clone().hours(h).toDate())
//         }
//     }

//     const handleSetMinutes = (minutes: string) => {
//         if (!isNaN(minutes as any)) {
//             let m = Math.round(Number(minutes))
//             if (m < 0) { 
//                 m = 0
//             } else if (m > 59) {
//                 m = 59
//             }
//             handleChange(moment(value).clone().minutes(m).toDate())
//         }
//     }

//     return (
//         <div className={cx('input-time-container')}>
//             <input
//                 className={cx('input-time-hours')}
//                 // type='number'
//                 value={hoursAm}
//                 onChange={e => {
//                     if (e) {
//                         handleSetHours(e.target.value)
//                     }
//                 }}
//                 placeholder='00'
//             />
//             <div
//                 className={cx('input-time-divider')}
//             >:</div>
//             <input
//                 className={cx('input-time-minutes')}
//                 // type='number'
//                 value={moment(value).minutes()}
//                 onChange={e => {
//                     if (e) {
//                         handleSetMinutes(e.target.value)
//                     }
//                 }}
//                 placeholder='00'
//             />
//             <div style={{ flex: 1 }} />
//             <div className={cx('input-time-ampm')}>
//                 <DotsSelect
//                     color='purple'
//                     size='small'
//                     options={[{
//                         key: 'am',
//                         text: 'AM',
//                     }, {
//                         key: 'pm',
//                         text: 'PM',
//                     }]}
//                     value={[ampm]}
//                     onChange={handleSwitchAmPm}
//                     oneOnly
//                 />
//             </div>
//             <div style={{ flex: 1 }} />
//         </div>
//     )
// }
