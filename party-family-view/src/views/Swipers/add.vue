<template>
  <div>
    <el-card>
      <div slot="header">
        添加轮播图
      </div>
      <el-form :model="formData" label-width="80px" label-position="right">
        <el-form-item label="轮播图" required>
          <Upload v-model="formData.headerImg"></Upload>
        </el-form-item>
        <el-form-item label="标题" required>
          <el-input v-model="formData.title" class="swiper-title"></el-input>
        </el-form-item>
        <el-form-item label="对应新闻" required>
          <el-select v-model="formData.newsId">
            <el-option v-for="item in news"
                       :label="item.title"
                       :value="item._id"
                       :key="item._id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序" >
          <el-input-number v-model="formData.sort" :min="1" :step="1" />
        </el-form-item>
        <el-form-item>
          <el-switch
            v-model="formData.status"
            active-value="1"
            inactive-value="0"
            active-text="显示"
            inactive-text="不显示">
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit" v-if="!isEdit">
            提交
          </el-button>
          <el-button type="primary" @click="handleSave" v-else>
            保存
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import Upload from '@/components/Upload'
  export default {
    components: {
      Upload,
    },
    data() {
      return {
        formData:{
          headerImg: '',
          title: '',
          newsId: '',
          sort: '', //控制排序
          status: '1' //控制显示,默认为显示
        },
        news: [],
        isEdit: false
      }
    },
    methods: {
      getNews() {
        this.$axios.get('/admin/news').then(res => {
          this.news = res.data
        })
      },
      handleSubmit() {
        this.$axios.post('/admin/swiper', this.formData).then(res => {
          if(res.code == 200) {
            this.$message.success(res.msg)
            this.$router.push({name: 'swiper'})
          }else {
            this.$message.info(res.msg)
          }
        })
      },
      handleSave() {
        this.$axios.patch(`/admin/swiper/${this.$route.query.id}`, this.formData).then(res => {
          if(res.code == 200) {
            this.$message.success(res.msg)
            this.$router.push({name: 'swiper'})
          }
        })
      },
      getEditData() {
        this.$axios.get(`/admin/swiper/${this.$route.query.id}`).then(res => {
          this.formData = res.data
        })
      }
    },
    created() {
      if(this.$route.name == 'editSwiper') {
        this.isEdit = true
      }else  {
        this.isEdit = false
      }
      this.getNews()
      if(this.isEdit) {
        this.getEditData()
      }
    },
    watch: {
      $route(to, from) {
        if(to.name == 'editSwiper') {
          this.isEdit = true
        }else  {
          this.isEdit = false
          this.formData = {
            headerImg: '',
            title: '',
            newsId: '',
            sort: '', //控制排序
            status: '' //控制显示,默认为显示
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .swiper-title {
    width: 400px;
  }
</style>
