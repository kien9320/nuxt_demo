<template>
  <div id="About">
    <b-container fluid>
      <b-row class="w-100 ml-0">
        <b-col
          xl="6"
          lg="12"
          cols="12"
          class="col-about"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <h1 class="title">about pi creative</h1>
          <div class="location-frame">
            <div class="map-frame">
              <img src="@/assets/images/home/map.png" alt="" />
            </div>
            <div class="location location-1">
              <img src="@/assets/images/home/Asset 4@2x.png" alt="" />
            </div>
            <div class="location location-2">
              <img src="@/assets/images/home/Asset 5@2x.png" alt="" />
            </div>
            <div class="location location-3">
              <img src="@/assets/images/home/Asset 3@2x.png" alt="" />
            </div>
            <div class="location location-4">
              <img src="@/assets/images/home/1@2x.png" alt="" />
            </div>
            <div class="location location-5">
              <img src="@/assets/images/home/Asset 6@2x.png" alt="" />
            </div>
          </div>
        </b-col>
        <b-col
          xl="6"
          lg="12"
          cols="12"
          class="col-about right"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div class="des my-3 my-md-0">
            We are a company that provides comprehensive marketing solutions for
            the leading prestigious Blockchain projects in Southeast Asia,
            deploying projects with high efficiency, optimizing costs,
            committing to KPIs and always in the mood to create value - revenue
            for our partners.
          </div>
          <b-row class="main-row">
            <b-col
              v-for="(item, idx) in about"
              :key="item + idx"
              class="about-fr p-0"
              md="4"
              cols="6"
              sm="4"
            >
              <div class="about-icon mt-3 mt-md-5">
                <img
                  :src="require(`@/assets/images/home/${item.src}`)"
                  alt=""
                />
              </div>
              <div class="nums my-2 my-sm-3">
                {{ item.nums }}
              </div>
              <div class="about-des">
                {{ item.des }}
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      about: [
        { id: 1, src: 'exp.svg', des: 'Experience', nums: '10+' },
        { id: 2, src: 'services.svg', des: 'Services', nums: '30+' },
        { id: 3, src: 'customer.svg', des: 'Customer', nums: '500+' },
        { id: 4, src: 'expert.svg', des: 'Blockchain Expert', nums: '50+' },
        {
          id: 5,
          src: 'satisfaction.svg',
          des: 'Customer Satisfaction',
          nums: '10+',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#About {
  @keyframes location {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .main-row {
    justify-content: flex-start;
    width: 100%;
    margin-left: 0;
  }
  .right {
    padding-top: 5rem;
    @media (max-width: 991px) {
      padding: 0;
    }
  }
  .col-about {
    .location-frame {
      @media (max-width: 991px) {
        padding: 2rem;
      }
      position: relative;
      .map-frame {
        width: 100%;
        margin-top: 7.5rem;
        img {
          object-fit: contain;
          width: 100%;
        }
        @media (max-width: 991px) {
          margin-top: 0;
        }
      }
      .location {
        position: absolute;
        img {
          width: 100%;
          object-fit: scale-down;
        }
      }
      .location-1 {
        top: 0;
        left: 7%;
        animation: location linear infinite alternate;
        animation-delay: 2s;
        animation-duration: 10s;
      }
      .location-2 {
        top: 32%;
        left: 21%;
        animation: location linear infinite alternate;
        animation-delay: 4s;
        animation-duration: 8s;
      }
      .location-3 {
        top: 10%;
        left: 42%;
        animation: location linear infinite alternate;
        animation-delay: 6s;
        animation-duration: 6s;
      }
      .location-4 {
        top: 5%;
        right: 8%;
        animation: location linear infinite alternate;
        animation-delay: 8s;
        animation-duration: 4s;
      }
      .location-5 {
        bottom: 3%;
        right: 0%;
        animation: location linear infinite alternate;
        animation-delay: 10s;
        animation-duration: 2s;
      }
      @media (max-width: 991px) and (min-width: 768px) {
        .location-1 {
          top: 15%;
          left: 15%;
          animation: location linear infinite alternate;
          animation-delay: 2s;
          animation-duration: 10s;
        }
        .location-2 {
          top: 26%;
          left: 38%;
          animation: location linear infinite alternate;
          animation-delay: 3s;
          animation-duration: 7s;
        }
        .location-3 {
          top: 15%;
          left: 45%;
          animation: location linear infinite alternate;
          animation-delay: 5s;
          animation-duration: 5s;
        }
        .location-4 {
          top: 5%;
          right: 16%;
          animation: location linear infinite alternate;
          animation-delay: 4s;
          animation-duration: 6s;
        }
        .location-5 {
          bottom: 10%;
          right: 8%;
          animation: location 5s linear 2s infinite alternate;
          animation-delay: 6s;
          animation-duration: 4s;
        }
      }
    }
  }
  .about-fr {
    .about-icon {
      width: 100%;
      margin: auto;
      img {
        max-height: 80px;
        width: 100%;
        object-fit: scale-down;
      }
    }
    .about-des {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      font-size: clamp(14px, 2.5vw, 18px);
      /* or 156% */

      display: flex;
      align-items: center;
      justify-content: center;

      color: #000000;

      opacity: 0.8;

      /* Inside auto layout */

      flex: none;
      order: 1;
      flex-grow: 0;
    }
    .nums {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      font-size: clamp(24px, 2.5vw, 30px);
      /* identical to box height, or 167% */

      display: flex;
      align-items: center;
      justify-content: center;

      color: #000000;
    }
  }
  .des {
    font-family: 'ABeeZee', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-size: clamp(18px, 2.5vw, 22px);
    /* or 127% */
    text-align: left;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #000000;
  }
}
</style>
