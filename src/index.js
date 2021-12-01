const express = require('express')
const teamsRoute = require('./route/teams.route')

const app = express()

app.use(express.json())
app.use('/teams', teamsRoute)

app.get('/', (req, res)=>{
    res.send('ok')
})

const PORT = 8087

app.listen(PORT, ()=>{
    console.log(`server start on port ${PORT}`)
})