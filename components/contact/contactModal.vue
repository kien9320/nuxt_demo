<template>
  <div id="ContactUsView">
    <b-modal :id="`contactModal`" hide-footer hide-header>
      <b-container fluid>
        <div class="modalHeader">
          <img src="@/assets/images/icons/logo.png" alt="logo" />
          <b-button class="close-icon" @click="$bvModal.hide(`contactModal`)">
            <img src="@/assets/images/icons/close.png" alt="close" />
          </b-button>
        </div>
        <div class="modalBody">
          <div class="titleContact">
            DO YOU WANT TO RECEIVE EFFICIENT MARKETING SERVICES WITH FITNESS
            BUDGET?
          </div>
          <div class="subTitle">
            Leave a request below to receive a detailed consultation of over 30
            proven services with the highest performance.
          </div>
          <b-container fluid class="bodyContent">
            <b-row class="mt-3 w-100 ml-0">
              <b-col cols="12" lg="6">
                <div class="form-wrap">
                  <b-form @submit.prevent="onSendContact" @reset="onReset">
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
                    <div class="btn-wrap">
                      <b-button type="submit">Send</b-button>
                    </div>
                  </b-form>
                </div>
              </b-col>
              <b-col cols="12" lg="6">
                <div class="map-wrap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5820727379555!2d106.69835485051159!3d10.766657362280009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6ab081fd19%3A0xacbf23d50cb78b12!2zNCBDYWxtZXR0ZSwgUGjGsOG7nW5nIE5ndXnhu4VuIFRow6FpIELDrG5oLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1664180057164!5m2!1svi!2s"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    class="map"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ContactUsView',
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
  computed: {
    ...mapGetters({
      Contact: 'contact/Contact',
    }),
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
}
</script>
<style lang="scss" scoped>
.map-wrap {
  .map-before {
    height: 600px;
    max-width: 100%;
    width: 100%;
    margin: auto;
    display: block;
    border-radius: 6px;
    @media (max-width: 991px) {
      height: 300px;
      margin-top: 2rem;
    }
    @media (max-width: 575px) {
      height: 250px;
      margin-top: 1.25rem;
    }
  }
  .map {
    height: 600px;
    margin: auto;
    max-width: 100%;
    width: 100%;
    border-radius: 6px;
    @media (max-width: 991px) {
      height: 300px;
      max-width: 100%;
      margin-top: 2rem;
    }
    @media (max-width: 575px) {
      height: 250px;
      margin-top: 1.25rem;
    }
  }
}
</style>
<style lang="scss">
.modal {
  padding: 0 !important;
}
.modal .modal-dialog {
  width: 100%;
  height: 100%;
  max-width: none;
  margin: 0;
}
.modal .modal-content {
  height: 100%;
  width: 100%;
  border: 0;
  border-radius: 0;
}
.modal .modal-body {
  overflow-y: auto;
}
.modal-body {
  background: #000;
  color: #fff;
}

#contactModal {
  .container-fluid {
    padding: 20px 40px;
    @media (max-width: 578px) {
      padding: 20px 0;
    }
  }
  .modalHeader {
    display: flex;
    justify-content: space-between;
    img {
      max-height: 80px;
      height: 100%;
      object-fit: scale-down;
    }
  }
  .modalBody {
    margin: 10px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins';
    font-style: normal;
    .titleContact {
      font-weight: 400;
      font-size: clamp(20px, 2.5vw, 30px);
      line-height: 150%;
      text-align: center;
      width: 70%;
      @media (max-width: 578px) {
        width: 100%;
      }
    }
    .subTitle {
      margin: 10px 0;
      font-weight: 400;
      text-align: center;
      width: 60%;
      font-size: clamp(16px, 2.5vw, 18px);
      opacity: 0.67;
      line-height: 150%;
      @media (max-width: 578px) {
        width: 100%;
      }
    }
  }
  .bodyContent {
    padding: 0 40px;
    @media (max-width: 992px) {
      padding: 0 20px;
    }
    @media (max-width: 578px) {
      padding: 0;
    }
  }
  .close-icon {
    display: flex;
    -webkit-box-align: center;
    align-items: flex-start;
    -webkit-box-pack: center;
    justify-content: center;
    background: none;
    border: none;
    // opacity: 0.4;

    &:focus {
      box-shadow: none !important;
      background-color: transparent !important;
      outline: 0 !important;
    }
    img {
      width: 1.4em;
      height: 1.4em;
      // transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
      cursor: pointer;
      font-size: 0.75rem;
      color: rgb(255, 255, 255);
    }
  }
  .form-wrap {
    #input-group-1,
    #input-group-2,
    #input-group-3,
    #input-group-4 {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 400;
      font-size: clamp(16px, 2.5vw, 18px);
      line-height: 150%;
      font-family: 'ABeeZee';
      label {
        margin-bottom: 5px;
      }
    }
    #input-name,
    #input-email,
    #input-phone {
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.8);
      border-radius: 0;
      padding: 0;
      height: calc(1.2em + 0.5rem + 2px);
      background: transparent;
    }
    #input-content {
      border: 1px solid rgba(255, 255, 255, 0.8);
      background: transparent;
      border-radius: 10px;
    }
    .form-control {
      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 50px;
      /* or 278% */

      display: flex;
      align-items: center;

      color: #ffffff;

      opacity: 0.8;
      &:focus {
        background: none;
        outline: none;
        box-shadow: none;
      }
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
    justify-content: flex-start;
    @media (max-width: 578px) {
      justify-content: center;
    }
    button {
      max-width: 120px;
      width: 100%;
      background: linear-gradient(
        180deg,
        #f4d156 0%,
        rgba(224, 170, 32, 0.93) 100%
      );
      border-radius: 4px;
      font-weight: 500;
      font-size: clamp(14px, 2.5vw, 18px);
      line-height: 150%;
      color: #000;
    }
  }
}
</style>
