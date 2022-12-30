<template>
  <div id="bannerCaseStudy">
    <div id="sectionOne">
      <div class="d-block banner-wrap">
        <VueSlickCarousel v-bind="bannerCaseStudy">
          <div
            v-for="(items, i) in caseStudyList"
            :key="i"
            class="banner-items"
          >
            <div
              class="bg-banner"
              :style="{
                backgroundImage: `url(${require(`@/assets/images/casestudy/${items.background}`)})`,
              }"
            >
              <div
                class="bannerRow"
                :class="i == 1 ? 'align-items-end' : 'align-items-start'"
              >
                <b-row class="content-wrap">
                  <b-col :class="i != 1 ? 'col-7' : 'col-12'">
                    <div class="bannerTitle">{{ items.title }}</div>
                    <div class="bannerContent">
                      {{ items.content }}
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div class="bannerRow-mb">
                <b-row class="content-wrap">
                  <b-col cols="10">
                    <div class="bannerTitle">{{ items.title }}</div>
                    <div class="bannerContent">
                      {{ items.content }}
                    </div>
                  </b-col>
                </b-row>
              </div>
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
  name: 'BannerCaseStudy',
  components: {
    VueSlickCarousel,
    ProjectCarousel,
  },
  data() {
    return {
      bannerCaseStudy: {
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

      caseStudyList: [
        {
          id: 1,
          title: 'Game Fi',
          content:
            'Immerse yourself in your passion and still increase your income.',
          img: '1.svg',
          background: 'background1.png',
        },
        {
          id: 2,
          title: 'Design',
          content: 'Create your own brand.',
          background: 'background2.png',
          reverse: true,
        },
        {
          id: 3,
          title: 'Listing',
          content: 'Create conditions that bring you income.',
          background: 'background3.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
#bannerCaseStudy {
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
#bannerCaseStudy {
  #sectionOne {
    // padding: 20px 0;
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
        @media (max-width: 992px) {
          padding: 10px;
        }
        @media (max-width: 768px) {
          padding: 10px;
          border-radius: 0;
          height: 500px;
        }
        @media (max-width: 575px) {
          background-position: 70% center;
        }
      }
      .bannerRow {
        display: flex;
        padding: 80px 64px;
        flex-direction: column;
        @media (max-width: 578px) {
          display: none;
        }
      }
      .bannerRow-mb {
        display: none;
        padding: 80px 64px;
        flex-direction: column;
        @media (max-width: 578px) {
          padding: 10px;
          margin-top: 30px;
          display: flex;
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
        font-size: clamp(20px, 2.8vw, 32px);
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
