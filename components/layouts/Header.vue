<template>
  <header id="header" :class="{ activeBg: isActive }">
    <div
      class="d-flex justify-content-between align-items-center position-relative header-fr"
    >
      <div
        :class="
          this.highlight === '/home' || this.highlight === '/home/'
            ? 'left-header'
            : 'd-none'
        "
      >
        <div class="social-top d-flex align-items-center">
          <div class="icon">
            <img src="@/assets/images/home/phone-icon.svg" alt="" />
          </div>
          <a href="tel:0944170893">0944170893</a>
        </div>
        <div v-if="socialList" class="icons-frame">
          <!-- <a href="item.link"> -->
          <a :href="socialList.link_facebook">
            <img src="@/assets/images/home/fb-icon.png" alt="" />
          </a>
          <a :href="socialList.link_telegram">
            <img src="@/assets/images/home/telegram-icon.png" alt="" />
          </a>
          <a :href="socialList.link_twitter">
            <img src="@/assets/images/home/twitter-icon.png" alt="" />
          </a>
          <a :href="socialList.link_youtube">
            <img src="@/assets/images/home/youtube-icon.png" alt="" />
          </a>
          <!-- </a> -->
        </div>
      </div>
      <div
        :class="
          this.highlight === '/home' || this.highlight === '/home/'
            ? 'd-none'
            : 'header-logo'
        "
      >
        <img src="@/assets/images/home/header-logo.png" alt="" />
      </div>
      <div
        class="header-btns"
        :class="{ noActiveProgress: isActive }"
        @click="OpenS()"
      >
        <div class="menu-icon">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
        </div>
      </div>
      <button
        class="scroll-header"
        :class="{ activeProgress: isActive }"
        @click="OpenS()"
      >
        <svg width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style="
              transition: stroke-dashoffset 10ms linear 0s;
              stroke-dasharray: 307.919, 307.919;
            "
          ></path>
        </svg>
        <div class="header-after">
          <img src="@/assets/images/home/header.svg" alt="" />
        </div>
      </button>
      <div class="header-menu" :class="openSidebar === true ? '' : 'd-none'">
        <button class="close-btn" @click="CloseS()">
          <img src="@/assets/images/home/X.png" alt="" />
        </button>
        <div class="language-frame">
          <div class="logo-nav">
            <img src="@/assets/images/home/header-logo.png" alt="" />
          </div>
          <div class="d-flex align-items-center">
            <div class="language language-active">EN</div>
            <div class="language ml-4">VI</div>
          </div>
        </div>
        <div class="yellow-ball">
          <img src="@/assets/images/home/yellow-ball.png" alt="" />
        </div>
        <div class="split-ball">
          <img src="@/assets/images/home/split-ball.png" alt="" />
        </div>
        <div class="header-menu-item-frame">
          <template v-for="menuHeader in menuHeaders">
            <!-- :to="menuHeader.to" -->
            <div
              v-if="menuHeader.to"
              :key="`${menuHeader.id}-router`"
              class="header-menu-item"
              :class="
                menuItemActive === menuHeader.name
                  ? 'router-link-exact-active'
                  : ''
              "
              @click="onGoToPath(menuHeader.to)"
            >
              {{ menuHeader.title }}
            </div>
            <b-button
              v-else
              :key="`${menuHeader.id}-modal`"
              class="header-menu-item-btn"
              @click="$bvModal.show(menuHeader.popup)"
            >
              {{ menuHeader.title }}
            </b-button>
          </template>
          <!-- <button @click="$bvModal.show('modal-contact')">Contact</button> -->
        </div>
        <div v-if="socialList" class="icon-menu">
          <a :href="socialList.link_facebook">
            <img src="@/assets/images/home/fb-icon.png" alt="" />
          </a>
          <a :href="socialList.link_telegram">
            <img src="@/assets/images/home/telegram-icon.png" alt="" />
          </a>
          <a :href="socialList.link_twitter">
            <img src="@/assets/images/home/twitter-icon.png" alt="" />
          </a>
          <a :href="socialList.link_youtube">
            <img src="@/assets/images/home/youtube-icon.png" alt="" />
          </a>
        </div>
        <p class="pitech-content">
          @Pi Creative 2022. All rights <br />
          reserved
        </p>
      </div>
    </div>
    <Contact @showContact="showContact" />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Contact from '@/components/contact/contactModal.vue'
