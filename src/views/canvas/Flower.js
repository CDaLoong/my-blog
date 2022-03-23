import { random } from '@/utils';
export class Flower {
  constructor(ctx, width, height, color, clarity, RMax, RMin) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.cx = Math.random() * width;
    this.cy = Math.random() * height;
    this.R = random(RMax, RMin);
    this.color = color;
    this.clarity = clarity;
    this.angle = 0;
    this.xDire = 'right'; // left right
    this.yDire = 'down'; // down top
    this.xSpeed = Math.random();
    this.ySpeed = Math.random();
  }

  draw() {
    // this.ctx.clearRect(0, 0, this.width, this.height);
    const rad = 180 / Math.PI;
    const part = 72;
    const ROut = this.R * 1.3;
    for (let a = 1; a <= 5; a++) {
      let x0 = this.cx + this.R * Math.cos((a * part) / rad);
      let y0 = this.cy + this.R * Math.sin((a * part) / rad);
      const rotation0 = this.computePosition(x0, y0, this.angle);
      x0 = rotation0.rx;
      y0 = rotation0.ry;

      let x1 = this.cx + ROut * Math.cos((a * part + 2 * part / 6) / rad);
      let y1 = this.cy + ROut * Math.sin((a * part + 2 * part / 6) / rad);
      const rotation1 = this.computePosition(x1, y1, this.angle);
      x1 = rotation1.rx;
      y1 = rotation1.ry;

      // 这个点其实在中点，也就是 37.5°的地方
      let x2 = this.cx + this.R * Math.cos((a * part + 3 * part / 6) / rad);
      let y2 = this.cy + this.R * Math.sin((a * part + 3 * part / 6) / rad);
      const rotation2 = this.computePosition(x2, y2, this.angle);
      x2 = rotation2.rx;
      y2 = rotation2.ry;

      let x3 = this.cx + ROut * Math.cos((a * part + 4 * part / 6) / rad);
      let y3 = this.cy + ROut * Math.sin((a * part + 4 * part / 6) / rad);
      const rotation3 = this.computePosition(x3, y3, this.angle);
      x3 = rotation3.rx;
      y3 = rotation3.ry;

      let x4 = this.cx + this.R * Math.cos((a * part + part) / rad);
      let y4 = this.cy + this.R * Math.sin((a * part + part) / rad);
      const rotation4 = this.computePosition(x4, y4, this.angle);
      x4 = rotation4.rx;
      y4 = rotation4.ry;

      // petal
      this.ctx.beginPath();
      this.ctx.moveTo(this.cx, this.cy);
      this.ctx.quadraticCurveTo(x0, y0, x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.lineTo(x3, y3);
      this.ctx.quadraticCurveTo(x4, y4, this.cx, this.cy);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.strokeStyle = `rgba(160, 160, 160, ${this.clarity})`;
      this.ctx.stroke();

      this.ctx.save();
      this.ctx.strokeStyle = '#fff';

      let ax0 = this.cx + this.R / 3 * Math.cos((a * part + 2 * part / 6) / rad);
      let ay0 = this.cy + this.R / 3 * Math.sin((a * part + 2 * part / 6) / rad);
      const rotationA0 = this.computePosition(ax0, ay0, this.angle);
      ax0 = rotationA0.rx;
      ay0 = rotationA0.ry;
      let ax1 = this.cx + this.R / 2 * Math.cos((a * part + 3 * part / 6) / rad);
      let ay1 = this.cy + this.R / 2 * Math.sin((a * part + 3 * part / 6) / rad);
      const rotationA1 = this.computePosition(ax1, ay1, this.angle);
      ax1 = rotationA1.rx;
      ay1 = rotationA1.ry;
      let ax2 = this.cx + this.R / 3 * Math.cos((a * part + 4 * part / 6) / rad);
      let ay2 = this.cy + this.R / 3 * Math.sin((a * part + 4 * part / 6) / rad);
      const rotationA2 = this.computePosition(ax2, ay2, this.angle);
      ax2 = rotationA2.rx;
      ay2 = rotationA2.ry;
      let ary = []
      // 如果半径大于40
      if (this.R > 40) {
        ary = [{
          x: ax0,
          y: ay0
        }, {
          x: ax1,
          y: ay1
        }, {
          x: ax2,
          y: ay2
        }];
      } else {
        ary = [{
          x: ax1,
          y: ay1
        }];
      }

      this.ctx.beginPath();
      for (let i = 0; i < ary.length; i++) {
        this.ctx.moveTo(this.cx, this.cy);
        this.ctx.lineTo(ary[i].x, ary[i].y);
        this.ctx.arc(ary[i].x, ary[i].y, 2, 0, 2 * Math.PI)
      }
      this.ctx.stroke();
      this.ctx.restore();
    }
    this.update();
  }

  update() {
    this.angle += this.ySpeed;
    if (this.cy > this.height + this.R * 1.3) {
      this.ySpeed = Math.random();
      this.cy -= this.ySpeed;
      this.yDire = 'top';
    } else if (this.cy < -this.R * 1.3) {
      this.ySpeed = Math.random();
      this.cy += this.ySpeed;
      this.yDire = 'down';
    } else {
      if (this.yDire === 'top') this.cy -= this.ySpeed;
      else this.cy += this.ySpeed;
    }
    if (this.cx > this.width + this.R * 1.3) {
      this.xSpeed = Math.random();
      this.cx -= this.xSpeed;
      this.xDire = 'left';
    } else if (this.cx < -this.R * 1.3) {
      this.xSpeed = Math.random();
      this.cx += this.xSpeed;
      this.xDire = 'right';
    } else {
      if (this.xDire === 'left') this.cx -= this.xSpeed;
      else this.cx += this.xSpeed;
    }
  }

  computePosition(x, y, angle) {
    // 圆心
    const a = this.cx;
    const b = this.cy;
    // 计算
    const c = -Math.PI / 180 * angle;
    const rx = (x - a) * Math.cos(c) - (y - b) * Math.sin(c) + a;
    const ry = (y - b) * Math.cos(c) + (x - a) * Math.sin(c) + b;
    return { rx, ry };
  }
}

export class FlowerList {
  constructor(length, ctx, width, height) {
    this.length = length;
    this.ctx = ctx;
    this.innerW = width;
    this.innerH = height;
    this.flowers = new Array(length);
  }

  init() {
    for (let i = 0; i < this.length; i++) {
      const clarity = Math.random();
      const color = this.colorRandom(clarity);
      this.flowers[i] = new Flower(this.ctx, this.innerW, this.innerH, color, clarity, 60, 10);
    }
  }

  colorRandom(clarity) {
    const r = Math.floor(random(160, 255));
    const g = Math.floor(random(0, 160));
    const b = Math.floor(random(0, 255));
    return `rgba(${r},${g},${b},${clarity})`;
  }
}
