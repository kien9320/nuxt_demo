<template>
  <div v-if="detailBlog" id="detailBlog">
    <b-container id="firstSection" fluid>
      <div class="progress-step">
        <div class="titleStep">
          <h4>
            Blog & News <span> / </span> What is the current marketing market
            like?
          </h4>
        </div>
      </div>
      <div class="bannerBlog">
        <b-row class="bannerWrapper">
          <b-col cols="12" lg="5" class="blogInfo">
            <div class="infoWrapper">
              <div class="displayImgMB">
                <img src="@/assets/images/blog/detail/fb-mb.png" alt="fb" />
                <img src="@/assets/images/blog/detail/lin-mb.png" alt="lin" />
                <img src="@/assets/images/blog/detail/tele-mb.png" alt="tele" />
                <img src="@/assets/images/blog/detail/tw-mb.png" alt="tw" />
                <img src="@/assets/images/blog/detail/dc-mb.png" alt="dc" />
              </div>
              <h4 class="titleBlog">
                {{ detailBlog.article_title }}
              </h4>
              <div class="authorBlog">
                <img :src="detailBlog.article_user_img" alt="authorBlog" />
                {{ detailBlog.article_user_post }}
                <span>|</span>
                {{ getDateTime(detailBlog.created_at) }}
              </div>
            </div>
            <div class="displayWrapper">
              <p>Display:</p>
              <div class="displayImg">
                <img src="@/assets/images/blog/detail/fb.png" alt="fb" />
                <img src="@/assets/images/blog/detail/lin.png" alt="lin" />
                <img src="@/assets/images/blog/detail/tele.png" alt="tele" />
                <img src="@/assets/images/blog/detail/tw.png" alt="tw" />
                <img src="@/assets/images/blog/detail/dc.png" alt="dc" />
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="7" class="blogImg">
            <img :src="detailBlog.article_thumbnail" alt="bannerBlog" />
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-container id="secondSection" fluid>
      <div class="contentBlog">
        <b-row class="contentBlog-wrap">
          <b-col cols="12" lg="8" class="detailContent">
            <div v-html="detailBlog.article_description"></div>
          </b-col>
          <b-col
            v-if="blogs && blogs.length > 0"
            cols="12"
            lg="4"
            class="anotherContent"
          >
            <h4>Continue Reading</h4>
            <div
              v-for="item in blogs.slice(0, 2)"
              :key="`content-${item.article_slug}`"
              class="d-none d-lg-flex"
            >
              <div class="relateNews">
                <nuxt-link :to="`${item.article_slug}`">
                  <div class="thumnail">
                    <img :src="item.article_thumbnail" alt="thumnail" />
                  </div>
                  <div class="titleNews">{{ item.article_title }}</div>
                </nuxt-link>
                <div class="authorNews">
                  <img :src="item.article_user_img" alt="avt-author" />
                  <span>|</span>
                  {{ getDateTime(item.created_at) }}
                </div>
                <div class="desNews" v-html="item.article_description"></div>
              </div>
            </div>
            <b-row v-if="blogs && blogs.length > 0" class="d-flex d-lg-none">
              <b-col
                v-for="item in blogs.slice(-2)"
                :key="`content-${item.article_slug}`"
                cols="12"
                md="6"
              >
                <div class="relateNews">
                  <nuxt-link :to="`${item.article_slug}`">
                    <div class="thumnailMb">
                      <img :src="item.article_thumbnail" alt="bannerBlog" />
                    </div>
                    <div class="titleNews">{{ item.article_title }}</div>
                  </nuxt-link>
                  <div class="authorNews">
                    <img :src="item.article_user_img" alt="avt-author" />
                    <span>|</span>
                    {{ getDateTime(item.created_at) }}
                  </div>
                  <div class="desNews" v-html="item.article_description"></div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
      <div class="content-wrap">
        <div class="contactTitle">Contact us!</div>
        <div class="form-wrap">
          <b-form @submit.prevent="onSendContact" @reset="onReset">
            <b-row
              class="d-flex align-items-center justify-content-around text-align"
            >
              <b-col cols="12" md="4">
                <b-form-group
                  id="input-group-1"
                  label="Name*"
                  label-for="input-name"
                >
                  <b-form-input
                    id="input-name"
                    v-model="form.name"
                    type="text"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  label="Email*"
                  label-for="input-email"
                >
                  <b-form-input
                    id="input-email"
                    v-model="form.email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  id="input-group-3"
                  label="Phone*"
                  label-for="input-phone"
                >
                  <b-form-input
                    id="input-phone"
                    v-model="form.phone"
                    type="tel"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="5">
                <b-form-group
                  id="input-group-4"
                  label="What do you want?"
                  label-for="input-content"
                >
                  <b-form-textarea
                    id="input-content"
                    v-model="form.message"
                    class="scroll"
                    placeholder="Enter something..."
                    rows="6"
                  ></b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>
            <div class="btn-wrap">
              <b-button type="submit">Send</b-button>
            </div>
          </b-form>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DetailBlogView',
  // async asyncData({ $axios, params }) {
  //   const detailBlog = await $axios.$get('/article/get/detail?slug=', {
  //     params: {
  //       slug: params.slug,
  //     },
  //   })
  //   return { detailBlog }
  // },
  data() {
    return {
      blogs: null,
      detailBlog: null,
      slug: null,
      form: {
        email: '',
        name: '',
        phone: '',
        message: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      Contact: 'contact/Contact',
      Blog: 'blog/Blog',
      DetailBlog: 'blog/DetailBlog',
    }),
  },
  watch: {
    Blog(newVal) {
      this.blogs = newVal
    },
    DetailBlog(newVal) {
      this.detailBlog = newVal.data
    },
  },
  created() {
    this.$store.dispatch('blog/reqGetDetailArticle', this.$route.params.slug)
    this.$store.dispatch('blog/reqGetBlog')
  },

  methods: {
    onSubmit() {},
    onReset() {
      this.form.email = ''
      this.form.name = ''
      this.form.phone = ''
      this.form.message = ''
    },
    onSendContact() {
      const res = {
        name: this.form.name,
        email: this.form.email,
        phone: this.form.phone,
        message: this.form.message,
      }
      this.$store.dispatch('contact/req_getDataContact', res)
      this.onReset()
    },
  },
}
</script>

