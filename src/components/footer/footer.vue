<template>
  <div class="footer">
    <p class="content">哈尔滨工业大学服务工程实践版权所有 &copy;2017 Powered By <a href="http://helianthuswhite.cn/" class="author">Helianthuswhite</a></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style lang="less">
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    .content {
      text-align: center;
      color: #666;
      .author {
        color: #20a0ff;
        text-decoration: underline;
      }
    }
  }
</style>
