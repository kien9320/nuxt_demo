<template>
  <div id="reason">
    <b-container fluid class="reason-container">
      <b-row class="reason-row">
        <div class="reason-row-img">
          <img src="@/assets/images/home/Reason/Group 8995.png" alt="" />
        </div>
        <b-col
          md="6"
          class="cols col-left pt-md-5"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <!-- <div class="title my-lg-5">Vì sao lựa chọn chúng tôi?</div> -->
          <p class="des des-left">
            As an agency with experience in implementing hundreds of projects in
            many fields, Pi Creative consults the best ideas and solutions,
            ready to accompany the project as a supplier, investor,...
            throughout the development journey
          </p>
          <div class="img-frame">
            <img src="@/assets/images/home/Reason/Rectangle 2971.png" alt="" />
          </div>
        </b-col>
        <b-col
          md="6"
          class="cols"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div class="img-frame ml-auto">
            <img src="@/assets/images/home/Reason/Rectangle 2970.png" alt="" />
          </div>
          <p class="des des-right">
            We make the difference with our comprehensive and detailed expertise
            from setting up specific roadmaps and campaigns, consulting on the
            development of technology and financial structures to project
            release and deployment plans. Deploy ideas directly, help your
            project succeed in the blockchain market
          </p>
        </b-col>
      </b-row>
      <b-row class="py-md-5">
        <b-col
          md="6"
          class="blockchain-col"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div class="title d-flex justify-content-center">
            More than just<br />
            “Blockchain Services”
          </div>
          <p class="des blockchain-des">
            As a subsidiary of Pi Solution Group, Pi Creative is supported by
            companies in the same group with many fields such as technology (Pi
            Tech), finance (Pi Finance),...
          </p>
          <p class="des">
            At Pi Creative, you can choose from many service packages depending
            on the needs of the project. From simple communication services to
            build user awareness of the project, to more "heavy" requirements
            such as building and managing an entire community or starting a
            complete project, building a complete project. Web App building,
            trading platform, financial structure… Pi Creative can all meet.
          </p>
        </b-col>
        <b-col
          md="6"
          class="comp-logo-col"
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <div class="right-title">Pi Solution Corporation</div>
          <b-row class="ml-0 w-100">
            <b-col
              v-for="(item, idx) in comp"
              :key="item + idx"
              md="4"
              sm="6"
              cols="6"
              class="my-3 my-md-4"
            >
              <div class="comp-logo">
                <img
                  :src="require(`@/assets/images/home/Reason/${item.src}`)"
                  alt=""
                />
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
  name: 'ReasonView',
  data() {
    return {
      reasonList: null,
      comp: [
        {
          id: 1,
          src: 'pi creative.png',
        },
        {
          id: 2,
          src: 'pi tech.png',
        },
        {
          id: 3,
          src: 'pi finance 2.png',
        },
        {
          id: 4,
          src: 'pi law.png',
        },
        {
          id: 5,
          src: 'pi career.png',
        },
        {
          id: 6,
          src: 'pi english.png',
        },
        {
          id: 7,
          src: 'pi academy.png',
        },
        {
          id: 8,
          src: 'pi gaming 1.png',
        },
        {
          id: 9,
          src: 'pi food.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#reason {
  position: relative;
  .reason-container {
    padding: 0 5rem !important;
    .reason-row {
      position: relative;
      .cols {
        .des-left {
          margin: 4rem 0;
          @media (max-width: 1200px) {
            margin-top: 0;
            margin: 3rem 0;
          }
          @media (max-width: 991px) {
            margin-top: 0;
            margin: 2rem 0;
          }
        }
      }
      .col-left {
        padding-left: 4rem;
        @media (max-width: 1200px) {
          padding-left: 15px;
        }
      }
      .des-right {
        margin-top: 7rem;
        @media (max-width: 1200px) {
          margin-top: 5rem;
        }
        @media (max-width: 991px) {
          margin-top: 0;
          margin-bottom: 2rem;
        }
      }
      .reason-row-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 100%;
          object-fit: scale-down;
        }
        @media (max-width: 991px) {
          display: none;
        }
      }
    }
    @media (max-width: 991px) {
      padding: 2rem 40px !important;

      .cols {
        display: flex;
        flex-direction: column-reverse !important;
      }
    }
    @media (max-width: 575px) {
      padding: 2rem 15px !important;
    }
    .reason-main {
      position: relative;
    }
    .right-title {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      font-size: clamp(24px, 2.5vw, 36px);
      /* or 80% */

      display: flex;
      align-items: center;
      justify-content: center;
      color: #000000;
      opacity: 0.54;
      @media (max-width: 575px) {
        margin-bottom: 2rem;
      }
    }
    .comp-logo-col {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
    }
    .comp-logo {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        object-fit: scale-down;
      }
    }
    .title {
      font-family: 'Poppins' sans-serif;
      font-style: normal;
      font-weight: 400;
      // font-size: 36px;
      line-height: 150%;
      /* or 60% */
      font-size: clamp(24px, 2.5vw, 36px);
      display: flex;
      align-items: center;
      text-align: center;

      color: #000000;
    }
    .blockchain-col {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 2rem;
      .blockchain-des {
        margin-top: 3rem;
        @media (max-width: 991px) {
          margin: 1.25rem 0;
        }
      }
    }
    .img-frame {
      width: 90%;
      // padding: 1rem;
      @media (max-width: 991px) {
        width: 100%;
      }
      img {
        max-height: 350px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .des {
      font-family: 'ABeeZee', sans-serif;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      font-size: clamp(12px, 2.5vw, 14px);
      /* or 133% */

      text-align: left;
      /* Neutral 1 / Text Primary - 900 */

      color: #2c333a;

      opacity: 0.8;
    }
  }
}
</style>
