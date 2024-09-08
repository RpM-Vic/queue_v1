// index.js
import fs from 'fs/promises'

const date1 = new Date()
const dateString = ` ${date1.toLocaleTimeString()} ${date1.toLocaleDateString()}`

fs.readFile('date.json', 'utf-8')
  .then((result) => {
    const readed = JSON.parse(result)
    if (readed.length > 10) {
      readed.shift()
    }
    readed.push(dateString)
    console.log(readed)
    fs.writeFile('date.json', JSON.stringify(readed, null, 2))
  }).catch((err) => {
    console.error(err)
  })
