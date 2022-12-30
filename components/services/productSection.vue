<template>
  <div id="productService" v-if="serviceProvider && serviceProvider.length > 0">
    <div class="product-wrapper">
      <div class="titleProduct">Service pi creative provides</div>
      <div class="productContent-wrap">
        <b-row>
          <b-col cols="12" md="4" class="d-md-flex d-none">
            <ul>
              <li
                v-for="(items, idx) in visibleProduct"
                :key="items.service_provider_id + idx"
                :class="{ active: items.service_provider_id === serviceProvider[tabActive - 1].service_provider_id }"
              >
                <button @click="tabActive = idx + 1">
                  {{ items.service_provider_title }}
                </button>
              </li>
            </ul>
          </b-col>
          <b-col cols="12" md="8">
            <div class="productContent">
              <div class="img-wrap">
                <img
                  :src="serviceProvider[tabActive - 1].service_provider_img"
                  alt="product"
                  class="mb-2"
                />
              </div>
              <div class="text-wrap">
                <div
                  class="text"
                  v-html="
                    serviceProvider[tabActive - 1].service_provider_content
                  "
                ></div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" class="btn-mobile-wrap d-md-none d-flex">
            <div
              v-for="(items, idx) in visibleProduct"
              :key="items.service_provider_id + idx"
              :class="{ active: tabActive === idx + 1 }"
              class="btn-mobile"
            >
              <button @click="tabActive = idx + 1">
                {{ items.service_provider_title }}
              </button>
            </div>
          </b-col>
        </b-row>
        <div class="btn-group-wrap">
          <div class="btn-wrap">
            <b-button @click="nextPage(-1)"
              ><img src="@/assets/images/icons/backward.png" alt="backward"
            /></b-button>
          </div>
          <div class="btn-wrap">
            <b-button @click="nextMethod(-1)"
              ><img src="@/assets/images/icons/back.png" alt="back"
            /></b-button>
          </div>
          <div class="process-step">
            {{ tabActive }}/{{ serviceProvider.length }}
          </div>
          <div class="btn-wrap">
            <b-button @click="nextMethod(1)"
              ><img src="@/assets/images/icons/next.png" alt="next"
            /></b-button>
          </div>
          <div class="btn-wrap">
            <b-button @click="nextPage(1)"
              ><img src="@/assets/images/icons/forward.png" alt="forward"
            /></b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductService',
  data() {
    return {
      serviceProvider: [],
      tabActive: 1,
      limit: 8,
      pageMax: 2,
      pageMin: 1,
    }
  },

  computed: {
    ...mapGetters({
      ServiceProvider: 'service/ServiceProvider',
    }),
    pageMath() {
      const page = Math.ceil(this.tabActive / this.limit)
      return page
    },
    visibleProduct() {
      const listResult = this.serviceProvider.slice(
        this.limit * (this.pageMath - 1),
        this.limit * this.pageMath
      )
      return listResult
    },
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
      if (window.screen.width >= 768) {
        this.limit = 8
      } else if (window.screen.width >= 578) {
        this.limit = 1
      } else {
        this.limit = 1
      }
    },
    nextPage(page) {
      if (
        this.pageMath + page >
          Math.ceil(this.serviceProvider.length / this.limit) ||
        this.pageMath + page < 1
      ) {
        return
      }
      this.tabActive = this.limit * (this.pageMath + page) - (this.limit - 1)
    },
    nextMethod(idx) {
      if (
        this.tabActive + idx < 1 ||
        this.tabActive + idx > this.serviceProvider.length
      )
        return
      this.tabActive += idx
    },
  },
  created() {
    this.$store.dispatch({ type: 'service/req_getServiceProvider' })
  },
  watch: {
    ServiceProvider(newVal) {
      this.serviceProvider = newVal
    },
  },
}
</script>

<style lang="scss">
#productService {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  @media (max-width: 578px) {
    margin-bottom: 0.5em;
  }
  .process-step {
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    width: 40px;
    font-family: 'Poppins';
    display: none;
    color: #000;
    font-weight: 500;
    font-size: clamp(15px, 2.5vw, 18px);
    line-height: 150%;
    @media (max-width: 768px) {
      display: flex;
    }
  }
  .product-wrapper {
    width: 100%;
    max-width: 1098px;
    .titleProduct {
      text-align: center;
      font-family: 'Poppins';
      text-transform: uppercase;
      color: #000;
      font-weight: 600;
      font-size: clamp(22px, 2.8vw, 40px);
      line-height: 150%;
      margin-bottom: 20px;
    }
    .btn-mobile-wrap {
      margin-top: 20px;
      justify-content: space-around;
    }
    .btn-mobile {
      button {
        background: transparent;
        border: none;
        font-family: 'ABeeZee';
        color: #000000;
        opacity: 0.5;
        font-weight: 600;
        font-size: clamp(15px, 2.5vw, 18px);
        line-height: 150%;
        text-align: left;
        padding: 0;
        @media (max-width: 768px) {
          opacity: 1;
        }
      }
      &.active {
        button {
          color: #000;
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
      border-left: 1px solid rgba(0, 0, 0, 0.3);
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
        color: #000000;
        opacity: 0.5;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        text-align: left;
      }
      &.active {
        position: relative;
        button {
          color: #000;
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
    .productContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: linear-gradient(#d9d9d930, #d9d9d930);
      background-size: 100% 50%;
      background-repeat: no-repeat;
      background-position: bottom;
      border-radius: 10px;
      max-width: 740px;
      @media (max-width: 768px) {
        background-size: 100% 70%;
      }
      .img-wrap {
        img {
          max-height: 600px;
          @media (max-width: 768px) {
            max-height: 300px;
          }
          width: 80%;
          margin: 0 auto;
          height: 100%;
          object-fit: scale-down;
        }
      }
      .text-wrap {
        text-align: center;
        display: flex;
        padding: 40px 0 60px 0;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: clamp(15px, 2.8vw, 18px);
        line-height: 150%;
        color: rgb(0, 0, 0);
        font-family: 'ABeeZee';
        @media (max-width: 578px) {
          padding: 50px 0;
        }
        .text {
          width: 80%;
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
}
</style>
