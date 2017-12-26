import * as express from 'express'

const app = express()
const port = 3000

app.use('/core', express.static(__dirname + '/../../app/core'))

app.get('/', (req, res) => {
  res.sendFile('/index.html', { root: __dirname + '/../../app/core'})
})

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`))