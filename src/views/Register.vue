<template>
<div class="container">
	<div class="main">
		<div class="logo">
			<h1>#</h1>
		</div>
    <body>
		<Form @submit="handleRegister">
          <div v-if="!successful">
            <div class="form-group">
              <label for="username"></label>
			  
              <Field
                name="username"
                placeholder="Username"
                class="user-label"
			  	    type="username"
				id="form-label"
         required
              />
              <ErrorMessage name="fullname" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="email"></label>
              <Field
                name="email"
                placeholder="email address"
                class="user-label"
                type="email"
                id="form-label"
                 required
              />
              <ErrorMessage name="email" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="password"></label>
              <Field
                name="password"
                class="user-label"
                placeholder="Password"
                type="password"
                id="form-label"
                 required
              />
              <ErrorMessage name="password" class="error-feedback" />
            </div>
            <button type="submit" class="submit-button" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Register
          
            </button>
            <br />
            <h4 style="color: white" class="login">
              Already a member? <a href="/login">Log In</a>
            </h4>
          </div>
        </Form>
              
    </body>
        <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
        >
          {{ message }}
        </div>
      </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/login");
    }
  },
  methods: {
    handleRegister(user) {
      console.log("Successfully registered");
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        (data) => {
          console.log(data);
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          console.log(error.message);
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Orbitron", sans-serif;
}

body {
    background-image: url('https://i.postimg.cc/BQ2pVYbM/HD-wallpaper-nike-logo-air-blackberry-galaxy-logo-wars-thumbnail.jpg');
    background-size: cover;
    background-position: center top;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

Form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title {
    font-size: 100px;
    margin-bottom: 50px;
    background: linear-gradient(#06348a, #6a82fb);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent
}

#form-label {
    font-size: 28px;
    letter-spacing: 3px;
    background: transparent;
    color: #fff;
    padding: 0 0 10px 5px;
    margin: 25px 0;
    outline: none;
}

.user-label {
    border: none;
    border-bottom: 1px solid #fff;
}

.user-label:focus {
    border-bottom: 1px solid;
    border-image: linear-gradient(to right, #00f260, #0575e6);
    border-image-slice: 1;
}

.submit-button {
    width: 100%;
    text-transform: uppercase;
    font-weight: 500;
    color: rgb(0, 0, 0);
    padding: 15px 0;
    margin: 50px 0 0 0;
    border: 1px solid rgb(194, 16, 16);
    border-radius: 50px;
    cursor: pointer;
    transition: .3s;
}

.submit-button:hover {
    background: rgba(208, 11, 11, 0.94);
}
</style>