<!--
 * @Author: 彭祥飞（pengXiangfei）
 * @Date: 2021-06-23 14:26:32
 * @LastEditTime: 2021-08-27 17:02:15
 * @LastEditors: 彭祥飞（pengXiangfei）
 * @Description:
-->
<template>
  <div>
    <h4>首页</h4>

    <div class="header">
      <span>性别：</span>
      <el-select
        v-model="formData.gender"
        class="select-width"
        placeholder="请选择性别"
        size="mini"
        clearable
      >
        <el-option
          v-for="item in genderOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>收入范围：</span>
      <el-select
        v-model="formData.moneyNumber"
        class="select-width"
        placeholder="请选择性别"
        size="mini"
        clearable
      >
        <el-option
          v-for="item in moneyNumberOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>容貌评级：</span>
      <el-select
        v-model="formData.LevelOfBeauty"
        class="select-width"
        placeholder="请选择容貌评级"
        size="mini"
        clearable
      >
        <el-option
          v-for="item in LevelOfBeautyOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>学历：</span>
      <el-select
        v-model="formData.education"
        class="select-width"
        placeholder="请选择学历"
        size="mini"
        clearable
      >
        <el-option
          v-for="item in educationOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>房产：</span>
      <el-select
        v-model="formData.haveHouse"
        class="select-width"
        placeholder="请选择房产"
        size="mini"
        clearable
      >
        <el-option
          v-for="item in isOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>车辆：</span>
      <el-select
        v-model="formData.haveCar"
        class="select-width"
        placeholder="请选择车辆"
        size="mini"
        clearable
      >
        <el-option
          v-for="item in isOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="header borderB">
      <span>年龄范围：</span>
      <el-input
        placeholder="最小年龄"
        v-model="formData.ageMin"
        class="input-width"
        clearable
        size="mini"
      >
      </el-input>
      至
      <el-input
        placeholder="最大年龄"
        v-model="formData.ageMan"
        class="input-width"
        clearable
        size="mini"
      >
      </el-input>
      <span>最低身高：</span>
      <el-input
        placeholder="最低身高"
        v-model="formData.heightMin"
        class="input-width"
        clearable
        size="mini"
      >
      </el-input>

      <span>姓名：</span>
      <el-input
        placeholder="请输入姓名"
        v-model="formData.name"
        class="select-width"
        clearable
        size="mini"
      >
      </el-input>
      <el-button type="primary" class="btns" @click="getTableData" size="mini"
        >开始搜索 <i class="el-icon-search"></i
      ></el-button>
    </div>
    <div>
      <ul class="iphone-ul">
        <li v-for="(item, index) in iphone" :key="index">
          <span v-show="show">{{ item }}</span>
        </li>
      </ul>

      <div class="divBtn">
        <el-button
          type="primary"
          :disabled="tableData.length == 0"
          @click="start"
          size="mini"
          >开始抽奖</el-button
        >
        <el-button type="primary" @click="stop" size="mini">停止抽奖</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: 2132343464654,
      iphone: '15236855798',
      tableData: [],
      timer: null,
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
      moneyNumberOptions: [
        { label: '3000~6000', value: 1 },
        { label: '6000~9000', value: 2 },
        { label: '9000~12000', value: 3 },
        { label: '12000~15000', value: 4 },
        { label: '15000~20000', value: 5 },
        { label: '20000以上', value: 6 }
      ],
      formData: {
        name: '',
        gender: 1,
        ageMin: '',
        ageMan: '',
        LevelOfBeauty: '',
        heightMin: '',
        heightMan: '',
        weightMin: '',
        weightMan: '',
        moneyNumber: '',
        education: '',
        haveHouse: '',
        haveCar: ''
      }
    }
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    getTableData () {
      this.$post(
        'http://tx6imx.natappfree.cc/marriage/qryMarriage',
        this.formData
      )
        .then((res) => {
          console.log(res)
          this.tableData = res.result
        })
        .catch((err) => {
          if (err) {
            throw err
          }
        })
    },
    start () {
      this.$message.warning('开始抽奖')
      this.timer = setInterval(() => {
        this.iphone =
          this.tableData[this.random(0, this.tableData.length - 1)].iphone
      }, 200)
    },
    stop () {
      setTimeout(() => {
        clearInterval(this.timer)
      }, 1000)
    },
    random (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    }
  }
}
</script>

<style scoped lang="scss">
h4 {
  padding: 0;
  margin: 0;
  height: 40px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.iphone-ul {
  list-style: none;
  margin-top: 80px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    width: 60px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    padding: 20px;
    margin: 6px;
    font-size: 65px;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(180deg, #ffbd63 0%, #ffa133 100%);
  }
}
.divBtn {
  margin: 20px;
  text-align: center;
}
.header {
  font-size: 14px;
  // line-height: 45px;
  height: 45px;
  span {
    margin-right: 10px;
    margin-left: 10px;
  }
  .select-width {
    width: 110px;
  }
  .input-width {
    width: 70px;
  }
}
</style>
