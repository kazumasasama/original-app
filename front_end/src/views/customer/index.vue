<template>
  <div class="app-container documentation-container">
    <CustomerTable :customers="customer" />
  </div>
</template>

<script>
import CustomerTable from './components/CustomerTable'
import { mapGetters } from 'vuex'

export default {
  name: 'Customer',
  components: { CustomerTable },
  computed: {
    ...mapGetters({
      customers: 'customer/customerAll'
    })
  },
  mounted() {
    this.$store.dispatch('customer/getCustomerInfo')
  }
}
</script>

<style lang="scss" scoped>
</style>
