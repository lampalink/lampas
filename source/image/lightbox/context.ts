
import { v4 as uuidv4 } from 'uuid'
import {
    ReactNode,
    MouseEvent,
    createContext,
    createElement,
    useState,
    useContext,
    useEffect,
} from 'react'

export interface ImageHandlers {
    handleClick(event: MouseEvent<HTMLImageElement, MouseEvent>): any
}

export interface LightboxContextStateImage {
    readonly tid: string
    readonly src: string
    readonly image: HTMLImageElement
    readonly width: number
    readonly height: number
}

export interface LightboxContextState {
    readonly isActive: boolean
    readonly activeImage: LightboxContextStateImage
    readonly images: LightboxContextStateImage[]
    openImage(src: string): void
    connectImage(src: string, image: HTMLImageElement): void
    disconnectImage(src: string): void
    handleImage(src: string): ImageHandlers
    closeLightbox(): void
}

export const lightboxContext = createContext<LightboxContextState>({
    isActive: false,
    activeImage: null,
    images: [],
    openImage() {},
    connectImage() {},
    disconnectImage() {},
    handleImage() {
        return {
            handleClick() {},
        }
    },
    closeLightbox() {},
})

export const useLightboxContextState = (trigger: 'click'): LightboxContextState => {
    const [ images, setImages ] = useState<LightboxContextStateImage[]>([])
    const [ activeImageTid, setActiveImageTid ] = useState(null)

    const openImage = (src: string) => {
        for (const i in images) {
            if (images[i].src === src) {
                setActiveImageTid(images[i].tid)
            }
        }
    }

    return {
        images, openImage,
        get isActive() {
            return typeof activeImageTid === 'string'
        },
        get activeImage() {
            if (typeof activeImageTid !== 'string') {
                return null
            }

            for (const i in images) {
                if (images[i].tid === activeImageTid) {
                    return images[i]
                }
            }

            return null
        },
        connectImage(src: string, image: HTMLImageElement) {
            setImages(value => [ ...value, {
                src, image,
                width: image.naturalWidth,
                height: image.naturalHeight,
                tid: uuidv4(),
            }])
        },
        disconnectImage(src: string) {
            setImages(value =>
                value.filter(item =>
                    item.src !== src))
        },
        handleImage(src: string): ImageHandlers {
            return {
                handleClick(event: MouseEvent<HTMLImageElement, MouseEvent>) {
                    if (trigger === 'click') {
                        openImage(src)
                    }
                },
            }
        },
        closeLightbox() {
            setActiveImageTid(null)
        },
    }
}

export interface LightboxContextProps {
    trigger: 'click'
    children?: ReactNode
}

export const LightboxContext = ({ trigger, children }: LightboxContextProps) => {
    const lightboxContextState = useLightboxContextState(trigger)

    return createElement(lightboxContext.Provider, {
        value: lightboxContextState,
    }, children)
}
