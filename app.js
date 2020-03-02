import './style.css'

import { UrlBuilder } from './src'

const url = new UrlBuilder('http://localhost:5051/api/Encounters')
    .path('test')
    .path('test2')
    .path('test3')
    .query({ foo: 'bar' })
    .param('bar', 'baz')
    .param('test2', 'baz')
    .toString()

const urlExample = `const url = new UrlBuilder('http://localhost:5051/api/Encounters/')
        .query({ foo: 'bar' })
        .param('bar', 'baz')
        .param('test2', 'baz')
        .toString()
    `


const urlBuilder = document.getElementById('url-builder')
urlBuilder.innerText = `${urlExample}\n${url}`

