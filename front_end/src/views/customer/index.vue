<template>
  <div class="app-container documentation-container">
    <CustomerTable :customers="customer"></CustomerTable>
  </div>
</template>

<script>
import CustomerTable from './components/CustomerTable'

export default {
  name: 'Customer',
  components: { CustomerTable },
  data() {
  },
  computed: {
    ...mapGetters({
      customers: 'customer/customerAll'
    })
  },
  mounted: function () {
      this.$store.dispatch('/customer/getCustomerInfo')
  }
}
</script>

<style lang="scss" scoped>
</style>
