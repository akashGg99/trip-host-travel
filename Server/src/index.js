const express = require("express")
const app = express()

app.use(express().json())
app.use(bodyparser())


app.path('/', (req,res)=> res.send({"msg":"server / response..."}))

const PORT = 3001

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))