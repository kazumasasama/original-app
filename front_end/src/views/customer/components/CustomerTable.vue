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
  </el-table>
</template>

<script>
export default {
  props: {
    customers: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
