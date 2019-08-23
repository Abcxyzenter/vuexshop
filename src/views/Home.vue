<template>
  <div class="home" v-if="productList && productList.length > 0">
    <div v-for="(item, index) in productList" v-bind:key="index">
        <ProductInList
        :productName="item.name"
        :productPrice="item.price"
        :productImage="item.image"
        :productIndex="index"
        />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ProductInList from '@/components/ProductInList.vue'
import { mapState } from 'vuex'
@Component({
  components: {
    ProductInList
  },
  computed: {
    ...mapState(['productList'])
  }
})
export default class Home extends Vue {}
</script>
<style lang="stylus">
.home
    width 100%
    max-width 100%
    display flex
    justify-content space-around
    flex-wrap wrap
    display flex
</style>
