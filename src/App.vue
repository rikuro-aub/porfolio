<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/About">About</router-link>
      <router-link to="/Skill">Skill</router-link>
      <router-link to="/Product">Product</router-link>
      <router-link to="/Social">Social</router-link>
      <router-view/>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
