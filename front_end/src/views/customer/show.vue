<template>
  <el-tabs type="border-card">
  <el-tab-pane>
    <template #label>
      <span><i class="el-icon-user"></i> Detail</span>
    </template>
    <el-table
      :data="this.data"
      style="width: 100%"
    >
    <el-table-column
      prop="name"
      label="Name"
      width="1000%"
    />
    </el-table>
  </el-tab-pane>
<el-tab-pane>
    <template #label>
      <span><i class="el-icon-date"></i> Appointments</span>
    </template>
    Route
  </el-tab-pane></el-tabs>
</template>

<script>
export default {
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
      // process: 'Edit'
    }
  },
  created() {
    // サーバから最新データを取得する
    this.form = this.$route.params.form
  },
  methods: {
    // handleSubmit() {
    //   if (!this.form.name) return
    //   // store/modules/customerのアクションeditCustomerを呼び出し、
    //   this.$store.dispatch('customer/editCustomer', this.form)
    //   this.$router.push({ path: '/customer/index' })
    // },
    cancelBtn() {
      if (confirm("Are you sure? This will take you to index page")) {
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
