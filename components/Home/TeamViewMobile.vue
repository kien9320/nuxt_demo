<template>
  <div v-if="fullStaff && fullStaff.length > 0" id="TeamMobile">
    <b-container fluid class="team-container">
      <h1 class="title-team">OUR TEAM</h1>

      <VueSlickCarousel v-bind="setting" ref="carousel">
        <div
          v-for="(item, idx) in fullStaff"
          :key="(item, idx)"
          class="p-3 frame-emp"
        >
          <div class="team-img">
            <img :src="item.img_after" alt="" class="img-no-active" />
          </div>
          <div class="name-emp mt-3">
            {{ item.name }}
            {{ item.staff_member_name }}
          </div>
          <div class="label-emp mt-3">
            {{ item.position }}
            {{ item.staff_member_position }}
          </div>
          <div class="d-flex justify-content-center mt-3">
            <a class="social mr-3" :href="item.link_linked">
              <img
                src="@/assets/images/home/Employee/linkedin-act.png"
                alt=""
                class="img-no-active"
              />
            </a>
            <a class="social" :href="item.link_facebook">
              <img
                src="@/assets/images/home/Employee/telegram-act.png"
                alt=""
                class="img-no-active"
              />
            </a>
          </div>
        </div>
      </VueSlickCarousel>
      <button class="btn-show-right" @click="showNext()">
        <img src="@/assets/images/home/down.svg" />
      </button>
      <button class="btn-show-left" @click="showPrev()">
        <img src="@/assets/images/home/down.svg" />
      </button>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TeamMobile',
  data() {
    return {
      teamList: [],
      staffList: [],
      setting: {
        infinite: true,
        initialSlide: 2,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 3000,
        // dotsClass: 'custom-dot-class',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
        ],
      },
    }
  },
  computed: {
    fullStaff() {
      return this.staffList.concat(this.teamList)
    },
    ...mapGetters({
      Team: 'home/Team',
      Staff: 'home/Staff',
    }),
  },
  watch: {
    Team(newVal) {
      this.teamList = newVal
    },
    Staff(newVal) {
      this.staffList = newVal
    },
  },
  created() {
    this.$store.dispatch({ type: 'home/req_Team' })
    this.$store.dispatch({ type: 'home/req_Staff' })
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
#TeamMobile {
  position: relative;
  .title-team {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-size: clamp(28px, 2.5vw, 40px) !important;
    /* or 60% */

    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.28em;
    color: #000000;
    @media (max-width: 575px) {
      letter-spacing: 0.12em;
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
    @media (max-width: 378px) {
      width: 35px;
      height: 35px;
      left: 1%;
    }
    &:active {
      opacity: 1;
    }
    img {
      transform: rotate(-180deg) !important;
    }
  }
  .btn-show-right {
    height: 45px;
    width: 45px;
    border-radius: 32px;
    background: transparent;
    border: 1px solid #ffb905;
    opacity: 0.67;
    position: absolute;
    top: 50%;
    right: 5%;
    @media (max-width: 378px) {
      width: 35px;
      height: 35px;
      right: 1%;
    }
    &:active {
      opacity: 1;
    }
  }
  .custom-dot-class {
    position: absolute;
    bottom: -40px;
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
        background: #575773;
      }

      button {
        display: none;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
#TeamMobile {
  .team-container {
    padding: 3rem;
    @media (max-width: 991px) {
      padding: 20px 0 !important;
    }
    .frame-emp {
      @media (max-width: 575px) {
        padding: 0 !important;
      }
      .img-no-active {
        display: block;
      }

      .team-img {
        width: 100%;
        img {
          max-height: 250px;
          width: 100%;
          height: 100%;
          object-fit: scale-down;
        }
      }

      .label-emp {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        /* or 133% */

        display: flex;
        align-items: center;
        justify-content: center;

        color: #000000;

        opacity: 0.67;
      }
      .name-emp {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        /* or 133% */

        display: flex;
        align-items: center;
        justify-content: center;

        color: #000000;
      }
    }
    .title {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 24px;
      /* or 60% */

      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.28em;

      color: #000000;
    }
  }
}
</style>
