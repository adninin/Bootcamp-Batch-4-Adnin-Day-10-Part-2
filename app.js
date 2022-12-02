//Require express
const express = require('express')

const app = express()
const port = 3000

//Menghubungkan ke index html (tampilan awal)
app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname })
})

//Menghubungkan ke about.html
app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname })

})

//Menghubungkan ke contact html
app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', { root: __dirname })

})

app.get('/product/:id', (req, res) => {
  res.send(`product id : ${req.params.id} <br> category id : ${req.query.category}`)
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('Error : Page not found!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})