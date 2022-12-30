<template>
  <div id="Press">
    <b-container fluid v-if="pressList && pressList.length > 0">
      <h1 class="title">What does the press say about us?</h1>
      <VueSlickCarousel v-bind="setting">
        <div
          v-for="(item, idx) in pressList"
          :key="item + idx"
          class="press-img-fr"
        >
          <img :src="item.newspaper_image" alt="" />
        </div>
      </VueSlickCarousel>
    </b-container>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

import { mapGetters } from 'vuex'
export default {
  name: 'PressView',
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      pressList: [],
      setting: {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 3000,
        // pauseOnHover: true,
        autoplaySpeed: 1,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 991,
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
              speed: 5000,
              infinite: true,
              dots: false,
            },
          },
        ],
      },
    }
  },
  watch: {
    Press(newVal) {
      this.pressList = newVal
    },
  },
  created() {
    this.$store.dispatch({ type: 'home/req_Press' })
  },
  computed: {
    ...mapGetters({
      Press: 'home/Press',
    }),
  },
}
</script>

<style lang="scss">
#Press {
  .title {
    display: flex;
    justify-content: center !important; 
  }
  .press-img-fr {
    max-width: 300px !important;
    width: 100%;
    height: 307px;
    margin: auto;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      object-position: center;
      object-fit: scale-down;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
