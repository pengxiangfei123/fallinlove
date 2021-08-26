<!--
 * @Author: 彭祥飞（pengXiangfei）
 * @Date: 2021-06-23 17:39:36
 * @LastEditTime: 2021-08-04 17:07:18
 * @LastEditors: 彭祥飞（pengXiangfei）
 * @Description:
-->

<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model="ruleForm.name" size="mini"></el-input>
    </el-form-item>
        <el-form-item label="年龄" prop="age">
      <el-input v-model="ruleForm.name" size="mini"></el-input>
    </el-form-item>

    <el-form-item label="性别" prop="gender">
      <el-radio v-model="ruleForm.gender" :label="1">男</el-radio>
      <el-radio v-model="ruleForm.gender" :label="2">女</el-radio>
    </el-form-item>

    <el-form-item label="房产" prop="gender">
      <el-radio v-model="ruleForm.haveHouse" :label="1">有</el-radio>
      <el-radio v-model="ruleForm.haveHouse" :label="2">无</el-radio>
    </el-form-item>

    <el-form-item label="车辆" prop="gender">
      <el-radio v-model="ruleForm.carHouse" :label="1">有</el-radio>
      <el-radio v-model="ruleForm.carHouse" :label="2">无</el-radio>
    </el-form-item>

    <el-form-item label="容貌评级" prop="gender">
      <el-radio v-model="ruleForm.LevelOfBeauty" :label="1">A级</el-radio>
      <el-radio v-model="ruleForm.LevelOfBeauty" :label="2">B级</el-radio>
      <el-radio v-model="ruleForm.LevelOfBeauty" :label="3">C级</el-radio>
    </el-form-item>

    <el-form-item label="学历" prop="gender">
      <el-select
        v-model="formData.education"
        class="select-width"
        placeholder="请选择学历"
        size="mini"
      >
        <el-option
          v-for="item in educationOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="手机号码" prop="age">
      <el-input v-model="ruleForm.name" size="mini"></el-input>
    </el-form-item>
    <el-form-item label="qq号码" prop="age">
      <el-input v-model="ruleForm.name" size="mini"></el-input>
    </el-form-item>
    <el-form-item label="身高" prop="age">
      <el-input v-model="ruleForm.name" size="mini"></el-input>
    </el-form-item>
    <el-form-item label="体重" prop="age">
      <el-input v-model="ruleForm.name" size="mini"></el-input>
    </el-form-item>
    <el-form-item label="工资收入" prop="age">
      <el-input v-model="ruleForm.name" size="mini"></el-input>
    </el-form-item>
    <el-form-item label="家庭地址" prop="age">
      <el-input v-model="ruleForm.name" size="mini"></el-input>
    </el-form-item>

    <el-form-item label="工作城市" prop="age">
      <el-input v-model="ruleForm.name" size="mini"></el-input>
    </el-form-item>
    <el-form-item label="交友宣言" prop="age">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="mini" @click="submitForm('ruleForm')"
        >立即创建</el-button
      >
      <el-button size="mini" @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      },
      genderOptions: [
        { label: '男', value: 1 },
        { label: '女', value: 2 }
      ],
      LevelOfBeautyOptions: [
        { label: 'A级', value: 1 },
        { label: 'B级', value: 2 },
        { label: 'C级', value: 3 }
      ],
      educationOptions: [
        { label: '高中及以下', value: 1 },
        { label: '大专', value: 2 },
        { label: '本科', value: 3 },
        { label: '硕士研究生', value: 4 },
        { label: '博士研究生', value: 5 }
      ],
      isOptions: [
        { label: '有', value: 1 },
        { label: '无', value: 2 }
      ],
      formData: {
        gender: 1,
        ageMin: '',
        ageMan: '',
        LevelOfBeauty: '',
        heightMin: '',
        heightMan: '',
        weightMin: '',
        weightMan: '',
        moneyMin: '',
        moneyMan: '',
        education: '',
        haveHouse: '',
        carHouse: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang="scss">
.demo-ruleForm {
  width: 70%;
  margin: auto;
  /deep/.el-form-item__label {
    text-align: left;
  }
  .el-select {
    width: 100%;
  }
}
</style>
