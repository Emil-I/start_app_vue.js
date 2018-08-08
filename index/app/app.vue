<template>
<div id="app" class='my-body' style="height: 100vh;" v-bind:class='openModal'>

  <img style="position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;" src="./assets/images/logo.png" alt="">

  <header class="header">
    <ul class="header-menu-list">
      <li class="header-menu-list__item">
        <a v-ToggleModal:signup='setModal' class='header-menu-list__link' href="#">Регистрация</a>
      </li>
      <li class="header-menu-list__item">
        <a v-ToggleModal:signin='setModal' class='header-menu-list__link' href="#">Вход</a>
      </li>
    </ul>
  </header>

  <div class="index-content"></div>


  <!-- modal-frame START -->
  <signinFrame class='modal-frame signin-frame' />
  <signupFrame class='modal-frame signup-frame' />
  <!-- modal-frame END -->

</div>
</template>


<!-- STYLES -->
<style lang="scss">
@import "./styles/fonts.scss";
@import './styles/app.scss';
</style>


<!-- CONTROLLER -->
<!--<script src='./app.controller.js'></script>-->
<script>
  'use strict';

// COMPONENTS
import signinFrame from './components/signin/signin.vue'
import signupFrame from './components/signup/signup.vue'

// DIRECIVES
import {
  ToggleModal
} from '../../common/directives/toggle-modal.directive'


export default {
  name: 'app',

  data: () => {
    return {
      openModal: 'modals-close'
    }
  },

  methods: {
    setModal: function () {
      let windowHash = window.location.hash;
      windowHash = windowHash.slice(1);
      (windowHash !== '' && windowHash !== this.openModal) ? this.openModal = windowHash: this.openModal = 'modals-close';
    }
  },

  created: function () {
    this.setModal();

    if (this.$store.state.auth.isAuthenticated()) {
      window.location = '/admin';
    }
    
  },

  directives: {
    ToggleModal
  },

  components: {
    signinFrame,
    signupFrame
  }
}
</script>