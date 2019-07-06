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
*, *::after, *::before {
    box-sizing: border-box;
}

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
}

.menu-bar ul {
  margin: 0 ;
  padding: 0 ;
}

.menu-bar li {
  list-style: none;
  display: inline-block;
  width: 20%;
  background-color: #4ec4d3;
}

.menu-bar li:not(:last-child) {
  border-right:2px solid #ddd;
}

.menu-bar a {
  display: block;
  margin: 0 auto;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.5vw;
}

.menu-bar a:hover {
  color:#F7CB4D;
  border-bottom:2px solid #F7CB4D;
}

/* スマートフォン対応 */
@media screen and (max-width:599px) {
  .menu-bar a {
    font-size: 5vw;
  }
}
</style>