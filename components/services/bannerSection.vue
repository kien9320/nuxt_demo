<template>
  <div id="bannerService">
    <div id="sectionOne">
      <div class="d-block banner-wrap">
        <VueSlickCarousel v-bind="bannerService">
          <div v-for="(items, i) in serviceList" :key="i" class="banner-items">
            <div
              class="bg-banner"
              :style="{
                backgroundImage: `url(${require(`@/assets/images/services/${items.background}`)})`,
              }"
              :class="i == 0 ? 'firstbackground' : ''"
            >
              <b-row class="d-flex align-items-center bannerRow w-100 ml-0">
                <b-col cols="12" md="6" :class="i != 0 ? 'mt-5' : ''">
                  <div class="bannerTitle">{{ items.title }}</div>
                  <div class="bannerContent">
                    {{ items.content }}
                  </div>
                </b-col>
                <b-col
                  v-if="items.img"
                  cols="6"
                  class="d-md-flex d-none justify-content-center"
                >
                  <div class="logoBanner">
                    <img
                      :src="require(`@/assets/images/services/${items.img}`)"
                      alt="logo"
                    />
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </VueSlickCarousel>
        <div class="lowerSection">
          <div class="projectCarousel">
            <ProjectCarousel />
          </div>
          <div class="lowerContent">
            <p>Become our partner</p>
            <b-button class="create-btn"><p>Let's create products</p></b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import ProjectCarousel from '@/components/casestudy/projectCarousel/projectCarousel.vue'

export default {
  name: 'BannerService',
  components: {
    VueSlickCarousel,
    ProjectCarousel,
  },
  data() {
    return {
      bannerService: {
        speed: 3500,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        fade: true,
      },

      serviceList: [
        {
          id: 1,
          title: 'How can we help you?',
          content:
            'Pi Creative provides a full range of useful blockchain services and solutions to bring success to the project with all the necessary effort.',
          img: '1.svg',
          background: 'background1.svg',
        },
        {
          id: 2,
          title: 'Media',
          content: 'Capture your every moment.',
          background: 'background2.png',
        },
        {
          id: 3,
          title: 'Creative',
          content: 'Creative freedom - bring the best product.',
          background: 'background3.png',
        },
        {
          id: 3,
          title: 'Product',
          content:
            'Bringing the best from Blockchain to other marketing services.',
          background: 'background4.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
#bannerService {
  .slick-list {
    width: 100%;
    overflow: hidden;
    .slick-track {
      display: flex;
    }
  }
}
</style>
<style lang="scss" scoped>
#bannerService {
  #sectionOne {
    font-family: 'Poppins';
    font-style: normal;
    color: #fff;
    .banner-wrap {
      position: relative;
      text-align: left;
      .bg-banner {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 700px;
        padding: 20px 40px;
        box-shadow: inset 0 0 0 1500px rgb(0 10 17 / 45%);
        border-radius: 38px;
        @media (max-width: 768px) {
          padding: 10px;
          border-radius: 0;
          height: 500px;
        }
      }
      .firstbackground {
        background-size: cover;
      }
      .bannerRow {
        padding: 64px;
        @media (max-width: 578px) {
          padding: 10px;
          margin-top: 30px;
        }
      }
      .bannerTitle {
        font-weight: 600;
        font-size: clamp(32px, 2.8vw, 64px);
        line-height: 150%;
        text-shadow: 0px 0px 60px #ffffff;
      }
      .logoBanner {
        img {
          max-height: 300px;
          width: 100%;
          height: 100%;
          object-fit: scale-down;
        }
      }
      .bannerContent {
        font-weight: 400;
        font-size: clamp(20px, 2.8vw, 28px);
        line-height: 150%;
      }
      .projectCarousel {
        position: absolute;
        display: block;
        width: 100%;
        bottom: 90px;
      }
      .lowerSection {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        border-bottom-left-radius: 38px;
        border-bottom-right-radius: 38px;
        @media (max-width: 768px) {
          border-radius: 0;
        }
        padding: 15px;
        background: #8080806b;
        .lowerContent {
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            margin-bottom: 0;
            font-weight: 500;
            font-size: clamp(12px, 2vw, 24px);
            line-height: 130%;
          }
          .create-btn {
            @media (max-width: 578px) {
              margin: 0 10px;
              padding: 10px;
            }
            margin: 0 15px;
            padding: 10px 20px;
            background: #ffffff;
            box-shadow: 0px 4px 4px rgba(227, 180, 60, 0.2);
            border-radius: 6px;
            p {
              color: #000000;
              font-weight: 700;
              font-size: clamp(12px, 2vw, 16px);
              line-height: 130%;
            }
          }
        }
      }
    }
  }
}
</style>
