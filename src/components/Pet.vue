<template>
    <div>
        <h2>{{ name }}</h2>
        <img :src="image">
    </div>
</template>

<script>
export default {
    props: ['type', 'name', 'image']
}
</script>