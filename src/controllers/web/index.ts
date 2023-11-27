import { UserService } from '../../services/web'
import { IPort } from '../../interfaces/export'
export const controllersWeb = {
    login: async (req: { body: any }, res: { send: (arg0: { code: number; result: boolean; data: any; massage: string }) => void }) => {
        const { body } = req
        console.log(121312);
        let resp: IPort<null> = {
            code: 200,
            result: true,
            data: null,
            massage: '添加成功'
        }
        const dataT:string = await UserService.login()
        const result = JSON.parse(dataT).find((el: { uname: any; upassword: any }) => el.uname == body.userName && el.upassword == body.password)
        if (!result) {
            res.send({
                code: 200,
                result: false,
                data: null,
                massage: '账号密码错误',
            })
            return
        }
        res.send(resp)
    },
    getList: async (req: any, res: { send: (arg0: { code: number; result: boolean; data: any; massage: string }) => void }) => {
        const dataT = await UserService.getList()
        const data = JSON.parse(dataT)
        res.send({
            code: 200,
            result: true,
            data: data || null,
            massage: '操作成功',
        })
    }
}