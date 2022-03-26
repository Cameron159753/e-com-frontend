<template>
<div class="container">
	<div class="main">
		<div class="logo">
			<h1>#</h1>
		</div>
		<!-- Login Form -->  
	</div>
  <body>
 
       <Form @submit="handleLogin" :validation-schema="schema">
      
        
           <Field name="username" type="text" class="user-label" placeholder="Username" id="form-label"  required/>
                    <ErrorMessage name="yourname" class="error-feedback" />
           <Field name="password" type="password" class="user-label" placeholder="Password"  id="form-label"  required/>
                    <ErrorMessage name="password" class="error-feedback"/>
          <input type="submit" value="Login" class="submit-button">
            <div class="signUp">
            
             <h4> Don't have an account yet?<router-link :to="{ name: 'Register'}"> Sign Up</router-link></h4>
        </div>
            <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
                {{message}}
            </div>
            
        </div>
      </Form>
  </body>
</div>
</template>	
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
    username: yup.string().required("username is required"),
    password: yup.string().required("Password is required")
    });
    return {
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
   created() {
    if (this.loggedIn) {
      this.$router.push("/Profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/Profile");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
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