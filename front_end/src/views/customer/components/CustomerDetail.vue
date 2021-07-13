<template>
  <el-form label-width="120px">
    <el-form-item label="Name">
      {{ form.name }}
    </el-form-item>
    <el-form-item label="Phone1">
      {{ form.phone_number1 }}
    </el-form-item>
    <el-form-item label="Phone2">
      {{ form.phone_number2 }}
    </el-form-item>
    <el-form-item label="Email">
      {{ form.email }}
    </el-form-item>
    <el-form-item label="Post Code">
      {{ form.post_code }}
    </el-form-item>
    <el-form-item label="Prefecture">
      {{ form.prefecture }}
    </el-form-item>
    <el-form-item label="Address">
      {{ form.address }}
    </el-form-item>
    <el-form-item label="Gender">
      {{ form.gender_id }}
    </el-form-item>
    <el-form-item label="Birthday">
      {{ form.birthday }}
    </el-form-item>
    <el-form-item label="Memo">
      {{ form.memo }}
    </el-form-item>
    <el-form-item label="New/Returning">
      {{ form.new_or_returning }}
    </el-form-item>
    <div>
      <el-button @click="handleClose">Close</el-button>
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
