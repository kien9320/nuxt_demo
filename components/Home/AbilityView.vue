<template>
  <div
    id="Ability"
    data-aos="zoom-out"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
  >
    <!-- <b-container fluid="xl"> -->
    <b-row class="w-100 ml-0">
      <b-col xl="7" md="12" cols="12" class="col-left">
        <h1 class="title">Ability to understand the market</h1>
        <p class="des mt-4">
          Pi Creative owns a relatively experienced staff in the blockchain
          market. The Pi Creative team themselves are all investors in the
          crypto market, directly participating in the project initiation
          process. Thanks to that, we have a deep understanding of technology,
          decentralized finance as well as the blockchain market
        </p>
        <p class="des mt-2 mb-0">
          In addition, Pi Creative also has a wide relationship with major
          Blockchain partners to contribute to helping projects have deeper
          access to the entire market.
        </p>

        <div class="link-btn w-100 mt-0">
          <button class="process-btn" @click="$bvModal.show('contactModal')">
            Contact Us
          </button>
        </div>
      </b-col>
      <b-col cols="12" class="d-block d-xl-none">
        <div class="right-pic">
          <img
            src="@/assets/images/home/Ellipse 843.png"
            alt=""
            :style="{ maxHeight: '375px', height: '100%' }"
          />
        </div>
      </b-col>
      <Contact @showContact="showContact" />
    </b-row>
    <!-- </b-container> -->
    <div class="right-pic d-none d-xl-block">
      <img src="@/assets/images/home/ability.png" alt="" />
    </div>
  </div>
</template>

<script>
import Contact from '@/components/contact/contactModal.vue'
export default {
  name: 'AbilityView',
  components: {
    Contact,
  },
  methods: {
    showContact() {
      this.$modal.show('contactModal')
    },
  },
}
</script>

<style lang="scss" scoped>
#Ability {
  padding: 2rem 0 3rem 0;
  overflow: hidden;
  position: relative;
  @media (max-width: 1200px) {
    padding: 1.75rem 15px;
  }

  .col-left {
    text-align: left;
    padding-left: 5rem;
    z-index: 10;
    @media (max-width: 991px) {
      padding: 0;
    }
    .link-btn {
      @media (max-width: 991px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .process-btn {
      background-image: url('@/assets/images/home/process-btn.svg');
      background-size: cover;
      background-repeat: no-repeat;
      text-transform: uppercase;
      padding: 1rem 3rem;
      border: none;
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: clamp(14px, 2.5vh, 16px);
      line-height: 150%;
      /* identical to box height */

      letter-spacing: 0.06em;

      color: #ffffff;
      @media (max-width: 991px) {
        margin: 1.75rem 0;
      }
      @media (max-width: 575px) {
        margin: 1rem 0;
      }

      img {
        width: 100%;
        object-fit: scale-down;
      }
    }
  }

  .right-pic {
    // width: 100%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    img {
      max-width: 720px;
      width: 100%;
      height: 100%;
      object-fit: contain;
      @media (max-width: 1600px) {
        max-width: 570px;
        width: 100%;
      }
    }
    @media (max-width: 1200px) {
      position: unset;
      transform: unset;
      width: 100%;
      margin: auto;
    }
  }

  .ability-btn {
    max-width: 220px;
    width: 100%;
    padding: 0;
    border: none;
    background: transparent;
    position: relative;
    margin: 2rem 0;
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: 0;
      transform: translate(-50%, -50%);
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height */

      letter-spacing: 0.06em;

      color: #ffffff;
      z-index: 50;
    }

    img {
      width: 100%;
      object-fit: scale-down;
    }
  }
  .des {
    font-family: 'ABeeZee', sans-serif;
    font-style: normal;
    font-weight: 400;

    line-height: 150%;
    font-size: clamp(18px, 2.5vw, 22px);

    /* or 127% */

    display: flex;
    align-items: center;

    color: #000000;

    opacity: 0.8;
  }
}
</style>
