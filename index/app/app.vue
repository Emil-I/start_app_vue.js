<template>
<div id="app" class='my-body' v-bind:class='openModal'>

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

<!-- CONTROLLER -->
<script src='./app.controller.js'></script>

<!-- STYLES -->
<style lang="scss">
@import "./styles/fonts.scss";
@import './styles/app.scss';
</style>
