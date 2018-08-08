<template>
<div class="">
  <div class="modal-frame-wrapper">
    <form class="modal-frame-form"
          method="post"
          @submit.prevent='signup()'>
      <div class="modal-frame-form__title modal-frame-form__title_padd-b">Sign up</div>

      <div class="modal-frame-wrapper-fields">

        <div class="modal-frame-form__fields">
          <div class="error"
               v-if='$v.name.$error'>
            <div v-if='!$v.name.minLength'>
              Name has to be at least 6 characters long and consist of alphanumeric characters only.
            </div>
          </div>
          <input class='modal-frame-form__input'
                 type="text"
                 name="name"
                 placeholder='Username'
                 v-model.trim.lazy='$v.name.$model'>
        </div>        

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
          <div class="error"
               v-if="$v.password_confirm.$error">
            <div v-if="$v.password_confirm.$invalid">Invalid password_confirm</div>
          </div>
          <input class='modal-frame-form__input'
                 type="password"
                 name="password_confirm"
                 placeholder='Password confirm'
                 v-model.trim.lazy='$v.password_confirm.$model'>
        </div>

        <div class="modal-frame-form__fields">
          <button class='modal-frame-form__button' type="submit" name="button">Registration</button>
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
    sameAs,
    email
  } from 'vuelidate/lib/validators';

export default {
  name: 'signupFrame',

  props: {
    // title: String,
    title: String,
  },

  data: () => {
    return {
      email: null,
      name: null,
      password: null,
      password_confirm: null
    }
  },

  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(4)
    },
    password_confirm: {
      required,
      sameAsPassword: sameAs('password')
    }
  },

  methods: {
    errorHandlerForm: function () {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(this.$v.$invalid);
        return true;
      } else {
        return false;
      }
    },

    signup: async function () {
      if (this.errorHandlerForm()) return;

      let dataForm = {
        email: this.email,
        name: this.name,
        password: this.password
      }


      try {
        let user = this.$store.state.user;
        let signup = await user.signup(dataForm);
        console.log(signup)

      } catch (error) {
        console.log(error);
      }

    }
  }
}
</script>