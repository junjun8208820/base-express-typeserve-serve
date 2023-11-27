import { sqlConnect } from '../../config/db.config'
export const UserService = {
    login:async ()=>{
        const sql = 'select * from users'
        const data = await sqlConnect(sql)
        return JSON.stringify(data)
    },
    getList:async ()=>{
        const sql = 'select * from healthnews'
        const data = await sqlConnect(sql)
        return JSON.stringify(data)
    }
}
