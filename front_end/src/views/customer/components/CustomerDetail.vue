<template>
<div>
  <div label="Name">
    <label for="name" class="col-sm-2 col-form-label">Name</label>
    {{ form.name }}
  </div>
  <div label="Phone1">
    <label for="name" class="col-sm-2 col-form-label">Phone1</label>
    {{ form.phone_number1 }}
  </div>
  <div label="Phone2">
    <label for="name" class="col-sm-2 col-form-label">Phone2</label>
    {{ form.phone_number2 }}
  </div>
  <div label="Email">
    <label for="name" class="col-sm-2 col-form-label">Email</label>
    {{ form.email }}
  </div>
  <div label="Post Code">
    <label for="name" class="col-sm-2 col-form-label">Post Code</label>
    {{ form.post_code }}
  </div>
  <div label="Prefecture">
    <label for="name" class="col-sm-2 col-form-label">Prefecture</label>
    {{ form.prefecture }}
  </div>
  <div label="Address">
    <label for="name" class="col-sm-2 col-form-label">Address</label>
    {{ form.address }}
  </div>
  <div label="Gender">
    <label for="name" class="col-sm-2 col-form-label">Gender</label>
    {{ form.gender_id }}
  </div>
  <div label="Birthday">
    <label for="name" class="col-sm-2 col-form-label">Birthday</label>
    {{ form.birthday }}
  </div>
  <div label="Memo">
    <label for="name" class="col-sm-2 col-form-label">Memo</label>
    {{ form.memo }}
  </div>
  <div label="New/Returning">
    <label for="name" class="col-sm-2 col-form-label">New/Returning</label>
    {{ form.new_or_returning }}
  </div>
  <div>
    <el-button size="mini" @click="close">Close</el-button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default() {
        return {
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
        }
      }
    },
    process: {
      type: String,
      default() {
        return ''
      }
    }
  },
  // data() {
  //   return {
  //     form: this.initForm
  //   }
  // },
  methods: {
    onSubmit() {
      if (!this.form.name) return
      // store/modules/customerのアクションcreateCustomerを呼び出し、
      this.$store.dispatch('customer/createCustomer', this.form)
      this.$router.push({ path: '/customer/index' })
    },
    handleSubmit() {
      this.$emit('handleSubmit')
    },
    cancelBtn() {
      this.$emit('cancelBtn')
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>