export const state = () => ({
  detailBlog: null,
  categories: [],
  blogs: {
    data: [
      {
        article_title: '',
        created_at: null,
        article_description: '',
        article_category_id: '',
      },
    ],
  },
})

export const getters = {
  Blog: (state) => state.blogs,
  DetailBlog: (state) => state.detailBlog,
  Category: (state) => state.categories,
}
export const actions = {
  req_getCategories({ commit }) {
    this.$axios.get('/article/get/list/article/categories').then((res) => {
      if (res) {
        commit('GET_CATEGORIES', res)
      }
    })
  },
  reqGetDetailArticle({ commit }, slug) {
    this.$axios.get(`article/get/detail?slug=${slug}`).then((res) => {
      if (res) {
        commit('GET_DETAIL_BLOG_SUCCESS', res)
      }
    })
  },

  reqGetBlog({ commit }, input) {
    const title = input && input.title ? input.title : ''
    const blogId = input && input.blogId ? input.blogId : ''
    this.$axios
      .get(`/article/get/list?title=${title}&blog_id=${blogId}`)
      .then((res) => {
        if (res) {
          commit('GET_BLOG_SUCCESS', res)
        }
      })
  },
}

export const mutations = {
  GET_CATEGORIES(state, data) {
    state.categories = data
  },
  GET_DETAIL_BLOG_SUCCESS(state, data) {
    state.detailBlog = data
  },
  GET_BLOG_SUCCESS(state, data) {
    state.blogs = data
  },
}
