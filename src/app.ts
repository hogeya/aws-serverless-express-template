import express from 'express'

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

app.get('/', (req, res) => res.send('Hello'))

const port: string = process.env.PORT || "3000"

app.listen(parseInt(port), () => console.log(`app start listening on port ${port}`))

export { app }
