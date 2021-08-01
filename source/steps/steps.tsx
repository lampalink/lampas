
import * as React from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'
import { Icon } from '../icon'

export interface StepsProps {
    activeKey?: string
    className?: string
    style?: React.CSSProperties
    containerClassName?: string
    containerStyle?: React.CSSProperties
    children?: React.ReactNode
}

export const Steps = ({ activeKey, className, style, containerClassName, containerStyle, children }: StepsProps) => {
    const steps: {
        key: string
        title: string
        // icon?: string
    }[] = []

    const completedStepKeys = []

    let activeChild = null as React.ReactNode
    React.Children.forEach(children, child => {
        const key = _.get(child, 'key')
        const title = _.get(child, 'props.title')
        // const icon = _.get(child, 'props.icon')

        if (typeof key !== 'string' || typeof title !== 'string') return

        steps.push({ key, title })
        if (key === activeKey) {
            activeChild = child
        }

        if (activeChild === null) {
            completedStepKeys.push(key)
        }
    })

    const renderStep = (step: {
        key: string
        title: string
    }, index: number) => {
        const isActive = step.key === activeKey
        const isCompleted = ~completedStepKeys.indexOf(step.key)

        return (
            <React.Fragment>
                <div
                    key={step.key}
                    className={cx('steps-item', { isActive, isCompleted })}
                    // onClick={() =>}
                >
                    <div className={cx('item-circle')}>
                        {isCompleted ?
                            <Icon type='checkmark' size='14px' /> :
                            `${index + 1}`}
                    </div>
                    <div
                        className={cx('item-title')}
                    >{step.title}</div>
                </div>
                {(index + 1) < steps.length &&
                    <div className={cx('steps-line', { isCompleted })} />}
            </React.Fragment>
        )
    }

    return (
        <div
            className={cx('steps-container', containerClassName)}
            style={containerStyle}
        >
            <div
                className={cx('steps')}
            >{steps.map(renderStep)}</div>
            <div
                className={cx('steps-content', className)}
                style={style}
            >{activeChild}</div>
        </div>
    )
}
