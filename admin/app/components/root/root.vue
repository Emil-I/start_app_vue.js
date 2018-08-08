<template>
    <div class="root">
        <!--MENU START-->
        <div class="menu-wrapper">
            <leftMenu></leftMenu>
        </div>
        <!--MENU END-->

        <!--CONTENT START-->
        <div class="content-box">
            <router-view class="view"></router-view>
        </div>
        <!--CONTENT END-->
    </div>
</template>

<script>
    'use strict';

import leftMenu from './left-menu/left-menu.vue';

export default {
    name: 'root',

    data: () => {
        return {
            rootTitle: 'root'
        }
    },

    props: {},

    methods: {},

    components: {
        leftMenu
    }

}
</script>