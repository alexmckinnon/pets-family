<template>
    <div>
        <div class="rounded-lg overflow-hidden text-white shadow-lg" :class="bgColor">
            <img class="mx-auto" :src="image" >
            <div class="px-3 pt-2">
                <div class="pet__name font-bold text-xl mb-2">{{ name }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pet__name {
    font-family: 'Happy Monkey', cursive;
}
</style>

<script>

export default {
    props: ['type', 'name', 'image'],
    computed: {
        width() {
            return (Math.round(Math.random()) == 1) ? '400' : '200';
        },
        imgUrl() {
           return '../assets/images/' + this.image;
        },
        bgColor() {
            let colors = [
                'bg-custom-violet',
                'bg-custom-blue',
                'bg-custom-green',
                'bg-custom-yellow',
                'bg-custom-orange',
                'bg-custom-pink',
                'bg-custom-violet',
                'bg-custom-blue',
                'bg-custom-blue',
                'bg-custom-blue'
            ];
            return colors[Math.floor(Math.random() * 10)];
        }
    }
}
</script>