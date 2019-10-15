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
    props: ['type', 'name', 'image','background'],
    data: () => {
        return {
            backgroundColors: {
                violet: 'bg-custom-violet',
                blue: 'bg-custom-blue',
                green: 'bg-custom-green',
                yellow: 'bg-custom-yellow',
                orange: 'bg-custom-orange',
                pink: 'bg-custom-pink',
            }
        }
    },
    computed: {
        width() {
            return (Math.round(Math.random()) == 1) ? '400' : '200';
        },
        imgUrl() {
           return '../assets/images/' + this.image;
        },
        bgColor() {
            return this.backgroundColors[this.background];
        }
    }
}
</script>