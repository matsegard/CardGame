import Icards from "./Icards";

export default interface Iplayer {
  id?: number;
  name: string;
  cardHand?: Icards[];
  //   cardFaceUp: [3];
  //   cardFaceDwon: [3];
}
