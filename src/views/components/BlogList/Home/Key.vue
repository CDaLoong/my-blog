<template>
  <div>
    <div class="key-container">
      <ul class="keyboard">
        <li v-for="(item, index) in keys" :key="index" class="key" :class="item.class">{{item.key1}}<span v-if="item.key2">{{item.key2}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { keyList } from './config';

export default {
  name: 'Key',
  data() {
    return {
      keys: null,
    }
  },
  created () {
    this.keys = keyList.keyRow1.concat(keyList.keyRow2, keyList.keyRow3, keyList.keyRow4, keyList.keyRow5)
  }
}
</script>

<style lang="scss" scoped>
.key-container {
  width: 100%;
  height: 100%;
}

.keyboard {
  width: 920px;
  height: 324px;
  margin: 60px auto;
  border-radius: 13px;
  padding: 18px;

  display: grid;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
  box-shadow: -3px -3px 10px #f3f5f8, 3px 3px 6px #c2ccdb;

  .key {
    border-radius: 8px;
    /* 跨越两列 */
    grid-column: auto/span 2;

    display: grid;
    place-items: center;

    box-shadow: inherit;

    cursor: pointer;
    /*
      过渡：css属性的变化在0.2秒中内完成
      并非所有的变化都能应用过渡
    */
    transition: 0.3s;
  }

  .key:hover {
    box-shadow: 0 0 0 #f3f5f8, 0 0 0 #c2ccdb, inset 3px 3px 6px rgba(0, 0, 0, 0.2),
    inset -3px -3px 10px rgba(255, 255, 255, 0.3);
  }

  .s3 {
    grid-column: auto/span 3;
  }
  .s4 {
    grid-column: auto/span 4;
  }
  .s5 {
    grid-column: auto/span 5;
  }
  .s12 {
    grid-column: auto/span 12;
  }

  /* 各种特殊颜色 */
  .c1 {
    background: #ed4c67;
    color: #fbdbe1;
  }
  .c2 {
    background: #d63031;
    color: #f7d6d6;
  }
  .c3 {
    background: #12cbc4;
    color: #cafaf8;
  }
  .c4 {
    background: #ee5a24;
    color: #fcded3;
  }
  .c5 {
    background: #fdcb6e;
    color: #fff5e2;
  }
  .c6 {
    background: #1e90ff;
    color: #d2e9ff;
  }
  .c7 {
    background: #be2edd;
    color: #f2d5f8;
  }
  .c8 {
    background: #5352ed;
    color: #dddcfb;
  }
  .c9 {
    background: #26de81;
    color: #d4f8e6;
  }
}
</style>
