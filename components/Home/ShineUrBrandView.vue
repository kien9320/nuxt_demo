<template>
  <div id="ShineUrBrand">
    <b-container fluid>
      <h1 class="top">
        MARKETING EXPERT IN <br class="d-none d-lg-block" />
        METAVERSE WORLD
      </h1>
      <b-row>
        <b-col xl="6" lg="12" cols="12" class="left-col">
          <div
            class="left-col-frame"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <div class="title-fr px-lg-5">
              <h1>Shine your brand</h1>
              <h3>The solution to create magic for the brand</h3>
            </div>
            <p class="des px-lg-5">
              Pi Creative is always up to date with innovation and pioneering in
              market trends. We are constantly researching and testing to find
              advanced technology solutions to support businesses optimally. Pi
              Creative helps partners apply AR/VR to marketing, enhance customer
              experience, and make media campaigns more engaging than ever.
            </p>
          </div>
        </b-col>
        <b-col
          xl="6"
          lg="12"
          cols="12"
          class="d-none d-lg-block"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div class="right-col">
            <img src="@/assets/images/home/Group 8993.png" alt="" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ShienUrBrandView',
}
</script>

<style lang="scss" scoped>
#ShineUrBrand {
  // position: relative;
  .top {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    font-size: clamp(22px, 2.5vw, 30px);
    text-align: center;
    letter-spacing: 0.2em;
    color: rgba(0, 0, 0, 0.6);
    @media (max-width: 540px) {
      text-align: center !important;
    }
  }
  .right-col {
    img {
      width: 100%;
      object-fit: scale-down;
      z-index: 1;
    }
  }
  .des {
    font-family: 'ABeeZee';
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-size: clamp(18px, 2.5vw, 22px);
    /* or 127% */
    text-align: left;
    display: flex;
    // justify-content: flex-start !important;
    align-items: center;
    // letter-spacing: 0.05em;
    z-index: 10;
    color: #000000;
  }
  .title-fr {
    padding-left: 6rem !important;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-weight: 600 !important;
    }
    @media (max-width: 991px) {
      // margin: 3rem 0 !important;
      height: 160px;
      padding-left: 0 !important;
      align-items: center;
      margin: 0;
    }
    @media (max-width: 575px) {
      margin: 0 !important;
    }
    z-index: 2;
    position: relative;
    h3 {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: clamp(18px, 2.5vw, 24px);
      line-height: 150%;
      /* identical to box height */

      display: flex;
      align-items: center;
      letter-spacing: 0.05em;

      color: #000000;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -10px;
      width: 180px;
      height: 200px;
      background-image: url('../../assets/images/home/logo\ k\ text\ 3.png');
      background-size: 100% 100%;
      z-index: -1;
      @media (max-width: 991px) {
        left: 85px;
        width: 145px;
        height: 165px;
      }
      @media (max-width: 575px) {
        width: 115px;
        height: 135px;
        left: 0;
      }
    }
    h1 {
      text-align: left;
      margin: 0;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: clamp(26px, 2.5vw, 40px);
      line-height: 150%;
      letter-spacing: 0.17em;
      text-transform: uppercase;
      color: #000000;
    }
    p {
      text-align: left;
      margin: 0;
      font-family: 'ABeeZee', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: clamp(18px, 2.5vw, 24px);
      line-height: 150%;
      color: #000000;
    }
  }
}
</style>
