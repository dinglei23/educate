var mongoose=require('./mongoose.js')
var moment = require("moment");
var Schema=mongoose.Schema;
var cardSchema=new mongoose.Schema({
    sid:{
        type:Schema.Types.ObjectId
    },
    title1:{  //识图卡片问题
        type:String,
        require:true
    },
    title1:{  //视频卡片答案
        type:String,
        require:true
    },
    img1:{  //识图卡片问题图片地址
        type:String,
        require:true
    },
    img2:{  //识图卡片答案图片地址
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

module.exports=mongoose.model('card',cardSchema,'card')