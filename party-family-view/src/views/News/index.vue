<template>
  <div>
    <el-table :data="formData">
      <el-table-column label="新闻标题" prop="title" width="200" />
      <el-table-column label="作者" prop="author.nickname" width="80" />
      <el-table-column label="新闻头图" width="100">
        <template slot-scope="scope">
          <img :src="scope.row.headerImg" class="table-item-img">
        </template>
      </el-table-column>
      <el-table-column label="新闻内容" prop="contentText" width="180" />
      <el-table-column label="新闻分类" prop="type.title" width="100" />
      <el-table-column label="上传时间" prop="create_time" width="100" />
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button type="primary" @click="$router.push({name: 'newDetail', query:{id: scope.row._id}})">
            查看详细
          </el-button>
          <el-button type="primary" @click="$router.push({name: 'editNew', query:{id:scope.row._id}})">
            编辑
          </el-button>
          <el-button type="danger" @click="handleDelete(scope.row._id)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          formData: [],
        }
      },
      methods: {
        getData() {
          this.$axios.get('/admin/news').then(res => {
            if(res.code == 200) {
              res.data.forEach(item => {
                item.create_time = new Date(item.create_time).toLocaleString()
              })
              this.formData = res.data
            }
          })
        },
        handleDelete(id) {
          this.$axios.delete(`/admin/news/deleteNew/${id}`).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg)
              his.getData()
            }
          })
        }
      },
      created() {
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .table-item-img {
    width: 80px;
    height: 80px;
  }

  /deep/ .el-table .cell {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
