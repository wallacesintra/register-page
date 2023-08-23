const express = require("express")
const app = express()
const bcrypt = require("bcrypt")

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

// db
var users = []

app.get('/', (req,res) => {
    res.render('index.ejs')

})

app.get('/register', (req,res) => {
    res.render('register.ejs')
})

app.get('/login',(req,res) => {
    res.render('login.ejs')
})

app.post('/register',async (req,res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        users.push(
            {
                id : Date.now().toString(),
                name : req.body.name,
                email : req.body.email,
                password : hashedPassword
            }
        )
        console.log(users)
        res.redirect('/login')
    }
    catch{
        res.redirect('/register')
    }
})

app.post('/login',(req,res) =>{
    
})


app.listen(4000)