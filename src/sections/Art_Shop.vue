<template>
  <section class="Art_Shop">
    <h1>Art Shop</h1>
    <ProductList category="Art_Shop"/>
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'
import SideMainLayout from '@/layout/SideMainLayout'

export default {
  name: 'index',
  components: {
    ProductList,
    SideMainLayout
  }
}
</script>

<style lang="css">
</style>
