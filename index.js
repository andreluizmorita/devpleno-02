const express = require('express')
const axios = require('axios')
const app = express()

app.set('view engine', 'ejs')

const port = process.env.PORT || 3000

let i = 10

app.get('/', async(request, response) => {
    try {
        const content = await axios({
            method: 'GET',
            url: 'https://como-fazer-1a64d.firebaseio.com/teste.json',
            socketPath: 'proxy',
            proxy: {
                host: '10.0.16.62',
                port: 3128,
                auth: {
                    username: 'andre.morita',
                    password: '3b9ac9ff!*outubro',
                },
            },
        })

        console.log(content.data)
        //response.render('index', { i : content.data })
    } catch(err) {
        console.log(err)
    }
})

app.listen(port, (err) => {
    if(err) {
        console.log('error')
    } else {
        console.log('Como-fazer server is running on port: ', port)
    }
})