<template>

<div class="middle">
<div class="text-effect">
    <span>Nike Official</span>
</div>
<div class="container">
  <img src="https://i.postimg.cc/7ZhhMwDz/20201221-fl-nike-brand-page-m-asp.webp" alt="" style="width:100%;">
  <div class="content">
 <button class="btnbtn" href="{{ ('/Products') }}" >Shop now</button>
<p>Weeb Store is the place where worlds collide.<br>
Explore over a fine collection of anime merchandise to redefine your style with us, while we turn a purchase into a smile with you...</p>
</div>
</div>
</div>


<div class="card-container">
  
  <h1>Partners
    </h1><br>
<p>We work with the world's most popular and trusted companies so that you can enjoy safe shopping and fast delivery.</p>
  <br>
  <div class="card visa">
    <p>VISA</p>
  </div>
  
  <div class="card mc">
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <p>MasterCard</p>
  </div>
  
  <div class="card amex">
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <svg class='svg' height="100%" width="100%">
      <text x="9%" y="45%" fill="none" stroke="#fff">AMERICAN</text>
    </svg>
    <svg class='svg' height="100%" width="100%">
      <text x="23%" y="75%" fill="none" stroke="#fff">EXPRESS</text>
    </svg>
  </div>
  
  <div class="card discover">
    <p>Discover</p>
  </div>
  
  <div class="card back"><span></span></div>
</div>

    



</template>

<script>
export default {

}
</script>


<style scoped>
.container {
  position: relative;
  max-width: auto;
  margin: 0 auto;
}
.container img {vertical-align: middle;}

.container .content {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.3); /* Black background with 0.5 opacity */
  color: #f1f1f1;
  width: 99%;
  padding: 7px;
}
.middle {
  padding-top: 80px;
}

.row {
  padding-top: 100px;
}

