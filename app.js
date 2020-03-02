import './style.css'

import { UrlBuilder } from './src'

const url = new UrlBuilder('http://example.com')
    .path('about/test')
    // .query({ foo: 'bar' })
    .param('bar', 'baz')
    .param('test2', 'baz')
    .toString()
debugger

const urlExample = `const url = new UrlBuilder('http://example.com')
            .path('about/test')
            .query({ foo: 'bar' })
            .param('bar', 'baz')
            .toString()
    `


const urlBuilder = document.getElementById('url-builder')
urlBuilder.innerText = `${urlExample}\n${url}`

