<template>
    <div>
        <Pet v-for="(pet, index) in getPets" v-bind="pet" :key="index" />
    </div>
</template>

<script>
import Pet from '@/components/Pet.vue';
import { mapGetters } from 'vuex'
export default {
    components: {
        Pet
    },
    data: function() {
        return {
            pets: []
        }
    },
    computed: {
        ...mapGetters([
            'getPets'
        ])
    }
}
</script>