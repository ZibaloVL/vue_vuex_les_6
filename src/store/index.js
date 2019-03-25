/*файл хранилища*/
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {/*data object* x:y*/

    controls: {},
    info: [
      {
        name: 'Name',
        value: 'sss',
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
    info(state){ return state.info},
    controls(state) {return state.controls},
    labelType(state){}

  },

  mutations:{ /*action sinhr xAction(state, {z:s}){  state.xAction =... }*/ 
    
    inputInfo(state, data){
    state.info[data.index].value = data.value;   
      let index = data.index;
      let value = data.value;

      //попробовать сделать не массив а объект
/*
      if (state.info[index].pattern.test(state.info[index].value)){
        this.$set(state.controls, index, 'fa-check-circle text-success');
      }
*/
      /*
      if(state.info[data.index].value === '')
          {state.controls[data.index] = '';}
          else if(state.info[data.index].pattern.test(state.info[data.index].value)) 
                 {state.controls[data.index] = 'fa-check-circle text-success';}
                else {state.controls[data.index] = 'fa-exclamation-circle  text-danger';}
      console.log('state.controls[data.index] ' + state.controls[data.index]);                 
*/    
    },//.assign({}, your_array)
    makeControls(state){ //проверочный массив
      let pr = [];
      for(let i = 0; i < state.info.length; i++){
        if(state.info[i].value === '')
          {pr[i] = ''}
          else if(state.info[i].pattern.test(state.info[i].value)) 
                 {pr[i] = 'fa-check-circle text-success';}
                else {pr[i] = 'fa-exclamation-circle  text-danger';}       

      }
      Object.assign(state.controls, pr);
      console.log('state.controls  '+ state.controls);
      console.log('state.controls[0]  '+ state.controls[0]);
    },
    realControls(state){}
  },

  action:{/*axction asynhr sendX(store, data){store.commit('name_mutation')}*/

  },

  strict:true //жесткий режим чтобы не менять state напрямую 
    // pocess.env.NODE_ENV !== 'production' если webpack


})