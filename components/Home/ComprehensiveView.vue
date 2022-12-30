<template>
  <div
    v-if="comprehensiveList && comprehensiveList.length > 0"
    id="comprehensive"
  >
    <div class="top-process-frame">
      <img src="@/assets/images/home/Rectangle 2986.png" alt="" />
      <h1 class="top-process-title">Comprehensive Marketing Service</h1>
    </div>
    <img
      v-if="
        comprehensiveList[indexActive] &&
        comprehensiveList[indexActive].service_background
      "
      :src="comprehensiveList[indexActive].service_background"
      alt=""
      class="main-bg"
    />
    <div class="background-card"></div>
    <!-- <b-container fluid="xl" class="px-0 py-3"> -->
    <b-container fluid>
      <b-row>
        <b-col
          v-for="(item, idx) in comprehensiveList"
          :key="item + idx"
          class="comprehensive-col"
          xl="3"
          lg="4"
          md="6"
          cols="12"
        >
          <b-row
            class="ml-0 w-100 h-100 d-flex align-items-center text-row"
            @mouseover="changeImage(idx)"
          >
            <b-col class="icon-frame" cols="3">
              <img :src="item.service_image" alt="" f />
            </b-col>
            <b-col class="icon-frame-hover" cols="3">
              <img :src="item.service_image_after" alt="" />
            </b-col>
            <b-col cols="9" class="text-frame p-0">
              <h1 class="title-cont">
                {{ item.service_title }}
              </h1>
              <div class="des" v-html="item.service_content"></div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ComprehensiveView',
  data() {
    return {
      comprehensiveList: [],
      indexActive: 0,
    }
  },
  computed: {
    ...mapGetters({
      Comprehensive: 'home/Comprehensive',
    }),
    // dataComprehensive() {
    //   return this.Comprehensive.data
    // },
    activePic() {
      const data = this.comprehensiveList.find(
        (element) => +element.service_id === +this.indexActive
      )
      return data
    },
  },
  watch: {
    Comprehensive(newVal) {
      this.comprehensiveList = newVal
    },
  },
  created() {
    this.$store.dispatch({ type: 'home/req_getComprehensive' })
  },
  methods: {
    changeImage(idx) {
      setTimeout(() => {
        this.indexActive = idx
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
#comprehensive {
  position: relative;
  .img-to-left {
    margin-left: -2rem;
  }
  .fadeInAnimation {
    animation: 2s fadeIn alternate;
  }
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
      transform: translate(-50%, -35%);
      text-transform: uppercase;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      /* identical to box height */

      letter-spacing: 0.2em;

      color: #ffff;
    }
  }
  @media (max-width: 992px) {
    .main-bg,
    .comprehensive-container {
      display: none;
    }
  }
  .main-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    // animation: 2s fadeIn alternate;
  }
  .background-card {
    background-color: rgba(0, 0, 0, 0.85);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
  @keyframes ChangeImg {
    from {
      display: none;
    }
    to {
      display: block;
    }
  }

  @keyframes bounce {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, -25%);
    }
  }
  .comprehensive-col {
    min-height: 250px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2rem;

    .text-row {
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: transparent;

      &:hover {
        animation: fadeIn 1s alternate;
        background: linear-gradient(
          90.93deg,
          #ae6713 3.06%,
          #f1c36e 53.56%,
          #dcb849 99.06%
        );
        .des {
          color: #000000 !important;
          opacity: 0.8 !important;
        }
        .title {
          color: #000000 !important;
          opacity: 0.8 !important;
        }
        border: 1px solid rgba(255, 255, 255, 0.2);
        .icon-frame {
          display: none;
        }
        .icon-frame-hover {
          display: block;
          animation: 0.5s linear bounce;
          transform: translate(0, -25%);
        }
      }
      .icon-frame {
        // max-width: 140px;
        display: block;
        width: 100%;
        padding-left: 0 !important;
        img {
          width: 100%;
          object-fit: scale-down;
          object-position: left;
        }
      }
      .icon-frame-hover {
        // max-width: 140px;
        width: 100%;
        display: none;
        padding-left: 0 !important;
        img {
          width: 100%;
          object-fit: scale-down;
          object-position: left;
        }
      }
      .text-frame {
        text-align: left;
        .des {
          font-family: 'ABeeZee', sans-serif;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
          font-size: clamp(16px, 2.5vw, 18px);
          display: flex;
          align-items: center;

          color: #ffffff;
        }
        .title-cont {
          font-family: 'Poppins', sans-serif;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 40px;
          display: flex;
          align-items: center;
          // letter-spacing: 0.12em;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
