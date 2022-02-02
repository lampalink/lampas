
import {
    RefObject,
    MouseEvent,
    MouseEventHandler,
    CSSProperties,
    createElement,
    useContext,
    useEffect,
    useState,
} from 'react'
import cx from 'classnames'

import { lightboxContext } from './lightbox/context'

export interface ImageProps {
    src?: string
    className?: string
    style?: CSSProperties
    fit?: 'cover'
    position?: 'center center'
    onClick?(event: MouseEvent<HTMLImageElement, MouseEvent>): any
}

export const Image = ({ src, className, style, fit, position, onClick }: ImageProps) => {
    const {
        connectImage,
        disconnectImage,
        handleImage,
    } = useContext(lightboxContext)
    const {
        handleClick: handleLightboxClick,
    } = handleImage(src)
    const [ imageElement, setImageElement ] = useState<HTMLImageElement>(null)

    useEffect(() => () => disconnectImage(src), [])
    useEffect(() => {
        if (imageElement) {
            disconnectImage(src)
            connectImage(src, imageElement)
        }
    }, [imageElement])

    const handleImageRef = (element: HTMLImageElement) => {
        if (element) {
            setImageElement(element)
        }
    }

    const handleClick = (event: MouseEvent<HTMLImageElement, MouseEvent>) => {
        handleLightboxClick(event)

        if (typeof onClick === 'function') {
            onClick(event)
        }
    }

    return createElement('img', {
        src,
        style: {
            objectFit: fit ? fit : undefined,
            objectPosition: position ? position : undefined,
            ...style,
        },
        ref: handleImageRef,
        className: cx('image', className),
        onClick: handleClick,
    })
}
