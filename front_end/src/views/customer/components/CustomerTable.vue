<template>
  <el-table
    :data="customers"
    style="width: 100%"
  >
    <el-table-column
      prop="date"
      label="Date"
      width="180"
    />
    <el-table-column
      prop="name"
      label="Name"
      width="180"
    />
    <el-table-column
      prop="address"
      label="Address"
    />

    <el-table-column
      fixed="right"
      label="Operations"
      width="120">
      <template slot-scope="scope">
        <el-button @click="handleClick" type="text" size="small">Edit</el-button>
        <el-button type="text" size="small">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('handleClick')
    }
  },

  //　親要素からのデータの参照（親要素に記述されたカスタムタグからの値を受け取る変数）
  props: {
    // getters経由　customerAll: state => state.customerAll
    customers: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
