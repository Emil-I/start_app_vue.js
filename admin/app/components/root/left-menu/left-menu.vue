<template>
    <div class="left-menu">
        <div>
            {{menuTitle}}
        </div>

        <ul>
            <li>
                <router-link to='/'>Dashboard</router-link>
            </li>
            <li>
                <router-link to='/pageTwoTest'>Page two</router-link>
            </li>
        </ul>
    </div>
</template>


<script>
    'use strict';

export default {
    name: 'leftMenu',

    data: () => {
        return {
            menuTitle: 'Menu'
        }
    },

    methods: {}
}
</script>