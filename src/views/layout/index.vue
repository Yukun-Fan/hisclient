<template>
  <div>
    <el-container>
      <el-header class="layout-header">
        <el-row>
          <el-col :span="4" style="color: #fff; font-size: 24px"
            ><div>东软云医院HIS系统</div></el-col
          >
          <el-col :span="2" style="font-size: 24px"
            ><div>
              <i class="el-icon-s-fold"></i></div
          ></el-col>
          <el-col :span="12">&nbsp;</el-col>
          <el-col :span="6" style="display: flex; justify-content: center">
            <el-image src="logo.png" fit="contain"></el-image>
            <el-dropdown style="color: #fff; margin-left: 20px">
              <span class="el-dropdown-link">
                东软医生<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-container style="height: 800px">
        <el-aside width="200px">
          <el-menu
            default-active="activeIndex"
            class="el-menu-demo"
            mode="vertical"
            :unique-opened="true"
            router
          >
            <el-submenu
              :index="'' + index"
              v-for="(menu, index) in menuList"
              :key="index"
            >
              <template slot="title">
                <i :class="menu.iconCls"></i>{{ menu.name }}</template
              >
              <el-menu-item
                :index="child.path"
                v-for="(child, index) in menu.children"
                :key="index"
                >{{ child.name }}</el-menu-item
              >
              <!--***************************************************************************-->
              <el-submenu index="" v-if="menu.name === '门诊医生'">
                <template slot="title"
                  ><i class="el-icon-menu"></i>医生诊疗</template
                >
                <el-menu-item index="">病历首页</el-menu-item>
              </el-submenu>
              <!--***************************************************************************-->
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
    };
  },
  methods: {},
  mounted() {
    console.log(this.$router.options);
    this.menuList = this.$router.options.routes;
  },
};
</script>

<style scope>
.el-header {
  background-color: rgb(32, 160, 255);
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>