var mongoose=require('./mongoose.js')
var moment = require("moment");
var CodeSchema=new mongoose.Schema({
    code:{  
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

module.exports=mongoose.model('code',CodeSchema,'code')