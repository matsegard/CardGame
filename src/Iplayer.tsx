import Icards from "./Icards";

export default interface Iplayer {
  // id: number;
  // name: string;
  playerId: string;
  currentPlayerID?: string;
  cardHand?: Icards[];
  //   cardFaceUp: [3];
  //   cardFaceDwon: [3];
}

export default interface cardHand {
cardHand?: Icards[];
handId?: number;
}
