<template>
  <div id="Process">
    <!-- <div class="top-process-frame">
      <img src="@/assets/images/home/top-process.png" alt="" />
      <h1 class="top-process-title">CREATIVE PROCESS</h1>
    </div> -->
    <b-container fluid class="process-container">
      <b-row class="w-100 ml-0">
        <b-col
          cols="12"
          xl="6"
          lg="12"
          class="process-col"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <h1 class="process-title d-none d-md-block">
            In-house <br />
            blockchain <br />
            marketing service
          </h1>
          <h1 class="process-title d-block d-md-none">
            In-house blockchain marketing service
          </h1>
          <div class="process-des">
            Marketing Agency comprehensive package for each stage of project
            development, helping to build and develop breakthrough successful
            Blockchain projects.
          </div>
          <div class="link-btn w-100 mt-5 mt-lg-0">
            <a href="#About" class="process-btn"> ABOUT US </a>
          </div>
        </b-col>

        <b-col cols="12" xl="6" lg="12" class="why-box-content">
          <div
            class="d-none d-md-flex"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <SpinTest />
          </div>
          <div class="d-block d-md-none">
            <SpinMobile />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SpinTest from '@/components/home/SpinTest.vue'
import SpinMobile from '@/components/home/SpinMobile.vue'
export default {
  name: 'ProcessView',
  components: {
    SpinTest,
    SpinMobile,
  },
  data() {
    return {
      contentActive: null,
      timeOut: null,
      windowWidth: 1000,
    }
  },
  mounted() {
    this.onWindowResize()
  },
  // created() {
  //   window.addEventListener('resize', this.onWindowResize)
  // },
  destroyed() {
    window.removeEventListener('resize', this.onWindowResize)
  },
  methods: {
    activeBox(tab) {
      this.contentActive = tab
    },
    activeSome() {
      if (this.contentActive == null || this.contentActive > 7) {
        this.contentActive = 1
      }
      this.timeOut = setTimeout(() => {
        this.contentActive += 1
        this.activeSome()
      }, 2000)
    },
    onWindowResize() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 575) {
        clearTimeout(this.timeOut)
        this.activeSome()
      } else if (this.timeOut != null) {
        clearTimeout(this.timeOut)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#Process {
  .process-container {
    padding-top: 0 !important;
    @media (max-width: 575px) {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
  .why-box-content {
    margin-top: -4rem;
    @media (max-width: 991px) {
      margin-top: 0;
    }
  }
  .process-col {
    text-align: left;
    margin: 5rem 0;
    @media (max-width: 991px) {
      margin: 4rem 0;
    }
    @media (max-width: 768px) {
      text-align: center;
      margin: 3rem 0;
    }
    @media (max-width: 575px) {
      margin: 36px 0;
    }
    .process-btn {
      background-image: url('@/assets/images/home/process-btn.svg');
      background-size: cover;
      background-repeat: no-repeat;
      padding: 1rem 3rem;
      border: none;

      margin-top: 1rem;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: clamp(14px, 2.5vh, 16px);
      line-height: 150%;
      /* identical to box height */

      letter-spacing: 0.06em;

      color: #ffffff;
      @media (max-width: 575px) {
        margin: 1rem 0;
      }

      img {
        width: 100%;
        object-fit: scale-down;
      }
    }
    .process-des {
      margin: 3rem 0;
      font-family: 'ABeeZee';
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      /* or 60% */
      font-size: clamp(16px, 2.5vw, 22px);
      /* or 109% */

      display: flex;
      align-items: center;
      letter-spacing: 0.1em;
      color: #000000;
      opacity: 0.8;
      @media (max-width: 991px) {
        margin: 1.25rem 0;
      }
    }
    .process-title {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      font-size: clamp(28px, 2.5vw, 38px);
      display: flex;
      align-items: center;
      letter-spacing: 1rem;
      text-transform: uppercase;
      color: #000000;
      @media (max-width: 991px) {
        margin-bottom: 0 !important;
      }
      @media (max-width: 768px) {
        letter-spacing: 0.5rem;
      }
    }
    @media (max-width: 768px) {
      br {
        display: none !important;
      }
    }
  }
}
.top-process-frame {
  position: relative;
  max-width: 650px;
  width: 100%;
  img {
    width: 100%;
    max-height: 100px;
    height: 100%;
    object-fit: scale-down;
  }
  .top-process-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    font-size: clamp(16px, 2.5vw, 18px);
    /* identical to box height */

    // letter-spacing: 0.5px;

    color: #ffff;
  }
}
</style>
