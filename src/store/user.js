import firebase from 'firebase'

export default {
  state: {
  		user: {
  			isAuthenticated: false,
  			uid: null
  		}
  },
  mutations: {
  		set_user(state, payload){
  			state.user.isAuthenticated = true
  			state.user.uid = payload
  		}
  },
  actions: {
  		login({commit}, payload){
  			commit('set_processing',true)
  			firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
  			.then(user => {
  				commit('set_user', user.uid)
  				console.log(user)
  				commit('set_processing', false)
  			})
  			.catch(function(error) {
  				commit('set_processing', false)
  				commit('set_error', error.message)

  
});
  		}
  },
  getters:{
  	isUserAutheticated: (state) => state.user.isAuthenticated
  }
}
