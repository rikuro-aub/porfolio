<template>
<div id="app">
  <nav class="menu-bar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/About">About</router-link></li>
      <li><router-link to="/Skill">Skill</router-link>
      <li><router-link to="/Product">Product</router-link></li>
      <li><router-link to="/Social">Social</router-link></li>
    </ul>
  </nav>
  <router-view/>
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
  margin-top: 0;
}

.menu-bar {
  text-align: center;
  padding-left: 15%;
  padding-right: 15%;
}

.menu-bar ul {
  margin: 0 ;
  padding: 0 ;
}

.menu-bar li {
  list-style: none;
  display: inline-block;
  width: 20%;
  min-width: 90px;
  padding: 0.5rem;
  height: 2rem;
  background-color: #4ec4d3;
}

.menu-bar li:not(:last-child) {
  border-right:2px solid #ddd;
}

.menu-bar a {
  text-decoration: none;
  color: #ffffff;
}

.menu-bar a:hover {
  color:#F7CB4D;
  border-bottom:2px solid #F7CB4D;
}
</style>
