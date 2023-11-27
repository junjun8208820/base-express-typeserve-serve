import express from 'express'
import cors from 'cors'
import path from 'path';
const app:express.Application = express();
import WebApi from './routes/web/web'


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/web-api', WebApi);
app.use((req,res,next)=>{
    console.log('dsdsa')
    next()
})


app.listen(3000,function(){
    console.log('Example app listen on port 3000!');
})