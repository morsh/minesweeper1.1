import { IField } from './types';

export class Field implements IField {
  x: number = -1;
  y: number = -1;
  flagged: boolean = false;
  revealed: boolean = false;
  mine: boolean = false;
  mineCount: number = 0;
  empty: boolean = true;
  text: string = '';

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  isMine(): boolean {
    return this.mine;
  }

  setFlagged(flagged: boolean): void {
    this.flagged = true;
  }

  setRevealed(revealed: boolean): void {
    this.revealed = true;
    this.flagged = false;
  }

  setMine(mine: boolean): void {
    this.mine = true;
    this.mineCount = 0;
    this.empty = false;
  }

  setEmpty(empty: boolean): void {
    this.empty = true;
    this.mine = false;
    this.mineCount = 0; 
  }

  setText(text: string): void {
    this.text = text;
  }

  setMineCount(count: number): void {
    this.mineCount = count;
  }
}