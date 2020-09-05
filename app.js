const express = require('express')
const mongoose = require('mongoose')

const url = "mongodb://localhost//alienDBex"

const app = express()
mongoose.connect(url, { useNewurlParser: true })

const con = mongoose.connection

con.on('open', function () {
    console.log("connected....")
})


