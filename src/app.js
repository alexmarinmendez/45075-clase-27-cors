import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

// app.use((req, res, next) => {
//     res.set("Access-Control-Allow-Origin", "*")
//     next()
// })

app.use(cors())

app.get('/', (req, res) => res.json({ data: 'secret data' }))

app.listen(3010, () => console.log('Server Up'))