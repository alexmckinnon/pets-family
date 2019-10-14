<template>
    <div>
        <h1>Pets of REW</h1>
        <Pet v-for="(pet, index) in pets" v-bind="pet" :key="index" />
    </div>
</template>

<script>
import Pet from '@/components/Pet.vue';
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        Pet
    },
    data: function() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'getPets'
        ]),
        pets() {
            return this.getPets;
        }
    }
}
</script>