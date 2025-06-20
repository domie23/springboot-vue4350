import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import xuqiufankui from '@/views/modules/xuqiufankui/list'
    import discusstushuxinxi from '@/views/modules/discusstushuxinxi/list'
    import tushufenlei from '@/views/modules/tushufenlei/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import guihairuku from '@/views/modules/guihairuku/list'
    import tushujieyue from '@/views/modules/tushujieyue/list'
    import fankuileixing from '@/views/modules/fankuileixing/list'
    import tushuxujie from '@/views/modules/tushuxujie/list'
    import tushuguihai from '@/views/modules/tushuguihai/list'
    import config from '@/views/modules/config/list'
    import tushuxinxi from '@/views/modules/tushuxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '大厦公告',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/xuqiufankui',
        name: '需求反馈',
        component: xuqiufankui
      }
      ,{
	path: '/discusstushuxinxi',
        name: '图书信息评论',
        component: discusstushuxinxi
      }
      ,{
	path: '/tushufenlei',
        name: '图书分类',
        component: tushufenlei
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/guihairuku',
        name: '归还入库',
        component: guihairuku
      }
      ,{
	path: '/tushujieyue',
        name: '图书借阅',
        component: tushujieyue
      }
      ,{
	path: '/fankuileixing',
        name: '反馈类型',
        component: fankuileixing
      }
      ,{
	path: '/tushuxujie',
        name: '图书续借',
        component: tushuxujie
      }
      ,{
	path: '/tushuguihai',
        name: '图书归还',
        component: tushuguihai
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/tushuxinxi',
        name: '图书信息',
        component: tushuxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
