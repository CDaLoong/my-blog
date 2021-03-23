<template>
  <div>
    <div class="editor" ref="editor"></div>
    <el-button type="primary" @click="editorText">确 定</el-button>
  </div>
</template>

<script>
import E from 'wangeditor'
// import { setEveryday } from '@/api'
export default {
  name: 'WriteBlog',
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    const editor = new E(this.$refs.editor)
    window.editor = editor
    editor.config.uploadImgServer = '/upload-img'
    editor.config.height = '320'
    editor.create()
  },
  methods: {
    editorText () {
      console.log(window.editor.txt.text())
      console.log(window.editor.txt.html())
    }
  }
}
</script>

<style scoped>

</style>