export default {
  name: 'HeaderView',
  components: {
    Contact,
  },

  data() {
    return {
      socialList: null,
      menuItemActive: this.$route.name,
      scrollProgress: 0,
      openSidebar: false,
      currentNameRoute: '',
      menuHeaders: [
        {
          id: 1,
          title: 'Home',
          name: 'home',
          to: 'home',
        },
        {
          id: 2,
          title: 'Service',
          name: 'services',
          to: 'services',
        },
        {
          id: 3,
          title: 'Case Study',
          name: 'casestudy',
          to: 'casestudy',
        },
        {
          id: 4,
          title: 'Blog',
          name: 'blog',
          to: 'blog',
        },
        {
          id: 5,
          title: 'Contact ',
          name: 'Contact',
          popup: 'contactModal',
        },
      ],
      social: [
        { id: 1, src: 'fb-icon.png', link: '/' },
        { id: 2, src: 'telegram-icon.png', link: '/' },
        { id: 3, src: 'twitter-icon.png', link: '/' },
        { id: 4, src: 'youtube-icon.png', link: '/' },
      ],
    }
  },
  computed: {
    ...mapGetters({
      ContactList: 'contact/ContactList',
    }),
    highlight() {
      return this.$route.path
    },
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
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
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
    onGoToPath(nameRouter) {
      this.menuItemActive = nameRouter
      this.openSidebar = false
      this.$router.push({ name: nameRouter })
    },
    handleScroll() {
      this.scrollProgress = window.scrollY
    },
    showContact() {
      this.$modal.show('contactModal')
    },
    OpenS() {
      this.openSidebar = true
    },
    CloseS() {
      this.openSidebar = false
    },
  },
}
</script>
<style lang="scss">
#header {
  .router-link-exact-active {
    color: #ffb800 !important;
  }
  .left-header {
    display: flex;
    @media (max-width: 420px) {
      display: block;
    }
  }
  .icons-frame {
    display: flex;
    width: 168px;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 2.5rem;
    @media (max-width: 768px) {
      margin-left: 1.5rem;
      display: flex;
      justify-content: space-between;
      width: 130px;
    }
    @media (max-width: 420px) {
      display: none;
    }
    .icon {
      position: relative;
      width: 100%;
      max-width: 17px;
      position: relative;
      height: 17px;
      img {
        position: absolute;
        width: 100% !important;
        // object-fit: scale-down;
        top: 0;
        left: 0;
        object-position: center;
        height: 100%;
      }
    }
  }
  .header-fr {
    height: 100%;
    margin: auto;
  }
}
</style>
<style lang="scss" scoped>
#header {
  padding: 0rem 3.75rem;
  height: 85px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  @media (max-width: 768px) {
    padding: 0rem 1.75rem;
  }
  @media (max-width: 575px) {
    padding: 0rem 15px;
  }
  &.activeBg {
    background: rgb(128, 128, 128) !important;
    background: rgba(128, 128, 128, 0.02) !important;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      backdrop-filter: blur(12px);
      content: '';
      width: 100%;
      height: 100%;
      background: rgb(128, 128, 128) !important;
      background: rgba(128, 128, 128, 0.48) !important;
      z-index: -1;
    }
  }

  .social-top {
    a {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      color: #000000;
      opacity: 0.6;
      text-decoration: none;
      padding-left: 15px;
      &:hover {
        cursor: pointer;
        opacity: 1;
        color: #3385ff;
      }
    }
  }
  .scroll-header {
    // background-color: transparent;
    border: none;
    position: absolute;
    box-shadow: 0 8px 24px rgb(67 84 240 / 20%);
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    height: 45px;
    width: 45px;
    cursor: pointer;
    display: block;
    border-radius: 50px;
    box-shadow: inset 0 0 0 2px rgb(95 58 252 / 20%);
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    padding: 0;

    @media (max-width: 991px) {
      right: 10px;
    }

    .header-after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 24px;
        object-fit: scale-down;
      }
    }
  }

  .header-btns {
    margin-right: 3rem;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    @media (max-width: 768px) {
      margin-right: 1rem;
    }
  }
  .noActiveProgress {
    opacity: 0;
    visibility: hidden;
  }

  .activeProgress {
    opacity: 1;
    visibility: visible;
  }

  svg {
    vertical-align: middle;
  }

  path {
    stroke: #ffb800;
    fill: none;
    stroke-width: 4px;
    box-sizing: border-box;
  }
  .logo-nav {
    display: none;
    img {
      height: 75px;
      object-fit: scale-down;
    }
    @media (max-width: 575px) {
      display: block;
    }
    margin-right: 1rem;
  }
  .header-logo {
    height: 100%;
    display: flex;
    align-items: center;
    img {
      // width: 100%;
      max-height: 65px;
      height: 100%;
      object-fit: scale-down;
    }
  }
  .header-menu {
    height: 100%;
    z-index: 99;
    position: fixed;
    top: 0;
    padding: 1rem;
    width: 350px;
    background: #ffffff;
    box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
    right: 0;
    animation: 0.5s slideInRight alternate;
    @media (max-width: 768px) {
      width: 225px;
    }
    @media (max-width: 575px) {
      width: 100%;
      padding: 0;
    }
    // -webkit-transition: all 0.3s linear;
    // -moz-transition: all 0.3s linear;
    // -ms-transition: all 0.3s linear;
    // -o-transition: all 0.3s linear;
    // transition: all 0.3s linear;

    // -webkit-transform: translate3d(0, 0, 0);
    // -moz-transform: translate3d(0, 0, 0);
    // -o-transform: translate3d(0, 0, 0);
    // -ms-transform: translate3d(0, 0, 0);
    // transform: translate3d(0, 0, 0);
    .close-btn {
      position: absolute;
      right: 5%;
      top: 5%;
      border: none;
      background: transparent;
    }
    .icon-menu {
      position: absolute;
      bottom: 15%;
      display: flex;
      @media (max-width: 575px) {
        left: 50%;
        transform: translateX(-50%);
      }
      img {
        margin-right: 1rem;
        &:hover {
          cursor: pointer;
          color: #ffb800 !important;
        }
      }
    }
    .split-ball {
      max-width: 95px;
      position: absolute;
      top: 70%;
      right: 0%;
      width: 100%;
      img {
        width: 100%;
        object-fit: scale-down;
      }
    }
    .yellow-ball {
      max-width: 95px;
      width: 100%;
      position: absolute;
      top: 55%;
      right: 15%;
      img {
        width: 100%;
        object-fit: scale-down;
      }
    }
    .language-frame {
      display: flex;
      position: absolute;
      top: 12%;
      width: 100%;
      @media (max-width: 575px) {
        justify-content: space-around;
      }
      .language {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 500;
        font-size: clamp(16px, 2.5vw, 18px);
        line-height: 24px;
        /* identical to box height, or 133% */

        color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
      }
      .language-active {
        color: #ffb800;
        font-weight: 500;
      }
    }
    p {
      position: absolute;
      bottom: 0;
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      /* or 60% */
      font-size: clamp(16px, 2.5vw, 18px);
      /* or 133% */
      text-align: left;
      letter-spacing: 0.05em;

      color: #000000;

      opacity: 0.5;
      @media (max-width: 575px) {
        // position: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }
  .header-menu-item-frame {
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    justify-content: center;
    position: absolute;
    top: 23%;

    @media (max-width: 575px) {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    a {
      text-decoration: none;
      color: #000000;
      opacity: 0.4;
      &:hover {
        color: #ffb800;
        opacity: 1;
      }
    }

    button {
      border: none;
      box-shadow: none;
      background: none;
      text-decoration: none;
      color: #000000;
      opacity: 0.4;
      font-size: 30px;
      padding: 0;
      height: 63.75px;
    }
    a.nuxt-link-active {
      font-weight: bold;
      opacity: 1;
      &:hover {
        color: #000;
      }
    }
  }
  .header-menu-item-btn {
    background: transparent;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(26px, 2.5vw, 30px);
    line-height: 150%;

    text-decoration: none;
    flex: 1;
    max-width: -webkit-max-content;
    max-width: -moz-max-content;
    max-width: max-content;
    color: rgba(0, 0, 0, 0.4);
    border: none;
    padding: 0;
    &:focus {
      border: none;
      box-shadow: none;
    }
    &:hover {
      color: #ffb800;
    }
  }
  .header-menu-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(26px, 2.5vw, 30px);
    line-height: 150%;
    text-decoration: none;
    flex: 1;
    max-width: -webkit-max-content;
    max-width: -moz-max-content;
    max-width: max-content;
    color: rgba(0, 0, 0, 0.4);
    &:hover {
      color: #ffb800;
    }
  }

  .nuxt-link-exact-active,
  .nuxt-link-active {
    color: #ffb800;
    font-weight: 500;
    font-size: clamp(20px, 2.5vw, 30px);
    line-height: 150%;
  }
  // .header-menu {
  //   -webkit-transform: translate3d(200px, 0, 0);
  //   -moz-transform: translate3d(200px, 0, 0);
  //   -o-transform: translate3d(200px, 0, 0);
  //   -ms-transform: translate3d(200px, 0, 0);
  //   transform: translate3d(200px, 0, 0);
  // }

  .menu-icon {
    cursor: pointer;
    height: 19px;
    width: 24px;
  }

  .line-1,
  .line-3 {
    height: 0.2;
    width: 23px;
    background: #ffff;
    margin-bottom: 0.25rem;
  }

  .menu-icon:hover .line2 {
    width: 23px;
  }

  .line {
    height: 0.15rem;
    width: 23px;
    background: #000000;
    margin-bottom: 0.25rem;
  }

  .line-2 {
    width: 11.5px;
    transition: all 0.4s;
  }

  .menu-icon:hover .line {
    width: 23px;
  }
  .pitech-content {
    font-size: 16px;
    margin-bottom: 30px;
  }
  @keyframes slideInRight {
    from {
      right: -200%;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }
}
</style>
