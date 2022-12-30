<template>
  <div id="projectCarousel">
    <VueSlickCarousel
      v-bind="projectSetting"
      v-if="projectImgList && projectImgList.length > 0"
    >
      <div
        v-for="(content, idx) in projectImgList"
        :key="idx"
        class="project-items"
      >
        <div class="projectImg">
          <img :src="content.project_image" alt="project" />
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProjectCarousel',
  data() {
    return {
      projectImgList: null,
      projectSetting: {
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 3000,
        pauseOnHover: true,
        autoplaySpeed: 1,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 578,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  watch: {
    ProjectImg(newVal) {
      this.projectImgList = newVal
    },
  },
  created() {
    this.$store.dispatch({ type: 'home/req_ProjectImg' })
  },
  computed: {
    ...mapGetters({
      ProjectImg: 'home/ProjectImg',
    }),
  },
}
</script>

<style lang="scss">
#projectCarousel {
  display: block;
  width: 100%;
  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project-items {
    display: flex;
    align-items: center;
    .projectImg {
      img {
        max-height: 100px;
        width: 100%;
        height: 100%;
        object-fit: scale-down;
        @media (max-width: 578px) {
          max-height: 75px;
          margin-bottom: 0.2rem;
        }
      }
    }
  }
}
</style>
