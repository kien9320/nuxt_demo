export const SEND_CONTACT_SUCCESS = 'SEND_CONTACT_SUCCESS'
export const SET_DATA_CONTACT = 'SET_DATA_CONTACT'
export const state = () => ({
  dataContact: [],
  emailposted: null,
  contactList: null,
})

export const getters = {
  Contact: (state) => state.dataContact,
  PostEmail: (state) => state.emailposted,
  ContactList: (state) => state.contactList,
}

export const actions = {
  req_GetSocial({ commit }, input) {
    this.$axios.get('/contact/get/contact-soscial', input).then((res) => {
      commit('GET_SOCIAL_LIST', res)
    })
  },
  req_getDataContact({ commit }, input) {
    this.$axios.post('/contact/post', input).then((res) => {
      if (res) {
        commit('SET_DATA_CONTACT', res)
      }
    })
  },
  req_postEmail({ commit }, input) {
    this.$axios.post('contact/post/email', input).then((res) => {
      commit('SEND_CONTACT_SUCCESS', res)
    })
  },
}

export const mutations = {
  GET_SOCIAL_LIST(state, data) {
    state.contactList = data
  },
  SET_DATA_CONTACT(state, data) {
    state.dataContact = data
  },
  SEND_CONTACT_SUCCESS(state, data) {
    state.emailposted = data
  },
}
