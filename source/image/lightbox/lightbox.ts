
import {
    MouseEventHandler,
    createElement,
    useState,
    useEffect,
    useContext,
} from 'react'
import {} from 'lodash'
import cx from 'classnames'

import './styles.scss'

import {
    Icon,
} from '../../icon'
import {
    LightboxContextStateImage,
    lightboxContext,
} from './context'

export interface LightboxProps {}
export const Lightbox = ({}: LightboxProps) => {
    const {
        isActive,
        activeImage,
        images,
        closeLightbox,
        openImage,
    } = useContext(lightboxContext)

    if (!isActive) {
        return null
    }

    const handleContainerClick: MouseEventHandler<HTMLDivElement> = event => {
        if (/(lightbox-container)|(lightbox-active-image)|(lightbox-minimap)/.test((event?.target as HTMLDivElement)?.className)) {
            closeLightbox()
        }
    }

    const renderActiveImage = () => {
        return createElement('div', {
            key: 'activeimage',
            className: cx('lightbox-active-image'),
        }, createElement('div', {
            className: cx('lightbox-image-line'),
        }, [
            createElement('img', {
                key: 'image',
                className: cx('lightbox-image'),
                src: activeImage.src,
            }),
            createElement('div',
                { key: 'close', className: cx('lightbox-close-stripe') },
                createElement(Icon, {
                    type: 'close',
                    size: '28px',
                    className: cx('lightbox-close'),
                    onClick: closeLightbox,
                })),
        ]))
    }

    const renderMinimap = () => {
        return createElement('div', {
            key: 'minimap',
            className: cx('lightbox-minimap'),
        }, [
            images.map((image, index) =>
                createElement('img', {
                    key: `${index}-${image.src}`,
                    className: cx('minimap-image', { isActive: image.src === activeImage.src }),
                    src: image.src,
                    onClick: () =>
                        openImage(image.src),
                }))
        ])
    }

    return createElement('div', {
        className: cx('lightbox-container'),
        onClick: handleContainerClick,
    }, [
        renderActiveImage(),
        renderMinimap(),
    ])
}
