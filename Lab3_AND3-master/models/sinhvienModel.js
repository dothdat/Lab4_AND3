const mongoose=require('mongoose');
const sinhvienSchema=new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    tensv:{
        type: String,
        required: true
    },
});
const sinhvien=mongoose.model('sinhvien',sinhvienSchema);
module.exports=sinhvien;