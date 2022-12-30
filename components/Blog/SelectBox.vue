<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SelectBox',
  props: {
    stylingProps: {
      type: Object,
      required: false,
      default: () => {},
    },
    noStyle: {
      type: Boolean,
      required: false,
      default: false,
    },
    onlySelect: {
      type: Boolean,
      required: false,
      default: false,
    },
    placeHolder: {
      type: String,
      required: false,
      default: '',
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      categories: [],
      blogs: [],
      search: {
        title: '',
        blogId: '',
      },
      // eslint-disable-next-line no-nested-ternary
      selected: this.default ? this.default : '',
      open: false,
    }
  },
  computed: {
    ...mapGetters({
      Blog: 'blog/Blog',
      Category: 'blog/Category',
    }),
    filteredList() {
      if (this.onlySelect) return this.categories
      return this.categories.filter((blog) =>
        blog.article_categories_id.toLowerCase().includes(this.selected)
      )
    },
    selectArrow() {
      return this.onlySelect ? 'block' : 'none'
    },
  },
  watch: {
    Blog(newVal) {
      this.blogs = newVal
    },
    Category(newVal) {
      this.categories = newVal
    },
  },
  created() {
    this.onCallFirstApi()
  },

  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  unmounted() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    searchKey() {
      this.search.blogId = this.selected
      this.$store.dispatch('blog/reqGetBlog', this.search)
    },
    onCallFirstApi() {
      this.$store.dispatch('blog/reqGetBlog')
      this.$store.dispatch('blog/req_getCategories')
    },
    handleClickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.open = false
      }
    },
  },
}
</script>

<template>
  <label
    v-if="categories.length > 0"
    class="plane-forInputBox"
    :class="{ 'plane-forInputBox-style': !noStyle }"
  >
    <div
      class="inputField"
      :class="{ rotated: open }"
      @click="open = !open"
      @keypress="open = true"
    >
      <div class="icon">
        <slot name="icon"></slot>
      </div>
      <input
        v-model="filteredList.article_categories_name"
        class="plane-inputBox"
        :class="{
          inputOpen: open,
          'plane-inputBox-style': !noStyle,
        }"
        v-bind="{ disabled: onlySelect }"
        type="text"
        :placeholder="placeHolder"
        autocomplete="off"
      />
      <transition name="openOut">
        <div v-if="open" class="items">
          <div
            v-for="(option, index) of filteredList"
            :key="index"
            class="item"
            :class="{ chosen: option.article_categories_id === selected }"
            @click="
              selected = option.article_categories_id
              open = false
              searchKey()
            "
            @keypress="selected = option"
          >
            {{ option.article_categories_name }}
          </div>
          <!-- <b-form-checkbox
            class="item"
            v-model="selected"
            :value="option.article_categories_name"
            :class="{ chosen: option.article_categories_id === selected }"
            v-for="(option, idx) in filteredList"
            :key="idx"
            @click="
              selected = option.article_categories_id
              open = false
              searchKey()
            "
            @keypress="selected = option"
            >{{ option.article_categories_name}}</b-form-checkbox -->
          >
        </div>
      </transition>
    </div>
  </label>
</template>

<style lang="scss" scoped>
.plane-forInputBox {
  width: 100%;
  white-space: nowrap;
  margin-bottom: 0;
}
.plane-forInputBox-style {
  margin-bottom: 20px;
  @media (max-width: 575px) {
    margin: 0;
  }
}
.plane-inputBox {
  position: relative;
  border: none;
  outline: none;
  width: 90%;
  margin: auto;
  background-color: transparent;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 156% */

  display: flex;
  align-items: center;

  color: #ffffff;
}
.plane-inputBox::placeholder {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 156% */

  display: flex;
  align-items: center;

  color: #ffffff;
}
.plane-inputBox-style {
  background-color: transparent;
  height: 44px;

  text-align: left;
  padding: 0 12px;
  border-bottom: 1px solid #ffffff;
}
.inputField.rotated::after {
  transform: translateY(-75%) rotate(180deg);
}

.inputField::after {
  content: '';
  display: v-bind(selectArrow);
  right: 25px;
  top: 50%;
  transform: translateY(-25%);
  transition: transform 0.2s ease;
  position: absolute;
  border: 7px solid transparent;
  border-color: #575773 transparent transparent transparent;
  z-index: 1;
}
.inputOpen.plane-inputBox-style {
  border-radius: 16px 16px 0px 0px;
}
.inputField {
  position: relative;
}
.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 20px;
  color: black;
  z-index: 1;

  right: 0;
}
.inputField .items {
  width: 100%;
  color: #ffffff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  position: absolute;
  top: 100%;
  z-index: 5;
}
.inputField .items .item {
  padding: 12.5px 0px;
  // padding-left: 30px;
  vertical-align: middle;
  cursor: pointer;

  background-color: #000000;
  transition: all 0.2s ease;
}
.inputField .items div:hover {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 156% */

  display: flex;
  align-items: center;
  justify-content: center !important;
  color: #ffb800;
}
.inputField .items div.chosen {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 156% */

  display: flex;
  align-items: center;
  justify-content: center !important;
  color: #ffb800;
}
</style>
