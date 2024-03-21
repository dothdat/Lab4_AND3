const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
//cau hinh gui email
let guiEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'datdtph44184@fpt.edu.vn',
        pass:'xkfe ueco frvn lowg'
    }
});
//thiet lap nd gui
let noiDung ={
    from: 'datdtph44184@fpt.edu.vn',
    to : 'dodat211004@gmail.com',
    subject: 'Test email',
    text: 'ban da dat duoc 1 trieu nguoi theo doi'
};
//gui
guiEmail.sendMail(noiDung,(err,info)=>{
    if(err){
        console.log("loi", err);
    }else{
        console.log("da gui thanh cong",info);
    }
});
//chay sever
app.listen(3005,()=>{
    console.log("sever dang chay");
});