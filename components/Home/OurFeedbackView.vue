<template>
  <div id="FeedbackView">
    <!-- <b-container fluid="xl" class="p-o"> -->
    <b-row class="feedback-row">
      <div class="title d-block d-lg-none">What customers say about us</div>
      <b-col v-if="dataFeedBack && dataFeedBack.data" lg="7" xl="8" cols="12">
        <VueSlickCarousel v-bind="setting" ref="carousel">
          <div
            v-for="(item, idx) in dataFeedBack.data"
            :key="item + idx"
            class="frame-feedback"
          >
            <div class="chat-fr">
              <p v-html="item.customer_feelings"></p>
            </div>

            <div class="d-flex mt-4">
              <div class="user-fr">
                <img :src="item.customer_image" alt="" />
              </div>
              <div class="d-block ml-3">
                <div class="name">
                  {{ item.customer_name }}
                </div>
                <div class="label">
                  {{ item.customer_job }}
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
        <button class="btn-show-right" @click="showNext()">
          <img src="@/assets/images/home/down.svg" />
        </button>
        <button class="btn-show-left" @click="showPrev()">
          <img src="@/assets/images/home/down.svg" />
        </button>
      </b-col>
      <!-- <b-col xl="4" lg="5" cols="12" class="right-col">
       
        <div class="right-img">
          <img src="@/assets/images/home/right-bg.png" alt="" />
          <div class="quote">
            <img src="@/assets/images/home/Vector.png" alt="" />
          </div>
        </div>
        <div class="circle">
          <img src="@/assets/images/home/yellow-ball.png" alt="" />
        </div>
      </b-col> -->
      <b-col xl="4" lg="5" cols="12" class="right-col">
        <!-- <div class="right-title">What customers say about us</div> -->
        <div class="right-img">
          <!-- <img src="@/assets/images/home/right-bg.png" alt="" /> -->
          <div class="quote">
            <img src="@/assets/images/home/Vector.png" alt="" />
          </div>
        </div>
        <div class="circle">
          <img src="@/assets/images/home/yellow-ball.png" alt="" />
        </div>
      </b-col>
    </b-row>
    <!-- </b-container> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OurFeedbackView',
  data() {
    return {
      dataFeedBack: [],
      setting: {
        dots: false,
        infinite: true,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              dotsClass: 'custom-dot-class',
            },
          },
        ],
      },
    }
  },
  computed: {
    ...mapGetters({
      Customer: 'home/Customer',
    }),
  },
  watch: {
    Customer(newVal) {
      this.dataFeedBack = newVal
    },
  },
  created() {
    this.$store.dispatch({ type: 'home/req_getCustomerFb' })
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },
}
</script>
<style lang="scss">
#FeedBackView {
  position: relative;
  .slick-slider {
    padding: 0 3rem;
  }
}
.custom-dot-class {
  position: absolute;
  bottom: -25px;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;

  li {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    border-radius: 16px;
    background: #d9d9d9;

    &.slick-active {
      background: #ffb905;
    }

    button {
      display: none;
    }
  }
}
</style>
<style lang="scss" scoped>
#FeedbackView {
  margin-bottom: 2rem;
  .feedback-row {
    cursor: pointer;
    width: 100%;
    margin-left: 0;
    @media (max-width: 991px) {
      display: flex;
      flex-direction: column;
    }
  }
  .btn-show-left {
    height: 45px;
    width: 45px;
    border-radius: 32px;
    background: transparent;
    border: 1px solid #ffb905;
    opacity: 0.67;
    position: absolute;
    top: 50%;
    left: 5%;
    display: none;
    &:active {
      opacity: 1;
    }
    img {
      transform: rotate(-180deg) !important;
    }
  }
  .btn-show-right {
    display: none;
    height: 45px;
    width: 45px;
    border-radius: 32px;
    background: transparent;
    border: 1px solid #ffb905;
    opacity: 0.67;
    position: absolute;
    top: 50%;
    right: 5%;

    &:active {
      opacity: 1;
    }
  }
  .circle {
    position: absolute;
    top: 0;
    left: 5%;
    img {
      max-width: 50px;
      width: 100%;
      object-fit: cover;
    }
  }
  .right-col {
    background: url('@/assets/images/home/right-bg.png');
    background-repeat: no-repeat;
    background-size: 90% 90%;
    background-position-x: right;
    position: relative;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .right-img {
    // position: relative;
    width: 100%;
    &::before {
      content: 'What customers say about us';
      position: absolute;
      top: 40%;
      left: -15px;
      transform: translateY(-40%);
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: clamp(24px, 2.5vw, 30px);
      line-height: 150%;
      letter-spacing: 0.2em;
      color: #000000;
      z-index: 30;
      width: 90%;
      text-align: left;
    }
    img {
      width: 90%;
      height: 335px;
      object-position: right;
    }
    .quote {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -40%);
      img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
      }
    }
  }
  .right-title {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    font-size: clamp(26px, 2.5vw, 30px);
    width: 100%;
    text-align: left;
    /* or 80% */
    z-index: 10;
    display: flex;
    align-items: center;

    color: #000000;
  }

  .frame-feedback {
    width: 90% !important;
    // max-width: 575px;
    //   display: flex;
    padding: 1rem;
    @media (max-width: 575px) {
      padding: 0 15px !important;
    }
    .user-fr {
      width: 100%;
      max-width: 65px;
      position: relative;
      height: 65px;
      img {
        border-radius: 32px;
        position: absolute;
        top: 0;
        left: 0;
        object-position: center;
        height: 100%;
        width: 100%;
      }
    }
    .chat-fr {
      background: url('@/assets/images/home/Union.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;

      padding: 2rem 1rem;
      text-align: left;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      font-size: 14px;
      /* or 150% */

      color: #000000;

      opacity: 0.8;
      @media (max-width: 630px) {
        padding: 5%;
      }
    }
    .label {
      font-family: 'ABeeZee', sans-serif;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      font-size: clamp(14px, 2.5vw, 16px);
      /* or 133% */

      display: flex;
      align-items: center;

      color: #ffb905;
    }
    .name {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      /* or 133% */

      display: flex;
      align-items: center;

      color: #000000;
    }
  }
}
</style>
