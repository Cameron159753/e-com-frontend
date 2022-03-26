import axios from "axios";
const API_URL = "https://ecomsbackend.herokuapp.com/api/auth/";
class AuthService {
  async login(user) {
    console.log(user)
    console.log(API_URL + "signin")
    return axios
      .post(API_URL + "signin", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    console.log(user)
    console.log(API_URL + "signup")

    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}
export default new AuthService();