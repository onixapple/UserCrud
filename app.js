const express = require("express")
const app = express()
const port = process.env.PORT || 4000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false}));
app.use(express.json())

const userRoutes = require('./public/routes/userRoutes');
app.use('/api/v1/user',userRoutes);

app.listen(port, ()=>{
    console.log('Express Server is running at port', port);
})