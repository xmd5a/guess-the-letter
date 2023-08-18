class Screen {
  private _canvas: HTMLCanvasElement | null;
  private _context: CanvasRenderingContext2D | null;

  constructor() {
    this._canvas = document.querySelector("canvas");
    this._context = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  public get canvas() {
    if (!this._canvas) {
      throw new Error("canvas error");
    }

    return this._canvas;
  }

  public get context() {
    if (!this._context) {
      throw new Error("canvas context error");
    }

    return this._context;
  }
}

export { Screen };
