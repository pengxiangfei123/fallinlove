<!--
 * @Author: 彭祥飞（pengXiangfei）
 * @Date: 2021-06-23 14:27:49
 * @LastEditTime: 2021-08-09 16:57:53
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

    </div>
      <ul class="list">
        <li v-for="(item,index) in list" :key="index" @click="InformationDetall">
          <div class="photo">
            <img
              src="../assets/image/girl.jpg"
              alt=""
            />
          </div>
          <div class="info">
            <p class="nick">
              <span>张思德</span>
            </p>
            <p class="view">
              <span>36岁</span>
              <span>180</span>
              <span>河南商丘</span>
            </p>
            <div class="heart">我想要的不多，一个懂感恩，理解以及温柔的她</div>
          </div>
        </li>
      </ul>
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
      list: [
        {},
        {},
        {},
        {}, {}, {}, {}, {}, {}, {}, {}, {} ]
    }
  },
  methods: {
    InformationDetall () {
      this.$router.push('/InformationDetall')
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  font-size: 14px;
  line-height: 45px;
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
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  li {
    width: 200px;
    height: 350px;
    margin: 20px;
    border-radius: 10px;
    padding: 10px 10px 20px;
    // box-shadow: 0px 5px 5px #e2e1e0;
    border: 1px dotted #ccc;
    cursor: pointer;
    .photo {
      position: relative;
      width: 100%;
      height: 210px;
      overflow: hidden;
      img {
        width: 100%;
        cursor: pointer;
      }
    }
    p {
      overflow: hidden;
            margin: 0;
    }
    .nick {
      font-size: 18px;
      line-height: 40px;
    }
    .view {
      line-height: 24px;
      color: #333;
    }
    .heart {
      height: 40px;
    }
  }
}
</style>
