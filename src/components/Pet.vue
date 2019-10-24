<template>
    <div>
        <div class="pet__body rounded-lg overflow-hidden text-white shadow-lg cursor-pointer">
            <img class="mx-auto w-full" :src="image" >
            <div class="pet__info px-3 py-1 rounded-b-lg" :class="bgColor">
                <div class="pet__name font-bold text-xl">{{ name }}</div>
                <p class="pet__details">
                    <font-awesome-icon :icon="type" class="text-xl mx-2" />
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pet__info {
    position: absolute;
    bottom: 0;
    opacity: 0.9;
    max-height: 40px;
    width: 100%;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;

}

.pet__name {
    font-family: 'Happy Monkey', cursive;
}

.pet__details{
    display: none;
}

.pet__body:hover .pet__info{
    max-height: 100%;
}

.pet__body:hover .pet__details{
    display: inline;
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