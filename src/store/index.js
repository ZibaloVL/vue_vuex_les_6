/*файл хранилища*/
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {/*data object* x:y*/

    test: "Test",
    info: [
      {
        name: 'Name',
        value: '',
        pattern: /^[a-zA-Z ]{2,30}$/
      },
      {
        name: 'Phone',
        value: '',
        pattern: /^[0-9]{7,14}$/
      },
      {
        name: 'Email',
        value: '',
        pattern: /.+/
      },
      {
        name: 'Some Field 1',
        value: '',
        pattern: /.+/
      },
      {
        name: 'Some Field 2',
        value: '',
        pattern: /.+/
      }
    ],

  },

  getters:{/*getters data object  x(state){return state.y}*/

    
    test(state){return state.test},
    info(state){ return state.info}

  },

  mutations:{ /*action sinhr xAction(state, {z:s}){  state.xAction =... }*/ 

  },

  action:{/*axction asynhr sendX(store, data){store.commit('name_mutation')}*/

  },

  strict:true //жесткий режим чтобы не менять state напрямую 
    // pocess.env.NODE_ENV !== 'production' если webpack


})