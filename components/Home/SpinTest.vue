<template>
  <div id="container-test">
    <div class="bg-why">
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
        <img src="@/assets/images/home/logo-main.png" alt="" class="logo-b" />
      </div>
    </div>
    <div
      class="item"
      :class="{ active: contentActive === 1 }"
      @click.prevent="activeBox(1)"
    >
      <img src="@/assets/images/home/icon 1.png" alt="" class="icons" />
      <div class="text">Identify the problem</div>
    </div>
    <div
      class="item box-2"
      :class="{ active: contentActive === 2 }"
      @click.prevent="activeBox(2)"
    >
      <img src="@/assets/images/home/icon 2.png" alt="" class="icons" />
      <div class="text">Research</div>
    </div>
    <div
      class="item box-3"
      :class="{ active: contentActive === 3 }"
      @click.prevent="activeBox(3)"
    >
      <img src="@/assets/images/home/icon 3.png" alt="" class="icons" />
      <div class="text">Brainstorm</div>
    </div>
    <div
      class="item box-4"
      :class="{ active: contentActive === 4 }"
      @click.prevent="activeBox(4)"
    >
      <img src="@/assets/images/home/icon 4.png" alt="" class="icons" />
      <div class="text">Product and service</div>
    </div>
    <div
      class="item box-5"
      :class="{ active: contentActive === 5 }"
      @click.prevent="activeBox(5)"
    >
      <img src="@/assets/images/home/icon 5.png" alt="" class="icons" />
      <div class="text">Get feedback</div>
    </div>
    <div
      class="item box-6"
      :class="{ active: contentActive === 6 }"
      @click.prevent="activeBox(6)"
    >
      <img src="@/assets/images/home/icon 6.png" alt="" class="icons" />
      <div class="text">Finishing the product</div>
    </div>
    <div
      class="item box-7"
      :class="{ active: contentActive === 7 }"
      @click.prevent="activeBox(7)"
    >
      <img src="@/assets/images/home/icon 7.png" alt="" class="icons" />
      <div class="text">Design handover</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpinView',
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
#container-test {
  --n: 7; /* number of item */
  --d: 25s; /* duration */
  position: relative;
  width: 550px;
  height: 550px;
  margin: 40px auto;
  display: grid;
  place-content: center;
  border-radius: 50%;

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
      width: 550px;
      height: 550px;
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
}
@keyframes rote2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.item {
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
  .box-2 {
    transform: rotate(0deg);
    .text,
    .icons {
      transform: rotate(0deg);
    }
  }

  .box-3 {
    transform: rotate(2deg);
    .text,
    .icons {
      transform: rotate(-2deg);
    }
  }

  .box-5 {
    transform: rotate(-1deg);
    .text,
    .icons {
      transform: rotate(1deg);
    }
  }

  .box-6 {
    transform: rotate(-1deg);
    .text,
    .icons {
      transform: rotate(1deg);
    }
  }

  .box-7 {
    transform: rotate(-1deg);
    .text,
    .icons {
      transform: rotate(1deg);
    }
  }

  .text {
    position: relative;
    z-index: 2;

    padding: 0 15px 10px;
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
.item {
  grid-area: 1/1;
  line-height: 30px;
  // background: #f00;
  animation: spin var(--d) linear infinite;
  transform: rotate(0) translate(255px) rotate(0);
}
@keyframes spin {
  100% {
    transform: rotate(1turn) translate(255px) rotate(-1turn);
  }
}

.item:nth-child(1) {
  animation-delay: calc(-0 * var(--d) / var(--n));
}
.item:nth-child(2) {
  animation-delay: calc(-1 * var(--d) / var(--n));
}
.item:nth-child(3) {
  animation-delay: calc(-2 * var(--d) / var(--n));
}
.item:nth-child(4) {
  animation-delay: calc(-3 * var(--d) / var(--n));
}
.item:nth-child(5) {
  animation-delay: calc(-4 * var(--d) / var(--n));
}
.item:nth-child(6) {
  animation-delay: calc(-5 * var(--d) / var(--n));
}
.item:nth-child(7) {
  animation-delay: calc(-6 * var(--d) / var(--n));
}
/*.item:nth-child(N) {animation-delay:calc(-(N - 1)*var(--d)/var(--n))}*/
</style>
