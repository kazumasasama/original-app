<template>
  <CustomerDetail
    :form="form"
    :process="process"
    @close="close"
  />
</template>

<script>
import CustomerDetail from './components/CustomerDetail'
export default {
  components: { CustomerDetail },
  data() {
    return {
      form: {}
    }
  },
  created() {
    // サーバから最新データを取得する
    this.form = this.$route.params.form
  },
  methods: {
    handleSubmit() {
      if (!this.form.name) return
      // store/modules/customerのアクションeditCustomerを呼び出し、
      this.$store.dispatch('customer/editCustomer', this.form)
      this.$router.push({ path: '/customer/index' })
    },
    cancelBtn() {
      if (confirm('Are you sure? This will take you to index page')) {
        this.$router.push({ path: '/customer/index' })
      }
    },
    close() {
      this.$router.push({ path: '/customer/index' })
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 800px;
  margin: 20px;
}

.container {
  height: 500px;
}
</style>
