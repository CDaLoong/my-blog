<template>
  <div>
    <div class="key-container">
      <ul class="keyboard">
        <li v-for="(item, index) in keys" :key="index" class="key" :class="item.class">{{item.key1}}<span v-if="item.key2">{{item.key2}}</span></li>
      </ul>
    </div>
<!--    <div class="key c1">💀</div>-->
<!--    <div class="key">-->
<!--      <span>!</span>-->
<!--      1-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>@</span>-->
<!--      2-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>#</span>-->
<!--      3-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>$</span>-->
<!--      4-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>%</span>-->
<!--      5-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>^</span>-->
<!--      6-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>&amp;</span>-->
<!--      7-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>*</span>-->
<!--      8-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>(</span>-->
<!--      9-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>)</span>-->
<!--      0-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>_</span>-->
<!--      - -->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>+</span>-->
<!--      =-->
<!--    </div>-->
<!--    <div class="key s4 c2">😅</div>-->
<!--    <div class="key s3 c3">📑</div>-->
<!--    <div class="key">Q</div>-->
<!--    <div class="key">W</div>-->
<!--    <div class="key">E</div>-->
<!--    <div class="key">R</div>-->
<!--    <div class="key">T</div>-->
<!--    <div class="key">Y</div>-->
<!--    <div class="key">U</div>-->
<!--    <div class="key">I</div>-->
<!--    <div class="key">O</div>-->
<!--    <div class="key">P</div>-->
<!--    <div class="key">-->
<!--      <span>{</span>-->
<!--      [-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>}</span>-->
<!--      ]-->
<!--    </div>-->
<!--    <div class="key s3">-->
<!--      <span>|</span>-->
<!--      \-->
<!--    </div>-->
<!--    <div class="key s4 c4">🔓</div>-->
<!--    <div class="key">A</div>-->
<!--    <div class="key">S</div>-->
<!--    <div class="key">D</div>-->
<!--    <div class="key">F</div>-->
<!--    <div class="key">G</div>-->
<!--    <div class="key">H</div>-->
<!--    <div class="key">J</div>-->
<!--    <div class="key">K</div>-->
<!--    <div class="key">L</div>-->
<!--    <div class="key">-->
<!--      <span>:</span>-->
<!--      ;-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>"</span>-->
<!--      ,-->
<!--    </div>-->
<!--    <div class="key s4 c5">😤</div>-->
<!--    <div class="key s5 c6">💪</div>-->
<!--    <div class="key">Z</div>-->
<!--    <div class="key">X</div>-->
<!--    <div class="key">C</div>-->
<!--    <div class="key">V</div>-->
<!--    <div class="key">B</div>-->
<!--    <div class="key">N</div>-->
<!--    <div class="key">M</div>-->
<!--    <div class="key">-->
<!--      <span>&lt;</span>-->
<!--      ,-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>&gt;</span>-->
<!--      .-->
<!--    </div>-->
<!--    <div class="key">-->
<!--      <span>?</span>-->
<!--      /-->
<!--    </div>-->
<!--    <div class="key s5 c6">💪</div>-->
<!--    <div class="key s3 c7">☕</div>-->
<!--    <div class="key s3 c5">🤩</div>-->
<!--    <div class="key s3 c8">⭐️</div>-->
<!--    <div class="key s12"></div>-->
<!--    <div class="key s3 c8">⭐️</div>-->
<!--    <div class="key c9">🌈</div>-->
<!--    <div class="key c9">👨‍💻</div>-->
<!--    <div class="key c7">☕</div>-->
  </div>
</template>

<script>
export default {
  name: 'Key',
  data() {
    return {
      keyRow1: [{ key1: '💀', class: 'c1' }, { key1: '!', key2: '1', class: '' }, { key1: '@', key2: '2', class: '' }, { key1: '#', key2: '3', class: '' }, { key1: '$', key2: '4', class: '' }, { key1: '%', key2: '5', class: '' }, { key1: '^', key2: '6', class: '' }, { key1: '&', key2: '7', class: '' }, { key1: '*', key2: '8', class: '' }, { key1: '(', key2: '9', class: '' }, { key1: ')', key2: '0', class: '' }, { key1: '_', key2: '-', class: '' }, { key1: '+', key2: '=', class: '' }, { key1: '😅', class: 's4 c2' }],
      keyRow2: [{ key1: '📑', class: 's3 c3' }, { key1: 'Q', class: '' }, { key1: 'W', class: '' }, { key1: 'E', class: '' }, { key1: 'R', class: '' }, { key1: 'T', class: '' }, { key1: 'Y', class: '' }, { key1: 'U', class: '' }, { key1: 'I', class: '' }, { key1: 'O', class: '' }, { key1: 'P', class: '' }, { key1: '{', key2: '[', class: '' }, { key1: '}', key2: ']', class: '' }, { key1: '|', key2: '\\', class: '' }],
      keyRow3: [{ key1: '🔓', class: 's4 c4' }, { key1: 'A', class: '' }, { key1: 'S', class: '' }, { key1: 'D', class: '' }, { key1: 'F', class: '' }, { key1: 'G', class: '' }, { key1: 'H', class: '' }, { key1: 'J', class: '' }, { key1: 'K', class: '' }, { key1: 'L', class: '' }, { key1: ':', key2: ';', class: '' }, { key1: '"', key2: '\'', class: '' }, { key1: '😤', class: 's4 c5' }],
      keyRow4: [{ key1: '💪', class: 's5 c6' }, { key1: 'Z', class: '' }, { key1: 'X', class: '' }, { key1: 'C', class: '' }, { key1: 'V', class: '' }, { key1: 'B', class: '' }, { key1: 'N', class: '' }, { key1: 'M', class: '' }, { key1: '<', key2: ',', class: '' }, { key1: '>', key2: '.', class: '' }, { key1: '?', key2: '/', class: '' }, { key1: '💪', class: 's5 c6' }],
      keyRow5: [{ key1: '☕', class: 's3 c7' }, { key1: '🤩', class: 's3 c5' }, { key1: '⭐', class: 's3 c8' }, { key1: '', class: 's12' }, { key1: '⭐', class: 's3 c8' }, { key1: '🌈', class: 'c9' }, { key1: '👨‍', class: 'c9' }, { key1: '☕', class: 'c7' }],
      keys: null,
    }
  },
  created () {
    this.keys = this.keyRow1.concat(this.keyRow2, this.keyRow3, this.keyRow4, this.keyRow5)
  }
}
</script>

<style lang="scss" scoped>
.key-container {
  position: absolute;
  left: calc(50% + 125px);
  transform: translate(-50%, 0);
  bottom: 60px;
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
    transition: 0.2s;
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
