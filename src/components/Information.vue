<!--
 * @Author: 彭祥飞（pengXiangfei）
 * @Date: 2021-06-23 14:27:49
 * @LastEditTime: 2021-08-27 14:51:05
 * @LastEditors: 彭祥飞（pengXiangfei）
 * @Description: 数据
-->
<template>
  <div class="information">
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
        >开始搜索 <i class="el-icon-search"></i></el-button
      >
    </div>

    <el-table :data="list" style="width: 100%; margintop: 12px">
      <el-table-column prop="name" align="center" label="姓名" width="80">
      </el-table-column>
      <el-table-column prop="age" align="center" label="年龄" width="80">
      </el-table-column>
      <el-table-column prop="gender" align="center" label="性别" width="80">
        <template slot-scope="scope">
          {{ scope.row.gender == 1 ? '男' : '女' }}
        </template>
      </el-table-column>
      <el-table-column prop="age" align="center" label="等级标准" width="120">
        <template slot-scope="scope">
          <span>
            {{ filters(scope.row.levelOfBeauty, LevelOfBeautyOptions) }}
          </span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="education" label="学历" width="150">
        <template slot-scope="scope">
          <span>
            {{ filters(scope.row.education, educationOptions) }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="height" align="center" label="身高" width="100">
      </el-table-column>
      <el-table-column align="center" prop="moneyNumber" label="收入范围">
        <template slot-scope="scope">
          <span> {{ filters(scope.row.moneyNumber, moneyNumberOptions) }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="houseAddress" label="家庭地址">
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <span>
            <el-button size="small" @click="edit(scope.row)" type="text"> 编辑 </el-button>
            <el-button size="small" @click="deletes(scope.row)" type="text"> 删除 </el-button>
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      },
      list: []
    }
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    edit (row) {
      this.$router.push({
        path: '/InformationDetall',
        query: {
          userid: row.userid
        }
      })
    },
    deletes (row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$post(
          'http://cpb939.natappfree.cc/marriage/updateMarriage',
          {
            'userid': row.userid,
            'isState': 'D'
          }
        )
          .then((res) => {
            this.$message.success('操作成功')
          })
          .catch((err) => {
            if (err) {
              throw err
            }
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    getTableData () {
      this.$post(
        'http://tx6imx.natappfree.cc/marriage/qryMarriage',
        this.formData
      )
        .then((res) => {
          console.log(res)
          this.list = res.result
        })
        .catch((err) => {
          if (err) {
            throw err
          }
        })
    },
    filters (value, options) {
      let text = ''
      options.forEach((item) => {
        if (item.value === value) {
          text = item.label
        }
      })
      return text
    },
    InformationDetall () {
      this.$router.push('/InformationDetall')
    }
  }
}
</script>

<style scoped lang="scss">
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
.borderB {
  border-bottom: 1px solid #ccc;
}
.btns {
  margin-left: 12px;
}
</style>
