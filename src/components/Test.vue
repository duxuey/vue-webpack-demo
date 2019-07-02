<template>
    <div v-if="count > 0">
        count大于0，count 的值是{{count}}
    </div>
    <div v-else>
        count的值是{{count}}
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    data () {
        return {
            count: 0,
        }
    }
}
 
</script>

