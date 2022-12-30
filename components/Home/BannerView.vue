<template>
  <div id="Banner" :style="{ backgroundImage: `url(${backgroundImagePath})` }">
    <div class="banner-logo">
      <img src="~@/assets/images/home/home-logo.svg" alt="" />
      <h1>SHINE YOUR BRAND</h1>
    </div>
  </div>
</template>

<script>
import backgroundImagePath from '~/assets/images/home/homebanner1.png'
export default {
  name: 'BannerView',
  data() {
    return { backgroundImagePath }
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&display=swap');
#Banner {
  height: 100vh;
  // background-image: url('@/assets/images/home/homebanner.svg');
  background-size: 85% 100%;
  background-position-x: right;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  @media (max-width: 768px) {
    height: 90vh;
    justify-content: center;
  }
  .banner-logo {
    img {
      width: 100%;
      max-width: 400px;
    }
    h1 {
      font-family: 'Oleo Script' !important;
      font-style: normal;
      font-weight: 400;

      font-size: clamp(24px, 2.5vh, 28px);
      line-height: 150%;
      letter-spacing: 0.5em;
      color: #ffb800;
      padding-top: 30px;
    }
  }
}
</style>
