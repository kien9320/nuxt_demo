<template>
  <div id="caseStudyView">
    <b-container id="bannerCaseStudy" fluid>
      <div id="banner">
        <Banner />
      </div>
    </b-container>
    <b-container id="productCaseStudy" fluid>
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
import Banner from '@/components/casestudy/bannerSection.vue'
import Product from '@/components/casestudy/productSection.vue'
import Why from '@/components/casestudy/whyChoose.vue'
import Contact from '@/components/casestudy/contactUs.vue'

export default {
  name: 'CaseStudyView',
  components: { Banner, Product, Why, Contact },
  layout: 'caseStudy',
}
</script>

<style lang="scss">
#caseStudyView {
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
#bannerCaseStudy {
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0;
  }
}
#productCaseStudy {
  padding: 0 32px;
  @media (max-width: 768px) {
    padding: 0 16px;
  }
}
</style>
