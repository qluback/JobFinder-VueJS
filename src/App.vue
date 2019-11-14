<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">JobFinder</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'EvolveB';
  src: url('./assets/fonts/MADEEvolveSansBold.otf');
}

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

body {
  background: #f5f7fa;
  margin: 0;
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

#nav {
  padding: 10px;
  text-align: center;

  &.navDetails {
    background: #3e64ff;
    
    a {
      color: #fff;
    }
  }

  a {
    font-family: 'EvolveB';
    font-weight: bold;
    color: #3e64ff;
    text-decoration: none;
    font-size: 36px;

    &.router-link-exact-active {
      color: #3e64ff;
    }
  }
}
</style>
