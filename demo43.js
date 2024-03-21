const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
//tao app
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//mang users
const users=[
    {id:1,username:'user001',password:'p001'},//dung de login
];
//token bi mat
const tokenBiMat='123456';
//ham tao token
function hamTaoToken(user){
    return jwt.sign(user,tokenBiMat,{expiresIn:'15m'});//co gtri trong 15p
}
//tien hanh login(goi qua postman)
app.post('/login',(req,res)=>{
    const {username,password}= req.body;//nhan gtri tu postman
    console.log('thong tin nhan duoc');
    console.log(username);
    console.log(password);
//tim kiem trong mang xem co user nhu ng dung nhap 0
    const user = users.find((u)=> u.username === username &&
    u.password === password);//so sanh
    if(!user){
        console.log("sai username or password");
        return;
    }//neu nhap dung thi tao token
    const tokenCongKhai = hamTaoToken({
        id:user.id,
        username: user.username,
        });
    //tra token
    res.json(tokenCongKhai);
    console.log('token sinh ra',+tokenCongKhai);
});
app.listen(3007,()=>{
    console.log('server dang chay');
})