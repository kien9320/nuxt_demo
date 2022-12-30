<template>
  <div id="projectCarousel">
    <VueSlickCarousel v-bind="projectSetting">
      <div
        v-for="(content, idx) in projectList"
        :key="idx"
        class="project-items"
      >
        <div class="projectImg">
          <img
            :src="require(`@/assets/images/services/project/${content.img}`)"
            alt="project"
          />
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  name: 'ProjectCarousel',
  data() {
    return {
      projectSetting: {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
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
      projectList: [
        {
          id: 1,
          img: 'herobook.svg',
        },
        {
          id: 2,
          img: 'popop.svg',
        },
        {
          id: 3,
          img: 'solution.svg',
        },
        {
          id: 4,
          img: 'jog2e.svg',
        },
        {
          id: 5,
          img: 'eggs.svg',
        },
        {
          id: 6,
          img: 'esb.svg',
        },
        {
          id: 7,
          img: 'fund.svg',
        },
      ],
    }
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
