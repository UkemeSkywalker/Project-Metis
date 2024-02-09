import exp from 'constants'
import express from 'express'
import { router } from '../routes/files.mjs'

const path = router

const app = express()

const PORT = 5001
app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded())

app.use('/api/vi/files', path)
