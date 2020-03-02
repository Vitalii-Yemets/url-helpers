const schemes = ['http', 'https']

export const throwIfSchemeUnsuported = scheme => {

    if (!scheme) {

    }

}

export const createScheme = scheme => {

    if (scheme) {
        return `${scheme}:`
    }

    throw new Error('URL scheme must be non-empty.')
}