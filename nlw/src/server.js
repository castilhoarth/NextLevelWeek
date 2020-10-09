//servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses, 
    saveClasses
} = require('./pages')

//nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//configurar arquivos estaticos (css, scripts, imagens)]
server
//receber dados do req.body
.use(express.urlencoded({ extended: true}))
.use(express.static("public")) //public eh a pasta que tao os css
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
// funcao express ta retornando um objeto
// __dirname eh o nome do diretorio