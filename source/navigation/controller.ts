
import { RouteComponentProps } from 'react-router-dom'
import { createContext, createElement, ReactNode, useContext, useState } from 'react'
import {
    isNil,
} from 'lodash'

import {
    NavigationItem,
} from './item'

export interface RenderContextBase {
    readonly history: string[]
    appendHistory(path: string): void
}

export const navigationContext = createContext<RenderContextBase>({
    history: [],
    appendHistory() {},
})

export const useNavigationContext = <RenderContext extends RenderContextBase>() =>
    useContext<RenderContext>(navigationContext as any)

export const provideNavigationContext = <RenderContext extends RenderContextBase>(
    context: Omit<RenderContext, 'history'|'appendHistory'>,
    history: string[],
    setHistory: (history: string[]) => any,
    children: ReactNode,
) => {
    return createElement(navigationContext.Provider, {
        value: {
            ...context,
            history,
            appendHistory(path: string) {
                setHistory([ ...history, path ])
            },
        },
    }, children)
}

export interface NavigationController<
    Params extends object = {},
    Context extends object = {},
    Query extends object = {},
> {
    readonly rootPath: string
    readonly actualPath: string
    readonly pathHistory: string[]

    resolve(path: string, ...params: string[]): string
    resolveWithRoot(path: string, ...params: string[]): string
    doesMatchReal(path: string, ...params: string[]): boolean
    doesMatchRealWithRoot(path: string, ...params: string[]): boolean

    navigatePath(path: string, queryParams?: { [name: string]: string }): void
    navigateBack(): void
    navigateForward(): void

    getQueryParams(): Query
    getHashParams(): Query
    updateQueryParams(queryParams: Partial<Query>): void
}

const parseSearchParams = <QueryParams extends object>(searchText: string, prefix: '?'|'#'): QueryParams => {
    if (typeof searchText !== 'string' || !searchText.startsWith(prefix)) {
        return {} as QueryParams
    }

    return searchText
        .split(prefix)[1]
        .split('&')
        .reduce((p, i) => {
            const v = i.split('=')
            p[v[0]] = decodeURIComponent(v[1])
            return p
        }, {} as QueryParams)
}

export const createNavigationController = <Params extends object = {}, RenderContext extends RenderContextBase = RenderContextBase, Query extends object = {}>(
    props: RouteComponentProps<Params>,
    context: RenderContext = null,
): NavigationController<Params, RenderContext, Query> => {
    let navigationController: NavigationController

    return (navigationController = {
        get rootPath(): string {
            return props.match.path
        },
        get actualPath(): string {
            return props.location.pathname
        },
        get pathHistory(): string[] {
            return context?.history || []
        },
        // Refactor logic
        resolve(path: string, ...params: string[]): string {
            const pathTemplate = `${path || ''}`

            let out = pathTemplate

            if (params.length > 0) {
                let paramIndex = 0
                out = pathTemplate.split('/').map(item => {
                    if (/^\s*$/.test(item)) {
                        return ''
                    }

                    if (/^\:/.test(item) && paramIndex < params.length) {
                        return `/${params[paramIndex++]}`
                    }

                    return `/${item}`
                }).join('')
            }

            return out
        },
        // Refactor logic
        resolveWithRoot(path: string, ...params: string[]): string {
            const pathTemplate = `${props.match.path === '/' ? '' : props.match.path}${path || ''}`

            let out = pathTemplate

            if (params.length > 0) {
                let paramIndex = 0
                out = pathTemplate.split('/').map(item => {
                    if (/^\s*$/.test(item)) {
                        return ''
                    }

                    if (/^\:/.test(item) && paramIndex < params.length) {
                        return `/${params[paramIndex++]}`
                    }

                    return `/${item}`
                }).join('')
            }

            return out
        },
        // Refactor logic
        doesMatchReal(path: string, ...params: string[]): boolean {
            const matchItems = location.pathname.split('/').filter(item => item && item !== '')
            const pathItems = navigationController
                .resolve(path, ...params)
                .split('/')
                .filter(item => item && item !== '')

            if (pathItems.length > matchItems.length) {
                return false
            }

            let doesMatch = true
            for (const i in pathItems) {
                if (String(pathItems[i]).startsWith(':')) {
                    continue
               }

                if (pathItems[i] === matchItems[i]) {
                    continue
                }

                doesMatch = false
                break
            }

            return doesMatch
        },
        // Refactor logic
        doesMatchRealWithRoot(path: string, ...params: string[]): boolean {
            const matchItems = location.pathname.split('/').filter(item => item && item !== '')
            const pathItems = navigationController
                .resolveWithRoot(path, ...params)
                .split('/')
                .filter(item => item && item !== '')

            if (pathItems.length > matchItems.length) {
                return false
            }

            let doesMatch = true
            for (const i in pathItems) {
                if (String(pathItems[i]).startsWith(':')) {
                    continue
               }

                if (pathItems[i] === matchItems[i]) {
                    continue
                }

                doesMatch = false
                break
            }

            return doesMatch
        },
        navigatePath(path: string, queryParams: { [name: string]: string } = {}): void {
            const _path = path.endsWith('/') ?
                path.replace(/\/$/, '') : path

            const queryKeys = Object.keys(queryParams)

            let queryString = ''
            if (queryKeys.length > 0) {
                queryString = `?${queryKeys
                    .map(name => `${name}=${encodeURIComponent(queryParams[name])}`)
                    .join('&')}`
            }

            const __path = `${_path}${queryString}`

            props.history.push(__path)

            if (context?.appendHistory) {
                context.appendHistory(__path)
            }
        },
        navigateBack(): void {
            props.history.goBack()
        },
        navigateForward(): void {
            props.history.goForward()
        },
        getQueryParams(): Query {
            return parseSearchParams(props.location.search, '?')
        },
        getHashParams(): Query {
            return parseSearchParams(props.location.search, '#')
        },
        updateQueryParams(queryParams: Partial<Query>) {
            navigationController.navigatePath(navigationController.actualPath, queryParams as any)
        },
    })
}

export const useNavigationController = <Params extends object = {}, RenderContext extends RenderContextBase = RenderContextBase, Query extends object = {}>(
    props: RouteComponentProps<Params>,
): NavigationController<Params, RenderContext, Query> => {
    const context = useNavigationContext() as RenderContext
    return createNavigationController<Params, RenderContext, Query>(props, context)
}
