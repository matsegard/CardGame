import Icard from "./Icard";

export default interface Iplayer {
  // id: number;
  // name: string;
  playerId: string;
  currentPlayerID?: string;
  cardHand?: Icard[];
  //   cardFaceUp: [3];
  //   cardFaceDwon: [3];
}

export default interface cardHand {
  cardHand?: Icard[];
  handId?: number;
}
