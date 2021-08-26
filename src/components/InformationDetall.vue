<!--
 * @Author: 彭祥飞（pengXiangfei）
 * @Date: 2021-08-04 16:01:30
 * @LastEditTime: 2021-08-09 17:23:19
 * @LastEditors: 彭祥飞（pengXiangfei）
 * @Description:
-->
<template>
  <div class="InformationDetall">
    <div class="header">
      <el-radio-group
        v-model="tabPosition"
        size="mini"
        style="margin-bottom: 30px"
      >
        <el-radio-button :label="1">基本信息</el-radio-button>
        <el-radio-button :label="2">他的相册</el-radio-button>
      </el-radio-group>
    </div>
    <div class="InformationDetall-content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        v-if="tabPosition == 1"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="ruleForm.age" size="mini"></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="gender">
          <el-radio v-model="ruleForm.gender" :label="1">男</el-radio>
          <el-radio v-model="ruleForm.gender" :label="2">女</el-radio>
        </el-form-item>

        <el-form-item label="房产" prop="haveHouse">
          <el-radio v-model="ruleForm.haveHouse" :label="1">有</el-radio>
          <el-radio v-model="ruleForm.haveHouse" :label="2">无</el-radio>
        </el-form-item>

        <el-form-item label="车辆" prop="haveCar">
          <el-radio v-model="ruleForm.haveCar" :label="1">有</el-radio>
          <el-radio v-model="ruleForm.haveCar" :label="2">无</el-radio>
        </el-form-item>
        <el-form-item label="容貌评级" prop="LevelOfBeauty">
          <el-radio v-model="ruleForm.LevelOfBeauty" :label="1">A级</el-radio>
          <el-radio v-model="ruleForm.LevelOfBeauty" :label="2">B级</el-radio>
          <el-radio v-model="ruleForm.LevelOfBeauty" :label="3">C级</el-radio>
        </el-form-item>
        <el-form-item label="学历" prop="education">
          <el-select
            v-model="ruleForm.education"
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

        <el-form-item label="收入范围(月)" prop="moneyNumber">
          <el-select
            v-model="ruleForm.moneyNumber"
            class="select-width"
            placeholder="请选择收入范围"
            size="mini"
          >
            <el-option
              v-for="item in moneyNumberOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="手机号码" prop="iphone">
          <el-input
            v-model="ruleForm.iphone"
            size="mini"
            placeholder="请输入手机号码"
          ></el-input>
        </el-form-item>
        <el-form-item label="身高" prop="height">
          <el-input
            v-model="ruleForm.height"
            size="mini"
            placeholder="请输入身高"
          ></el-input>
        </el-form-item>
        <el-form-item label="体重" prop="weight">
          <el-input
            v-model="ruleForm.weight"
            size="mini"
            placeholder="请输入体重"
          ></el-input>
        </el-form-item>
        <el-form-item label="家庭地址" prop="houseAddress">
          <el-input
            v-model="ruleForm.houseAddress"
            size="mini"
            placeholder="请输入家庭地址"
          ></el-input>
        </el-form-item>

        <el-form-item label="工作城市" prop="age">
          <el-input
            v-model="ruleForm.name"
            size="mini"
            placeholder="请输入工作城市"
          ></el-input>
        </el-form-item>
        <el-form-item label="择偶条件" prop="age">
          <el-input
            type="textarea"
            v-model="ruleForm.desc"
            placeholder="请输入择偶条件"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="submitForm('ruleForm')"
            >立即保存</el-button
          >
          <el-button size="mini" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

      <div v-else>
        <ul class="ul-list">
          <li>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </li>
          <li v-for="(item, index) in iphoneList" :key="index">
            <img src="../assets/image/girl.jpg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabPosition: 1,
      rules: {},
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
      moneyNumberOptions: [
        { label: '3000~6000', value: 1 },
        { label: '6000~9000', value: 2 },
        { label: '9000~12000', value: 3 },
        { label: '12000~15000', value: 4 },
        { label: '15000~20000', value: 5 },
        { label: '20000以上', value: 6 }
      ],
      ruleForm: {
        name: '', // 姓名
        age: '', // 年龄
        gender: 1, // 性别
        haveHouse: '', // 房产
        haveCar: '', // 车辆
        LevelOfBeauty: '', // 容貌评级
        education: '', // 学历
        moneyNumber: '', // 收入范围(月)
        iphone: '', // 手机号码
        height: '', // 身高
        weight: '', // 体重
        houseAddress: '', // 家庭地址
        workCity: '', // 工作城市
        criteria: '' // 择偶条件
      },
      imageUrl: '',
      iphoneList: [{}, {}]
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG和PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }

      if (isJPG) {
        return isJPG && isLt2M
      } else {
        return isPNG && isLt2M
      }
    }
  }
}
</script>

<style scoped lang="scss">
.InformationDetall {
  height: 100%;
  .header {
    height: 45px;
    border-bottom: 1px solid #ccc;
  }

  .InformationDetall-content {
    height: calc(100% - 45px);
    overflow: auto;
    .demo-ruleForm {
      width: 60%;
      margin: 20px auto;
      /deep/.el-form-item__label {
        text-align: left;
      }
      .el-select {
        width: 100%;
      }
    }
    .ul-list {
      li {
        float: left;
        margin: 20px 20px 0 0;
        width: 180px;
        height: 180px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      /deep/ .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
  }
}
</style>
