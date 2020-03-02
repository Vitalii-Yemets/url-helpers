import './style.css'

import { UrlBuilder } from './src'

const url = new UrlBuilder('http://example.com')
    .path('about/test')
    .query({ foo: 'bar' })
    .param('bar', 'baz')
    .toString()


const rootElement = document.getElementById('root')

rootElement.innerText = url

