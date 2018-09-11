/*
 * @Author: LiPengCheng 
 * @Date: 2018-05-30 11:31:03 
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-06-05 15:13:47
 */
<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false"><i class="el-icon-arrow-left"></i></el-radio-button>
      <el-radio-button :label="true"><i class="el-icon-arrow-right"></i></el-radio-button>
    </el-radio-group> -->
    <el-menu
      mode="vertical"
      :show-timeout="300"
      :default-active="$route.path"
      background-color="#222333"
      text-color="rgba(255,255,255,0.6)"
      :unique-opened="true"
      active-text-color="#e9524b"
      :collapse="isCollapse"
       @open="handleOpen" 
       @close="handleClose"
    >
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";

export default {
  data () {
    return {
    };
  },
  components: { SidebarItem },
  computed: {
    ...mapGetters(["permission_routers", "sidebar","isCollapse"])
  },
  mounted () {
    // console.log(this.permission_routers)
  },
  methods: {
    handleOpen () {

    },
    handleClose () {}
  }
};
</script>
<style  rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>

