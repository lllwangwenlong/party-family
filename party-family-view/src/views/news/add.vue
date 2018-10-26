<template>
  <div>
    <el-card>
      <div slot="header">
        添加新闻
      </div>
      <el-form :model="formData" label-width="80px" label-position="left">
        <el-form-item label="新闻头图" required>
          <Upload v-model="formData.headerImg"></Upload>
        </el-form-item>
        <el-form-item label="新闻标题" required>
           <el-input v-model="formData.title"></el-input>
         </el-form-item>
        <el-form-item label="作者" required>
          <el-select v-model="formData.author">
            <el-option v-for="(item, index) in users"
                       :key="index"
                       :label="item.nickname"
                       :value="item._id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="新闻内容" required>
          <quill-editor
            v-model="formData.content"
            ref="myQuillEditor"
            :options="editorOption"
            @change="editChange($event)">
          </quill-editor>
        </el-form-item>
        <el-form-item label="新闻分类" required>
          <el-select v-model="formData.type">
            <el-option v-for="(item, index) in categories"
                       :value="item._id"
                       :label="item.title"
                       :key="index">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">
            提交
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import Upload from '@/components/Upload'
  import axios from 'axios'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  Quill.register('modules/ImageExtend', ImageExtend)

    export default {
      components: {
        quillEditor,
        Upload
      },
      data() {
        return {
          formData: {
            title: '',
            content: '',
            contentText: '',
            headerImg: '',
            author: '',
            type: '',
            look_num: '',
          },
          token: '',
          categories: [],
          users: [],
          editorOption: {
            modules: {
              ImageExtend: {
                loading: true,
                name: 'file',
                action: 'https://upload-z1.qiniup.com',
                response: (res) => {
                  return res.url
                },
                change: (xhr, formData) => {
                  formData.append('token', this.token)
                }
              },
              toolbar: {
                container: container,
                handlers: {
                  'image': function () {
                    QuillWatch.emit(this.quill.id)
                  }
                }
              }
            }
          },
        }
      },
      methods: {
        getUser() {
          this.$axios.get('/admin/adminUser').then(res => {
            if(res.code == 200) {
              this.users = res.data
            }
          })
        },
        getToken() {
          axios.get('http://upload.yaojunrong.com/getToken').then(res => {
            this.token = res.data.data
          })
        },
        getCategory() {
          this.$axios.get('/admin/category').then(res => {
            if(res.code == 200) {
              this.categories = res.data
            }
          })
        },
        editChange({ quill, html, text }) {
          this.formData.contentText = text
        },
        handleSubmit() {
          this.$axios.post('/admin/news', this.formData).then(res => {
            if(res.code == 200) {
              this.$message.success(res.msg)
              this.$router.push('/layout/news')
            }
          })
        },
      },
      created() {
        this.getUser()
        this.getToken()
        this.getCategory()
      }
    }
</script>

<style scoped lang="scss">
/deep/ .ql-editor {
  min-height: 200px;
}
</style>
