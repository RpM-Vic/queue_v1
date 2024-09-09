// index.js
import fs from 'fs/promises'
import path from 'path'

const filePath = path.join(process.cwd(), 'date.json')
const date1 = new Date()
const dateString = ` ${date1.toLocaleTimeString()} ${date1.toLocaleDateString()}`

fs.readFile(filePath, 'utf-8')
  .then((result) => {
    const readed = JSON.parse(result)
    if (readed.length > 10) {
      readed.shift()
    }
    readed.push(dateString)
    fs.writeFile(filePath, JSON.stringify(readed, null, 2))
  }).catch((err) => {
    console.error(err)
  })
