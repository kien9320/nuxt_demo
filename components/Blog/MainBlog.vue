<script>
import { mapGetters } from 'vuex'
// import SelectBox from '@/components/blog/SelectBox.vue'
export default {
  name: 'MainBLog',
  // components: { SelectBox },
  data() {
    return {
      showFilter: false,
      categories: [],
      showAll: false,
      blogVisible: 6,
      search: {
        title: '',
        blogId: '',
      },
      step: 6,
      searchValue: '',
      // searchId: '',
      blogs: [],
    }
  },
  computed: {
    ...mapGetters({
      Category: 'blog/Category',
      Blog: 'blog/Blog',
    }),
    visibleBlog() {
      return this.blogs.slice(0, this.blogVisible)
    },
  },
  watch: {
    Blog(newVal) {
      this.blogs = newVal
    },
    Category(newVal) {
      this.categories = newVal
    },
    search: {
      handler(newVal) {
        if (newVal.blogId) {
          this.$store.dispatch('blog/reqGetBlog', this.search)
        }
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    this.onCallFirstApi()
  },
  methods: {
    showAllPartner() {
      this.blogVisible = this.blogs.length
      this.showAll = true
    },
    onCallFirstApi() {
      this.$store.dispatch('blog/reqGetBlog', this.search)
      this.$store.dispatch('blog/req_getCategories')
    },
    searchKey() {
      this.search.title = this.searchValue
      this.$store.dispatch('blog/reqGetBlog', this.search)
    },
    SearchId(param) {
      this.search.blogId = param
      this.$store.dispatch('blog/reqGetBlog', param)
    },
  },
}
</script>

<template>
  <b-container id="MainBlog" fluid>
    <div class="row">
      <div class="col-12">
        <div class="booking-wrapper px-4 px-lg-5">
          <div class="row">
            <div class="col-12 col-md-6 col-left">
              <div class="frame-search d-flex">
                <b-form-input v-model="searchValue" placeholder="Search" />
                <button class="btn-search" @click="searchKey">
                  <img src="@/assets/images/blog/search.png" alt="landing" />
                </button>
              </div>
            </div>

            <div class="col-12 col-md-6 py-2 py-md-0 col-right">
              <div
                class="d-flex w-100 justify-content-between main-filter-category"
              >
                <p>Category</p>
                <button
                  class="category-filter-btn"
                  @click="showFilter = !showFilter"
                >
                  <img
                    src="@/assets/images/Home/down-btn.png"
                    alt="landing"
                    v-if="showFilter === true"
                    class="down-btn-1"
                  />
                  <img
                    v-if="showFilter === false"
                    src="@/assets/images/Home/down-btn.png"
                    alt="landing"
                    class="down-btn-2"
                  />
                </button>
              </div>
            </div>
          </div>
          <b-row v-if="showFilter === true">
            <b-col
              cols="4"
              lg="1"
              class="check-group p-0"
              v-for="(item, idx) in categories"
              :key="item + idx"
            >
              <b-form-checkbox
                v-model="search.blogId"
                :value="item.article_categories_id"
              >
                {{ item.article_categories_name }}
              </b-form-checkbox>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <b-row class="w-100 ml-0">
      <b-col
        v-for="(item, idx) in visibleBlog"
        :key="(item, idx)"
        lg="4"
        md="6"
        sm="8"
        cols="10"
        class="mb-3 mb-md-5 article-col p-0"
      >
        <div class="main-article">
          <!-- <nuxt-link :to="`blog/${item.article_slug}`"> -->
          <nuxt-link :to="'blog/' + item.article_slug">
            <div class="article-img">
              <img :src="item.article_thumbnail" alt="landing" />
            </div>
            <p class="article-title mt-3">
              {{ item.article_title }}
            </p>
          </nuxt-link>
          <div class="user-fr mt-2 mt-md-3">
            <div class="icon-img">
              <img :src="item.article_user_img" alt="landing" />
            </div>
            <div class="user-name ml-3">
              {{ item.article_user_post }}
            </div>
            <div class="verticle-line"></div>
            <div class="user-name">
              {{ getDateTime(item.created_at) }}
            </div>
          </div>
          <div
            class="article-des mt-3 mt-md-4"
            v-html="item.article_description"
          ></div>
        </div>
      </b-col>
    </b-row>
    <div class="d-flex justify-content-center w-100">
      <div class="btn-wrap">
        <b-button
          v-if="blogVisible < blogs.length"
          class="show-all-btn"
          @click="blogVisible += step"
        >
          <template
            ><img
              src="@/assets/images/blog/prloader 1.png"
              alt=""
              class="mr-2" /></template
          >More
        </b-button>
        <b-button
          v-if="blogVisible > blogs.length"
          class="show-all-btn"
          @click="blogVisible = 6"
          >Hide</b-button
        >
      </div>
    </div>
    <h3 v-if="blogs.length < 1" class="not-found-product">No Blog Found</h3>
  </b-container>
</template>

<style lang="scss">
.main-filter-category {
  border-bottom: 1px solid #ffffff;
  @media (max-width: 768px) {
    max-width: 90% !important;
    margin: auto !important;
  }
}
#MainBlog {
  .check-group {
    max-width: 90%;
    width: 100%;
    margin: auto;
    justify-content: flex-start;
  }
  .custom-control {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    padding: 0;
    .custom-control-input {
      left: 50%;
      transform: translateX(-50%);
      top: -2rem;
      width: 1.75rem;
      height: 1.75rem;
    }
    .custom-control-input:checked ~ .custom-control-label::before {
      border-color: #fbcb1f !important;
    }
    .custom-control-input:focus ~ .custom-control-label::before {
      border-color: #fbcb1f !important;
    }
    .custom-control-label {
      position: unset;
      font-family: 'Abeezee', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: clmap(16px, 2.5vw, 18px);
      line-height: 150%;
      /* or 156% */

      display: flex;
      align-items: center;
      color: #ffffff;

      &::before {
        left: 50%;
        transform: translateX(-50%);
        top: -2rem;
        width: 1.75rem;
        height: 1.75rem;
        background-color: transparent;
        backdrop-filter: none;
      }

      &::after {
        left: 50%;
        transform: translateX(-50%);
        top: -2rem;
        width: 1.75rem;
        height: 1.75rem;
      }
    }
  }
  .frame-search {
    width: 90%;
    margin: auto;
    .form-control {
      width: 95%;
      margin: auto;
      background: transparent;
      border: none;
      border-bottom: 1px solid #ffffff;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      /* or 156% */

      display: flex;
      align-items: center;

      color: #ffffff;
      &::placeholder {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        /* or 156% */

        display: flex;
        align-items: center;

        color: #ffffff;
      }
      &:focus {
        border: none !important;
        border-bottom: 1px solid #ffffff !important;
        box-shadow: none;
      }
    }
    .btn-search {
      border: none;
      background: transparent;
    }
  }
}
</style>
<style lang="scss" scoped>
.show-all-btn {
  background: #000000;
  border: none;
  border-radius: 13px;
  padding: 1rem;
  box-shadow: none;
  outline: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    /* identical to box height, or 156% */

    display: flex;
    align-items: center;
    text-align: center;

    color: #fbcb1f;
  }
}
.booking-wrapper {
  width: 85%;
  background: #000000;
  border-radius: 22px;
  margin: 2% auto;
  padding: 50px 0px;
  @media (max-width: 768px) {
    padding: 10px 0px;
  }
  .col-left,
  .col-right {
    @media (max-width: 991px) {
      padding: 0;
    }
  }
  .col-right {
    border: none;
    p {
      margin: 0;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      /* or 156% */

      display: flex;
      align-items: center;

      color: #ffffff;
    }
    .category-filter-btn {
      background: transparent;
      width: 35px;
      height: 35px;
      border: none;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .down-btn-1 {
        display: block;
      }
      .down-btn-1 {
        display: block;
        transform: rotate(-180deg);
      }
    }
  }
}
.not-found-product {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  font-size: clamp(28px, 2.5vw, 40px);
  display: flex;
  align-items: center;
  // letter-spacing: 0.46em;
  z-index: 25;
  text-transform: uppercase;
  color: #000000;
  width: 100%;
  justify-content: center;
}
.article-col {
  @media (max-width: 768px) {
    margin: 2rem auto;
  }
}
.main-article {
  width: 95%;
  margin: auto;
  .user-fr {
    display: flex;
    .icon-img {
      img {
        width: 45px;
        height: 45px;
        object-fit: cover;
        border-radius: 64px;
      }
    }
    .verticle-line {
      width: 1.5px;
      opacity: 1;
      height: 20px;
      background-color: #ffb800;
      margin: auto 1rem;
    }

    .user-name {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: clamb(14px, 2.5vw, 18px);
      line-height: 150%;
      /* or 156% */
      display: flex;
      align-items: center;
      text-align: center;
      color: #000000;
      opacity: 0.67;
    }
  }
  .article-title {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: clamb(18px, 2.5vw, 22px);
    line-height: 150%;
    /* or 127% */
    text-align: left;
    display: flex;
    align-items: center;

    color: #000000;
  }
  .article-des {
    font-family: 'ABeeZee', sans-serif;

    font-size: clamb(12px, 2.5vw, 14px);
    line-height: 150%;
    /* or 127% */
    text-align: left;
    display: flex;
    align-items: center;

    color: rgba(0, 0, 0, 0.8) !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    @media (max-width: 575px) {
      height: 50px;
    }
  }
  .article-img {
    width: 100%;
    // max-width: 420px;
    height: 300px;
    position: relative;
    img {
      position: absolute;
      top: 0;
      left: 0;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
}

.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20%;
  text-align: center;
  font-size: 20px;
  color: black;
}
</style>
