<template>
    <div id="app" class="flex flex-col h-full bg-gray-200">
        <Header />
        <router-view class="flex-1"/>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Header,
        Footer
    }
}
</script>