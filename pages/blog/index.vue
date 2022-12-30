<template>
  <div id="Blog">
    <BlogBannerView />
    <MainBlog />
  </div>
</template>

<script>
import MainBlog from '@/components/blog/MainBlog.vue'
import BlogBannerView from '@/components/blog/BlogBanner.vue'
export default {
  name: 'BlogView',
  components: {
    BlogBannerView,
    MainBlog,
  },
}
</script>
<style lang="scss">
#Blog {
  padding-top: 105px;
  @media (max-width: 768px) {
    padding-top: 0;
  }
  .container-fluid {
    padding: 3rem 5rem !important;
    @media (max-width: 991px) {
      padding: 1rem 15px 3rem 15px !important;
    }
    @media (max-width: 575px) {
      padding: 1rem 15px 1.75rem 15px !important;
    }
  }
  .des {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-size: clamp(14px, 2.5vw, 18px);
    /* or 156% */

    display: flex;
    align-items: center;
    text-align: left;
    color: #000000;

    opacity: 0.7;
  }
  .title {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    font-size: clamp(24px, 2.5vw, 36px);
    display: flex;
    align-items: center;
    // letter-spacing: 0.46em;
    z-index: 25;
    text-transform: uppercase;
    color: #000000;
    span {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 105px;
      line-height: 50px;
      /* identical to box height, or 48% */

      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;

      color: #000000;
      opacity: 0.1;
    }
    @media (max-width: 991px) {
      font-weight: 700;
      color: #fff;
      span {
        color: #fff;
        opacity: 1;
      }
    }
  }
}
</style>
