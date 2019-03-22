<template>
    <div>
        <table class="table table-bordered">
                <tbody>
					<tr v-for="(inf, index) in info" :key="index">
						<td>{{inf.name}}</td>
						<td>{{inf.value}}</td>
					</tr>
                </tbody>    
		</table>
    </div>
</template>

<script>
//import AppCart from './Cart';

import {mapGetters} from 'vuex';
export default {
        computed: {
            ...mapGetters([
                'info'
            ])
        },
}
</script>