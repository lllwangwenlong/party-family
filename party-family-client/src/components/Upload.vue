<template>
  <label class="upload-wrap">
    <img  :src="imgUrl" v-show="imgUrl">
    <input type="file" style="display: none" @change="handleChange">
  </label>
</template>

<script>
    export default {
      props: {
        value: {
          type: String
        }
      },
      data() {
        return {
          imgUrl: this.value,
          // imgUrl: 'http://pbl.yaojunrong.com/avatar1.jpg',
        }
      },
      methods: {
        handleChange(e) {
          let _this = this
          let file = e.target.files[0] //取得所上传图片的所有信息
          let reader = new FileReader();   //html5读文件
          reader.readAsDataURL(file); //转BASE64
          reader.onload=function() {    //读取完毕后调用接口
            console.log(reader);
            let url = reader.result.split(',')[1]
            let formData = new FormData()
            formData.append('myFile',url)
            _this.$axios.post('/image/uploadBase64.do', formData).then(res => {
              console.log(res);
              _this.imgUrl = _this.url
              _this.$emit('input', res.url)
              _this.$emit('change', res.url)
            })
          }
        },
      },
      watch: {
        value(val) {
          this.imgUrl = val
        }
      }
    }
</script>

<style scoped lang="scss">
.upload-wrap {
  position: relative;
  display: block;
  width: 0.9rem;
  height: 0.9rem;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
