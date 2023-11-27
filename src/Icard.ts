export default interface Icard {
  cardId: number;
  title?: string;
  cardValue: number;
  action?: boolean;
  cardPattern: string;
  faceUpDown?: boolean;
}
