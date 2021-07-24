<template>
  <el-table
    :data="customers"
    style="width: 100%"
  >
    <el-table-column
      prop="id"
      :label="$t('customer.id')"
      width="180"
    />
    <el-table-column
      prop="name"
      :label="$t('customer.name')"
      width="180"
    />
    <el-table-column
      prop="_prefecture"
      :label="$t('customer.prefecture')"
    />
    <el-table-column
      prop="address"
      :label="$t('customer.address')"
    />
    <el-table-column :label="$t('customer.operations')">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleDetail(scope.$index, scope.row)">{{ $t('customer.detail') }}</el-button>
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">{{ $t('customer.edit') }}</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">{{ $t('customer.delete') }}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  // 親要素からのデータの参照（親要素に記述されたカスタムタグからの値を受け取る変数）
  props: {
    // getters経由 customerAll: state => state.customerAll
    customers: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleDetail(index, row) {
      this.$emit('handleDetail', index, row)
    },
    handleEdit(index, row) {
      this.$emit('handleEdit', index, row)
    },
    handleDelete(index, row) {
      this.$emit('handleDelete', index, row)
    }
  }
}
</script>
