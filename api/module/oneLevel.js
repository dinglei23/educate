var mongoose=require('./mongoose.js')
var moment = require("moment");
var Schema=mongoose.Schema;
var oneLevelSchema=new mongoose.Schema({
    kid:{
        type:Schema.Types.ObjectId
    },
    title:{  //一级分类标题
        type:String,
        require:true
    },
    describe:{  //描述
        type:String,
        default:'暂无'
    },
    imgurl:{ //封面地址
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

module.exports=mongoose.model('oneLevel',oneLevelSchema,'oneLevel')