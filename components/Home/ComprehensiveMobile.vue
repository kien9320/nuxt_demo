<template>
  <div id="comprehensive-mb">
    <div class="comprehensive-carousel" v-if="comprehensiveList && comprehensiveList.length > 0">
      <VueSlickCarousel v-bind="comprehensiveSetting">
        <div
          v-for="(content, i) in comprehensiveList"
          :key="i"
          class="items-carousel"
        >
          <div
            class="bg-comprehensive"
            :style="{
              'background-image': 'url(' + content.service_background + ')',
            }"
          >
            <b-row class="w-100 ml-0 justify-content-center">
              <b-col cols="5" class="d-flex justify-content-center">
                <div class="img-comprehensive">
                  <img :src="content.service_image" alt="img-compre" />
                </div>
              </b-col>
              <b-col cols="7">
                <div class="content-comprehensive">
                  <h1 class="title-cont">
                    {{ content.service_title }}
                  </h1>
                  <div
                    class="detail"
                    v-html=" content.service_content"
                  ></div>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </VueSlickCarousel>
      <div class="top-wrap">
        <div class="top-process-frame">
          <img src="@/assets/images/home/Rectangle 2986.png" alt="" />
          <div class="top-process-title">Comprehensive Marketing Service</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ComprehensiveView',
  data() {
    return {
      comprehensiveList: [],
      comprehensiveSetting: {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
      indexActive: 1,
      // comprehensive: [
      //   {
      //     id: 1,
      //     src: 'project1.png',
      //     des: 'Your tokens will appear on reputable - quality - fast international exchanges',
      //     title: 'Listing',
      //     background: 'bg-comp-1.png',
      //   },
      //   {
      //     id: 2,
      //     src: 'project2.png',
      //     des: 'Pi Creative owns a large and diverse network of KOLs & Influencers from Vietnam to the world',
      //     title: 'Booking KOLs & Influencer',
      //     background: 'bg-comp-2.png',
      //   },
      //   {
      //     id: 3,
      //     src: 'project3.png',
      //     des: "Thorough consultation for each client's project to choose the right communication channel",
      //     title: 'Pr',
      //     background: 'bg-comp-3.png',
      //   },
      //   {
      //     id: 4,
      //     src: 'project4.png',
      //     des: 'Provide your project development plan with popular social media channels and clear and detailed goals',
      //     title: 'Social Management',
      //     background: 'bg-comp-4.png',
      //   },
      //   {
      //     id: 5,
      //     src: 'project5.png',
      //     des: 'The process of positioning and spreading the brand quickly and effectively',
      //     title: 'Document production',
      //     background: 'bg-comp-5.png',
      //   },
      //   {
      //     id: 6,
      //     src: 'project6.png',
      //     des: 'Detailed event planning with a very methodical and professional implementation process',
      //     title: 'EVENT & PRODUCING',
      //     background: 'bg-comp-6.png',
      //   },
      //   {
      //     id: 7,
      //     src: 'project7.png',
      //     des: 'Provide a plan to run an advertising campaign to increase brand awareness globally',
      //     title: 'DIGITAL MARKETING',
      //     background: 'bg-comp-7.png',
      //   },
      // ],
    }
  },
  computed: {
    ...mapGetters({
      Comprehensive: 'home/Comprehensive',
    }),
  },
  watch: {
    Comprehensive(newVal) {
      this.comprehensiveList = newVal
    },
  },
  created() {
    this.$store.dispatch({ type: 'home/req_getComprehensive' })
  },
}
</script>

<style lang="scss" scoped>
#comprehensive-mb {
  position: relative;
  .img-comprehensive {
    width: 100%;
    margin: auto;
    img {
      width: 100%;
      max-height: 165px;
      height: 100%;
      object-fit: scale-down;
      @media (max-width: 575px) {
        max-height: 115px;
        height: 100%;
      }
    }
  }
  .top-process-frame {
    position: relative;
    max-width: 650px;
    width: 100%;
    z-index: 25;
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
      width: 100%;
      transform: translate(-50%, -50%);
      text-transform: uppercase;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      font-size: clamp(16px, 2.5vw, 18px);
      /* identical to box height */

      letter-spacing: 0.2em;

      color: #ffff;
    }
  }
  .comprehensive-carousel {
    position: relative;
    .items-carousel {
      .bg-comprehensive {
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 100%;
        min-height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 0 0 1500px rgb(0 10 17 / 45%);

        .content-comprehensive {
          font-weight: 500;
          text-align: left;
          color: #fff;
          .title-cont {
            text-transform: uppercase;
            font-size: clamp(22px, 2.5vw, 32px);
            line-height: 150%;
          }
          .detail {
            font-size: clamp(14px, 2.5vw, 18px);
            line-height: 150%;
          }
        }
      }
    }
    .top-wrap {
      position: absolute;
      top: 0;
    }
  }
}
</style>
