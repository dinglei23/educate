var express=require('express');
var router=express.Router();

var RootLevel=require('./module/rootLevel');
var OneLevel=require('./module/oneLevel');
var TwoLevel=require('./module/twoLevel');
var VideoList=require('./module/videoList');
var Video=require('./module/video');
var CardTitle=require('./module/cardTitle');
var Card=require('./module/card');
var User=require('./module/user');
var Code=require('./module/code');

router.all('*', function(req, res, next) { //跨域设置
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//科目顶级分类开始
router.get('/addRootLevel',function(req,res){ //增加科目顶级分类
    var query=req.query;
    new Promise(function(resolve, reject){
        RootLevel.find({title:query.title},function(err,doc){
            if(err) return res.status(500).json([{"status":'fail'}]);
            // return res.status(200).json(doc);
            resolve(doc)
        })
    }).then(function(r){
        if(r.length>0){
            return res.status(200).json([{"status":'0'}]);
        }else{
            var rootLevel=new RootLevel({
                title:query.title
            });
            rootLevel.save(function(err,doc){
                if(err) return res.status(500).json({"status":'fail'});
                return res.status(200).json({"status":"success",result:doc});
            })
        }
    })
});

router.get('/findRootLevel',function(req,res){ //科目顶级分类所有数据展示
    RootLevel.find({},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json(doc);
    })
});

router.get('/removeRootLevel',function(req,res){ //删除科目顶级分类
    var query=req.query;
    RootLevel.remove({_id:query._id},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json({"status":"success"});
    })
});
//科目顶级分类结束

//科目一级分类开始
router.get('/addOneLevel',function(req,res){ //增加科目一级分类
    var query=req.query;
    new Promise(function(resolve, reject){
        OneLevel.find({title:query.title,kid:query.kid},function(err,doc){
            if(err) return res.status(500).json([{"status":'fail'}]);
            // return res.status(200).json(doc);
            resolve(doc)
        })
    }).then(function(r){
        if(r.length>0){
            return res.status(200).json([{"status":'0'}]);
        }else{
            var oneLevel=new OneLevel({
                title:query.title,
                kid:query.kid,
                imgurl:query.imgurl
            });
            oneLevel.save(function(err,doc){
                if(err) return res.status(500).json({"status":'fail'});
                return res.status(200).json({"status":"success",result:doc});
            })
        }
    })
});

router.get('/findOneLevel',function(req,res){ //科目一级分类所有数据展示
    RootLevel.aggregate([{
        $lookup:{
            from:'oneLevel',
            localField:'_id',
            foreignField:'kid',
            as:'Olist'
        }
    }],function(err,doc){
        return res.status(200).json(doc);
    })
});

router.get('/removeOneLevel',function(req,res){ //删除科目一级分类
    var query=req.query;
    oneLevel.remove({_id:query._id},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json({"status":"success"});
    })
});
//科目一级分类结束

//科目二级分类开始
router.get('/addTwoLevel',function(req,res){ //增加科目二级分类
    var query=req.query;
    new Promise(function(resolve, reject){
        TwoLevel.find({title:query.title,yid:query.yid},function(err,doc){
            if(err) return res.status(500).json([{"status":'fail'}]);
            // return res.status(200).json(doc);
            resolve(doc)
        })
    }).then(function(r){
        if(r.length>0){
            return res.status(200).json([{"status":'0'}]);
        }else{
            var twoLevel=new TwoLevel({
                title:query.title,
                yid:query.yid
            });
            twoLevel.save(function(err,result){
                if(err) return res.status(500).json({"status":'fail'});
                return res.status(200).json({"status":"success",result:result});
            })
        }
    })
});

router.get('/findTwoLevel',function(req,res){ //科目二级分类所有数据展示
    OneLevel.aggregate([{
        $lookup:{
            from:'twoLevel',
            localField:'_id',
            foreignField:'yid',
            as:'Ylist'
        }
    }],function(err,doc){
        return res.status(200).json(doc);
    })
    
});

router.get('/removeTwoLevel',function(req,res){ //删除科目二级分类
    var query=req.query;
    TwoLevel.remove({_id:query._id},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json({"status":"success"});
    })
});
//科目二级分类结束

//二级栏目下视频分类标题开始
router.get('/addVideoList',function(req,res){ //增加科目二级分类视频分类标题
    var query=req.query;
    new Promise(function(resolve, reject){
        VideoList.find({title:query.title,eid:query.eid},function(err,doc){
            if(err) return res.status(500).json([{"status":'fail'}]);
            // return res.status(200).json(doc);
            resolve(doc)
        })
    }).then(function(r){
        if(r.length>0){
            return res.status(200).json([{"status":'0'}]);
        }else{
            var videoList=new VideoList({
                title:query.title,
                eid:query.eid
            });
            videoList.save(function(err,result){
                if(err) return res.status(500).json({"status":'fail'});
                return res.status(200).json({"status":"success",result:result});
            })
        }
    })
});

router.get('/findVideoList',function(req,res){ //科目二级分类视频分类所有数据展示
    TwoLevel.aggregate([{
        $lookup:{
            from:'videoList',
            localField:'_id',
            foreignField:'eid',
            as:'Elist'
        }
    }],function(err,doc){
        return res.status(200).json(doc);
    })
});

router.get('/removeTwoLevel',function(req,res){ //删除科目二级分类视频分类
    var query=req.query;
    VideoList.remove({_id:query._id},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json({"status":"success"});
    })
});
//二级栏目下视频分类标题结束

