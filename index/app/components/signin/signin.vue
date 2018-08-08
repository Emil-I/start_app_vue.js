<template>
<div class="">
  <div class="modal-frame-wrapper">
        <form class="modal-frame-form"
          method="post"
          @submit.prevent='signin()'>
      <div class="modal-frame-form__title modal-frame-form__title_padd-b">Sign in</div>

      <div class="modal-frame-wrapper-fields">  

        <div class="modal-frame-form__fields">
          <div class="error"
               v-if="$v.email.$error">
            <div v-if="$v.email.$invalid">Invalid email</div>
          </div>
          <input class='modal-frame-form__input'
                 type="text"
                 name="email"
                 placeholder='E-mail'
                 v-model.trim.lazy='$v.email.$model'>
        </div>

        <div class="modal-frame-form__fields">
          <div class="error"
               v-if="$v.password.$error">
            <div v-if="$v.password.$invalid">Invalid password</div>
          </div>
          <input class='modal-frame-form__input'
                 type="password"
                 name="password"
                 placeholder='Password'
                 v-model.trim.lazy='$v.password.$model'>
        </div>

        <div class="modal-frame-form__fields">
          <button class='modal-frame-form__button' type="submit" name="button">Login</button>
        </div>
      </div>

    </form>
  </div>
</div>
</template>


<script>
  import {
  required,
  minLength,
  email
} from 'vuelidate/lib/validators';

export default {
  name: 'signinFrame',

  props: {
    title: String
  },

  data: () => {
    return {
      email: null,
      password: null
    }
  },

  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(4)
    }
  },

  methods: {
    checkForm: function () {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(this.$v.$invalid);
        return true;
      } else {
        return false;
      }
    },

    signin: async function () {

      if (this.checkForm()) return;

      let data = {
        email: this.email,
        password: this.password
      }

      try {

        let state = this.$store.state;
        let session = state.session;
        let user = state.user;
        let response = await user.signin(data);

        if (response) {
          session.start(response, true);
          window.location = '/admin';
        }

      } catch (error) {
        console.log(error);
      }

    }
  }
}
</script>