<template>
  <div id="contactService">
    <div class="content-wrap">
      <div class="contactTitle">Contact us!</div>
      <div class="form-wrap">
        <b-form @submit.prevent="onSendContact" @reset="onReset">
          <b-row
            class="d-flex align-items-center justify-content-around text-align"
          >
            <b-col cols="12" md="4">
              <b-form-group
                id="input-group-1"
                label="Name*"
                label-for="input-name"
              >
                <b-form-input
                  id="input-name"
                  v-model="form.name"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Email*"
                label-for="input-email"
              >
                <b-form-input
                  id="input-email"
                  v-model="form.email"
                  type="email"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-3"
                label="Phone*"
                label-for="input-phone"
              >
                <b-form-input
                  id="input-phone"
                  v-model="form.phone"
                  type="tel"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="5">
              <b-form-group
                id="input-group-4"
                label="What do you want?"
                label-for="input-content"
              >
                <b-form-textarea
                  id="input-content"
                  v-model="form.message"
                  class="scroll"
                  placeholder="Enter something..."
                  rows="6"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <div class="btn-wrap">
            <b-button type="submit">Send</b-button>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ContactService',
  data() {
    return {
      form: {
        email: '',
        name: '',
        phone: '',
        message: '',
      },
    }
  },
  methods: {
    onReset() {
      this.form.email = ''
      this.form.name = ''
      this.form.phone = ''
      this.form.message = ''
    },
    onSendContact() {
      const res = {
        name: this.form.name,
        email: this.form.email,
        phone: this.form.phone,
        message: this.form.message,
      }
      this.$store.dispatch('contact/req_getDataContact', res)
      this.onReset()
    },
  },
  computed: {
    ...mapGetters({
      Contact: 'contact/Contact',
    }),
  },
  watch: {},
}
</script>

<style lang="scss">
#contactService {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: left;
  .content-wrap {
    width: 100%;
    .contactTitle {
      font-family: 'Poppins';
      text-align: center;
      color: #000;
      font-weight: 400;
      font-size: clamp(22px, 2.8vw, 40px);
      line-height: 150%;
      margin-bottom: 20px;
      letter-spacing: 0.08em;
    }
    .form-wrap {
      #input-group-1,
      #input-group-2,
      #input-group-3,
      #input-group-4 {
        color: rgba(0, 0, 0, 0.4);
        font-weight: 400;
        font-size: clamp(16px, 2.5vw, 18px);
        line-height: 150%;
        font-family: 'ABeeZee';
        &:not(:last-child) {
          label {
            margin-bottom: 0;
          }
        }
      }
      #input-name,
      #input-email,
      #input-phone {
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 0;
        padding: 0;
        height: calc(1.2em + 0.5rem + 2px);
      }
      #input-content {
        border: 1px solid #000000;
        border-radius: 10px;
      }
      .form-control {
        &:focus {
          background: none;
          outline: none;
          box-shadow: none;
        }
      }
    }
    .scroll::-webkit-scrollbar {
      display: none;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .btn-wrap {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    button {
      max-width: 120px;
      width: 100%;
      background: linear-gradient(
        180deg,
        #f4d156 0%,
        rgba(224, 170, 32, 0.93) 100%
      );
      border-radius: 4px;
      font-weight: 400;
      font-size: clamp(14px, 2.5vw, 18px);
      line-height: 150%;
      color: #000;
    }
  }
}
</style>
