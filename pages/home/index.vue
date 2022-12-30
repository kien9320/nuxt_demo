<template>
  <div class="position-relative">
    <div id="Home">
      <div class="d-none d-md-block">
        <BannerView />
      </div>
      <div class="d-block d-md-none">
        <BannerMobileView />
      </div>
      <div class="processCreView">
        <div class="top-wrap">
          <div class="top-process-frame">
            <img src="@/assets/images/home/top-process.png" alt="" />
            <div class="top-process-title">CREATIVE PROCESS</div>
          </div>
        </div>
        <ProcessCreView />
      </div>
      <ShineUrBrandView />
      <AboutView />
      <AbilityView />
      <div class="desktop mt-0 mt-lg-5">
        <ComprehensiveView />
      </div>
      <div class="mobile">
        <ComprehensiveMobileView />
      </div>
      <div class="desktop">
        <TeamView />
      </div>
      <div class="mobile">
        <TeamViewMobile />
      </div>
      <div class="project">
        <div class="top-wrap">
          <div class="top-process-frame">
            <img src="@/assets/images/home/Rectangle 2986.png" alt="" />
            <div class="top-process-title">projects</div>
          </div>
        </div>
        <ProjectView />
      </div>
      <div class="position-relative">
        <div class="top-wrap">
          <div class="top-process-frame">
            <img src="@/assets/images/home/Rectangle 2986.png" alt="" />
            <div class="top-process-title">WHY CHOOSE US</div>
          </div>
        </div>
        <ReasonView />
      </div>

      <OurFeedBackView />
      <PartnerView />
      <PressView />
    </div>

    <!-- <div>
        <img src="@/assets/images/home/down-btn.png" alt="" />
      </div> -->
    <!-- <b-list-group class="link-href">
      <b-list-group-item
        :class="hash === `#${item.href}` ? 'active' : 'd-flex'"
        v-for="(item, idx) in link"
        :key="item + idx"
        :href="`#${item.href}`"
      >
      </b-list-group-item>
    </b-list-group> -->
    <!-- <div>
        <img src="@/assets/images/home/down-btn.png" alt="" />
      </div> -->
  </div>
</template>

<script>
import BannerMobileView from '@/components/home/BannerMobile.vue'
import PressView from '@/components/home/Press.vue'
import OurFeedBackView from '@/components/home/OurFeedBackView.vue'
import ReasonView from '@/components/home/ReasonView.vue'
import ShineUrBrandView from '@/components/home/ShineUrBrandView.vue'
import BannerView from '@/components/home/BannerView.vue'
import ProcessCreView from '@/components/home/ProcessCreView.vue'
import AboutView from '@/components/home/AboutView.vue'
import AbilityView from '@/components/home/AbilityView.vue'
import ComprehensiveView from '@/components/home/ComprehensiveView.vue'
import TeamView from '@/components/home/TeamView.vue'
import ProjectView from '@/components/home/ProjectView.vue'
import PartnerView from '@/components/home/PartnerView.vue'
import ComprehensiveMobileView from '@/components/home/ComprehensiveMobile.vue'
import TeamViewMobile from '@/components/home/TeamViewMobile.vue'

export default {
  name: 'HomeView',

  components: {
    BannerMobileView,
    PressView,
    TeamViewMobile,
    OurFeedBackView,
    PartnerView,
    TeamView,
    BannerView,
    ShineUrBrandView,
    ProcessCreView,
    AboutView,
    AbilityView,
    ComprehensiveView,
    ComprehensiveMobileView,
    ProjectView,
    ReasonView,
  },
  data() {
    return {
      hash: this.$route.hash,
      active: 1,
      link: [
        {
          id: 1,
          href: 'Ability',
        },
        {
          id: 2,
          href: 'About',
        },
        {
          id: 3,
          href: 'Banner',
        },
        {
          id: 4,
          href: 'comprehensive',
        },

        {
          id: 5,
          href: 'FeedbackView',
        },
        {
          id: 6,
          href: 'Partner',
        },
        {
          id: 7,
          href: 'Process',
        },
        {
          id: 8,
          href: 'Project',
        },
        {
          id: 9,
          href: 'reason',
        },
        {
          id: 10,
          href: 'ShineUrBrand',
        },
        {
          id: 11,
          href: 'TeamView',
        },
      ],
    }
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.top-wrap {
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
      left: 40%;
      width: 100%;
      transform: translate(-50%, -50%);
      text-transform: uppercase;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      font-size: clamp(16px, 2.5vh, 18px);
      /* identical to box height */

      letter-spacing: 0.2em;

      color: #ffff;
    }
  }
}
.processCreView {
  background: none !important;
}
.project,
.processCreView {
  position: relative;
  background: #000000;
  // padding: 8rem 0 3rem 0;
  @media (max-width: 991px) {
    // padding: 2rem 0;
  }
}
.list-group-item {
  padding: 0;
}
.active {
  background: red !important;
}
.list-group-item-action:hover {
  background: blue !important;
}

.link-href {
  display: flex;
  position: fixed;
  top: 35%;
  right: 1%;
  flex-direction: column;
  // width: 100%;
  // height: 100%;
  a {
    background: rgba(128, 128, 128, 0.6) !important;
    width: 7px;
    height: 7px;
    border-radius: 32px;
    margin-bottom: 1rem;
    .span-clicked {
      z-index: 50;
    }
  }
}
.mobile {
  display: none;
}
@media (max-width: 991.5px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>

<style lang="scss">
#Home {
  overflow: hidden;
  .container-fluid {
    padding: 3rem 5rem !important;
    @media (max-width: 991px) {
      padding: 1rem 15px 2rem 15px !important;
    }
    @media (max-width: 575px) {
      padding: 1rem 15px 1.5rem 15px !important;
    }
  }
  .title {
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
    letter-spacing: 0.2em;
  }
}
</style>
