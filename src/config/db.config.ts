import mysql from 'mysql'
const config = {
    host: '127.0.0.1',
    user: 'root',
    password: 'qwer1234',
    database: 'test',
}
export const sqlConnect = (sql: any, sqlArr?: Array<String>) => {
    return new Promise((resolve, reject) => {
        var pool = mysql.createPool(config)
        pool.getConnection((err: any, data: { query: (arg0: any, arg1: any, arg2: (errTemp: any, result: any) => void) => void; release: () => void }) => {
            if (err) {
                reject(err)
                console.log(err);
                return
            }
            const temPFunc = (errTemp: any, result: unknown) => {
                if (errTemp) {
                    reject(errTemp)
                    return
                }
                resolve(result)
            }
            data.query(sql, sqlArr, temPFunc)
            data.release();
        })
    })
}