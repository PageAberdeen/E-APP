import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import schoolDistrict from '../pages/schoolDistrict.vue'
import trailing from '../pages/trailing.vue'
import campus from '../pages/campus.vue'
import districtEntry from '../pages/districtEntry.vue'
import trailingEntry from '../pages/trailingEntry.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/district',
      name: 'district',
      component: schoolDistrict
    },{
      path: '/trailing',
      name: 'trailing',
      component: trailing
    },{
      path: '/campus',
      name: 'campus',
      component: campus
    },{
      path: '/districtEntry',
      name: 'districtEntry',
      component: districtEntry
    },{
      path: '/trailingEntry',
      name: 'trailingEntry',
      component: trailingEntry
    }
  ]
})
