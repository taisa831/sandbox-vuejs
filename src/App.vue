<template>
    <div id="app">
        <headerView></headerView>
        <div class="wrapper clearfix">
            <router-view></router-view>
            <sideMenuView></sideMenuView>
        </div>
        <footerView></footerView>
    </div>
</template>

<script>
    import headerView from './components/Header'
    import sideMenuView from './components/Sidemenu'
    import footerView from './components/Footer'

    export default {
      data() {
        return {
        }
      },
      components: {
        headerView,
        sideMenuView,
        footerView
      },
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
    .wrapper {
        width: 970px;
        margin: 30px auto 40px;
    }
    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }
</style>
