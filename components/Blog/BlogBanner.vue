<template>
  <div class="main-blog">
    <div class="background"></div>
    <div id="BlogBannerView">
      <b-container fluid>
        <b-row>
          <b-col cols="12" lg="6" class="blog-banner-title-col">
            <div class="blog-banner-fre-content">
              <h1 class="title">
                Blog &nbsp;
                <span>&</span>
                &nbsp;News
              </h1>
              <div class="des my-3 mt-lg-4">
                Stay up to date with our insights on the latest industry news
                and trends.
              </div>
              <div class="link-btn w-100 mt-0">
                <button
                  class="process-btn"
                  @click="$bvModal.show('contactModal')"
                >
                  CONTACT US
                </button>
              </div>
              <Contact @showContact="showContact" />
            </div>
          </b-col>
        </b-row>

        <div class="blog-banner-img">
          <img src="@/assets/images/blog/Mask group.png" alt="" />
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import Contact from '@/components/contact/contactModal.vue'
export default {
  name: 'BlogBannerView',
  components: {
    Contact,
  },
  methods: {
    showContact() {
      this.$modal.show('contactModal')
    },
  },
}
</script>

<style lang="scss" scoped>
.main-blog {
  position: relative;
  .background {
    display: none;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    @media (max-width: 991px) {
      display: block;
    }
  }
}
#BlogBannerView {
  position: relative;
  @media (max-width: 991px) {
    background: url('@/assets/images/blog/cityscape-icon-symbol-web-element 1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .des {
    @media (max-width: 991px) {
      color: #ffffff;
      opacity: 1;
    }
  }
  .link-btn {
    @media (max-width: 991px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .process-btn {
      background-image: url('@/assets/images/home/process-btn.svg');
      background-size: cover;
      background-repeat: no-repeat;
      // padding: 1rem 3rem;
      width: 222px;
      height: 71px;
      align-items: center;
      border: none;
      display: flex;
      justify-content: center;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: clamp(14px, 2.5vh, 16px);
      line-height: 150%;
      /* identical to box height */

      letter-spacing: 0.06em;

      color: #ffffff;
  

      img {
        width: 100%;
        object-fit: scale-down;
      }
    }
  }
  .blog-banner-title-col {
    padding-top: 40px;
    z-index: 5;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    // @media (max-width: 575px) {
    //   padding-top: 80px;
    // }
    .blog-banner-fre-content {
      width: 70%;
      margin: auto;
      @media (max-width: 991px) {
        width: 100%;
        margin: auto;
        .title,
        .des {
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  .blog-banner-img {
    position: absolute;
    // width: 100%;
    top: -27%;
    right: 0;
    z-index: 3;
    @media (max-width: 991px) {
      display: none;
    }
    img {
      max-width: 785px;
      width: 100%;
      max-height: 600px;
      height: 100%;
      object-fit: scale-down;
    }
  }
  .process-btn {
    max-width: 220px;
    width: 100%;
    padding: 0;
    border: none;
    background: transparent;
    position: relative;
    display: flex;
    margin: 2rem 0;
    @media (max-width: 991px) {
      margin: 1rem auto 0 auto;
    }
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: 0;
      transform: translate(-50%, -50%);
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height */

      letter-spacing: 0.06em;

      color: #ffffff;
      z-index: 50;
    }

    img {
      width: 100%;
      object-fit: scale-down;
    }
  }
}
</style>
