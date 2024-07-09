const fs = require('fs')

const data = `Hello from Node.js
This is me writing to a file
`
const fileName = 'hello.txt'
fs.writeFileSync(fileName, data)
