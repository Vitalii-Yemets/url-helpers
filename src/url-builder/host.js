import { isEmpty } from '../utils'


export const throwIfHostInvalid = host => {

    if (!host) {
        throw new Error('Host must be not null or undefined.')
    }

}

export const parseHost = host => {

    return isEmpty(host)
        ? ''
        : `${host}`

}