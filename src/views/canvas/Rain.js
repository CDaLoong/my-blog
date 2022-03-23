// import { random } from '@/utils';
// export class Rain {
//   constructor(w, h) {
//     this.w = w;
//     this.h = h;
//     this.x = random(1, w);
//     this.y = 0; // 坐标y  坐标x
//     this.r = 1; // 半经
//     this.ySpeed = random(4, 7); // 加速度
//     this.rSpeed = 1;
//     this.t = 1; // 透明度
//     this.ts = 0.96; // 透明度系数
//     this.l = random(h * 0.8, h * 0.9);
//     this.maxR = 50;
//   }
//
//   init() {
//     this.x = random(1, this.w);
//     this.y = 0; // 坐标y  坐标x
//     this.r = 1; // 半经
//     this.ySpeed = random(4, 7); // 加速度
//     this.rSpeed = 1;
//     this.t = 1; // 透明度
//     this.ts = 0.96; // 透明度系数
//     this.l = random(this.h * 0.8, this.h * 0.9);
//     this.maxR = 50;
//   }
//
//   draw(ctx) {
//     if (this.y > this.l) {
//       ctx.beginPath(); // 开启一个路径
//       ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
//       // 圆心的坐标 x  y  ，半径   ，起始角度 ， 2*Math.pi ,false 顺时针  true 逆时针
//       ctx.strokeStyle = 'rgba(0,255,255,' + this.t + ')';
//       ctx.closePath(); // 闭合路径
//       ctx.stroke(); // 开始绘制 默认黑
//     } else {
//       ctx.fillStyle = this.colorRandom(this.t); // 随机颜色
//       ctx.fillRect(this.x, this.y, 2, 10); // 坐标x y  ，width height
//     }
//     this.updeta(); // 坐标更新
//   }
//
//   updeta() {
//     if (this.y > this.l) {
//       // init.ronund();
//       if (this.t > 0.03) {
//         this.r += this.rSpeed;
//         if (this.r > this.maxR) {
//           this.t *= this.ts;
//         }
//       } else {
//         this.init(); // 重新初始化
//       }
//       // init.r+=2;
//     } else {
//       this.y += this.ySpeed;
//       // init.draw();
//     }
//   }
//
//   colorRandom(t) {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return 'rgba(' + r + ',' + g + ',' + b + ',' + t + ')'
//   }
// }
