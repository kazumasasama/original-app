<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Phone1">
      <el-input v-model="form.phone1" />
    </el-form-item>
    <el-form-item label="Phone2">
      <el-input v-model="form.phone2" />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="Post Code">
      <el-input v-model="form.postcode" />
    </el-form-item>
    <el-form-item label="Prefecture">
      <el-select v-model="form.prefecture" placeholder="please select prefecture">
        <el-option label="東京都" value="tokyo" />
        <el-option label="福岡県" value="fukuoka" />
      </el-select>
    </el-form-item>
    <el-form-item label="Address">
      <el-input v-model="form.address" />
    </el-form-item>
    <el-form-item label="Gender">
      <el-radio-group v-model="form.gender">
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
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
