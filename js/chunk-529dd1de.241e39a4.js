(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-529dd1de"],{"0ad3":function(t,a,e){},"2c43":function(t,a,e){},"4cc7":function(t,a,e){"use strict";e("6935")},"53a1":function(t,a,e){"use strict";var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"layout-container"},[a("div",{staticClass:"left"},[t._t("left")],2),a("div",{staticClass:"main"},[t._t("default")],2),a("div",{staticClass:"right"},[t._t("right")],2)])},s=[],n={name:"Layout"},o=n,r=(e("7702"),e("2877")),c=Object(r["a"])(o,i,s,!1,null,"127597d5",null);a["a"]=c.exports},"5a47":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;return a("Layout",{scopedSlots:t._u([{key:"right",fn:function(){return[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"right-container"},[t.data?a("BlogTOC",{attrs:{toc:t.data.toc}}):t._e()],1)]},proxy:!0}])},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],ref:"mainContainer",staticClass:"main-container"},[t.data?a("BlogDetail",{attrs:{blog:t.data}}):t._e(),t.isLoading?t._e():a("BlogComment")],1)])},s=[],n=(e("14d9"),e("af6d")),o=e("53a1"),r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"blog-detail-container"},[a("h1",[t._v(t._s(t.blog.title))]),a("div",{staticClass:"aside"},[a("span",[t._v("日期: "+t._s(t.formatDate(t.blog.createDate)))]),a("span",[t._v("浏览: "+t._s(t.blog.scanNumber))]),a("a",{attrs:{href:"#data-form-container"}},[t._v("评论: "+t._s(t.blog.commentNumber))]),a("RouterLink",{attrs:{to:{name:"CategoryBlogArticle",params:{categoryId:t.blog.category.id}}}},[t._v(" "+t._s(t.blog.category.name)+" ")])],1),a("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.blog.htmlContent)}})])},c=[],l=e("ed08"),u=(e("2c43"),e("cc61"),{name:"BlogDetail",props:{blog:{type:Object,required:!0}},created(){},methods:{formatDate:l["b"]}}),d=u,h=(e("4cc7"),e("2877")),m=Object(h["a"])(d,r,c,!1,null,"16623ff6",null),f=m.exports,g=function(){var t=this,a=t._self._c;return a("div",{staticClass:"blog-toc-container"},[a("h2",{staticStyle:{"margin-bottom":"20px"}},[t._v("目录")]),a("RightList",{attrs:{list:t.tocWithSelect},on:{select:t.handleSelect}})],1)},p=[],v=e("aced"),b={name:"BlogTOC",components:{RightList:v["a"]},props:{toc:{type:Array}},data(){return{activeAnchor:""}},computed:{tocWithSelect(){const t=(a=[])=>a.map(a=>({...a,isSelect:a.anchor===this.activeAnchor,children:t(a.children)}));return t(this.toc)},doms(){const t=[],a=e=>{for(const i of e)t.push(document.getElementById(i.anchor)),i.children&&i.children.length&&a(i.children)};return a(this.toc),t}},created(){this.setSelectDebounce=Object(l["a"])(this.setSelect,50),this.$bus.$on("mainScroll",this.setSelectDebounce)},destroyed(){this.$bus.$off("mainScroll",this.setSelectDebounce)},methods:{handleSelect(t){location.hash=t.anchor},setSelect(t){if(!t)return;this.activeAnchor="";const a=200;for(const e of this.doms){if(!e)continue;const t=e.getBoundingClientRect().top;if(t>=0&&t<=a)return void(this.activeAnchor=e.id);if(t>a)return;this.activeAnchor=e.id}}}},_=b,C=(e("9257"),Object(h["a"])(_,g,p,!1,null,"b75f3f3e",null)),S=C.exports,y=function(){var t=this,a=t._self._c;return a("div",{staticClass:"blog-comment-container"},[a("MessageArea",{attrs:{title:"评论列表",subTitle:`(${t.data.total})`,list:t.data.rows,isListLoading:t.isLoading},on:{submit:t.handleSubmit}})],1)},D=[],$=e("684a"),L=e("e128"),k={mixins:[Object(L["a"])({total:0,rows:[]})],components:{MessageArea:$["a"]},data(){return{page:1,limit:10}},created(){this.$bus.$on("mainScroll",this.handleScroll)},destroyed(){this.$bus.$off("mainScroll",this.handleScroll)},computed:{hasMore(){return this.data.rows.length<this.data.total}},methods:{handleScroll(t){if(this.isLoading||!t)return;const a=100,e=Math.abs(t.scrollTop+t.clientHeight-t.scrollHeight);e<=a&&this.fetchMore()},async fetchData(){return await Object(n["d"])(this.$route.params.id,this.page,this.limit)},async fetchMore(){if(!this.hasMore)return;this.isLoading=!0,this.page++;const t=await this.fetchData();this.data.total=t.total,this.data.rows=this.data.rows.concat(t.rows),this.isLoading=!1},async handleSubmit(t,a){const e=await Object(n["e"])({blogId:this.$route.params.id,...t});this.data.rows.unshift(e),this.data.total++,a("评论成功")}}},w=k,x=(e("b560"),Object(h["a"])(w,y,D,!1,null,"52fae14a",null)),O=x.exports,M=e("f119"),j={name:"Detail",components:{Layout:o["a"],BlogDetail:f,BlogTOC:S,BlogComment:O},data(){return{isLoading:!1,data:null,checkPath:/^\/article\/.+$/}},computed:{param(){return this.$route.params.id?this.$route.params.id:null}},mixins:[Object(M["a"])("mainContainer")],updated(){const t=location.hash;location.hash="",setTimeout(()=>{location.hash=t},50)},methods:{async fetchData(){this.isloading=!0;const t=await Object(n["a"])(this.$route.params.id);t?(l["d"].setRouteTitle(t.title),this.data=t,this.isloading=!1):this.$router.push("/404")}},watch:{param:{handler(t,a){t&&null!==this.checkPath.exec(this.$route.path)&&t!==a&&this.fetchData()},immediate:!0,deep:!0}}},A=j,B=(e("af39"),Object(h["a"])(A,i,s,!1,null,"4307b429",null));a["default"]=B.exports},6588:function(t,a,e){},6775:function(t,a,e){},"684a":function(t,a,e){"use strict";var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"message-area-container"},[t._m(0),a("DataForm",t._g({},t.$listeners)),a("h3",[t._v(" "+t._s(t.title)+" "),a("span",[t._v(t._s(t.subTitle))])]),a("DataList",{attrs:{list:t.list}}),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],staticClass:"loading"})],1)},s=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"message-top"},[a("h1",[t._v("添加评论")])])}],n=function(){var t=this,a=t._self._c;return a("form",{ref:"form",staticClass:"data-form-container",attrs:{id:"data-form-container"},on:{submit:function(a){return a.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"form-item"},[a("div",{staticClass:"input-area"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nickname,expression:"formData.nickname"}],attrs:{type:"text",maxlength:"10",placeholder:"用户昵称"},domProps:{value:t.formData.nickname},on:{input:function(a){a.target.composing||t.$set(t.formData,"nickname",a.target.value)}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.nickname.length)+"/10")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.nickname))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"text-area"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],attrs:{maxlength:"300",placeholder:"输入内容"},domProps:{value:t.formData.content},on:{input:function(a){a.target.composing||t.$set(t.formData,"content",a.target.value)}}}),a("span",{staticClass:"tip"},[t._v(t._s(t.formData.content.length)+"/300")])]),a("div",{staticClass:"error"},[t._v(t._s(t.error.content))])]),a("div",{staticClass:"form-item"},[a("div",{staticClass:"button-area"},[a("button",{attrs:{disabled:t.isSubmiting}},[t._v(" "+t._s(t.isSubmiting?"提交中...":"提交")+" ")])])])])},o=[],r={name:"DataForm",data(){return{formData:{nickname:"",content:""},error:{nickname:"",content:""},isSubmiting:!1}},methods:{handleSubmit(){this.error.nickname=this.formData.nickname?"":"请填写昵称",this.error.content=this.formData.content?"":"请填写内容",this.error.nickname||this.error.content||(this.isSubmiting=!0,this.$emit("submit",this.formData,t=>{this.$showMessage({content:t,type:"success",duration:1e3,container:this.$refs.form,callback:()=>{this.isSubmiting=!1,this.formData.nickname="",this.formData.content=""}})}))}}},c=r,l=(e("d403"),e("2877")),u=Object(l["a"])(c,n,o,!1,null,"099ee0a8",null),d=u.exports,h=function(){var t=this,a=t._self._c;return a("ul",{staticClass:"data-list-container"},t._l(t.list,(function(e){return a("li",{key:e.id},[a("Avatar",{attrs:{url:e.avatar,size:44}}),a("div",{staticClass:"data"},[a("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),a("div",{staticClass:"content"},[t._v(t._s(e.content))]),a("div",{staticClass:"time"},[t._v(t._s(t.formatDate(e.createDate,!0)))])])],1)})),0)},m=[],f=e("ed08"),g={name:"DataList",components:{},props:{list:{type:Array,default:()=>[]}},methods:{formatDate:f["b"]}},p=g,v=(e("c8df"),Object(l["a"])(p,h,m,!1,null,"13f0c28b",null)),b=v.exports,_={name:"MessageArea",props:{title:{type:String,default:""},subTitle:{type:String,default:""},list:{type:Array,default:()=>[]},isListLoading:{type:Boolean,default:!1}},components:{DataForm:d,DataList:b}},C=_,S=(e("eb02"),Object(l["a"])(C,i,s,!1,null,"0a13640f",null));a["a"]=S.exports},6935:function(t,a,e){},"6d2b":function(t,a,e){},7702:function(t,a,e){"use strict";e("ffc1")},9257:function(t,a,e){"use strict";e("6d2b")},"9f11":function(t,a,e){},a1a8:function(t,a,e){"use strict";e("9f11")},aced:function(t,a,e){"use strict";var i=function(){var t=this,a=t._self._c;return a("ul",{staticClass:"right-list-container"},t._l(t.list,(function(e,i){return a("li",{key:i},[a("span",{class:{active:e.isSelect},on:{click:function(a){return t.handleClick(e)}}},[t._v(" "+t._s(e.name)+" ")]),e.aside?a("span",{staticClass:"aside",class:{active:e.isSelect},on:{click:function(a){return t.handleClick(e)}}},[t._v(" "+t._s(e.aside)+" ")]):t._e(),a("RightList",{attrs:{list:e.children},on:{select:t.handleClick}})],1)})),0)},s=[],n={name:"RightList",props:{list:{type:Array,default:()=>[]}},methods:{handleClick(t){t.isSelect||this.$emit("select",t)}}},o=n,r=(e("a1a8"),e("2877")),c=Object(r["a"])(o,i,s,!1,null,"2f04f9a4",null);a["a"]=c.exports},aeb3:function(t,a,e){},af39:function(t,a,e){"use strict";e("0ad3")},af6d:function(t,a,e){"use strict";e.d(a,"c",(function(){return s})),e.d(a,"b",(function(){return n})),e.d(a,"a",(function(){return o})),e.d(a,"e",(function(){return r})),e.d(a,"d",(function(){return c}));var i=e("ce03");async function s(t=1,a=10,e=-1){return await i["a"].get("/api/blog",{params:{page:t,limit:a,categoryid:e}})}async function n(){return await i["a"].get("/api/blogtype")}async function o(t){return await i["a"].get("/api/blog/"+t)}async function r(t){return await i["a"].post("/api/comment",t)}async function c(t,a=1,e=10){return await i["a"].get("/api/comment",{params:{blogid:t,page:a,limit:e}})}},b560:function(t,a,e){"use strict";e("6775")},c8df:function(t,a,e){"use strict";e("6588")},cc61:function(t,a,e){},d403:function(t,a,e){"use strict";e("e3c4")},e128:function(t,a,e){"use strict";a["a"]=function(t=null){return{data(){return{isLoading:!0,data:t}},async created(){this.data=await this.fetchData(),this.isLoading=!1}}}},e3c4:function(t,a,e){},eb02:function(t,a,e){"use strict";e("aeb3")},f119:function(t,a,e){"use strict";a["a"]=function(t){return{mounted(){this.$bus.$on("setMainScroll",this.handleSetMainScroll),this.$refs[t].addEventListener("scroll",this.handleMainScroll)},beforeDestroy(){this.$bus.$emit("mainScroll"),this.$bus.$off("setMainScroll",this.handleSetMainScroll),this.$refs[t].removeEventListener("scroll",this.handleMainScroll)},methods:{handleSetMainScroll(a){this.$refs[t].scrollTop=a},handleMainScroll(){this.$bus.$emit("mainScroll",this.$refs[t])}}}}},ffc1:function(t,a,e){}}]);
//# sourceMappingURL=chunk-529dd1de.241e39a4.js.map