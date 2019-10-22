import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddAndRoot from '../views/AddAndRoot.vue'
import AddAndOne from '../views/AddAndOne.vue'
import AddAndTwo from '../views/AddAndTwo.vue'
import VideoAndList from '../views/VideoAndList.vue'
import AddAndUser from '../views/AddAndUser.vue'
import ImgAndTitle from '../views/ImgAndTitle.vue'
import AddAndCode from '../views/AddAndCode.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/AddAndRoot',  //科目总分类
    name: 'AddAndRoot',
    component: AddAndRoot
  },
  {
    path: '/AddAndOne',  //一级
    name: 'AddAndOne',
    component: AddAndOne
  },
  {
    path: '/AddAndTwo',  //二级分类
    name: 'AddAndTwo',
    component: AddAndTwo
  },
  {
    path: '/VideoAndList',  //二级分类下视频栏目
    name: 'VideoAndList',
    component: VideoAndList
  },
  {
    path: '/ImgAndTitle',  //识谱卡标题
    name: 'ImgAndTitle',
    component: ImgAndTitle
  },
  {
    path: '/AddAndUser',  //用户页面
    name: 'AddAndUser',
    component: AddAndUser
  },
  {
    path: '/AddAndCode',  //学员码
    name: 'AddAndCode',
    component: AddAndCode
  }
]

const router = new VueRouter({
  routes
})

export default router
