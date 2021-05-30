<template>
  <div class="app-container documentation-container">
    <el-row>
      <router-link :to="'/customer/new'" class="el-button el-button--primary">
            <span>新規登録</span>
          </router-link>
    </el-row>
    <CustomerTable :customers="customers" />
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
