<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Phone1">
      <el-input v-model="form.phone_number1" />
    </el-form-item>
    <el-form-item label="Phone2">
      <el-input v-model="form.phone_number2" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="Post Code">
      <el-input v-model="form.post_code" />
    </el-form-item>
    <el-form-item label="Prefecture">
      <el-select v-model="form.prefecture" placeholder="都道府県選択">
        <el-option label="北海道" value="hokkaido" />
      </el-select>
    </el-form-item>
    <el-form-item label="Address">
      <el-input v-model="form.address" />
    </el-form-item>
    <el-form-item label="Gender">
      <el-radio-group v-model="form.gender_id">
        <el-radio label="Not known" />
        <el-radio label="Male" />
        <el-radio label="Female" />
        <el-radio label="Self-described" />
        <el-radio label="Not applicable" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Birthday">
      <el-col :span="11">
        <el-date-picker v-model="form.birthday" type="date" placeholder="Pick a date" style="width: 100%;" />
      </el-col>
    </el-form-item>
    <el-form-item label="Memo">
      <el-input v-model="form.memo" type="textarea" />
    </el-form-item>
    <el-form-item label="New/Returning">
      <el-radio-group v-model="form.new_or_returning">
        <el-radio label="New" />
        <el-radio label="Returning" />
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <!-- クリックでonSubmitイベントが発火 -->
      <el-button type="primary" @click="handleSubmit">{{ process }}</el-button>
      <el-button @click="cancelBtn">Cancel</el-button>
    </el-form-item>
  </el-form>
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
    }
  }
}
</script>
