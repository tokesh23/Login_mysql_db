const express = require('express');
 
const app = express();

const cors = require('cors')
app.use(express.json())

app.use(cors());


const Login =()=>{

    const PORT = 4001;
   

    const db = require("./models")

    //routes


    const postRouter = require('./routes/Posts')

    app.use('/Posts',postRouter)
 

    db.sequelize.sync().then(()=>{
        
    app.listen(PORT,()=>{
        console.log(`Server is runnig on PORT: ${PORT}`);
        
    });


    })
    
}

Login()