<style lang="scss">
#detailBlog {
  #firstSection {
    padding-top: 10rem;
    @media (max-width: 992px) {
      padding: 7em 24px 0;
    }
    @media (max-width: 768px) {
      padding: 3em 24px 0;
    }
    @media (max-width: 575px) {
      padding: 2em 24px 0;
    }
    max-width: 1480px;
  }
  #secondSection {
    max-width: 1600px;
    padding: 0 48px 64px;
    @media (max-width: 992px) {
      padding: 0 24px 64px;
    }
  }
  .progress-step {
    .titleStep {
      h4 {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: clamp(16px, 2.5vw, 18px);
        line-height: 150%;
        color: #00000046;
        margin: 0;
        span {
          font-size: clamp(26px, 2.5vw, 28px);
          margin: 0 3px;
        }
      }
    }
  }
  .bannerBlog {
    margin-top: 25px;
    .bannerWrapper {
      width: 100%;
      margin: 0;
      position: relative;
      display: flex;
      justify-content: flex-end;
      @media (max-width: 992px) {
        justify-content: unset;
      }
      .blogInfo {
        position: absolute;
        z-index: 10;
        padding: 0;
        left: 5%;
        top: 10%;
        @media (max-width: 1150px) {
          top: 5%;
          width: 100%;
        }
        @media (max-width: 992px) {
          padding: 0 15px;
          position: unset;
          order: 2;
          display: flex;
        }
        .infoWrapper {
          color: #fff;
          text-align: left;
          background: rgba(38, 37, 37, 0.87);
          border-radius: 22px;
          padding: 30px 25px;
          @media (max-width: 1250px) {
            padding: 15px;
          }
          .displayImgMB {
            @media (max-width: 992px) {
              display: flex;
            }
            display: none;
            justify-content: space-evenly;
            width: 100%;
            margin-bottom: 25px;
            img {
              width: 100%;
              height: 100%;
              max-width: 20px;
              object-fit: cover;
            }
          }
          @media (max-width: 992px) {
            padding-left: 0;
            background: unset;
            flex: 70%;
            color: #000;
          }
          width: 100%;
          .titleBlog {
            font-weight: 500;
            font-size: clamp(18px, 2.5vw, 28px);
            line-height: 150%;
            margin-bottom: 15px;
          }
          .authorBlog {
            display: flex;
            align-items: center;
            font-weight: 400;
            font-size: clamp(16px, 2.5vw, 18px);
            line-height: 150%;
            color: #ffffff67;
            @media (max-width: 992px) {
              color: rgba(0, 0, 0, 0.67);
            }
            span {
              margin: 0 8px;
              color: #ffb800;
            }
            img {
              height: 100%;
              object-fit: scale-down;
              max-height: 35px;
              margin-right: 20px;
            }
          }
        }
        .displayWrapper {
          @media (max-width: 991px) {
            display: none;
          }
          margin-top: 20px;
          max-width: 400px;
          width: 100%;
          text-align: left;
          position: absolute;
          display: flex;
          align-items: center;
          right: 0%;
          color: #fff;
          background: rgba(38, 37, 37, 0.87);
          border-radius: 22px;
          padding: 25px;
          @media (max-width: 992px) {
            position: unset;
            margin-top: 0;
            background: unset;
            flex: 30%;
            padding: 0;
          }
          p {
            margin-bottom: 0;
            @media (max-width: 992px) {
              display: none;
            }
          }
          .displayImg {
            margin-left: 15px;
            display: flex;
            justify-content: space-between;
            width: 100%;
            @media (max-width: 992px) {
              display: none;
            }
            img {
              width: 100%;
              height: 100%;
              max-height: 30px;
              object-fit: scale-down;
            }
          }
        }
      }
      .blogImg {
        @media (max-width: 992px) {
          margin-bottom: 15px;
          padding: 0;
        }
        img {
          max-height: 500px;
          width: 100%;
          height: 100%;
          border-radius: 22px;
        }
      }
    }
  }
  .contentBlog {
    margin: 30px auto;
    .contentBlog-wrap {
      margin: 0;
      width: 100%;
      .detailContent {
        padding: 15px;
        text-align: left;
        border-right: 1px solid rgba(0, 0, 0, 0.3);
        div {
          width: 85%;
        }
        @media (max-width: 992px) {
          border-right: unset;
          div {
            width: 100%;
          }
        }
      }
      .anotherContent {
        padding: 15px;
        text-align: left;
        h4 {
          font-weight: 400;
          font-size: 30px;
          line-height: 45px;
          color: #0c0c0c;
          text-transform: uppercase;
        }
        .relateNews {
          margin: 15px 0;
          .thumnail {
            margin-bottom: 8px;
            img {
              max-width: 315px;
              width: 100%;
              height: 100%;
              object-fit: scale-down;
              border-radius: 22px;
            }
          }
          .thumnailMb {
            margin-bottom: 8px;
            img {
              width: 100%;
              object-fit: unset;
              border-radius: 22px;
            }
          }
          .titleNews {
            margin-bottom: 8px;
            font-weight: 600;
            font-size: clamp(16px, 2.5vw, 18px);
            line-height: 150%;
            color: #000000;
          }
          .authorNews {
            margin-bottom: 8px;
            color: #2c3e50 !important;
            img {
              height: 100%;
              object-fit: scale-down;
              max-height: 35px;
            }
            span {
              margin: 0 8px;
              color: #f4d156 !important;
            }
          }
          .desNews {
            margin-bottom: 8px;
            font-weight: 500;
            font-size: clamp(12px, 2.5vw, 14px);
            line-height: 150%;
            color: #000000a8;
            display: -webkit-box;
            max-width: 90%;
            -webkit-line-clamp: 8;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
  }
  .content-wrap {
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 500px;
    background: #000000;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: left;
    width: 100%;
    .contactTitle {
      font-family: 'Poppins';
      text-align: center;
      color: #fff;
      font-weight: 400;
      font-size: clamp(22px, 2.8vw, 40px);
      line-height: 150%;
      margin-bottom: 20px;
      letter-spacing: 0.08em;
    }
    .form-wrap {
      margin: auto 0;
      width: 100%;
      .form-group {
        margin-bottom: 1.5rem;
      }
      #input-group-1,
      #input-group-2,
      #input-group-3,
      #input-group-4 {
        color: rgba(255, 255, 255, 0.4);
        font-weight: 400;
        font-size: clamp(16px, 2.5vw, 18px);
        line-height: 150%;
        font-family: 'ABeeZee';
        &:not(:last-child) {
          label {
            margin-bottom: 0;
          }
        }
      }
      input:focus {
        color: #fff;
        border: none;
        box-shadow: none;
      }
      textarea:focus {
        color: #fff;
        border: none;
        box-shadow: none;
      }
      #input-name,
      #input-email,
      #input-phone {
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 0;
        padding: 0;
        height: calc(1.2em + 0.5rem + 2px);
      }
      #input-content {
        border: 1px solid rgba(255, 255, 255, 0.4);
        background: transparent;
        border-radius: 10px;
      }
      .form-control {
        &:focus {
          background: none;
          outline: none;
          box-shadow: none;
        }
      }
    }
    .scroll::-webkit-scrollbar {
      display: none;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .btn-wrap {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    button {
      max-width: 120px;
      width: 100%;
      background: linear-gradient(
        180deg,
        #f4d156 0%,
        rgba(224, 170, 32, 0.93) 100%
      );
      border-radius: 4px;
      font-weight: 400;
      font-size: clamp(14px, 2.5vw, 18px);
      line-height: 150%;
      color: #000;
      border: rgba(0, 0, 0, 0.388);
    }
  }
}
</style>
