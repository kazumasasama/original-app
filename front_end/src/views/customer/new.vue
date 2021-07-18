<template>
  <div class="form">
    <el-row>
      <h1>{{ $t('customer.add') }}</h1>
    </el-row>
    <CustomerForm
      :form="form"
      :process="process"
      @handleSubmit="handleSubmit"
      @cancelBtn="cancelBtn"
    />
  </div>
</template>

<script>
import CustomerForm from './components/CustomerForm'
export default {
  components: { CustomerForm },
  data() {
    return {
      form: {
        name: '',
        phone_number1: '',
        phone_number2: '',
        email: '',
        post_code: '',
        prefecture: '',
        address: '',
        gender_id: '',
        birthday: '',
        memo: '',
        new_or_returning: ''
      },
      process: 'Create'
    }
  },
  methods: {
    handleSubmit() {
      if (!this.form.name) return
      // store/modules/customerのアクションcreateCustomerを呼び出し、
      this.$store.dispatch('customer/createCustomer', this.form)
      this.$router.push({ path: '/customer/index' })
    },
    cancelBtn() {
      if (confirm('Are you sure? This will take you to index page')) {
        this.$router.push({ path: '/customer/index' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 800px;
  margin: 20px;
}
</style>
