const express = require('express')
const { settings } = require('node:cluster')
const app = express()

const fetch = require('node-fetch'),
    url = 'http://jsonplaceholder.typicode.com/posts'
    settings = { method: 'Get'}

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        console.log(data);
    })