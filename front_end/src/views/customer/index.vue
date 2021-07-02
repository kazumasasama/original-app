<template>
  <div class="app-container documentation-container">
    <el-row>
      <router-link :to="'/customer/new'" class="el-button el-button--primary">
        <span>新規登録</span>
      </router-link>
    </el-row>
    <!-- v-bind:属性="オブジェクト・配列" -->
    <!-- 子要素に記述のprops:{customers:にデータを渡す -->
    <CustomerTable :customers="customers" />
  </div>
</template>

<script>
import CustomerTable from './components/CustomerTable'
import { mapGetters } from 'vuex'

export default {
  name: 'Customer',
  components: { CustomerTable },
  //データに処理を与えてプロパティにする
  computed: {
    ...mapGetters({
      // store/modules/customerの　customerAll: state => state.customerAll
      //現在のstateのcustomerの情報の呼び出し
      customers: 'customer/customerAll'
    })
  },
  //インスタンスにDOM要素が紐付いた後に呼ばれる
  mounted() {
    //store/modules/customerのアクションの呼び出し
    //全てのcustomerのdataの呼び出し
    this.$store.dispatch('customer/getCustomerInfo')
  }
}
</script>

<style lang="scss" scoped>
</style>
