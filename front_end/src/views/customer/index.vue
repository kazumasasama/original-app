<template>
  <div class="app-container documentation-container">
    <el-row>
      <router-link :to="'/customer/new'" class="el-button el-button--primary">
        <span>{{ $t('customer.add') }}</span>
      </router-link>
    </el-row>
    <!-- v-bind:属性="オブジェクト・配列" -->
    <!-- 子要素に記述のprops:{customers:にデータを渡す -->
    <CustomerTable
      :key="key"
      :customers="customers"
      @handleDetail="doShow"
      @handleEdit="doUpdate"
      @handleDelete="doDelete"
    />
  </div>
</template>

<script>
import CustomerTable from './components/CustomerTable'
import { mapGetters } from 'vuex'

export default {
  name: 'Customer',
  components: { CustomerTable },
  data() {
    return {
      key: 0
    }
  },
  // データに処理を与えてプロパティにする
  computed: {
    ...mapGetters({
      // store/modules/customerのcustomerAll: state => state.customerAll
      // 現在のstateのcustomerの情報の呼び出し
      customers: 'customer/customerAll'
    })
  },
  // インスタンスにDOM要素が紐付いた後に呼ばれる
  mounted() {
    // store/modules/customerのアクションの呼び出し
    // 全てのcustomerのdataの呼び出し
    this.$store.dispatch('customer/getCustomers')
  },
  methods: {
    doShow(index, row) {
      this.$router.push({
        name: 'showCustomer',
        params: { form: row }
      })
    },
    doUpdate(index, row) {
      this.$router.push({
        name: 'editCustomer',
        params: { form: row }
      })
    },
    doDelete(index, row) {
      const answer = confirm('Are you sure?')
      // いいえの時に次の処理
      if (!answer) return
      this.$store.dispatch('customer/deleteCustomer', row)
      // 処理の次に行く
      this.$nextTick(() => {
        this.$store.dispatch('customer/getCustomers')
        this.key = this.key ? 0 : 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