.demo{ background: #444; }
.text-effect{
    color: transparent;
    font-family: 'Pacifico', cursive;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-shadow: inset 0px 0px 2px 1px rgb(0, 0, 0);
    animation: animate 1.5s ease-in-out infinite alternate;
}
@keyframes animate{
    100%{
       text-shadow: 10px 10px 1px #0b0d0e,9px 9px 2px #090a0a,8px 8px 1px #0e0f0f,
                   -8px -8px 1px #0d0f0f,-9px -9px 1px #15181a,-10px -10px 1px #0a0b0c,
                   -11px -11px 1px #0c0e0f;
    }
}
@media only screen and (max-width: 990px){
    .text-effect{ font-size: 65px; }
}
@media only screen and (max-width: 767px){
    .text-effect{ font-size: 50px; }
}
@media only screen and (max-width: 479px){
    .text-effect{ font-size: 36px; }
}
@media only screen and (max-width: 359px){
    .text-effect{ font-size: 27px; }
}

.btnbtn  {
	color: #fff;
	width: 150px;
	height: 50px;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 16px;
	margin-top: 50px;
	border-radius: 4px;
	transition: 200ms ease-out;
	-webkit-box-shadow: 0 0 10px #89d8f0;
	        box-shadow: 0 0 10px #89d8f0;
	background: #89c8f0; 
	background: -webkit-linear-gradient(to right, #89e0f0, #1C86EE);  
	background: linear-gradient(to right, #89e0f0, #1C86EE); 
}
.btnbtn  {
	width: 120px;
	height: 40px;
	transform: scale(1.1);
	box-shadow: 0 0 40px #89d8f0;
}

p{
  font-size: 15px;
}


@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,800italic,400);
@import url(https://fonts.googleapis.com/css?family=Bevan);
html,
body {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}


.card-container {
padding-top: 100px;
}
@media (min-width: 25.625em) {
  .card-container {
    font-size: 0.4rem;
  }
}
@media (min-width: 47.5em) {
  .card-container {
    font-size: 0.75rem;
  }
}
@media (min-width: 60.625em) {
  .card-container {
    font-size: 1rem;
  }
}

h1 {
  color: #fff;
  font-family: "Bevan", cursive;
  font-size: 4.75em;
  font-weight: normal;
  margin: 0 0 0.5em;
  text-align: center;
  text-shadow: 0.013em 0.039em 0.132em rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
}

.card {
  background: #fff;
  border-radius: 0.25em;
  box-shadow: 0 0.039em 0.132em rgba(0, 0, 0, 0.4);
  display: inline-block;
  font-size: 1em;
  height: 3em;
  overflow: hidden;
  position: relative;
  margin-right: 1em;
  vertical-align: middle;
  width: 5em;
}
.card:nth-of-type(5) {
  margin-right: 0;
}

.visa {
  font-family: "Open Sans", sans-serif;
  font-size: 2em;
  font-style: italic;
  font-weight: 800;
  padding: 0.05em;
  z-index: 0;
}
.visa:before, .visa:after {
  background: #00579F;
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  content: "";
  display: block;
  height: 0.75em;
  left: 50%;
  position: absolute;
  top: 1.75%;
  transform: translate(-50%, 0);
  width: 96%;
  z-index: 200;
}
.visa:after {
  background: #FBA31B;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
  bottom: 1.75%;
  top: auto;
}
.visa p {
  color: #00579F;
  line-height: 3em;
  position: relative;
}
.visa p:after {
  border-top: 0.1em solid transparent;
  border-bottom: 0.1em solid transparent;
  border-left: 0.4em solid #FBA31B;
  border-radius: 0.0625em;
  content: "";
  display: block;
  height: 0;
  left: 25.5%;
  position: absolute;
  top: 37.25%;
  transform: rotateZ(189deg);
  width: 0;
  z-index: 600;
}

.mc {
  background: #0059B3;
  font-size: 2em;
}
.mc:before, .mc:after {
  background: #EF3526;
  border-radius: 50%;
  content: "";
  display: block;
  height: 2em;
  left: 35%;
  position: absolute;
  top: 50%;
  width: 2em;
  transform: translate(-50%, -50%);
  z-index: 200;
}
.mc:after {
  background: #FCB836;
  left: 65%;
}
.mc hr {
  background: #EF3526;
  border: none;
  border-top-right-radius: 0.25em;
  height: 0.14em;
  margin: 0.14em auto;
  position: relative;
  top: 25%;
  width: 0.65em;
  z-index: 600;
}
.mc hr:nth-of-type(1), .mc hr:nth-of-type(5) {
  transform: translate(-28%, 0);
}
.mc hr:nth-of-type(2), .mc hr:nth-of-type(4) {
  transform: translate(-10%, 0);
}
.mc hr:nth-of-type(4), .mc hr:nth-of-type(5) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0.25em;
}
.mc hr:nth-of-type(3) {
  border-top-right-radius: 4;
  border-bottom-right-radius: 0.25em;
}
.mc p {
  color: #fff;
  font-size: 0.63em;
  font-weight: 600;
  line-height: 1.5em;
  position: relative;
  text-shadow: 0.0625em 0.0625em 0.0625em black;
  top: -0.8em;
  z-index: 600;
}

.amex {
  background: #0971bc;
  background-image: radial-gradient(top left, circle farthest-corner, #7ecdf2, #0971bc 60%);
  font-size: 2em;
  font-weight: 900;
}
.amex hr {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin: 0.15em 0;
}
.amex .svg {
  color: #FFF;
  font-size: 0.8em;
  left: 0;
  position: absolute;
  top: 0;
  stroke-width: 1;
}

.discover {
  font-size: 2em;
}
.discover:after {
  border-top: 0.75em solid transparent;
  border-bottom: 0 solid transparent;
  border-right: 1.75em solid #FF7800;
  bottom: 0;
  content: "";
  height: 0;
  position: absolute;
  right: 0;
  width: 0;
}
.discover p {
  font-size: 0.75em;
  font-weight: bold;
  letter-spacing: 0.0625em;
  line-height: 4em;
  position: relative;
  text-transform: uppercase;
}
.discover p:after {
  background: #FF7800;
  border-radius: 50%;
  content: "";
  display: block;
  height: 0.85em;
  left: 3.11em;
  position: absolute;
  top: 1.5em;
  width: 0.85em;
}
@media (min-width: 25.625em) {
  .discover p:after {
    top: 1.59em;
  }
}

.back {
  background: #ccc;
  font-size: 2em;
  padding: 0.5em 0.12em;
}
.back:before {
  background: #333;
  content: "";
  display: block;
  height: 0.6em;
  width: 100%;
}
.back:after {
  background: #333;
  border: 0.2em solid #fff;
  content: "";
  display: block;
  height: 0.55em;
  margin-left: 0.2em;
  margin-top: 0.28em;
  width: 55%;
}
.back span {
  background: #333;
  border: 0.15em solid #fff;
  display: block;
  height: 0.43em;
  margin-left: 0.2em;
  margin-top: 0.5em;
  position: absolute;
  right: 0.65em;
  top: 0.95em;
  width: 0.55em;
  z-index: 0;
}
.back span:before {
  border: 0.15em solid red;
  border-radius: 50%;
  content: "";
  height: 0.95em;
  left: -0.35em;
  position: absolute;
  top: -0.4em;
  width: 0.95em;
  z-index: 600;
}
</style>
