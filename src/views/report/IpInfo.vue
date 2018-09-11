<template>
    <div class="ipInfo-wrapper">
      <div class="">
        <el-tabs :tab-position="tabPosition" style="height: 200px;">
          <el-tab-pane label="证书信息"></el-tab-pane>
          <el-tab-pane label="证书链信息"></el-tab-pane>
          <el-tab-pane label="协议及加密套件信息"></el-tab-pane>
          <el-tab-pane label="安全分析"></el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
export default {
  name: "test1",
  data: function() {
    return {
      tabPosition:'bottom'
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.ipInfo-wrapper{
  padding: 16px;
}
</style>