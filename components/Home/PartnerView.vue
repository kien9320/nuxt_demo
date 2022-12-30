<template>
  <div id="Partner">
    <b-container fluid>
      <h1 class="title">Pi Creative's Partner</h1>
      <b-row v-if="partnerList && partnerList.length > 0">
        <b-col
          v-for="(item, id) in partnerList.slice(0, partnerVisible)"
          :key="item + id"
          cols="4"
          md="4"
          lg="2"
          class="d-flex align-items-center justify-content-center my-4 my-md-5"
        >
          <div class="partner-img-fr">
            <img :src="item.partner_image" alt="" />
          </div>
        </b-col>
        <div class="d-flex justify-content-center w-100">
          <button
            v-if="!showAll"
            class="show-all-btn mb-3"
            @click="showAllPartner()"
          >
            <p>Read all</p>
            <span class="mx-3"
              ><img src="@/assets/images/home/down-arrow.png" alt=""
            /></span>
          </button>
        </div>
        <div class="d-flex justify-content-center w-100">
          <button v-if="showAll" class="show-all-btn mb-3" @click="showLess()">
            <p>Show Less</p>
            <span class="mx-3"
              ><img
                src="@/assets/images/home/down-arrow.png"
                alt=""
                class="show-less"
            /></span>
          </button>
        </div>
      </b-row>
      <b-row class="main-faqs mt-3 w-100 ml-0">
        <b-col
          lg="4"
          cols="12"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          class="left-col"
        >
          <div class="title">FAQs</div>
          <div class="main-img">
            <img src="@/assets/images/home/Partner/faq  1.png" alt="" />
          </div>
        </b-col>
        <b-col
          v-if="faqList"
          lg="8"
          cols="12"
          class="listFAQ"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div class="faqs-question-frame w-100">
            <!-- <b-button
              v-for="(item, idx) in faqs"
              :key="item + idx"
              @click="showAll = !showAll"
              >Toggle Collapse A and B</b-button
            > -->
            <b-row
              v-for="(item, idx) in faqList"
              :key="item + idx"
              class="faqs-question"
            >
              <button
                :id="`q-${item.question_id}`"
                v-b-toggle="`q-${item.question_id}`"
                class="btn-show-more"
                @click="clickToggle(item.question_id)"
              >
                <b-row class="w-100 ml-0">
                  <b-col cols="9" class="p-2">
                    <p class="quest-title">
                      {{ item.question_title }}
                    </p>
                  </b-col>
                  <b-col
                    cols="3"
                    class="p-0 d-flex align-items-center justify-content-center"
                  >
                    <button
                      v-if="showDetail !== item.question_id"
                      :id="`q-${item.question_id}`"
                      src="@/assets/images/header/drop-ques-faqs.png"
                      alt="dropdown"
                      class="show-ques"
                    >
                      <!-- <div class="line">
                        <div class="line-1"></div>
                        <div class="line-2"></div>
                      </div> -->
                      <img src="@/assets/images/home/Partner/plus.png" alt="" />
                    </button>
                    <button
                      v-if="showDetail === item.question_id"
                      :id="`q-${item.question_id}`"
                      src="@/assets/images/header/drop-ques-faqs.png"
                      alt="dropdown"
                      class="hide-quest"
                    >
                      <img
                        src="@/assets/images/home/Partner/minus.png"
                        alt=""
                      />
                    </button>
                  </b-col>
                </b-row>
                <b-col cols="12" sm="11" class="py-2">
                  <transition name="roll">
                    <div>
                      <b-collapse
                        v-if="showDetail === item.question_id"
                        :id="`q-${item.question_id}`"
                      >
                        <div
                          class="question-ans"
                          v-html="item.question_content"
                        ></div>
                      </b-collapse>
                    </div>
                  </transition>
                </b-col>
              </button>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PartnerView',
  data() {
    return {
      partnerList: [],
      faqList: [],
      showAll: false,
      showDetail: '',
      partnerVisible: 12,
      step: null,
    }
  },
  computed: {
    ...mapGetters({
      Partner: 'home/Partner',
      Faq: 'home/Faq',
    }),
  },
  watch: {
    Partner(newVal) {
      this.partnerList = newVal
    },
    Faq(newVal) {
      this.faqList = newVal
    },
  },
  created() {
    this.$store.dispatch({ type: 'home/req_Partner' })
    this.$store.dispatch({ type: 'home/req_Faq' })
  },
  methods: {
    clickToggle(id) {
      if (id !== this.showDetail) {
        this.showDetail = id
      } else {
        this.showDetail = ''
      }
    },
    showAllPartner() {
      this.partnerVisible = this.partnerList.length
      this.showAll = true
    },
    showLess() {
      this.partnerVisible = 12
      this.showAll = false
    },
  },
}
</script>
<style lang="scss">
.question-ans {
  font-family: 'Poppins' sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  font-size: clamp(18px, 2.5vw, 22px);
  /* or 156% */

  display: flex;
  align-items: center;
  //   justify-content: flex-start;
  text-align: left;
  color: #000000;

  opacity: 0.56;
  // p{}
  p,
  li {
    font-size: clamp(14px, 2.5vw, 16px);
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
#Partner {
  .show-all-btn {
    background: none;
    border: none;
    box-shadow: none;
    outline: none;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    .show-less {
      transform: rotateX(180deg);
    }
    p {
      color: #000000;
      opacity: 0.54;
      margin: 0;
    }
  }
  .show-moreeeee {
    background: red;
    width: 120px;
    height: 80px;
  }
  .title {
    @media (max-width: 575px) {
      margin-bottom: 2rem;
    }
  }
  .main-img {
    max-width: 150px;
    width: 100%;
    height: auto;
    margin: 5rem auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
    @media (max-width: 991px) {
      margin: 1rem auto;
    }
  }

  .faqs-question-frame {
    width: 100%;
    margin-left: 0;
    .faqs-question {
      width: 100%;
      margin-left: 0;
      margin-bottom: 1rem;

      .btn-show-more {
        width: 100%;
        background: #ffffff;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding: 1rem;
      }
      .show-ques,
      .hide-quest {
        position: relative;
        width: 100%;
        max-width: 35px;
        height: 35px;
        background: #000000;
        border-radius: 32px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-position: center;
          object-fit: scale-down;
        }
        .line {
          position: relative;
        }
        .line-1 {
          position: absolute;
          height: 0.2rem;
          width: 14px;
          background: rgba(255, 184, 0, 1);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .line-2 {
          position: absolute;
          width: 0.2rem;
          height: 14px;
          background: rgba(255, 184, 0, 1);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .quest-title {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: clamp(16px, 2.5vw, 18px);
        line-height: 150%;
        /* or 133% */
        margin: 0;
        display: flex;
        align-items: center;
        text-align: left;
        color: #000000;
      }
    }
  }
  .partner-img-fr {
    img {
      max-width: 165px;
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }
  .left-col {
    @media (max-width: 575px) {
      padding: 0;
    }
  }
  .listFAQ {
    position: relative;
    @media (min-width: 768px) {
      &::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 1px;
        background: #000;
        opacity: 0.2;
        top: 0;
        left: -8%;
        z-index: 5;
      }
    }
    @media (max-width: 575px) {
      padding: 0;
    }
  }
}

.title {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.09em;
  text-transform: uppercase;

  color: #000000;
}
</style>
