const express = require('express');
const multer = require('multer');
//tao app
const app = express();
const port = 3006;
//cau hinh luu hinh anh
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'uploads');
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname);
    }
});
//sdung bien upload de thao tac
const upload = multer({storage});
//dinh nghia get(lay file);
app.get('/upload',(req,res)=>{
    res.sendFile(__dirname + '/upload2.html');
});
//dinh nghia post 
app.post('/upload', upload.single('image'),
(req,res)=>{
    res.send('upload thanh cong');
});
//khoi dong server
app.listen(port,()=>{
    console.log('server dang chay');
})