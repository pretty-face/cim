<template>
    <div>
      <div class="data-table">
        <el-table
          :data="datalist.slice((currentpage-1)*pagesize,currentpage*pagesize)"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="ip"
            label="域名/IP"
            width="150">
            <template slot-scope="scope"><router-link :to="{name:'ipInfo'}">{{ scope.row.ip }}</router-link></template>
          </el-table-column>
          <el-table-column
            prop="port"
            label="端口"
            width="80">
            <template slot-scope="scope">{{ scope.row.port }}</template>
          </el-table-column>
          <el-table-column
            prop="issue-to"
            label="证书颁发给"
            width="150">
            <template slot-scope="scope">{{ scope.row.issueTo }}</template>
          </el-table-column>
          <el-table-column
            prop="issue-agency"
            label="颁发机构"
            width="120">
            <template slot-scope="scope">{{ scope.row.issueAgency }}</template>
          </el-table-column>
          <el-table-column
            prop="start-time"
            label="开始时间"
            width="95">
            <template slot-scope="scope">{{ scope.row.scanTime }}</template>
          </el-table-column>
          <el-table-column
            prop="end-time"
            label="结束时间"
            width="95">
            <template slot-scope="scope">{{ scope.row.scanTime }}</template>
          </el-table-column>
          <el-table-column
            prop="remian-time"
            label="剩余有效期"
            width="100">
            <template slot-scope="scope">{{ scope.row.remianTime }}</template>
          </el-table-column>
          <el-table-column
            prop="scan-time"
            label="扫描时间"
            width="95">
            <template slot-scope="scope">{{ scope.row.scanTime }}</template>
          </el-table-column>
          <el-table-column
            center
            prop="server-tpye"
            label="WebServer类型"
            width="125">
            <template slot-scope="scope">{{ scope.row.serverType }}</template>
          </el-table-column>
          <el-table-column
            center
            prop="server-tpye"
            label="WebServer类型"
            width="125">
            <template slot-scope="scope">{{ scope.row.serverType }}</template>
          </el-table-column>
          <el-table-column
            center
            prop="server-tpye"
            label="WebServer类型"
            width="125">
            <template slot-scope="scope">{{ scope.row.serverType }}</template>
          </el-table-column>
          <el-table-column
            center
            prop="server-tpye"
            label="WebServer类型"
            width="125">
            <template slot-scope="scope">{{ scope.row.serverType }}</template>
          </el-table-column>
          <el-table-column
            center
            prop="server-tpye"
            label="WebServer类型"
            width="125">
            <template slot-scope="scope">{{ scope.row.serverType }}</template>
          </el-table-column>
          <el-table-column
            center
            prop="server-tpye"
            label="WebServer类型"
            width="125">
            <template slot-scope="scope">{{ scope.row.serverType }}</template>
          </el-table-column>
          <el-table-column
            prop="cert-status"
            label="证书状态"
            width="120">
            <template slot-scope="scope">{{ scope.row.certStatus }}</template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page-wrapper">
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
  name: "monitorReport",
  data: function() {
    return {
      serverInfo: {
        ip: "",
        port: "",
        servername: ""
      },
      currentpage: 1,
      pagesize: 10,
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
.page-wrapper {
    background-color:#f8f8f8;
    overflow: hidden;
    padding: 12px 16px 11px 16px;
    border: 1px solid #ebeef5;
    margin-top: 16px;
    margin-bottom: 80px;
}
.data-table{
  margin-top: 16px;
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