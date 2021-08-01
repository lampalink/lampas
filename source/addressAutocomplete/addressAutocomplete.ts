
import { Merge } from 'ts-essentials'
import {
    createElement,
    useState,
    useEffect,
    useRef,
    Fragment,
} from 'react'
import {
    get,
} from 'lodash'

import './styles.scss'

import { AutocompleteInput } from '../autocompleteInput'

export enum GooglePlaceResultStatus {
    invalidRequest = 'INVALID_REQUEST',
    notFound = 'NOT_FOUND',
    ok = 'OK',
    overQueryLimit = 'OVER_QUERY_LIMIT',
    requestDenied = 'REQUEST_DENIED',
    unknownError = 'UNKNOWN_ERROR',
    zeroResult = 'ZERO_RESULT',
}

export interface PlaceResult {
    place_id: string
    formatted_address: string
    icon: string
}

export interface AddressAutocompleteProps {
    defaultText?: string
    placeholder?: string
    hasError?: boolean
}

export const AddressAutocomplete = ({ defaultText, placeholder, hasError }: AddressAutocompleteProps) => {
    const [ typingTimeout, setTypingTimeout ] = useState(null)
    const [ sessionToken, setSessionToken ] = useState(undefined)
    const [ searchTerm, setSearchTerm ] = useState<string>(null)
    const [ places, setPlaces ] = useState<PlaceResult[]>([])
    const resultAttributionElement = useRef<HTMLDivElement>()

    useEffect(() => {
        if (typeof get(window, 'google.maps.places.AutocompleteSessionToken') === 'function') {
            const _sessionToken = new (get(window, 'google.maps.places').AutocompleteSessionToken)()
            setSessionToken(_sessionToken)
        }
    }, [])

    const loadPlaces = async() => {
        if (typeof get(window, 'google.maps.places.PlacesService') === 'function') {
            const placesService = new (get(window, 'google.maps.places').PlacesService)(resultAttributionElement.current)

            console.log(placesService)
            placesService.textSearch({
                query: searchTerm,
                type: 'address',
            }, (places: PlaceResult[], status: GooglePlaceResultStatus) => {
                console.log(status, places)
                switch (status) {
                case GooglePlaceResultStatus.ok:
                    setPlaces(places)
                    return
                case GooglePlaceResultStatus.zeroResult:
                    setPlaces([])
                    return
                default:
                    console.error('GooglePlacesService error >', status)
                    return
                }
            })
        }
    }

    useEffect(() => {
        if (resultAttributionElement.current && searchTerm) {
            loadPlaces()
        }
    }, [resultAttributionElement.current, sessionToken, searchTerm])

    const handleChange = (text: string, option: Merge<{ id: string }, PlaceResult>) => {
        if (typeof text !== 'string' || text === searchTerm) return

        let timeoutMs = 400
        if (text.length < 3) {
            timeoutMs = 200
        }

        if (typingTimeout) {
            clearTimeout(typingTimeout)
        }

        setTypingTimeout(setTimeout(() => {
            setSearchTerm(text)
        }, timeoutMs))
    }

    return createElement(Fragment, {}, [
        createElement('div', {
            key: 'resultattribution',
            ref: resultAttributionElement,
        }),
        createElement(AutocompleteInput, {
            defaultText, placeholder, hasError,
            key: 'input',
            options: places.map(place => ({ id: place.place_id, ...place })),
            renderOption: (place: Merge<{ id: string }, PlaceResult>) =>
                createElement('div', {
                    key: `${place.id}`,
                }, place.formatted_address),
            onChange: handleChange,
        }),
    ])
}
