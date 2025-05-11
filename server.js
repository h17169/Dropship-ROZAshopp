import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParser.json())

let productList = []

app.post('/api/upload', (req, res) => {
  const product = req.body
  productList.push(product)
  res.json({ status: 'success', message: 'Product added', product })
})

app.get('/api/products', (req, res) => {
  res.json(productList)
})

app.post('/api/publish', (req, res) => {
  const { productId } = req.body
  const product = productList.find(p => p.id === productId)
  if (!product) return res.status(404).json({ error: 'Product not found' })
  res.json({ status: 'published', product })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`)
})