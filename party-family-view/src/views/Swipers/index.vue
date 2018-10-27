<template>
    <div>
      <el-card>
        <div slot="header">
          轮播图列表
        </div>
        <el-table :data="formData">
          <el-table-column label="轮播图标题" prop="title" width="160"/>
          <el-table-column label="轮播图" width="100">
            <template slot-scope="scope">
              <img :src="scope.row.headerImg" class="table-item-img">
            </template>
          </el-table-column>
          <el-table-column label="新闻标题" prop="newsId.title" width="160"/>
          <el-table-column label="排序" prop="sort" width="80"/>
          <el-table-column label="是否显示" width="80">
            <div slot-scope="scope">
              {{scope.row.status == '1' ? '显示' : '不显示'}}
            </div>
          </el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <el-button type="primary">
                查看详情
              </el-button>
              <el-button type="warning" @click="handleEdit(scope.row._id)">
                编辑
              </el-button>
              <el-button type="danger">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
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
          this.$axios.get('/admin/swiper').then(res => {
            if(res.code == 200) {
              this.formData = res.data
            }
          })
        },
        handleEdit(id) {
          this.$router.push({name: 'editSwiper',query:{id}})
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
</style>
