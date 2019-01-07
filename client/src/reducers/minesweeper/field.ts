import { IField } from './types';

export class Field implements IField {
  x: number = -1;
  y: number = -1;
  flagged: boolean = false;
  revealed: boolean = false;
  
  private _mine: boolean = false;
  private _mineCount: number = 0;
  private _empty: boolean = true;

  get mine(): boolean { return this._mine; }
  get mineCount(): number { return this._mineCount; }
  get empty(): boolean { return this._empty; }

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  setMine(mine: boolean) {
    if (mine) {
      this._mine = true;
      this._empty = false;
      this._mineCount = 0;
    } else {
      this._mine = false;
      this._empty = true;
      this._mineCount = 0;
    }
  }

  setEmpty(empty: boolean) {
    this._empty = empty;
  }

  setMineCount(mineCount: number) {
    this._mineCount = mineCount;
  }
}