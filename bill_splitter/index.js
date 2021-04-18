const express = require('express')
const logger = require('morgan')
const path = require('path');
const app = express()
app.set("view engine", "ejs")


app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }))

let dollarCan= Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
})

app.get('/', (req, res) => {

  const splitted_Cad = null
  
 
  res.render('home', {splitted_Cad})
})

app.post('/bill_splitter', (req,res) => {
  console.log(req.body)

  const amount = parseFloat(req.body.amount)
  const tax = parseFloat(req.body.tax)
  const tip = parseFloat(req.body.tip)
  const people_count = parseInt(req.body.count)

console.log(amount)
console.log(tax)
console.log(tip)
console.log(people_count)
  
  const splitted_total = (
    amount + 
    (amount * (tax / 100)) + 
    (amount * (tip / 100))) / people_count

  
  
 




  console.log(splitted_total)

  const splitted_Cad = dollarCan.format(splitted_total);

  

  
  
  res.render('home',{splitted_Cad})
   
  



  
})



const PORT = process.env.PORT || 3000
const ADDRESS = 'localhost' 

app.listen(PORT, ADDRESS, () => {
  console.log(`Server listenning on http://${ADDRESS}:${PORT}`)
})