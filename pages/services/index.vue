<template>
  <div id="serviceView">
    <b-container id="bannerService" fluid>
      <div id="banner">
        <Banner />
      </div>
    </b-container>
    <b-container id="productService" fluid>
      <div id="product">
        <Product />
      </div>
    </b-container>
    <div id="why">
      <Why />
    </div>
    <b-container>
      <div id="contact">
        <Contact />
      </div>
    </b-container>
  </div>
</template>

<script>
import Banner from '@/components/services/bannerSection.vue'
import Product from '@/components/services/productSection.vue'
import Why from '@/components/casestudy/whyChoose.vue'
import Contact from '@/components/services/contactUs.vue'

export default {
  name: 'ServiceView',
  components: { Banner, Product, Why, Contact },
}
</script>

<style lang="scss">
#serviceView {
  padding-top: 85px;
  @media (max-width: 768px) {
    padding-top: 0;
  }
  #product,
  #contact,
  #why {
    padding: 64px 0;
    @media (max-width: 578px) {
      padding: 24px 0;
    }
  }
}
#bannerService {
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0;
  }
}
#productService {
  padding: 0 24px;
  @media (max-width: 768px) {
    padding: 0 8px;
  }
}
</style>
