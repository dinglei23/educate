<!--二级分类编辑和新增-->
<template>
    <div class="updata-info" v-show="infoIsShow">
        <div class="updata-box">
            <div class="updata-title">编辑<span @click="close"></span></div>
            <div class="updata-form">
                <ul class="updata-form-ul">
                    <li>
                        <label>选择科目</label>
                        <div class="updata-selete">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </li>
                    <li>
                        <label>一级分类</label>
                        <div class="updata-selete">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </li>
                    <li><label>二级分类名称</label><input value="123" class="updata-input"/></li>
                    <!-- <li class="updata-img-box">
                        <label>封面上传</label>
                        <div class="updata-file"><input type="file"/></div>
                        <img src="../assets/banner.jpg"/>
                    </li> -->
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
    name:'TwoAndUpdata',
    data(){
        return{
            options: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: ''
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
    .updata-input{
        display: block;
        float: left;
        width: 250px;
        box-sizing: border-box;
        border: 1px solid #e6e6e6;
        height: 30px;
        background-color: #fff;
        text-indent: 10px;
    }
    .updata-selete{
        float: left;
        width: 250px;
        height: 30px;
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
    .el-input__inner{
        height: 30px;
        line-height: 30px;
    }
    .el-input__icon{
        line-height: 30px;
    }
    .updata-file{
        float: left;
        width: 30px;
        height: 30px;
        overflow: hidden;
        background:url(../assets/add.png) no-repeat center center;
        cursor: pointer;
        margin-top: 15px;
        margin-right: 20px;
    }
    .updata-file input{
        opacity: 0;
        cursor: pointer;
    }
    .updata-img-box{
        height: 60px !important;
    }
    .updata-img-box label{
        height: 60px !important;
        line-height: 60px !important;
    }
    .updata-img-box img{
        display: block;
        float: left;
        max-height: 60px;
        display: flex;
        justify-content: center;
    }
</style>
