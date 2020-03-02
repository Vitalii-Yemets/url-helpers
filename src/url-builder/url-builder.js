// Utils
import { mergeUnique } from 'jsutils/arrays'

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
            path: '',
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

        this.parts = {
            ...this.parts,
            path: pathResolve(path)
        }

        return this
    }


    query (query) {

        const resolved = queryParametrResoleve(query)

        const params = Array.isArray(resolved)
            ? mergeUnique(this.parts.params, resolved, (first, second) => first.name === second.name)
            : mergeUnique(this.parts.params, [resolved], (first, second) => first.name === second.name)

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
        const path = parsePath(this.parts.path)
        const query = parseQuery(this.parts.params)

        const url = `${host}/${path}${query.trim().length > 0 ? '?' : ''}${query}`

        return url
    }


    toString () {
        return this.build()
    }

}