import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import SchoolAdmin from '../pages/SchoolAdmin.vue'
import SchoolList from '../pages/SchoolList.vue'
import instructions from '../pages/instructions.vue'
import addSchoolMsg from '../pages/addSchoolMsg.vue'
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
      path: 'help',
      name: 'instructions',
      component: instructions
    },{
      path: 'addSchoolMsg',
      name: 'addSchoolMsg',
      component: addSchoolMsg
    }
  ]
})
