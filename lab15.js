let canvas1;
let canvas2;
let ctx1;
let ctx2;
let labelX;
let labelY;
let output;

window.onload = () => {
  canvas1 = document.querySelector("#surface");
  canvas2 = document.querySelector("#canvas1");
  ctx1 = canvas1.getContext("2d");
  ctx2 = canvas2.getContext("2d");
  labelX = document.querySelector("#xout");
  labelY = document.querySelector("#yout");
  output = document.querySelector(`#output`);
  canvas1.addEventListener("mousemove", (e) =>
    updatePosition(e, ctx1, canvas1)
  );
  let rectangle = new drawSquare(ctx2);
  canvas2.addEventListener("click", (e) => {
    let squareCoord = {
      x: [40, 90],
      y: [100, 150],
      mouseX: e.offsetX,
      mouseY: e.offsetY,
      mouseOverSquare() {
        if (
          this.mouseX >= this.x[0] &&
          this.mouseX <= this.x[1] &&
          this.mouseY >= this.y[0] &&
          this.mouseY <= this.y[1]
        ) {
          return true;
        }
        return false;
      },
    };
    if (squareCoord.mouseOverSquare()) {
      alert(`You clicked inside the square!`);
    } else {
      output.innerHTML = `X: ${squareCoord.mouseX}, Y: ${squareCoord.mouseY}`;
    }
  });
};

const updatePosition = (e, context, canvas) => {
  labelX.innerHTML = `${e.offsetX}`;
  labelY.innerHTML = `${e.offsetY}`;
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.arc(e.offsetX, e.offsetY, 10, 0, (Math.PI / 180) * 360);
  context.stroke();
};

class drawSquare {
  #ctx;
  #width;
  #height;
  constructor(ctx) {
    this.#ctx = ctx;
    this.#draw(40, 100);
  }
  #draw(x, y) {
    const length = 50;
    this.#ctx.fillStyle = "purple";
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(x + length, y);
    this.#ctx.lineTo(x + length, y + length);
    this.#ctx.lineTo(x, y + length);
    this.#ctx.closePath();
    this.#ctx.stroke();
    this.#ctx.fill();
  }
}
