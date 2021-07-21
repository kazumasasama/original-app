<template>
  <el-form label-width="120px">
    <el-form-item :label="$t('customer.name')">
      {{ form.name }}
    </el-form-item>
    <el-form-item :label="$t('customer.phone1')">
      {{ form.phone_number1 }}
    </el-form-item>
    <el-form-item :label="$t('customer.phone2')">
      {{ form.phone_number2 }}
    </el-form-item>
    <el-form-item :label="$t('customer.email')">
      {{ form.email }}
    </el-form-item>
    <el-form-item :label="$t('customer.post_code')">
      {{ form.post_code }}
    </el-form-item>
    <el-form-item :label="$t('customer.prefecture')">
      {{ form.prefecture }}
    </el-form-item>
    <el-form-item :label="$t('customer.address')">
      {{ form.address }}
    </el-form-item>
    <el-form-item :label="$t('customer.gender')">
      {{ form.gender_id }}
    </el-form-item>
    <el-form-item :label="$t('customer.name')">
      {{ form.birthday }}
    </el-form-item>
    <el-form-item :label="$t('customer.memo')">
      {{ form.memo }}
    </el-form-item>
    <el-form-item :label="$t('customer.new_or_returning')">
      {{ form.new_or_returning }}
    </el-form-item>
    <div>
      <el-button @click="handleClose">{{ $t('tagsView.close') }}</el-button>
    </div>
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
    }
  },
  methods: {
    handleClose() {
      this.$emit('handleClose')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  border-bottom: 1px solid #ededed;
}
</style>
