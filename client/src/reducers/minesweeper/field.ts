export type IFieldContructorParams = Partial<IField> & {
  x: number;
  y: number;
};

export default abstract class Field {

  static setMine(field: IField, mine: boolean) {
    if (mine) {
      field.mine = true;
      field.empty = false;
      field.mineCount = 0;
    } else {
      field.mine = false;
      field.empty = true;
      field.mineCount = 0;
    }
  }

  static setEmpty(field: IField, empty: boolean) {
    field.empty = empty;
  }

  static setMineCount(field: IField, mineCount: number) {
    field.mineCount = mineCount;
  }

  static fromCoordinates(x: number, y: number) {
    return Field.fromObject({ x, y });
  }

  static fromObject(obj: IFieldContructorParams): IField {

    const field: IField = Object.assign(
      { 
        x: -1, 
        y: -1,
        flagged: false,
        revealed: false,
        
        mine: false,
        mineCount: 0,
        empty: true
      },
      obj
    );

    return field;

  }
}