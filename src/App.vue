<template lang="pug">
div
    h1 {{ msg }}
</template>

<script>
export default {
    data() {
        return {
            msg: 'tada'
        }
    }
}
</script>

<style lang="scss">
h1 {
    color: pink;
}
</style>
