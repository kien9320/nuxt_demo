<template>
  <div
    v-if="teamList && teamList.length > 0 && staffList && staffList.length > 0"
    id="team"
  >
    <b-container fluid class="team-container">
      <h1 class="title-team">OUR TEAM</h1>
      <b-row>
        <b-col
          v-for="(item, idx) in teamList"
          :key="(item, idx)"
          md="6"
          class="p-3 frame-emp"
        >
          <div class="team-img">
            <img :src="item.image" alt="" class="img-no-active" />
            <img :src="item.img_after" alt="" class="img-active" />
          </div>
          <div class="name-emp mt-3">
            {{ item.name }}
          </div>
          <div class="label-emp mt-3">
            {{ item.position }}
          </div>
          <div class="d-flex justify-content-center mt-3">
            <a class="social mr-3" :href="item.link_linked">
              <img
                src="@/assets/images/home/Employee/linkedin.png"
                alt=""
                class="img-no-active"
              />
              <img
                src="@/assets/images/home/Employee/linkedin-act.png"
                alt=""
                class="img-active"
              />
            </a>
            <a class="social" :href="item.link_facebook">
              <img
                src="@/assets/images/home/Employee/telegram.png"
                alt=""
                class="img-no-active"
              />
              <img
                src="@/assets/images/home/Employee/telegram-act.png"
                alt=""
                class="img-active"
              />
            </a>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="(item, idx) in staffList"
          :key="(item, idx)"
          md="3"
          class="p-3 frame-emp"
        >
          <div class="team-img">
            <img :src="item.image" alt="" class="img-no-active" />
            <img :src="item.img_after" alt="" class="img-active" />
          </div>
          <div class="name-emp mt-3">
            {{ item.staff_member_name }}
          </div>
          <div class="label-emp mt-3">
            {{ item.staff_member_position }}
          </div>
          <div class="d-flex justify-content-center mt-3">
            <a class="social mr-3" :href="item.link_linked">
              <img
                src="@/assets/images/home/Employee/linkedin.png"
                alt=""
                class="img-no-active"
              />
              <img
                src="@/assets/images/home/Employee/linkedin-act.png"
                alt=""
                class="img-active"
              />
            </a>
            <a class="social mr-3" :href="item.link_facebook">
              <img
                src="@/assets/images/home/Employee/telegram.png"
                alt=""
                class="img-no-active"
              />
              <img
                src="@/assets/images/home/Employee/telegram-act.png"
                alt=""
                class="img-active"
              />
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TeamView',
  data() {
    return {
      teamList: [],
      staffList: [],
    }
  },
  computed: {
    ...mapGetters({
      Team: 'home/Team',
      Staff: 'home/Staff',
    }),
  },
  watch: {
    Team(newVal) {
      this.teamList = newVal
    },
    Staff(newVal) {
      this.staffList = newVal
    },
  },
  created() {
    this.$store.dispatch({ type: 'home/req_Team' })
    this.$store.dispatch({ type: 'home/req_Staff' })
  },
}
</script>

<style lang="scss" scoped>
#team {
  .team-container {
    padding: 3rem;
    .title-team {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      font-size: clamp(28px, 2.5vw, 40px) !important;
      /* or 60% */

      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.28em;
      color: #000000;
      @media (max-width: 575px) {
        letter-spacing: 0.12em;
      }
    }
    @media (max-width: 991px) {
      padding: 0 10px;
    }
    .frame-emp {
      &:hover {
        cursor: pointer;

        .img-no-active {
          display: none;
        }
        .img-active {
          display: block;
        }
      }
      .img-no-active {
        display: block;
      }
      .img-active {
        display: none;
      }
      .team-img {
        width: 100%;
        img {
          max-height: 250px;
          width: 100%;
          height: 100%;
          object-fit: scale-down;
        }
      }

      .label-emp {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        /* or 133% */

        display: flex;
        align-items: center;
        justify-content: center;

        color: #000000;

        opacity: 0.67;
      }
      .name-emp {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        /* or 133% */

        display: flex;
        align-items: center;
        justify-content: center;

        color: #000000;
      }
    }
  }
}
</style>
