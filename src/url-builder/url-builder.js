// Utils
import { mergeUnique, first } from 'jsutils/arrays'

// Parts
import { throwIfHostInvalid, parseHost } from './host'
import { pathResolve, throwIfPathIvalid, parsePath } from './path'
import { queryParametrResoleve, parseQuery, throwIfQueryParametrInvalid } from './query'


export class UrlBuilder {

    constructor(host, options) {

        this.withoutHost = options
            ? options.withoutHost
            : true

        this.parts = {
            host: '',
            pathes: [],
            params: []
        }

        if (host) {
            this.host(host)
        }
    }


    host (host) {

        if (!this.withoutHost) {
            throwIfHostInvalid(host)
        }

        this.parts = {
            ...this.parts,
            host
        }

        return this
    }


    path (path) {

        throwIfPathIvalid(path)

        const resolved = pathResolve(path)

        const pathes = mergeUnique(this.parts.pathes, resolved, (first, second) => first === second)

        this.parts = {
            ...this.parts,
            pathes
        }

        return this
    }


    query (query) {
        const resolved = queryParametrResoleve(query)
        const params = mergeUnique(this.parts.params, resolved, (first, second) => first.name === second.name)

        this.parts = {
            ...this.parts,
            params
        }

        return this
    }

    param (name, value) {
        this.query({ [name]: value })
        return this
    }


    build () {

        const host = parseHost(this.parts.host)
        const pathes = parsePath(this.parts.pathes)
        const query = parseQuery(this.parts.params)
        const url = `${pathes.trim().length > 0 ? host + '/' : host}${pathes}${query.trim().length > 0 ? '?' : ''}${query}`

        return url
    }


    toString () {
        return this.build()
    }

}