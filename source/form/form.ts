
import { createElement } from 'react'
import * as _ from 'lodash'
import * as cx from 'classnames'

import './styles.scss'

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {}
export const Form = ({ className, ...rest }: FormProps) => {
    return createElement('form', {
        className: cx('form-container', className),
        ...rest,
    })
}
