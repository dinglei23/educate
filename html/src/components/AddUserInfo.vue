<!--新增用户-->
<template>
    <div class="updata-info" v-show="infoIsShow">
        <div class="updata-box">
            <div class="updata-title">编辑<span @click="close"></span></div>
            <div class="updata-form">
                <ul class="updata-form-ul">
                    <li><label>姓名</label><input type="123" class="updata-form-input"/></li>
                    <li class="updata-teach">
                        <label>老师</label>
                        <div class="updata-teach-input">
                            <div class="updata-teach-input-1">
                                <img src="../assets/banner.jpg"/>
                                <p><input type="radio" />李老师</p>
                            </div>
                            <div class="updata-teach-input-2">
                                <img src="../assets/banner.jpg"/>
                                <p><input type="radio" />李老师</p>
                            </div>
                        </div>
                    </li>
                    <li><label>年龄</label><input type="123" class="updata-form-input" /></li>
                    <li><label>学校</label><input type="123" class="updata-form-input" /></li>
                    <li><label>学员码</label><input type="123" class="updata-form-input" /></li>
                </ul>
                <div class="updata-bt">
                    <button>提交</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'AddUserInfo',
    data(){
        return{
            
        }
    },
    props:{
        infoIsShow:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        close(){
            this.$emit('CloseUpdata')
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
        background-color: #F1F1F1;
    }
    .updata-title{
        height: 43px;
        line-height: 42px;
        background-color: #F8F8F8;
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
    .updata-form-ul li{
        height: 30px;
        width: 400px;
        margin-top: 20px;
    }
    .updata-form-ul label{
        display: block;
        float: left;
        width: 150px;
        height: 30px;
        line-height: 30px;
        text-align: right;
        padding-right: 20px;
        box-sizing: border-box;
    }
    .updata-form-input{
        display: block;
        float: left;
        width: 250px;
        box-sizing: border-box;
        border: 1px solid #e6e6e6;
        height: 30px;
        background-color: #fff;
        text-indent: 10px;
    }
    .updata-bt{
        height: 30px;
        box-sizing: border-box;
        padding-left: 150px;
        margin-top: 30px;
    }
    .updata-bt button{
        background-color: #009688;
        height: 30px;
        width: 66px;
        border: none;
        cursor: pointer;
        color: #fff;
        border-radius: 2px;
        outline: none;
    }
    .updata-bt button:hover{
        background-color: rgba(0, 150, 136, 0.7)
    }
    .updata-teach{
        height: 100px !important;
    }
    .updata-teach label{
        height: 100px !important;
        line-height: 100px !important;
    }
    .updata-teach-input{
        height: 100px;
        float: left;
        width: 250px;
    }
    .updata-teach-input img{
        height: 70px;
        max-width: 100%;
        display: block;
        margin: 0 auto;
    }
    .updata-teach-input p{
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    .updata-teach-input-1,.updata-teach-input-2{
        height: 100%;
        width: 50%;
        float: left;
    }
</style>
