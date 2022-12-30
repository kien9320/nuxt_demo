<template>
  <div id="footer">
    <b-container fluid class="footer-container">
      <b-row class="main-footer w-100 ml-0">
        <b-col class="about-footer" cols="12" lg="4" md="6">
          <div class="d-flex mb-4">
            <!-- <div class="big-logo">
              <img src="" alt="" />
            </div> -->
            <div class="pi-creative-logo">
              <img src="@/assets/images/home/logo pi creative 3.png" alt="" />
            </div>
          </div>
          <p>
            Pi Creative specializes in providing comprehensive branding,
            document production and marketing solutions in the Blockchain field
            for businesses.
          </p>
          <p>
            Our team is ready to research and optimize each service process,
            helping to develop a comprehensive partner brand
          </p>
        </b-col>
        <b-col class="contact-footer" cols="12" lg="4" md="6">
          <h4>Contact</h4>
          <div class="m-mdt-5 mt-3">
            <div class="d-flex align-items-center mb-4">
              <p class="h5 m-0">
                <b-icon icon="telephone-fill"></b-icon>
              </p>
              <p class="ml-2 m-0">0944170893</p>
            </div>
            <div class="d-flex align-items-center mb-4">
              <p class="h5 m-0">
                <b-icon icon="envelope-fill"></b-icon>
              </p>
              <p class="ml-2 m-0">support@picreative.org</p>
            </div>
            <div class="d-flex align-items-center mb-4">
              <p class="h5 m-0">
                <b-icon icon="geo-alt"></b-icon>
              </p>
              <p class="ml-2 m-0">
                4-6-8 Calmette, Nguyen Thai Binh Ward, District 1, HCMC
              </p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="4" class="connect-col">
          <h4>Connect with us</h4>
          <b-form
            class="d-flex m-mdt-3 mt-3 input-form"
            @submit.prevent="onSendEmail"
          >
            <b-form-input
              v-model="form.email"
              placeholder="Email"
              type="email"
            ></b-form-input>
            <b-input-group-append>
              <b-button type="submit">Send</b-button>
            </b-input-group-append>
          </b-form>
          <div v-if="socialList" class="d-flex m-mdt-4 mt-3">
            <a :href="socialList.link_facebook" class="icon-footer mr-3">
              <img src="@/assets/images/home/fb-icon.png" alt="" />
            </a>
            <a :href="socialList.link_telegram" class="icon-footer mr-3">
              <img src="@/assets/images/home/telegram-icon.png" alt="" />
            </a>
            <a :href="socialList.link_twitter" class="icon-footer mr-3">
              <img src="@/assets/images/home/twitter-icon.png" alt="" />
            </a>
            <a :href="socialList.link_youtube" class="icon-footer mr-3">
              <img src="@/assets/images/home/youtube-icon.png" alt="" />
            </a>
          </div>
        </b-col>
      </b-row>
      <button
        class="btn-to-top"
        :class="{ activeProgress: isActive }"
        @click="handleClick"
      >
        <img src="@/assets/images/Home/to-top.png" class="to-top" />
      </button>
    </b-container>

    <p class="my-3">@2022 - Pi Creative. All rights reserved</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FooterView',
  data() {
    return {
      scrollProgress: 0,
      social: [
        { id: 1, src: 'fb-icon.png', link: '/' },
        { id: 2, src: 'telegram-icon.png', link: '/' },
        { id: 3, src: 'twitter-icon.png', link: '/' },
        { id: 4, src: 'youtube-icon.png', link: '/' },
      ],
      form: {
        email: '',
      },
      socialList: null,
    }
  },
  computed: {
    ...mapGetters({
      PostEmail: 'contact/PostEmail',
      ContactList: 'contact/ContactList',
    }),
    isActive() {
      return this.scrollProgress > 10
    },
    scrollPercent() {
      return (
        308 -
        (this.scrollProgress /
          (document.body.scrollHeight - window.innerHeight)) *
          308
      )
    },
  },
  watch: {
    ContactList(newVal) {
      this.socialList = newVal.data
    },
  },
  created() {
    this.$store.dispatch({ type: 'contact/req_GetSocial' })
  },
  methods: {
    handleClick() {
      window.scrollTo(0, 0)
    },
    handleScroll() {
      this.scrollProgress = window.scrollY
      // if (this.scrollProgress > 50) {
      //     this.isActive = true;
      // } else {
      //     this.isActive = false;
      // }
    },
    onResetForm() {
      this.form.email = ''
    },
    onSendEmail() {
      const res = {
        email: this.form.email,
      }
      this.$store.dispatch('contact/req_postEmail', res)
      this.onResetForm()
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>
#footer {
  h4 {
    font-family: 'ABeeZee', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(16px, 2.5vw, 18px);
    line-height: 150%;
    /* identical to box height, or 133% */

    color: #000000;
    text-align: left !important;
  }
  p {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    font-size: clamp(14px, 2.5vw, 18px);
    /* or 133% */

    text-align: center;

    color: rgba(0, 0, 0, 0.5);
  }
  .btn-to-top {
    position: absolute;
    bottom: -20px;
    right: 35px;
    width: 40px;
    height: 40px;
    border-radius: 64px;
    box-shadow: 0px 0px 6px rgba(251, 203, 31, 0.7);
    border: none;
    background: none;
    @media (max-width: 991px) {
      bottom: 10px;
    }
  }
  .footer-container {
    position: relative;
    padding: 0 6rem;
    .main-footer {
      padding: 48px 0;
      border-top: 1px dashed #000000;
      border-bottom: 1px dashed #000000;
    }
    @media (max-width: 992px) {
      padding: 0 40px;
    }
    @media (max-width: 578px) {
      padding: 0 20px;
    }

    @media (max-width: 991px) {
      padding: 0 15px;
    }
    .input-form {
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      display: flex;
      align-items: center;
      .btn {
        margin: 0.5rem;
        min-width: 120px;
        width: 100%;
        background: #000000;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 7px;
        @media (max-width: 578px) {
          max-width: 80px;
        }
      }
    }
    .form-control {
      padding: 0 15px;
      border: none;
      &::placeholder {
        font-family: 'ABeeZee', sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        font-size: clamp(14px, 2.5vw, 18px);
        display: flex;
        align-items: center;
        color: #000000;
        opacity: 0.5;
      }
      &:focus {
        box-shadow: none;
        background: transparent;
      }
    }
    .big-logo {
      max-width: 65px;
      width: 100%;
      img {
        width: 100%;
        object-fit: scale-down;
      }
    }
    .pi-creative-logo {
      max-width: 130px;
      width: 100%;
      display: flex;
      align-items: flex-end;
      margin-left: 2rem;
      img {
        width: 100%;
        object-fit: scale-down;
      }
      &::after {
        content: '';
        background-image: url('@/assets/images/home/logo k text 3.png');
        position: absolute;
        top: -50px;
        left: 0;
        height: 78px;
        width: 64px;
        background-size: cover;
        @media (max-width: 575px) {
          left: -10px;
        }
      }
    }
    .connect-col,
    .about-footer,
    .contact-footer {
      @media (max-width: 575px) {
        padding: 0;
      }
    }
    .about-footer {
      p {
        font-family: 'ABeeZee';
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        font-size: clamp(14px, 2.5vw, 18px);
        /* or 133% */
        text-align: left;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.56);
      }
    }
    .contact-footer {
      p {
        font-family: 'ABeeZee';
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
        font-size: clamp(14px, 2.5vw, 18px);
        /* or 133% */
        text-align: left;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.6);
      }
    }
    @media (max-width: 578px) {
      h4 {
        text-align: left;
      }
    }
  }
}
</style>
