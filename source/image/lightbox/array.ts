
import {
    createElement,
    useContext,
    ReactNode,
    Fragment,
} from 'react'

import { Lightbox } from './lightbox'
import { LightboxContext } from './context'

export interface LightboxArrayProps {
    trigger: 'click'
    children?: ReactNode
}

export const LightboxArray = ({ trigger, children }: LightboxArrayProps) => {
    return createElement(LightboxContext, { trigger }, [
        createElement(Lightbox, { key: 'lightbox' }),
        createElement(Fragment, {
            key: 'children',
        }, children),
    ])
}
