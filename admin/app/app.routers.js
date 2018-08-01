'use strict';

import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import dashboardRoutes from './components/dashboard/dashboard.router';
import pageTwoTestRoutes from './components/page-two-test/page-two-test.router';

export default new VueRouter({
    routes: [dashboardRoutes, pageTwoTestRoutes]
});