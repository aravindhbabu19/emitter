const {format}=require('date-fns')
const {v4:uuid}=require('uuid')
const fs=require('fs')
const fsPromises=require('fs').promises
const path=require('path')

const log=async(message)=>{
    const datetime=`${format(new Date(),'dd-MM-yyyy \t HH:mm:ss')}`
    const logitem=`${datetime} \t ${uuid()} \t ${message} \n`
    console.log(logitem)
    try{
        if(!fs.existsSync(path.join(__dirname,'log'))){
            await fsPromises.mkdir(path.join(__dirname,'log'))
        }
        await fsPromises.appendFile(path.join(__dirname,'log','EventFile.txt'),logitem)
    }
    catch(err){
        console.log(err)
    }
}
module.exports=log;