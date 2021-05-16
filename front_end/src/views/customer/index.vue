<template>
  <div class="app-container documentation-container">
    <CustomerTable></CustomerTable>
  </div>
</template>

<script>
import CustomerTable from './components/CustomerTable'

export default {
  name: 'Customer',
  components: { CustomerTable },
  data() {
  }
}
</script>

<style lang="scss" scoped>
</style>
