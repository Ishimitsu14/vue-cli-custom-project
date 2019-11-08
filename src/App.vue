<template>

  <div id="app" class="application">
    <component :is="layout"></component>
  </div>

</template>

<script>

  export default {
    name: 'application',
    watch: {
      '$route.meta.layout'(value) {
        this.setLayout(value);
      }
    },
    data() {
      return {
        layout: 'empty-layout'
      };
    },
    created() {
      this.setLayout(this.$route.meta.layout || 'empty-layout');
    },
    methods: {
      setLayout(value) {
        this.layout = value
      }
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
</style>
