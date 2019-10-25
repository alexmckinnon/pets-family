<template>
    <div class="flex items-center justify-between flex-wrap p-2 bg-blue-to-purple">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-happy-monkey font-semibold text-2xl tracking-tight">
                <router-link to="/"><font-awesome-icon icon="paw" /> {{ title }}</router-link>
            </span>
        </div>
        <a href="#" class="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:text-custom-violet hover:bg-white">Sign in</a>
    </div>
</template>

<script>
export default {
    computed: {
        title() {
            return process.env.VUE_APP_TITLE;
        }
    }
}
</script>
