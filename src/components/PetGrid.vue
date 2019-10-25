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
                class="item lg:w-1/5 md:w-1/3 sm:w-1/2 w-full"
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