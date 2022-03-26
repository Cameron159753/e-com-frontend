<template>
<div class="somesome"></div>
  <div class="text-effect">
    <span>in production</span>
</div>
<div class="container">
  <img src="https://i.postimg.cc/8PBgrWWn/jujutsu-kaisen.jpg" alt="" style="width:100%;">
</div>
</template>

<script>
export default {

}
</script>

<style>
.somesome{
    padding-top: 50px;
}
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
</style>