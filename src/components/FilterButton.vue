<template>
    <button
        class="hover:bg-custom-blue hover:text-white rounded-full mx-2 hint--top"
        :class="{'bg-custom-blue text-white': isActive}"
        @click.prevent="handleClickFilter"
        :aria-label="type">
        <font-awesome-icon :icon="icon" class="mx-2" />
    </button>
</template>

<script>
export default {
    props: ['type', 'filter'],
    data: function() {
        return {
            iconMap: {
                all: 'paw',
                bird: 'crow'
            }
        }
    },
    computed: {
        icon() {
            return this.iconMap[this.type] !== undefined ? this.iconMap[this.type] : this.type
        },
        isActive() {
            return this.type === this.filter;
        }
    },
    methods: {
        handleClickFilter() {
            this.$emit('click-filter', this.type);
        }
    }
}
</script>