<template>
  <div class="html-container">
    <ul class="html-element">
      <li v-for="(element,index) in elementList" :key="index" class="element-container" :class="element.class">
        <div v-if="element.show" class="element" :style="{width:element.width}">
          <span>{{element.element}}</span>
        </div>
        <div class="description-container">
          <div class="description">
            <h2 class="description-name">{{element.name}}</h2>
            <p class="description-text" v-html="element.description" />
            <ul class="description-links">
              <li v-for="(link,index) in element.links" :key="index"><a class="description-link" :href="link.link">{{link.name}}</a></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { elementList } from './config';

export default {
  name: 'HtmlElement',
  data() {
    return {
      elementList
    }
  },
}
</script>

<style lang="scss" scoped>
.html-container {
  .html-element {
    width: 980px;
    border: 1px solid #000;
    margin: 120px auto 120px;
    display: grid;
    grid-template-columns: repeat(30, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 10px;

    .element-container {
      grid-column: auto/span 1;
      //display: grid;
      //place-items: center;
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
    .element {
      height: 66px;
      background-color: skyblue;
      border-radius: 8px;
      text-align: center;
      line-height: 66px;
      overflow: hidden;
      transition: 0.2s;
    }
    .element:hover {
      cursor: pointer;
      box-shadow: rgba(0,0,0,.6) 0 0 6px 2px;
    }
    .description-container {
      width: 240px;
      position: absolute;
      padding-top: 10px;
      z-index: 999;
      display: none;
      transition: 0.3s;
      .description {
        background-color: bisque;
        width: 100%;
        height: 100%;
        transition: 0.5s;
        padding: 10px 0 20px 10px;
        border-radius: 6px;
        .description-name {
          color: #6b9eee;
        }
        .description-text {
          margin: 20px;
          color: salmon;
        }
        .description-links {
          width: 100%;
          display: flex;
          li {
            margin-left: 5px;
          }
          .description-link {
            cursor: pointer;
            color: silver;
          }
          .description-link:hover{
            color: #12cbc4;
          }
        }
      }
    }
    .element:hover + .description-container {
      display: block;
    }
    .description-container:hover {
      display: block;
      .description {
        box-shadow: rgba(0,0,0,.6) 0 0 6px 2px;
      }
    }
  }
}
</style>
