/*
 * @Author: LiPengCheng 
 * @Date: 2018-05-30 11:31:05 
 * @Last Modified by: LiPengCheng
 * @Last Modified time: 2018-08-03 14:44:07
 */
<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children">
      <router-link v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" :to="item.path+'/'+item.children[0].path"
        :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <!-- <img class="imgStyle" v-if="item.children[0].meta&&item.children[0].meta.icon" :src="'static/'+item.children[0].meta.icon+'.png'"> -->
          <i :class="item.children[0].meta.icon" v-if="item.children[0].meta&&item.children[0].meta.icon"></i>
          <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>
      <el-submenu v-else :index="item.name||item.path" :key="item.name" ref="test">
        <template slot="title">
          <!-- <img class="imgStyle" v-if="item.meta&&item.meta.icon" :src="'static/'+item.meta.icon+'.png'"> -->
          <i :class="item.meta.icon" v-if="item.meta&&item.meta.icon"></i>
          <!-- <span v-show="item.meta&&item.meta.title" :class="item.meta&&item.meta.icon?'':'falseIcon'" slot="title">{{item.meta.title}}</span> -->
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>
          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <!-- <img class="imgStyle" v-if="child.meta&&child.meta.icon" :src="'static/'+item.meta.icon+'.png'"> -->
              <i :class="child.meta.icon" v-if="child.meta&&child.meta.icon"></i>
              <span v-if="child.meta&&child.meta.title" slot="title"><i style="font-size:12px;width:10px;" class="el-icon-caret-right"></i>{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
import { generateTitle } from "@/utils/i18n";
import { mapGetters } from "vuex";

export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hasOneShowingChildren(children) {
      const showingChildren = children.filter(item => {
        return !item.hidden;
      });
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    },
    generateTitle
  }
};
</script>
<style scoped>
/* .el-submenu>.el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
} */
</style>
<style>
/* .menu-wrapper .el-submenu>.el-submenu__title .el-submenu__icon-arrow {
    display: none;
} */
.menu-wrapper .el-submenu__title {
  padding: 0 20px !important;
}
</style>



