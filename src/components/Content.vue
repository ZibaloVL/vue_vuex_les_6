<template>
    <div>
        <div class="form-group"
            v-for="(inf, index) in info" :key="index">
          <label for="">{{inf.name}}</label>
          <input type="text"
            class="form-control" 
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
        
    },
    methods: {
        onInput(e, index){
            let data = {};
            data.index = index;
            data.value = e.target.value;
            this.$store.commit('inputInfo', data);
        }
    },
}
</script>