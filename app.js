import './style.css'

import { UrlBuilder } from './src'

const url = new UrlBuilder('http://example.com')
    .setPath('about/test')
    .addParameter({ foo: 'bar' })
    .addParameter({ foo: 'bar' })
    .toString()


const rootElement = document.getElementById('root')

rootElement.innerText = url

