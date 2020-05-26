import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@assets/store/getters'
import mutations from '@assets/store/mutations'
import actions from '@assets/store/actions'
import moduleA from '@assets/store/modules/moduleA'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

	},
	getters,
	mutations,
  actions,
	modules:{
		moduleA
	}
})