//视频上传开始
router.get('/addVideo',function(req,res){ //增加上传视频
    var query=req.query;
    new Promise(function(resolve, reject){
        Video.find({title:query.title,lid:query.lid},function(err,doc){
            if(err) return res.status(500).json([{"status":'fail'}]);
            // return res.status(200).json(doc);
            resolve(doc)
        })
    }).then(function(r){
        if(r.length>0){
            return res.status(200).json([{"status":'0'}]);
        }else{
            var video=new Video({
                title:query.title,
                lid:query.lid,
                videoUrl:query.videoUrl
            });
            video.save(function(err,result){
                if(err) return res.status(500).json({"status":'fail'});
                return res.status(200).json({"status":"success",result:result});
            })
        }
    })
});

router.get('/findVideo',function(req,res){ //视频所有数据展示
    videoList.aggregate([{
        $lookup:{
            from:'video',
            localField:'_id',
            foreignField:'lid',
            as:'Llist'
        }
    }],function(err,doc){
        return res.status(200).json(doc);
    })
});

router.get('/removeVideo',function(req,res){ //删除视频
    var query=req.query;
    Video.remove({_id:query._id},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json({"status":"success"});
    })
});
//视频上传结束

//识谱卡片标题开始
router.get('/addCardTitle',function(req,res){ //增加识谱卡片标题
    var query=req.query;
    new Promise(function(resolve, reject){
        CardTitle.find({title:query.title},function(err,doc){
            if(err) return res.status(500).json([{"status":'fail'}]);
            resolve(doc)
        })
    }).then(function(r){
        if(r.length>0){
            return res.status(200).json([{"status":'0'}]);
        }else{
            var cardTitle=new CardTitle({
                title:query.title
            });
            cardTitle.save(function(err,result){
                if(err) return res.status(500).json({"status":'fail'});
                return res.status(200).json({"status":"success",result:result});
            })
        }
    })
});

router.get('/findCardTitle',function(req,res){ //识谱卡片标题所有数据展示
    CardTitle.find({},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json(doc);
    })
});

router.get('/removeCardTitle',function(req,res){ //删除视频
    var query=req.query;
    CardTitle.remove({_id:query._id},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json({"status":"success"});
    })
});
//识谱卡片标题结束

//识谱卡片问题开始
router.get('/addCard',function(req,res){ //增加识谱卡片问题
    var query=req.query;
    new Promise(function(resolve, reject){
        Card.find({title1:query.title1,sid:query.sid},function(err,doc){
            if(err) return res.status(500).json([{"status":'fail'}]);
            // return res.status(200).json(doc);
            resolve(doc)
        })
    }).then(function(r){
        if(r.length>0){
            return res.status(200).json([{"status":'0'}]);
        }else{
            var card=new Card({
                sid:query.sid,
                title1:query.title1,
                title2:query.title2,
                img1:query.img1,
                img2:query.img2
            });
            card.save(function(err,result){
                if(err) return res.status(500).json({"status":'fail'});
                return res.status(200).json({"status":"success",result:result});
            })
        }
    })
});

router.get('/findCard',function(req,res){ //识谱卡片标题所有数据展示
    var query=req.query;
    Card.find({sid:query.sid},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json(doc);
    })
});

router.get('/removeCard',function(req,res){ //删除视频
    var query=req.query;
    Card.remove({_id:query._id},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json({"status":"success"});
    })
});
//识谱卡片问题结束

//用户信息开始
router.get('/addCard',function(req,res){ //增加识谱卡片问题
    var query=req.query;
    new Promise(function(resolve, reject){
        Code.find({code:query.code},function(err,doc){
            if(err) return res.status(500).json([{"status":'fail'}]);
            resolve(doc)
        })
    }).then(function(r){
        if(r.length == 0){
            var user=new User({
                name:query.name,
                teacher:query.teacher,
                age:query.age,
                school:query.school,
                code:query.code
            });
            user.save(function(err,result){
                if(err) return res.status(500).json({"status":'fail'});
                return res.status(200).json({"status":"success",result:result});
            })
        }else{
            var user=new User({
                name:query.name,
                teacher:query.teacher,
                age:query.age,
                school:query.school,
                code:query.code,
                status:1
            });
            user.save(function(err,result){
                if(err) return res.status(500).json({"status":'fail'});
                User.remove({code:query.code},function(err,doc){
                    if(err) return res.status(500).json([{"status":'fail'}]);
                    return res.status(200).json({"status":"success"});
                })
            })
        }
    })
    
    
});

router.get('/findUser',function(req,res){ //用户所有数据展示
    User.find({},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json(doc);
    })
});

router.get('/removeUser',function(req,res){ //删除视频
    var query=req.query;
    User.remove({id:query._id},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json({"status":"success"});
    })
});
//用户信息结束

//学员码生成开始
router.get('/addCode',function(req,res){ //生成数据学员码
    var code = "";
    var now=new Date();
　　new Promise(function(resolve, reject){
        Code.remove({},function(err,doc){
            if(err) return res.status(500).json([{"status":'fail'}]);
            resolve(doc)
        })
    }).then(function(r){
        for(var j=0;j<10;j++){
            code = "";
            for(var i=0;i<6;i++){
        　　　　var radom = Math.floor(Math.random()*10);
        　　　　code += radom;
        　　}
            code+=j+now.getDate().toString();
            var code=new Code({
                code:code,
            });
            code.save(function(err,result){
                if(err) return res.status(500).json({"status":'fail'});
            })
        }
        return res.status(200).json({"status":"success"});
    })
    
});

router.get('/findCode',function(req,res){ //学员码数据展示
    Code.find({},function(err,doc){
        if(err) return res.status(500).json([{"status":'fail'}]);
        return res.status(200).json(doc);
    })
});
//学员码生成结束

module.exports=router;