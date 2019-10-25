<template>
    <div>
        <div class="pet__body m-2 rounded-lg overflow-hidden text-white shadow-lg cursor-pointer relative">
            <img class="mx-auto w-full" :src="image" >
            <div class="pet__info px-3 py-1 rounded-b-lg" :class="bgColor">
                <div class="font-happy-monkey font-bold text-xl">{{ name }}</div>
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
    width: 100%;
    overflow: hidden;
}

.pet__details {
    max-height: 0px;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
}

.pet__body:hover .pet__details{
    visibility: visible;
    max-height: 100px;
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