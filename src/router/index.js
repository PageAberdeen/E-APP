import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import SchoolAdmin from '../pages/SchoolAdmin.vue'
import SchoolList from '../pages/SchoolList.vue'
import instructions from '../pages/instructions.vue'
import addSchoolMsg from '../pages/addSchoolMsg.vue'
import schoolLogin from '../pages/schoolLogin.vue'
import adminMenu from '../pages/adminMenu.vue'
import studentMenu from '../pages/studentMenu.vue'
import studentLogin from '../pages/studentLogin.vue'
import studentRegister from '../pages/studentRegister.vue'
import districtEntry from '../pages/districtEntry.vue'
import orderTime from '../pages/orderTime.vue'
import orderNews from '../pages/orderNews.vue'
import offerRain from '../pages/offerRain.vue'
import residence from '../pages/residence.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/school',
      name: 'school',
      component: SchoolAdmin
    },{
      path: '/student',
      name: 'schoolList',
      component: SchoolList
    },{
      path: '/help',
      name: 'instructions',
      component: instructions
    },{
      path: '/addSchoolMsg',
      name: 'addSchoolMsg',
      component: addSchoolMsg
    },{
      path: '/schoolLogin',
      name: 'schoolLogin',
      component: schoolLogin
    },{
      path: '/adminMenu',
      name: 'adminMenu',
      component: adminMenu
    },{
      path: '/studentMenu',
      name: 'studentMenu',
      component: studentMenu
    }, {
      path: '/studentLogin',
      name: 'studentLogin',
      component: studentLogin
    },{
      path: '/studentRegister',
      name: 'studentRegister',
      component: studentRegister
    },{
      path: '/districtEntry',
      name: 'districtEntry',
      component: districtEntry
    },{
      path: '/orderTime',
      name: 'orderTime',
      component: orderTime
    },{
      path: '/orderNews',
      name: 'orderNews',
      component: orderNews
    },{
      path: '/offerRain',
      name: 'offerRain',
      component: offerRain
    },{
      path: '/residence',
      name: 'residence',
      component: residence
    }
  ]
})
