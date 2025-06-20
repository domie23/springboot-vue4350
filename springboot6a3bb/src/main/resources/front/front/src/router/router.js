import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import tushufenleiList from '../pages/tushufenlei/list'
import tushufenleiDetail from '../pages/tushufenlei/detail'
import tushufenleiAdd from '../pages/tushufenlei/add'
import tushuxinxiList from '../pages/tushuxinxi/list'
import tushuxinxiDetail from '../pages/tushuxinxi/detail'
import tushuxinxiAdd from '../pages/tushuxinxi/add'
import tushujieyueList from '../pages/tushujieyue/list'
import tushujieyueDetail from '../pages/tushujieyue/detail'
import tushujieyueAdd from '../pages/tushujieyue/add'
import tushuxujieList from '../pages/tushuxujie/list'
import tushuxujieDetail from '../pages/tushuxujie/detail'
import tushuxujieAdd from '../pages/tushuxujie/add'
import tushuguihaiList from '../pages/tushuguihai/list'
import tushuguihaiDetail from '../pages/tushuguihai/detail'
import tushuguihaiAdd from '../pages/tushuguihai/add'
import fankuileixingList from '../pages/fankuileixing/list'
import fankuileixingDetail from '../pages/fankuileixing/detail'
import fankuileixingAdd from '../pages/fankuileixing/add'
import xuqiufankuiList from '../pages/xuqiufankui/list'
import xuqiufankuiDetail from '../pages/xuqiufankui/detail'
import xuqiufankuiAdd from '../pages/xuqiufankui/add'
import guihairukuList from '../pages/guihairuku/list'
import guihairukuDetail from '../pages/guihairuku/detail'
import guihairukuAdd from '../pages/guihairuku/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'tushufenlei',
					component: tushufenleiList
				},
				{
					path: 'tushufenleiDetail',
					component: tushufenleiDetail
				},
				{
					path: 'tushufenleiAdd',
					component: tushufenleiAdd
				},
				{
					path: 'tushuxinxi',
					component: tushuxinxiList
				},
				{
					path: 'tushuxinxiDetail',
					component: tushuxinxiDetail
				},
				{
					path: 'tushuxinxiAdd',
					component: tushuxinxiAdd
				},
				{
					path: 'tushujieyue',
					component: tushujieyueList
				},
				{
					path: 'tushujieyueDetail',
					component: tushujieyueDetail
				},
				{
					path: 'tushujieyueAdd',
					component: tushujieyueAdd
				},
				{
					path: 'tushuxujie',
					component: tushuxujieList
				},
				{
					path: 'tushuxujieDetail',
					component: tushuxujieDetail
				},
				{
					path: 'tushuxujieAdd',
					component: tushuxujieAdd
				},
				{
					path: 'tushuguihai',
					component: tushuguihaiList
				},
				{
					path: 'tushuguihaiDetail',
					component: tushuguihaiDetail
				},
				{
					path: 'tushuguihaiAdd',
					component: tushuguihaiAdd
				},
				{
					path: 'fankuileixing',
					component: fankuileixingList
				},
				{
					path: 'fankuileixingDetail',
					component: fankuileixingDetail
				},
				{
					path: 'fankuileixingAdd',
					component: fankuileixingAdd
				},
				{
					path: 'xuqiufankui',
					component: xuqiufankuiList
				},
				{
					path: 'xuqiufankuiDetail',
					component: xuqiufankuiDetail
				},
				{
					path: 'xuqiufankuiAdd',
					component: xuqiufankuiAdd
				},
				{
					path: 'guihairuku',
					component: guihairukuList
				},
				{
					path: 'guihairukuDetail',
					component: guihairukuDetail
				},
				{
					path: 'guihairukuAdd',
					component: guihairukuAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
