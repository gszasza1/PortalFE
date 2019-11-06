import { GeneralProps } from "../../functions/interfaces";
import { ScoreRankData } from "./score";

export interface DispachedProps {
  getRankList: Function;
}
export interface MappedProps extends GeneralProps {
  data?: ScoreRankData;
  displayDataTitle: string;
  number: {
    first: number;
    second: number;
    third: number;
    fourth: number;
  };
}

export type RankProps = MappedProps & DispachedProps;
