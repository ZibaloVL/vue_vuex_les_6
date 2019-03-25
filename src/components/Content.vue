<template>
    <div>
        <div class="form-group"
            v-for="(inf, index) in info" :key="index">
          <label for="">{{inf.name}}</label>
          <span class="fa" :class="controls[index]"></span>
          <input type="text"
            class="form-control" 
            :value = inf.value
            @input="onInput($event, index)"
            >
          <small id="helpId" class="form-text text-muted">Help text</small>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
       ...mapGetters([
           'info',
           'controls'
       ])

       /* вариант если присвоить V-model  вместо input
        cnt: {
            get() {
                return this.$store.getters.cnt;
            },
            set(value) {
                this.store.commit('setCnt', value);
            }
        }
        */
        
    },//ПРОВЕРИТЬ РАБОТУ ВЕТВДЕНИЯ И ПРИСВАИВАНИЯ!!!
    methods: {
        onInput(e, index){
         let   value = e.target.value;
         let   pattern = this.info[index].pattern;
            if (value === "") {this.$store.commit('makeControls', index);}
                else if(pattern.test(value)){ this.$store.commit('makeControlsOk', index)}
                    else{this.$store.commit('makeControlsDanger', index);}
        }
    },

     beforeMount(){
        this.$store.commit('makeCont');
  }

}
</script>