<template>
  <div v-if="loadingStatus" id="preloader">
    <div id="status">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LoaderComp',
  computed: {
    ...mapGetters({
      loadingStatus: 'core/LoadingStatus',
    }),
  },
}
</script>

<style lang="scss" scoped>
// Loader
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.7)
  );
  z-index: 9999999;
  #status {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    .spinner {
      width: 40px;
      height: 40px;
      position: relative;
      margin: 100px auto;
      .double-bounce1,
      .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #ffb800;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        animation: sk-bounce 2s infinite ease-in-out;
      }
      .double-bounce2 {
        animation-delay: -1s;
      }
    }
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
