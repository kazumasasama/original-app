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
        <el-option label="青森県" value="aomori" />
        <el-option label="岩手県" value="iwate" />
        <el-option label="宮城県" value="miyagi" />
        <el-option label="秋田県" value="akita" />
        <el-option label="山形県" value="yamagata" />
        <el-option label="福島県" value="fukushima" />
        <el-option label="茨城県" value="ibaraki" />
        <el-option label="栃木県" value="tochigi" />
        <el-option label="群馬県" value="gunma" />
        <el-option label="埼玉県" value="saitama" />
        <el-option label="千葉県" value="chiba" />
        <el-option label="東京都" value="tokyo" />
        <el-option label="神奈川県" value="kanagawa" />
        <el-option label="新潟県" value="niigata" />
        <el-option label="富山県" value="toyama" />
        <el-option label="石川県" value="ishikawa" />
        <el-option label="福井県" value="fukui" />
        <el-option label="山梨県" value="yamanashi" />
        <el-option label="長野県" value="nagano" />
        <el-option label="岐阜県" value="gifu" />
        <el-option label="静岡県" value="shizuoka" />
        <el-option label="愛知県" value="aichi" />
        <el-option label="三重県" value="mie" />
        <el-option label="滋賀県" value="shiga" />
        <el-option label="京都府" value="kyoto" />
        <el-option label="大阪府" value="oosaka" />
        <el-option label="兵庫県" value="hyougo" />
        <el-option label="奈良県" value="nara" />
        <el-option label="和歌山県" value="wakayama" />
        <el-option label="鳥取県" value="tottori" />
        <el-option label="島根県" value="shimane" />
        <el-option label="岡山県" value="okayama" />
        <el-option label="広島県" value="hiroshima" />
        <el-option label="山口県" value="yamaguchi" />
        <el-option label="徳島県" value="tokushima" />
        <el-option label="香川県" value="kagawa" />
        <el-option label="愛媛県" value="ehime" />
        <el-option label="高知県" value="kouchi" />
        <el-option label="福岡県" value="fukuoka" />
        <el-option label="佐賀県" value="saga" />
        <el-option label="長崎県" value="nagasaki" />
        <el-option label="熊本県" value="kumamoto" />
        <el-option label="大分県" value="ooita" />
        <el-option label="宮崎県" value="miyazaki" />
        <el-option label="鹿児島県" value="kagosima" />
        <el-option label="沖縄県" value="okinawa" />
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
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
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
  methods: {
    onSubmit() {
      if (!this.form.name) return
      // store/modules/customerのアクションcreateCustomerを呼び出し、
      this.$store.dispatch('customer/createCustomer', this.form)
      this.$router.push({ path: '/customer/index' })
    }
  }
}
</script>
