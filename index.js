// //import express from 'express'
// const express = require('express')
// //import path from 'path'
// const path = require('path')
// //const mongoose = require('mongoose')
// // import mongoose from 'mongoose'
// // mongoose.connect('mongodb://localhost:27017/firstdb')


// const __dirname = path.resolve()
// const PORT = 3000
// const app = express()
// app.set('view engine','ejs')



// app.use(express.static(path.resolve(__dirname, 'ejs', )))


// app.get('/mainpage', (req, res) => {
//   res.render(path.resolve(__dirname,'ejs', 'mainpage.ejs'))
// })
//   app.get('/2page', (req, res) => {
//     res.render(path.resolve(__dirname,'ejs', '2page.ejs')) 
//   })  
//   app.get('/account', (req, res) => {
//     res.render(path.resolve(__dirname,'ejs', 'account.ejs'))  
//   })
//   app.get('/mainjs', (req, res) => {
//     res.render(path.resolve(__dirname,'ejs', 'mainjs.js'))  
//   }) 
//   app.get('/uncharted', (req, res) => {
//     res.render(path.resolve(__dirname,'ejs', 'uncharted.ejs'))  
//   })
//   app.get('/spiderman', (req, res) => {
//     res.render(path.resolve(__dirname,'ejs', 'spiderman.ejs'))  
//   })
//   app.get('/showshenko', (req, res) => {
//     res.render(path.resolve(__dirname,'ejs', 'showshenko.ejs'))  
//   })
//   app.get('/moonknight', (req, res) => {
//     res.render(path.resolve(__dirname,'ejs', 'moonknight.ejs'))  
//   })
// New

const express = require('express');

const bodyParser = require('body-parser');
const path = require('path')
const app = express();
// const mongoose = require('mongoose')
// mongoose.promise = global.promise
// mongoose.connect('mongodb://localhost:27017/WebDB', {
//   useMongoClient: true
// })
//   .then(()=> console.log('MongoDB Started...'))
//   .catch(e => console.log(e))
// const ejs=require('ejs')



app.set('view engine','ejs')
app.use(express.static(path.resolve(__dirname, 'ejs' )))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const dbConfig = require('./ejs/config/database.config.js');
const mongoose = require('mongoose');
const {router} = require("express/lib/application");
const UserRoute = require('./ejs/routes/UserRoute')
app.use('/user',UserRoute)

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database DB', err);
    process.exit();
});
app.get('/mainpage', (req, res) => {
    res.render(path.resolve(__dirname,'ejs', 'mainpage.ejs'))
  })
    app.get('/2page', (req, res) => {
      res.render(path.resolve(__dirname,'ejs', '2page.ejs')) 
    })  
    app.get('/account', (req, res) => {
      res.render(path.resolve(__dirname, 'ejs', 'index2.ejs'))  
    })
    app.get('/mainjs', (req, res) => {
      res.render(path.resolve(__dirname,'ejs', 'mainjs.js'))  
    }) 
    app.get('/uncharted', (req, res) => {
      res.render(path.resolve(__dirname,'ejs', 'uncharted.ejs'))  
    })
    app.get('/spiderman', (req, res) => {
      res.render(path.resolve(__dirname,'ejs', 'spiderman.ejs'))  
    })
    app.get('/showshenko', (req, res) => {
      res.render(path.resolve(__dirname,'ejs', 'showshenko.ejs'))  
    })
    app.get('/moonknight', (req, res) => {
      res.render(path.resolve(__dirname,'ejs', 'moonknight.ejs'))  
    })
    // app.get('/read', (req, res) => {
    //   res.render(path.resolve(__dirname,'ejs', 'read.ejs'))  
    // })
    // app.get('/find', (req, res) => {
    //   res.render(path.resolve(__dirname,'ejs', 'find.ejs'))  
    // })
    // app.get('/update', (req, res) => {
    //   res.render(path.resolve(__dirname,'ejs', 'update.ejs'))  
    // })
    // app.get('/delete', (req, res) => {
    //   res.render(path.resolve(__dirname,'ejs', 'delete.ejs'))  
    // })
    // app.get('/results', (req, res) => {
    //   res.render(path.resolve(__dirname,'ejs', 'views','results.ejs'))  
    // })

app.listen(3500, () => {
    console.log("Server is listening on port 3500");
});





//old
// const express = erquire('express')
// const bodyparser = require('body-parser')
// const ejs = require('ejs')
// const PORT = 3000
// const app = express()
// app.set('view engine','ejs')
// app.use(bodyparser.urlencoded({extended:true}))
// app.use(express.static('public'))


// app.get('/', (req, res) => {
//   res.render(__dirname,'ejs', 'mainpage.ejs')
// })
// app.get('/2page', (req, res) => {
//   res.render(__dirname,'ejs', '2page.hejstml') 
// })
// app.get('/account', (req, res) => {
//   res.render(__dirname,'ejs', 'account.ejs') 
// })
// app.get('/mainjs', (req, res) => {
//   res.render(__dirname,'MovieSite', 'mainjs.js') 
// }) 






























// import express from 'express'
// import path from 'path'

// const __dirname = path.resolve()
// const PORT = 3000
// const app = express()



// app.use(express.static(path.resolve(__dirname, 'MovieSite', )))


// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname,'MovieSite', 'mainpage.html'))  
// })
// app.get('/2page', (req, res) => {
//   res.sendFile(path.resolve(__dirname,'MovieSite', '2page.html'))  
// })
// app.get('/account', (req, res) => {
//   res.sendFile(path.resolve(__dirname,'MovieSite', 'account.html'))  
// })
// app.get('/mainjs', (req, res) => {
//   res.sendFile(path.resolve(__dirname,'MovieSite', 'mainjs.js'))  
// })

//old






// app.listen(PORT, () => {
//     console.log(`server started at ${PORT}...`)
// })
