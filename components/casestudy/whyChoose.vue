<template>
  <div id="whyCaseStudy">
    <div class="titleWhy">Why should choose us?</div>
    <div class="tab-wrap">
      <b-button
        v-for="(items, idx) in questionList"
        :key="items.question_why_id + idx"
        :class="navIndex === idx + 1 ? 'active' : ''"
        class="tab-items"
        @click="onClickNav(idx + 1)"
      >
        {{ items.question_why_title }}
        <div class="v-line"></div>
      </b-button>
    </div>
    <div v-if="questionList" class="whyChoose-wrap">
      <div
        v-for="(content, idx) in questionList"
        :key="content.question_why_id"
        class="whyChoose-content"
      >
        <div
          v-if="idx === navIndex - 1"
          :class="['box', navIndex === 1 ? 'tab-active' : '']"
        >
          <div class="box-items">
            <b-row class="box-content">
              <b-col cols="12" md="7" class="box-img">
                <img
                  :src="content.question_why_img"
                  alt="why-img"
                  class="mb-3"
                />
              </b-col>
              <b-col cols="12" md="5" class="box-detail">
                <div
                  class="content"
                  v-html="content.question_why_content"
                ></div>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'WhyCaseStudy',
  data() {
    return {
      questionList: null,
      active: 'QUALITY - US EXPERIENCE',
      navIndex: 1,
    }
  },
  computed: {
    ...mapGetters({
      Question: 'service/Question',
    }),
  },
  created() {
    this.$store.dispatch({ type: 'service/req_getQuestionList' })
  },
  watch: {
    Question(newVal) {
      this.questionList = newVal
    },
  },
  methods: {
    onClickNav(i) {
      return (this.navIndex = i)
    },
  },
}
</script>

<style lang="scss">
#whyCaseStudy {
  padding: 20px 0;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  background: #000000;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 1100px) {
    min-height: 650px;
  }
  @media (max-width: 578px) {
    min-height: 543px;
  }
  .titleWhy {
    color: #ffffff;
    font-family: 'Poppins';
    justify-content: center;
    display: flex;
    font-weight: 400;
    font-size: clamp(22px, 2.8vw, 40px);
    line-height: 150%;
    margin-bottom: 15px;
    letter-spacing: 0.19em;
  }
  .tab-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    height: 50px;
    .tab-items {
      background: transparent;
      border: none;
      width: 100%;
      flex: 25%;
      @media (max-width: 992px) {
        flex: 50%;
        padding: 0 5px;
        margin-bottom: 15px;
      }
      padding: 0 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: clamp(12px, 2vw, 16px);
      position: relative;
      font-family: 'Poppins';
      color: #ffffff36;
      &.active {
        color: #ffb800;
      }
      &:focus {
        border: none;
        box-shadow: none !important;
      }
      &:not(:last-child) {
        .v-line {
          border-right: 1px solid #ffffff50;
          height: 20px;
          position: absolute;
          right: 0;
        }
      }
    }
  }
  .whyChoose-wrap {
    margin: auto 0;
    .whyChoose-content {
      .box {
        animation: fadeIn 1s ease-out;
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .box-items {
          margin-top: 20px;
          @media (max-width: 578px) {
            margin-top: 40px;
          }
          .box-content {
            display: flex;
            align-items: center;
            width: 100%;
            margin: 0;
            padding: 0 15px;

            .box-img {
              width: 100%;
              height: 680px;
              img {
                object-position: center;
                // max-height: 420px;
                width: 100%;
                height: 100%;
                width: 100%;
                height: 100%;
                object-fit: scale-down;
              }
              @media (max-width: 991px) {
                height: 540px;
              }
              @media (max-width: 768px) {
                height: 395px;
              }
              @media (max-width: 575px) {
                height: 280px;
              }
            }
            .box-detail {
              color: #ffffff;
              font-weight: 400;
              font-size: clamp(18px, 2.8vw, 32px);
              line-height: 150%;
              font-family: 'ABeeZee';
              text-align: left;
              @media (max-width: 578px) {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
