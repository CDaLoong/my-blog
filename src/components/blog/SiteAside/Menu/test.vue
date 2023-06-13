<template>
  <div class="test-container">
    <Menu />
    <div><icon type="home" /><icon type="close" /><icon type="about" /><icon type="email" /></div>
  </div>
</template>

<script>
import Menu from './';
export default {
  components: {
    Menu,
  },
};
</script>

<style>
.test-container {
  width: 400px;
  height: 600px;
  border: 2px solid red;
  background: #000;
  margin: 0 auto;
}
</style>
