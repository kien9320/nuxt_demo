<template lang="html">
  <div id="main">
    <Loader />
    <div class="page-wrapper">
      <HeaderView />
      <div id="body">
        <Nuxt />
      </div>
      <Footer />
    </div>
    <!-- <div class="mobile-menu-overlay" @click="hideMobileMenu"></div> -->
  </div>
</template>

<script>
import HeaderView from '~/components/layouts/Header.vue'
import Footer from '~/components/layouts/Footer.vue'
import Loader from '~/components/Loader.vue'
export default {
  name: 'BodyLayout',

  components: {
    HeaderView,
    Footer,
    Loader,
  },

  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      // eslint-disable-next-line default-case
      switch (mutation.type) {
        case 'core/SUCCESS_MESSAGE':
          this.$toast.success(state.core.success, 'Success!')
          this.outLoad()
          break
        case 'core/ERROR_MESSAGE':
          this.$toast.error(state.core.error, 'Failed!')
          this.outLoad()
          break
      }
    })
  },
  beforeDestroy() {
    this.unsubscribe()
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=Nunito&family=Poppins&family=Prompt&display=swap');
#main {
  font-family: 'ABeeZee', sans-serif;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  scroll-behavior: smooth;
  color: #2c3e50;
  background: hsla(0, 0%, 100%, 0.5);
  a {
    text-decoration: none !important;
  }
  #body {
    min-height: calc(100vh - 90px);
    height: 100%;
    @media (max-width: 768px) {
      padding-top: 85px;
    }
  }
  scroll-behavior: smooth;
}
</style>
