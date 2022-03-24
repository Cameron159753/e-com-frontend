<template>
  <body class="d-flex flex-column">
  <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-light text-white-50">
    <div class="container text-center">
      <small>Copyright &copy; </small>
    </div>
  </footer>
</body>
</template>

<script>
export default {

}
</script>

<style>

body {
  background: black;
  box-shadow: 4px 4px 10px #e4e4e4, -4px -4px 10px #ffffff;
}

.container {
  color: rgb(225, 0, 255);
  font-size: 150%;
}
footer {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>