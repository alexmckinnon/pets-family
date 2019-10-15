<template>
    <div class="w-full inline-block text-center p-2 my-5">
        <div class="text-gray-700 text-center">
            <FilterButton
                v-for="type in types"
                :key="'type-' + type"
                :type="type"
                :filter="filter"
                @click-filter="handleClickFilter"/>
        </div>
    </div>
</template>

<script>
import FilterButton from '@/components/FilterButton.vue';

export default {
    components: {
        FilterButton
    },
    data: function() {
        return {
            filter: 'all',
            types: ['all', 'cat',  'dog', 'bird']
        }
    },
    methods: {
        handleClickFilter(type) {
            this.filter = type;
            this.$emit('update-filter', type)
        }
    }
}
</script>