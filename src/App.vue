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
  margin-top: 60px;
}

.menu-bar {
  text-align: center;
}

.menu-bar ul {
  margin: 0 ;
  padding: 0 ;
}

.menu-bar li {
  list-style: none;
  display: inline-block;
  width: 10%;
  min-width: 90px;
}

.menu-bar li:not(:last-child) {
  border-right:2px solid #ddd;
}

.menu-bar a {
  text-decoration: none;
  color: #333;
}

.menu-bar a.current {
  color: #00B0F0;
  border-bottom:2px solid #00B0F0;
}
.menu-bar a:hover {
  color:#F7CB4D;
  border-bottom:2px solid #F7CB4D;
}
</style>
