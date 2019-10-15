<template>
    <div>
        <Filters @update-filter="updateFilter"/>
        <PetGrid :pets="pets"/>
    </div>
</template>
]
<script>
import Filters from '@/components/Filters.vue';
import PetGrid from '@/components/PetGrid.vue';

import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        PetGrid,
        Filters
    },
    data: function() {
        return {
            filter: 'all',
            pets: []
        }
    },
    mounted() {
        this.pets = this.getPets;
    },
    computed: {
        ...mapGetters([
            'getPets'
        ])
    },
    methods: {
        updateFilter(type) {
            this.filter = type;
            this.pets = this.getPets.filter((pet) => (type == 'all') || pet.type == type);
            this.$nextTick(() => this.$redrawVueMasonry());
        }
    }
}
</script>