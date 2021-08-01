
import {
    MutableRefObject,
    useLayoutEffect,
    useRef,
    useState,
} from 'react'
import {
    get,
} from 'lodash'

export interface Pagination {
    pageSize: number
    offset: number
    previous?(): void
    next?(): void
    set?(size: number, offset: number): void
    setSize?(size: number): void
    setOffset?(offset: number): void
    toJson(): {
        size: number
        offset: number
    }
}

export interface PaginationOptions {
    size?: number
    offset?: number
    cursor?: string
    nextCursor?: string
    previousCursor?: string
}

export const createPagination = (options: PaginationOptions): Pagination => {
    const pageSize = options ? options.size || 20 : 20
    const offset = options ? options.offset || 0 : 0

    return {
        pageSize, offset,
        toJson() {
            return {
                offset,
                size: pageSize,
            }
        },
    }
}

export const usePagination = (options: PaginationOptions): Pagination => {
    const [ pageSize, setPageSize ] = useState(options ? options.size || 20 : 20)
    const [ offset, setOffset ] = useState(options ? options.offset || 0 : 0)

    return {
        pageSize, offset,
        previous() {
            setOffset(offset - pageSize < 0 ? 0 : offset - pageSize)
        },
        next() {
            setOffset(offset + pageSize)
        },
        set(size: number, offset: number) {
            setPageSize(size)
            setOffset(offset)
        },
        setSize: setPageSize,
        setOffset: setOffset,
        toJson() {
            return {
                offset,
                size: pageSize,
            }
        },
    }
}

export const useDimensions = <T = undefined>(): [MutableRefObject<T>, {
    width: number
    height: number
}] => {
    const ref = useRef<T>(null)

    const [ dimensions, setDimensions ] = useState<{
        width: number
        height: number
    }>({} as any)
    useLayoutEffect(() => {
        if (ref.current) {
            const width = get(ref.current, 'scrollWidth')
            const height = get(ref.current, 'scrollHeight')
            setDimensions({ width, height })
        }
    }, [ref.current])

    return [ ref, dimensions ]
}
