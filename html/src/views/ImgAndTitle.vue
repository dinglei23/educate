<!--识谱卡片分类标题-->
<template>
  <div class="root">
    <h1 class="root-title">识谱卡片</h1>
    <div class="root-contain">
      <div class="root-add">
        <button @click="add">添加</button>
      </div>
      <div class="root-box">
        <div class="root-list">
          <div class="root-list-title">
            <ul>
              <li class="root-list-1">序号</li>
              <li class="root-list-2">识谱卡片标题</li>
              
              <li class="root-list-3">操作</li>
            </ul>
          </div>
          <div class="root-list-ul">
            <ul>
              <li class="root-list-1">1</li>
              <li class="root-list-2">启蒙>第一册>私教</li>
              
              <li class="root-list-3">
                <button class="updata-bt">编辑</button>
                <button class="delete-bt">删除</button>
                <button class="add-video" @click="addVideo">添加问题</button>
                <button class="look-video" @click="lookVideo">查看问题</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <root-and-updata :infoIsShow='infoIsShow' @CloseUpdata='CloseUpdata'></root-and-updata>
      <add-and-spkp :addVideoIsShow='addVideoIsShow' @CloseAddVideo='CloseAddVideo'></add-and-spkp>
      <look-and-spkp :lookVideoIsShow='lookVideoIsShow' @CloselookVideo='CloselookVideo'></look-and-spkp>
    </div>
  </div>
</template>
<script>
import RootAndUpdata from '../components/RootAndUpdata.vue'
import AddAndSpkp from '../components/AddAndSpkp.vue'
import LookAndSpkp from '../components/LookAndSpkp.vue'
export default {
  data(){
    return{
      infoIsShow:false,
      addVideoIsShow:false,
      lookVideoIsShow:false
    }
  },
  components:{
    RootAndUpdata,
    AddAndSpkp,
    LookAndSpkp
  },
  methods:{
    add(){  //打开新增二级分类目录下视频列表
      this.infoIsShow=true;
    },
    CloseUpdata(){//关闭新增二级分类目录下视频列表
      this.infoIsShow=false;
    },
    addVideo(){  //打开新增视频
      this.addVideoIsShow=true;
    },
    CloseAddVideo(){//关闭新增视频
      this.addVideoIsShow=false;
    },
    lookVideo(){  //打开查看视频
      this.lookVideoIsShow=true
    },
    CloselookVideo(){  //关闭查看视频
      this.lookVideoIsShow=false
    },
  }
}
</script>

<style scoped>
 .root{
   height: 100%;
   width: 100%;
 }
 .root-title{
   height: 36px;
   line-height: 36px;
   font-weight: normal;
   background-color: #fff;
   font-size: 12px;
   text-indent: 10px;
 }
 .root-contain{
   height: calc(100% - 46px);
   margin-top: 10px;
   background-color: #fff;
   box-sizing: border-box;
   padding: 0 15px;
   position: relative;
 }
 .root-list-3 button{
   margin-right: 10px;
 }
 .root-add{
   height: 50px;
   border-bottom: 1px solid #e6e6e6;
   box-sizing: border-box;
   padding-top: 10px;
 }
 .root-add button,.updata-bt,.delete-bt,.add-video,.look-video{
   background-color: #009688;
   height: 30px;
   width: 66px;
   border: none;
   cursor: pointer;
   color: #fff;
   border-radius: 2px;
 }
 .root-add button:hover,.updata-bt:hover{
   background-color: rgba(0, 150, 136, 0.7)
 }
 .delete-bt{
   background-color: rgba(255, 87, 34, 1)
 }
 .delete-bt:hover{
   background-color: rgba(255, 87, 34, 0.7)
 }
 .root-box{
   height: calc(100% - 50px);
   padding-top: 15px;
   box-sizing: border-box;
 }
 .root-list{
   height: 100%;
   width: 100%;
   border: 1px solid #E6E6E6;
   box-sizing: border-box;
 }
 .root-list-title{
   height: 40px;
   background-color: #f2f2f2;
 }
 .root-list-title ul li,.root-list-ul ul li{
   height:40px;
   line-height: 39px;
   float: left;
   border-right: 1px solid #E6E6E6;
   border-bottom: 1px solid #E6E6E6;
   box-sizing: border-box;
   color: #666;
   text-indent: 15px;
 }
 .root-list-1{
   width: 10%;
 }
 .root-list-2{
   width: 20%;
 }
 
 .root-list-3{
   width: 70%;
 }
 .root-list-ul{
   height: calc(100% - 42px);
 }
 .root-list-ul ul{
   height: 40px;
 }
</style>
