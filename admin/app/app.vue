<template>
    <div class="main-wrapper">
        <rootComponent></rootComponent>
    </div>
</template>



<!-- CONTROLLER -->
<script>
'use strict';

import rootComponent from './components/root/root.vue';

export default {
    name: 'appAdmin',

    data: () => {
        return {
            data: 'hello admin'
        }
    },

    methods: { },

    created: function() {
        console.log(this.data);
    },

    components: {
        rootComponent
    }

}
</script>


<!-- STYLES -->
<style lang="scss">
//@import "./styles/fonts.scss";
@import './styles/admin.scss';
</style>
