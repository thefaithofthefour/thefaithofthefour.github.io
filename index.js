// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()



// forma de ler json / middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', (req, res) => {

    // mostrar requisição

    res.json({ message: 'Oi Express!' })

})

// entregar uma porta
const DB_USER = 'RickOMPG'
const DB_PASSWORD = encodeURIComponent('Luizhenrique77.')

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.nh5fq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
)

.then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))

