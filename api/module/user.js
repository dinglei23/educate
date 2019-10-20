var mongoose=require('./mongoose.js')
var moment = require("moment");
var userSchema=new mongoose.Schema({
    name:{  //姓名
        type:String,
        require:true
    },
    status:{ //用户状态，0未激活，1已激活
        type:Number,
        default:0
    },
    teacher:{  //所属老师
        type:String,
        require:true
    },
    age:{  //年龄
        type:Number,
        require:true
    },
    school:{  //学校
        type:String,
        require:true
    },
    code:{  //学员码
        type:String,
        require:true
    },
    add_time:{
        type:String,
        default:() => moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    },
    ylzd1:{
        type:String,
        default:''
    },
    ylzd2:{
        type:String,
        default:''
    },
    ylzd3:{
        type:String,
        default:''
    },
    ylzd4:{
        type:Number,
        default:0
    },
    ylzd5:{
        type:Number,
        default:0
    },
    ylzd6:{
        type:Number,
        default:0
    }
})

module.exports=mongoose.model('user',userSchema,'user')