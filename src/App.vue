<template>
    <div id="page">
        <header-view></header-view>
        <div v-if="sideMenuPage" class="wrapper clearfix">
            <router-view></router-view>
            <p><event-handler-side-navi-view v-bind:val="childVal" v-on:child-event="parentsMethod"></event-handler-side-navi-view></p>
            <footer-view></footer-view>
        </div>
        <div v-else class="singleWrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import headerView from './components/Header'
    import EventHandlerSideNaviView from './components/EventHandlerSideNavi'
    import footerView from './components/Footer'
    import EventHandler from "./components/EventHandler";

    export default {
      data() {
        return {
          sideMenuPage: '',
          childVal: 'これは子'
        }
      },
      components: {
        EventHandler,
        headerView,
        EventHandlerSideNaviView,
        footerView
      },
      created() {
        if (this.$route.path.indexOf('neko/3') != -1) {
          this.sideMenuPage = 3
        }
      },
      methods: {
        parentsMethod(str) {
          this.childVal = str
          console.log(this.childVal)
        }
      }
    }
</script>

<style>
    #page {
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
    .singleWrapper {
        width: 100%;
    }
    .clearfix::after {
        content: '';
        display: block;
        clear: both;
    }
</style>
