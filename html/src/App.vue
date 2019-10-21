<template>
  <div id="app">
    <div class="header">
      <h1>教育平台管理后台</h1>
    </div>
    <div class="contain">
      <div class="contain-left">
        <div id="nav">
          <!-- <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> -->
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              
              :router='true'
              >
              
              <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">基本信息</span>
              </el-menu-item>
              <el-menu-item index="/AddAndRoot">
                <i class="el-icon-document"></i>
                <span slot="title">科目分类</span>
              </el-menu-item>
              <el-menu-item index="/AddAndOne">
                <i class="el-icon-document"></i>
                <span slot="title">一级分类</span>
              </el-menu-item>
              <el-menu-item index="/AddAndTwo">
                <i class="el-icon-document"></i>
                <span slot="title">二级分类</span>
              </el-menu-item>
              <el-menu-item index="/VideoAndList">
                <i class="el-icon-document"></i>
                <span slot="title">视频列表</span>
              </el-menu-item>
              <el-menu-item index="/ImgAndTitle">
                <i class="el-icon-document"></i>
                <span slot="title">识谱卡片</span>
              </el-menu-item>
              <!-- <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item> -->
            </el-menu>
          </el-col>
        </div>
        
      </div>
      <div class="contain-right">
        <router-view/>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style lang="less" scoped>
#app{
  height: 100%;
  width: 100%;
}
.header{
  height: 45px;
  background-color: #222;
}
.header h1{
  height: 45px;
  line-height: 45px;
  color: #fff;
  font-weight: normal;
  font-size: 18px;
  padding-left: 20px;
}
.contain{
  height: calc(100% - 45px);
}
.contain-left{
  height: 100%;
  width: 220px;
  background-color: #EEEEEE;
  float: left;
}
#nav{
  height: 100%;
  width: 100%;
}
.el-col-12 {
    width: 100%;
}
.el-menu-item{
  height: 36px;
  line-height: 36px;
}
.el-menu{
  background-color: #EEEEEE;
}
.contain-right{
  height: 100%;
  width: calc(100% - 220px);
  float: left;
}
</style>
