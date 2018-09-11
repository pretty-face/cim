<template>
    <div class="scan-wrapper">
        <el-form :inline="true" :model="serverInfo" class="demo-form-inline">
          <el-form-item label="域名/IP">
            <el-input v-model="serverInfo.ip" placeholder="www.yunssl.com"></el-input>
          </el-form-item>
          <el-form-item label="端口号">
            <el-input v-model="serverInfo.port" placeholder="443"></el-input>
          </el-form-item>
          <el-form-item label="ServerName">
            <el-input v-model="serverInfo.servername" placeholder="www.yunssl.com"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">添加</el-button>
          </el-form-item>
        </el-form>
        <div class="data-table">
          <el-table
            ref="multipleTable"
            :data="datalist.slice((currentpage-1)*pagesize,currentpage*pagesize)"
            tooltip-effect="dark"
            style="width: 100%"
            :default-sort = "{prop: 'ip', order: 'ascending'}"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="ip"
              label="域名/ip"
              sortable
              width="120">
              <template slot-scope="scope">{{ scope.row.ip }}</template>
            </el-table-column>
            <el-table-column
              prop="port"
              label="端口"
              width="120">
              <template slot-scope="scope">{{ scope.row.port }}</template>
            </el-table-column>
            <el-table-column
              prop="servername"
              label="ServerName"
              show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.server }}</template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini" type="primary"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="page-wrapper">
          <el-row>
            <el-button icon="el-icon-delete" type="danger" circle></el-button>
            <el-button type="warning" icon="el-icon-download" circle></el-button>
            <el-button type="danger" icon="el-icon-upload2" circle></el-button>
            <el-button type="primary">扫描</el-button>
          </el-row>

          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentpage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalcount">
          </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
  name: "scan",
  data: function() {
    return {
      serverInfo: {
        ip: "",
        port: "",
        servername: ""
      },
      currentpage: 1,
      pagesize: 5,
      multipleSelection: []
    };
  },
  mounted () {
    this.$store.dispatch('getlist')
  },
  computed: {
    datalist () {
      return this.$store.state.scanList.list
    },
    totalcount () {
      return this.datalist.length
    }
  },
  methods: {
    onSubmit() {},
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pagesize = val
    },
    handleCurrentChange(val) {
      this.currentpage = val
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style scoped>
.demo-form-inline {
  margin: 16px;
}
.page-wrapper {
    background-color:#f8f8f8;
    overflow: hidden;
    padding: 12px 16px 11px 16px;
    border: 1px solid #ebeef5;
    margin-top: 16px;
    margin-bottom: 80px;
}
.el-row {
    float: left;
}
.el-pagination {
    float: right;
    width: 70%;
    margin: px 20px 0 0;
    text-align:right;
}
.el-table th>.cell {
    line-height: 40px;
}
.el-table tr {
  line-height: 40px;
}
</style>