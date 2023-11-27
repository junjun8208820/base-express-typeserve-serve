import express, { Router } from 'express'
import {controllersWeb} from '../../controllers/web'
const router:Router = express.Router();

const judgeToken = (req: any, res: any, next: any)=>{
    console.log('验证token')
    const isVaild = true
    if(isVaild){
        res.token = 'ssss'
        next()
    }
    else{
        res.send('error')
    }
}
// 验证token
// router.use(judgeToken)

router.get('/login', controllersWeb.login);
router.get('/getList', controllersWeb.getList);

export default router
