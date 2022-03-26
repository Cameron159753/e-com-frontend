<template>
 <section id="prods">
    <span
      v-show="loading"
      class="spinner-border spinner-border-sm"
      style="width: 50px; height: 50px; color: white"
    ></span>
    <div class="container" v-if="product">
      <div class="row">
        <div class="col">
          <h1>Nike</h1>
        </div>
      </div>
      <br /><br />
      <div class="row">
        <div class="col-6">
          <select
            v-model="selected"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected value="">Display All</option>
            <option value="PokéBalls">PokéBalls</option>
            <option value="PokéItems">PokéItems</option>
            <option value="Pokémon">Pokémon</option>
          </select>
        </div>
        <div class="col-6">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="text"
              v-model="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <br /><br /><br />
        <div class="col-4"></div>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 mb-3"
          v-for="products of filterProducts"
          :key="products._id"
        >
          <div class="card py-4 px-lg-5 h-100">
            <div class="card-body d-flex flex-column">
              <div class="text-center">
                <img
                  :src="products.img"
                  class="img-fluid mb-5"
                  alt="Websearch"
                />
              </div>

              <h2 class="card-title mb-4 text-center">{{ products.title }}</h2>
              <div class="pricing">
                <ul class="list-unstyled">
                  <li class="mb-3">
                    <span class="small ms-3">{{ products.description }}</span>
                  </li>
                </ul>
              </div>
              <div class="text-center mt-auto mb-4">
                <span class="fw-bold fs-2">R{{ products.price }}</span>
              </div>
              <div class="text-center">
                <input
                  type="number"
                  class=""
                  value="1"
                  min="1"
                  :id="`qty${i}`"
                />
                <br /><br />
                <button
                  type="button"
                  class="btn btncolor"
                  @click="addToCart(product, i)"
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  class="btn btncolor"
                  @click="viewProduct(products._id)"
                >
                  View Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserService from "../services/user.service.js"
export default {
  components: {},
  data() {
    return {
      product: null,
      search: "",
      isModalVisible: false,
      isadmin: false,
      selected: "",
    };
  },
  methods: {},
  mounted() {
    this.loading = true;
    fetch("https://final-backend1.herokuapp.com/products", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.product = json;
        this.loading = false;
        if (localStorage.getItem("jwt")) {
          fetch("https://final-backend1.herokuapp.com/users/", {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          })
            .then((response) => response.json())
            .then((json) => {
              if (json.admin == true) {
                alert("You are admin");
                this.admin = json.admin;
              }
            })
            .catch((err) => {
              alert(err);
            });
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  },
     computed: {
    filterProducts: function () {
      let filtered = this.product;
      if (this.selected == "") {
        filtered = filtered.filter((product) => {
          return product.category.match(this.selected);
        });
        if (this.search) {
          filtered = filtered.filter((product) => {
            return product.title.match(this.search);
          });
        }
        return filtered;
      }
      if (this.selected) {
        filtered = filtered.filter((product) => {
          return product.category.match(this.selected);
        });
        if (this.search) {
          filtered = filtered.filter((product) => {
            return product.title.match(this.search);
          });
        }
        return filtered;
      }
    },
  },
};

</script>

<style scoped >
.row {
    padding: 60px;
}
.product-grid{
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    border: 3px solid #f2f2f2;
    border-radius: 5px;
    transition: all .4s ease-in-out;
}
.product-grid:hover{ border-color:  #89d8f0; }
.product-grid .product-image{ position: relative; }
.product-grid .product-image a.image{ display: block; }
.product-grid .product-image img{
    width: 100%;
    height: auto;
}
.product-grid .product-links{
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    opacity: 0;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    top: 60%;
    left: 50%;
    z-index: 1;
    transition: all .4s ease;
}
.product-grid:hover .product-links{
    opacity: 1;
    top: 50%;
}
.product-grid .product-links li{
    display: inline-block;
    margin: 0 2px;
    transition: all 0.5s ease-in-out;
}
.product-grid .product-links li a{
    color: #c6202e;
    background: #fff;
    font-size: 16px;
    line-height: 52px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
}
.product-grid .product-links li a:hover{
    color: #fff;
    background: #c6202e;
}
.product-grid .product-links li a:before,
.product-grid .product-links li a:after{
    content: attr(data-tip);
    color: #fff;
    background-color: #000;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    padding: 5px 10px;
    white-space: nowrap;
    display: none;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: -32px;
    transition: all 0.3s;
}
.product-grid .product-links li a:after{
    content: '';
    height: 15px;
    width: 15px;
    transform: translateX(-50%) rotate(45deg);
    top: -24px;
    z-index: -1;
}
.product-grid .product-links li a:hover:before,
.product-grid .product-links li a:hover:after{
    display: block;
}
.product-grid .product-content{ padding: 20px 12px; }
.product-grid .title{
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 10px;
}
.product-grid .title a{
    color: #000;
    transition: all 0.3s ease 0s;
}
.product-grid .product-category{
    text-transform: capitalize;
    margin: 0 0 10px;
    display: block;
    color: black;
}
.product-grid .product-category a{
    color: #828282;
    transition: all 0.3s ease 0s;
}
.product-grid .title a:hover,
.product-grid .product-category a:hover{ color: #c6202e; }
.product-grid .price{
    color: black;
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 10px;
}
.product-grid .add-to-cart{
    color: #c6202e;
    background: #fff;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
    padding: 12px;
    border: 1px solid #E4E4E4;
    border-radius: 50px;
    display: block;
    transition: all 0.3s ease-in-out;
}
.product-grid .add-to-cart:hover,
.product-grid:hover .add-to-cart{
    color: #89d8f0;
    background: black;
    border-color: #c6202e;
}
@media screen and (max-width: 990px){
    .product-grid{ margin-bottom: 30px; }
}



</style>