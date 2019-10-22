<!--识谱卡片问题列表-->
<template>
    <div class="updata-info" v-show="lookVideoIsShow">
        <div class="updata-box">
            <div class="updata-title">识谱卡片1<span @click="close"></span></div>
            <div class="updata-contain">
               <div class="updata-contain-title">
                   <ul>
                       <li>序号</li>
                       <li>问题</li>
                       <li>问题图片</li>
                       <li>答案</li>
                       <li>答案图片</li>
                   </ul>
               </div>
                <div class="updata-contain-list">
                    <ul>
                       <li>1</li>
                       <li>节拍1</li>
                       <li><img src="../assets/banner.jpg" /></li>
                       <li>节拍二</li>
                       <li><img src="../assets/banner.jpg" /></li>
                   </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'LookAndSpkp',
    data(){
        return{
            
        }
    },
    props:{
        lookVideoIsShow:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        close(){
            this.$emit('CloselookVideo');
        }
    }
}
</script>

<style scoped>
    .updata-info{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .updata-box{
        height: 80%;
        width: 80%;;
        background-color: #F8F8F8;
    }
    .updata-title{
        height: 43px;
        line-height: 42px;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        text-indent: 20px;
        font-size: 12px;
        position: relative;
    }
    .updata-title span{
        display: block;
        height: 16px;
        width: 16px;
        position: absolute;
        top: 13px;
        right: 13px;
        background:url(../assets/icon.png) no-repeat -187px -38px;
        cursor: pointer;
    }
    .updata-contain{
        height: calc(100% - 53px);
        background-color: #fff;
        margin-top: 10px;
        box-sizing: border-box;
        border: 1px solid #E6E6E6;
    }
    .updata-contain-title{
        height: 40px;
        background-color: #f2f2f2;
    }
    .updata-contain-title ul li,.updata-contain-list ul li{
        height: 40px;
        line-height: 40px;
        float: left;
        width: 20%;
        border-right: 1px solid #E6E6E6;
        border-bottom: 1px solid #E6E6E6;
        box-sizing: border-box;
        text-indent: 10px;
    }
    .updata-contain-list ul{
        height: 40px;
    }
    .updata-contain-list ul li img{
        height: 100%;
        display: block;
        margin: 0 0 0 10px;
    }
    /* .updata-contain-list ul li button{
        background-color: #009688;
        height: 30px;
        width: 66px;
        border: none;
        cursor: pointer;
        color: #fff;
        border-radius: 2px;
    }
    .updata-contain-list ul li button:hover{
        background-color: rgba(0, 150, 136, 0.7)
    } */
    .updata-contain-list{
        height: calc(100% - 40px);
       
    }
</style>
