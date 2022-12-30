<template>
  <div v-if="reasonList && reasonList.length > 0" id="Project">
    <b-container fluid class="container-project p-0">
      <div class="productContent-wrap">
        <b-row class="w-100 ml-0">
          <b-col cols="12" md="4" class="d-md-flex d-none prd-col">
            <ul>
              <li
                v-for="(items, idx) in visibleProduct"
                :key="items.project_id + idx"
                :class="{ active: tabActive === idx + 1 }"
              >
                <button @click="tabActive = idx + 1">
                  {{ items.project_title }}
                </button>
              </li>
            </ul>
          </b-col>
          <b-col cols="12" md="8" class="prd-col">
            <div class="productContent">
              <div class="img-wrap">
                <img
                  :src="reasonList[tabActive - 1].project_img"
                  alt="product"
                  class="mb-2"
                />
              </div>
            </div>
          </b-col>
          <b-col
            cols="12"
            md="12"
            sm="12"
            class="btn-mobile-wrap d-md-none d-flex"
          >
            <div
              v-for="(items, idx) in visibleProduct"
              :key="items.project_id + idx"
              :class="{ active: tabActive === idx + 1 }"
              class="btn-mobile"
            >
              <button @click="tabActive = idx + 1">
                {{ items.project_title }}
              </button>
            </div>
          </b-col>
        </b-row>
        <div class="btn-group-wrap">
          <div class="btn-wrap">
            <b-button @click="nextMethod(-1)"
              ><img src="@/assets/images/icons/left.png" alt="back"
            /></b-button>
          </div>
          <div class="process-step">
            {{ tabActive }}/{{ reasonList.length }}
          </div>
          <div class="btn-wrap">
            <b-button @click="nextMethod(1)"
              ><img src="@/assets/images/icons/right.png" alt="next"
            /></b-button>
          </div>
        </div>
      </div>
    </b-container>
    <div class="project-carousel-wrap py-4">
      <ProjectCarousel />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProjectCarousel from '@/components/casestudy/projectCarousel/projectCarousel.vue'
export default {
  name: 'ProjectView',
  components: {
    ProjectCarousel,
  },
  data() {
    return {
      reasonList: null,
      tabActive: 1,
      limit: 5,
      pageMax: 2,
      pageMin: 1,
      setting: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    }
  },

  computed: {
    ...mapGetters({
      Reason: 'home/Reason',
    }),
    pageMath() {
      const page = Math.ceil(this.tabActive / this.limit)
      return page
    },
    visibleProduct() {
      const listResult = this.reasonList.slice(
        this.limit * (this.pageMath - 1),
        this.limit * this.pageMath
      )
      return listResult
    },
  },
  watch: {
    Reason(newVal) {
      this.reasonList = newVal
    },
  },
  created() {
    this.$store.dispatch({ type: 'home/req_GetReason' })
  },

  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (window.screen.width <= 768) {
        this.limit = 1
      }
    },
    nextPage(page) {
      if (
        this.pageMath + page > Math.ceil(this.reasonList.length / this.limit) ||
        this.pageMath + page < 1
      ) {
        return
      }
      this.tabActive = this.limit * (this.pageMath + page) - (this.limit - 1)
    },
    nextMethod(idx) {
      if (
        this.tabActive + idx < 1 ||
        this.tabActive + idx > this.reasonList.length
      )
        return
      this.tabActive += idx
    },
  },
}
</script>

<style lang="scss">
.project-carousel-wrap {
  display: block;
  width: 100%;
  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
<style lang="scss" scoped>
#Project {
  .container-project {
    padding: 5rem 14rem 3rem 14rem !important;
    @media (max-width: 1200px) {
      padding: 5rem 10rem 3rem 10rem !important;
    }
    @media (max-width: 991px) {
      padding: 4rem 5rem 3rem 5rem !important;
    }
    @media (max-width: 768px) {
      padding: 3rem 2rem 2rem !important;
    }
    @media (max-width: 575px) {
      padding: 2rem 15px !important;
    }
  }
  .prd-col {
    @media (max-width: 575px) {
      padding: 0 !important;
    }
  }
  .titleProduct {
    text-align: center;
    font-family: 'Poppins';
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 500;
    font-size: clamp(22px, 2.8vw, 40px);
    line-height: 150%;
    margin-bottom: 20px;
  }
  .btn-mobile-wrap {
    margin-top: 20px;
    justify-content: space-around;
    @media (max-width: 575px) {
      padding: 0 !important;
    }
  }
  .btn-mobile {
    button {
      background: transparent;
      border: none;
      font-family: 'ABeeZee';
      color: #ffffff;
      opacity: 0.5;
      font-weight: 600;
      font-size: clamp(14px, 2.5vh, 16px);
      line-height: 150%;
      text-align: left;
      @media (max-width: 768px) {
        opacity: 1;
        color: #fbcb1f;
      }
    }
    &.active {
      button {
        color: #fbcb1f;
        opacity: 1;
      }
    }
  }
  ul {
    list-style-type: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-left: 15px;
    justify-content: space-around;
    text-align: left;
    border-left: 1px solid #ffffff;
    @media (max-width: 767.5px) {
      border-left: 0;
      li {
        &.active {
          &::before {
            display: none;
          }
        }
      }
    }
  }
  li {
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    button {
      background: transparent;
      border: none;
      font-family: 'ABeeZee';
      color: #ffffff;

      opacity: 0.8;
      font-weight: 600;
      font-size: clamp(14px, 2.5vh, 16px);
      line-height: 150%;
      text-align: left;
    }
    &.active {
      position: relative;
      button {
        color: #fbcb1f;
        opacity: 1;
      }
      &::before {
        margin: auto;
        background: #ffb800;
        content: '';
        position: absolute;
        left: -19px;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 7px;
        border-radius: 3.5px;
      }
    }
  }
  .process-step {
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    width: 40px;
    font-family: 'Poppins';
    display: none;
    color: #ffff;
    font-weight: 500;
    font-size: clamp(15px, 2.5vw, 18px);
    line-height: 150%;
    @media (max-width: 578px) {
      display: flex;
    }
  }
  .productContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (max-width: 768px) {
      background-size: 100% 70%;
    }
    .img-wrap {
      height: 100%;
      margin: auto;
      img {
        @media (max-width: 768px) {
          max-height: 250px;
        }
        height: 380px;
        width: 100%;
        object-fit: scale-down;
      }
    }
    .text-wrap {
      text-align: center;
      display: flex;
      padding: 40px 0 60px 0;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: clamp(16px, 2.5vw, 18px);
      line-height: 150%;
      color: rgb(0, 0, 0);
      font-family: 'ABeeZee';
      @media (max-width: 578px) {
        padding: 60px 0;
      }
      .text {
        width: 70%;
        height: 100px;
        display: flex;
        align-items: center;
        @media (max-width: 578px) {
          width: 100%;
          padding: 0 10px;
        }
      }
    }
  }
}
.btn-group-wrap {
  display: flex;
  justify-content: flex-start;
  width: fit-content;
  margin-top: 20px;
  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
  .btn-wrap {
    &:first-child {
      margin: 0 10px 0 0;
    }
    margin: 0 10px;
  }
  button {
    width: 100%;
    height: 100%;
    max-width: 40px;
    border-radius: 50%;
    background: transparent;
  }
}
</style>
