<template>
  <el-tabs type="border-card" @tab-click="handleClick">
    <el-tab-pane>
      <template #label>
        <span><i class="el-icon-user"></i> Info</span>
      </template>
      <template>
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'List item ' + o }}
          </div>
        </el-card>
      </template>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span><i class="el-icon-date"></i> Appointments</span>
      </template>
      Route
    </el-tab-pane>
  </el-tabs>
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
