<template>
  <div class="position-relative">
    <div class="background-card"></div>
    <div
      id="BannerMobile"
      :style="{ backgroundImage: `url(${backgroundImagePath})` }"
    >
      <div class="banner-logo">
        <img src="~@/assets/images/home/logo-white-label.png" alt="" />
        <h1>SHINE YOUR BRAND</h1>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundImagePath from '~/assets/images/home/banner-mobile.png'
export default {
  name: 'BannerView',
  data() {
    return { backgroundImagePath }
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&display=swap');
.background-card {
  background-color: rgba(0, 0, 0, 0.55);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  // opacity: 0.12;
}
#BannerMobile {
  height: 100vh;
  // background-image: url('@/assets/images/home/homebanner.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  @media (max-width: 768px) {
    height: 95vh;
    justify-content: center;
  }
  .banner-logo {
    position: relative;
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
