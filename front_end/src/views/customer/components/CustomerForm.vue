<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item :label="$t('customer.name')">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item :label="$t('customer.phone1')">
      <el-input v-model="form.phone_number1" />
    </el-form-item>
    <el-form-item :label="$t('customer.phone2')">
      <el-input v-model="form.phone_number2" />
    </el-form-item>
    <el-form-item :label="$t('customer.email')">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item :label="$t('customer.post_code')">
      <el-input v-model="form.post_code" />
    </el-form-item>
    <el-form-item :label="$t('customer.prefecture')">
      <el-select v-model="form.prefecture" :placeholder="$t('customer.choose_pref')">
        <el-option label="北海道" value="hokkaido" />
      </el-select>
    </el-form-item>
    <el-form-item :label="$t('customer.address')">
      <el-input v-model="form.address" />
    </el-form-item>
    <el-form-item :label="$t('customer.gender')">
      <el-radio-group v-model="form.gender_id">
        <el-radio :label="0">{{ $t('customer.not_known') }}</el-radio>
        <el-radio :label="1">{{ $t('customer.male') }}</el-radio>
        <el-radio :label="2">{{ $t('customer.female') }}</el-radio>
        <el-radio :label="3">{{ $t('customer.self') }}</el-radio>
        <el-radio :label="4">{{ $t('customer.not_applicable') }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="$t('customer.birthday')">
      <el-col :span="11">
        <el-date-picker v-model="form.birthday" type="date" :placeholder="$t('customer.pick')" style="width: 100%;" />
      </el-col>
    </el-form-item>
    <el-form-item :label="$t('customer.memo')">
      <el-input v-model="form.memo" type="textarea" />
    </el-form-item>
    <el-form-item :label="$t('customer.new_or_returning')">
      <el-radio-group v-model="form.new_or_returning">
        <el-radio :label="0">{{ $t('customer.new') }}</el-radio>
        <el-radio :label="1">{{ $t('customer.returning') }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <!-- クリックでonSubmitイベントが発火 -->
      <el-button type="primary" @click="handleSubmit">{{ process }}</el-button>
      <el-button @click="cancelBtn">{{ $t('customer.cancel') }}</el-button>
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
