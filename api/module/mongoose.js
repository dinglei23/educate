var mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/educate',{userNewUrlParser:true},function(err){
        console.log('教育数据库连接成功');
});
module.exports=mongoose;