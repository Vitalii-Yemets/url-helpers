import { isEmpty } from '../utils'


export const throwIfQueryParametrInvalid = query => {

    if (isEmpty(query)) {
        throw new Error('UserInfo must be not null or undefined.')
    }

    if (!Object.defineProperty(query, 'name')) {
        throw new Error('Query name must be non-undefined.')
    }

    if (!Object.defineProperty(query, 'value')) {
        throw new Error('Query value must be non-undefined.')
    }

}


export const queryParametrResoleve = query => {

    if (Array.isArray(query)) {
        return query.reduce((acc, param) => {
            throwIfQueryParametrInvalid(param)
            acc.push({ ...param })
            return acc
        }, [])
    }

    if (typeof query === 'object') {

        return Object.keys(query)
            .map(key => ({ name: key, value: query[key] }))

    }
}


export const parseQuery = params => {

    const query = params
        .map(({ name, value }) => `${name}=${value}&`)
        .reduce((parts, part) => parts += part, '')
        .replace(/&+$/, '')

    return query

}