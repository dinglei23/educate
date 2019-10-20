var mongoose=require('./mongoose.js')
var moment = require("moment");
var cardTitleSchema=new mongoose.Schema({
    title:{  
        type:String,
        require:true
    },
    describe:{  //描述
        type:String,
        default:'暂无'
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

module.exports=mongoose.model('cardTitle',cardTitleSchema,'cardTitle')