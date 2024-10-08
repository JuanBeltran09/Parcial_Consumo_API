const express = require ('express')

const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'public')))

app.set('PORT',process.env.PORT || 3000)

app.set('views', path.join(__dirname, 'views'));

app.get('https://starwars-n5ec-developuptcs-projects.vercel.app/', (req, res) => {
    res.json({ message: 'Respuesta desde la API' });
  });

app.use('/',require('./routes/index'))

app.listen(app.get('PORT'),()=>console.log(`Server Listen at Port ${app.get('PORT')}`))