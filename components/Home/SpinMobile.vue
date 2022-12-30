<template>
  <div id="SpinMobile">
    <b-container fluid class="spin-mobile-container">
      <b-row class="w-100 ml-0 px-0">
        <b-col cols="12" xl="6" lg="12" class="why-box-content">
          <div class="bg-why p-0">
            <img
              src="@/assets/images/home/border-circle.png"
              alt=""
              class="big-circle"
            />
            <img
              src="@/assets/images/home/border-circle.png"
              alt=""
              class="small-circle"
            />
            <img src="@/assets/images/home/logo-main.png" alt="" class="logo" />
            <div class="logo-circle">
              <img
                src="@/assets/images/home/logo-main.png"
                alt=""
                class="logo-b"
              />
            </div>
          </div>
          <div class="content-why">
            <div
              class="box box-1"
              :class="{ active: contentActive === 1 }"
              @click.prevent="activeBox(1)"
            >
              <img
                src="@/assets/images/home/item-border.png"
                alt=""
                class="bg"
              />
              <img src="@/assets/images/home/icon 1.png" alt="" class="icons" />
              <div class="text">Identify the problem</div>
            </div>
            <div
              class="box box-2"
              :class="{ active: contentActive === 2 }"
              @click="activeBox(2)"
            >
              <img
                src="@/assets/images/home/item-border.png"
                alt=""
                class="bg"
              />
              <img src="@/assets/images/home/icon 2.png" alt="" class="icons" />
              <div class="text">Research</div>
            </div>
            <div
              class="box box-3"
              :class="{ active: contentActive === 3 }"
              @click="activeBox(3)"
            >
              <img
                src="@/assets/images/home/item-border.png"
                alt=""
                class="bg"
              />
              <img src="@/assets/images/home/icon 3.png" alt="" class="icons" />
              <div class="text">Brainstorm</div>
            </div>
            <div
              class="box box-4"
              :class="{ active: contentActive === 4 }"
              @click="activeBox(4)"
            >
              <img
                src="@/assets/images/home/item-border.png"
                alt=""
                class="bg"
              />
              <img src="@/assets/images/home/icon 4.png" alt="" class="icons" />
              <div class="text">Product and service</div>
            </div>
            <div
              class="box box-5"
              :class="{ active: contentActive === 5 }"
              @click="activeBox(5)"
            >
              <img
                src="@/assets/images/home/item-border.png"
                alt=""
                class="bg"
              />
              <img src="@/assets/images/home/icon 5.png" alt="" class="icons" />
              <div class="text">Get feedback</div>
            </div>
            <div
              class="box box-6"
              :class="{ active: contentActive === 6 }"
              @click="activeBox(6)"
            >
              <img
                src="@/assets/images/home/item-border.png"
                alt=""
                class="bg"
              />
              <img src="@/assets/images/home/icon 6.png" alt="" class="icons" />
              <div class="text">Finishing the product</div>
            </div>
            <div
              class="box box-7"
              :class="{ active: contentActive === 7 }"
              @click="activeBox(7)"
            >
              <img
                src="@/assets/images/home/item-border.png"
                alt=""
                class="bg"
              />
              <img src="@/assets/images/home/icon 7.png" alt="" class="icons" />
              <div class="text">Design handover</div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'SpinMobileView',

  data() {
    return {
      contentActive: null,
      timeOut: null,
      windowWidth: 1000,
    }
  },
  mounted() {
    this.onWindowResize()
  },
  // created() {
  //   window.addEventListener('resize', this.onWindowResize)
  // },
  destroyed() {
    window.removeEventListener('resize', this.onWindowResize)
  },
  methods: {
    activeBox(tab) {
      this.contentActive = tab
    },
    activeSome() {
      if (this.contentActive == null || this.contentActive > 7) {
        this.contentActive = 1
      }
      this.timeOut = setTimeout(() => {
        this.contentActive += 1
        this.activeSome()
      }, 2000)
    },
    onWindowResize() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 768) {
        clearTimeout(this.timeOut)
        this.activeSome()
      } else if (this.timeOut != null) {
        clearTimeout(this.timeOut)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#SpinMobile {
  .spin-mobile-container {
    padding: 0 !important;
  }
  .why-box-content {
    position: relative;
    width: 645px;
    height: 645px;
    margin: auto;
    overflow: hidden;
    padding: 0;

    .bg-why {
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 0;
      }
      .big-circle {
        width: 570px;
        height: 570px;
      }
      .small-circle {
        width: 300px;
        height: 300px;
      }
      .logo {
        width: 150px;
        height: auto;
      }
      .logo-circle {
        display: none;
      }
    }
    .content-why {
      position: relative;
      width: 100%;
      height: 100%;
      animation: rote 20s infinite linear;
      &:hover {
        animation-play-state: paused;
        transition: all 0.5s;
        .box {
          animation-play-state: paused;
        }
      }
      .box {
        width: 145px;
        height: 160px;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 20;
        animation: rote2 20s infinite linear;
        background-image: url('@/assets/images/home/hinhthoi.svg');
        background-size: 100% 100%;
        .bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .icons {
          width: 40px;
          position: relative;
          z-index: 2;
          margin: 5px auto;
          img {
            width: 100%;
            height: auto;
          }
        }
        .text {
          position: relative;
          z-index: 2;

          padding: 0 15px 20px;
          width: 170px;

          font-family: 'Nunito';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          color: #000000;
        }
      }
      .box-1 {
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
      .box-2 {
        right: 15%;
        top: 20%;
        margin: auto;
        transform: rotate(0deg);
        .text,
        .icons {
          transform: rotate(0deg);
        }
      }
      .box-3 {
        right: 75px;
        bottom: 0;
        top: 30%;
        right: 9%;
        margin: auto;
        transform: rotate(2deg);
        .text,
        .icons {
          transform: rotate(-2deg);
        }
      }
      .box-4 {
        bottom: 0;
        // left: 0;
        right: 26%;
        // margin: auto;
      }
      .box-5 {
        left: 15%;
        top: 20%;
        margin: auto;
        transform: rotate(-1deg);
        .text,
        .icons {
          transform: rotate(1deg);
        }
      }
      .box-6 {
        left: 9%;
        bottom: 0;
        top: 30%;
        margin: auto;
        transform: rotate(-1deg);
        .text,
        .icons {
          transform: rotate(1deg);
        }
      }
      .box-7 {
        left: 26%;
        bottom: 0;
        // top: 60%;
        margin: auto;
      }
    }

    @media (max-width: 991px) {
      width: 100%;
      height: 100%;
      .bg-why {
        .big-circle {
          width: 400px;
          height: 400px;
        }
        .small-circle {
          width: 200px;
          height: 200px;
        }
        .logo {
          width: 75px;
          height: auto;
        }
      }
      .content-why {
        .box {
          width: 150px;
          height: 130px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          .icons {
            width: 35px;
            position: relative;
            z-index: 2;
            margin: 10px auto 5px;
            img {
              width: 100%;
              height: auto;
            }
          }
          .text {
            position: relative;
            z-index: 2;
            font-size: 12px;
            text-align: center;
            color: #000000;
            font-weight: 600;
            line-height: 110%;
            padding: 0 27px 20px;
            width: 170px;
          }
        }
        .box-1 {
          top: 5px;
        }
        .box-2 {
          right: 15px;
          top: 18%;
          margin: auto;
          transform: rotate(4deg);
          .text,
          .icons {
            transform: rotate(0deg);
          }
        }
        .box-3 {
          right: -20px;
          bottom: 0;
          top: 25%;
          margin: auto;
          transform: rotate(2deg);
          .text,
          .icons {
            transform: rotate(-2deg);
          }
        }
        .box-4 {
          bottom: 0;
          // left: 0;
          right: 71px;
          margin: auto;
        }
        .box-5 {
          left: 15px;
          top: 20%;
          margin: auto;
          transform: rotate(-1deg);
          .text,
          .icons {
            transform: rotate(1deg);
          }
        }
        .box-6 {
          left: -20px;
          bottom: 0;
          top: 25%;
          margin: auto;
          transform: rotate(-1deg);
          .text,
          .icons {
            transform: rotate(1deg);
          }
        }
        .box-7 {
          left: 71px;
          bottom: 0;
          // top: 60%;
          margin: auto;
          transform: rotate(-1deg);
        }
      }
    }
    @media (max-width: 768px) {
      width: 100%;
      height: auto;

      .bg-why {
        position: relative;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        .big-circle {
          width: 250px;
          height: 250px;
          @media (max-width: 375px) {
            width: 185px;
            height: 185px;
          }
        }
        .small-circle {
          width: 200px;
          height: 200px;
          animation: changeWith2 3s infinite;
          transition: all 0.5s;
          // @media (max-width: 375px) {
          //   display: none;
          // }
        }
        .logo {
          width: 150px;
          height: auto;
          display: none;
        }
        .logo-circle {
          width: 175px;
          height: 175px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          .circle-bg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            // animation: circleRotate 4s linear infinite;
            z-index: 0;
          }
          .logo-b {
            height: 80%;
            width: auto;
            position: relative;
            animation: logoLight 4s linear infinite;
          }
        }
      }
      .content-why {
        animation: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .box {
          width: 150px;
          height: 130px;
          position: relative;
          margin: 15px 10px;
          animation: none;
          transform: rotate(0deg) !important;
          top: 0;
          left: 0;
          right: 0;
          &.active {
            transform: scale(1.1) rotate(0deg) !important;
            z-index: 25;
          }
          .icons {
            width: 35px;
            position: relative;
            z-index: 2;
            margin: 10px auto 5px;
            transform: rotate(0deg) !important;
            img {
              width: 100%;
              height: auto;
            }
          }
          .text {
            position: relative;
            z-index: 2;
            font-size: 12px;
            text-align: center;
            color: #000000;
            font-weight: 600;
            line-height: 110%;
            padding: 0 27px 20px;
            transform: rotate(0deg) !important;
            width: 170px;
          }
        }
      }
    }
    @media (max-width: 374px) {
      .content-why {
        .box {
          margin: 15px 5px;
          .text {
            width: 160px;
          }
        }
      }
    }
  }
  .process-col {
    text-align: left;
    @media (max-width: 991px) {
      padding: 0 !important;
    }
    .process-btn {
      max-width: 220px;
      width: 100%;
      padding: 0;
      border: none;
      background: transparent;
      position: relative;
      margin: 2rem 0;
      @media (max-width: 768px) {
        margin: 1rem 0;
      }
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
  }
}

@keyframes rote {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rote2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes circleRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes logoLight {
  0% {
    filter: drop-shadow(0px 0px 0px #000);
    z-index: 0;
  }
  50% {
    filter: drop-shadow(0px 0px 2px #000);
    z-index: 1;
  }
  100% {
    filter: drop-shadow(0px 0px 0px #ffff);
    z-index: 0;
  }
}
@keyframes changeWith {
  0% {
    width: 205px;
    height: 205px;
    opacity: 1;
  }
  50% {
    width: 305px;
    height: 305px;
    opacity: 0.2;
  }
  100% {
    width: 205px;
    height: 205px;
    opacity: 1;
  }
}
@keyframes changeWith2 {
  0% {
    width: 204px;
    height: 204px;
    opacity: 1;
  }
  50% {
    width: 105px;
    height: 105px;
    opacity: 0.2;
  }
  100% {
    width: 204px;
    height: 204px;
    opacity: 1;
  }
}
</style>
