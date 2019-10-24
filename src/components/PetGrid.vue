<template>
    <div class="mx-5">
        <div v-if="!pets.length" class="w-full text-center">
            No pets found.
        </div>
        <div v-masonry class="flex flex-wrap text-center -mx-2">
            <Pet
                v-masonry-tile
                v-for="(pet, index) in pets"
                :key="index"
                v-bind="pet"
                class="item m-2 lg:w-1/6 md:w-1/4 sm:w-1/3 w-1/2"
            />
        </div>
    </div>
</template>

<script>
import Pet from '@/components/Pet.vue';

export default {
    props: ['pets'],
    components: {
        Pet
    }
}
</script>