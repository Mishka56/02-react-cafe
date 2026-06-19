import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import css from "./App.module.css"
import { useState } from 'react'
import type Votes from "../../types/votes";
export type VoteType = keyof Votes
import VoteStats from "../VoteStats/VoteStats";
import Notifications from "../Notification/Notifications";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  
      const handleVote = (type: VoteType) => {
        setVotes((prevVotes) => ({
          ...prevVotes,
          [type]: prevVotes[type] + 1,
        }))
      };
  
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
const totalVotes = votes.good + votes.neutral + votes.bad;
const positiveRate = totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100): 0;
 
  return ( 
  
      <div className={css.app}>
      <CafeInfo title="Sip Happens Cafe" description="Please rate our service by selecting one of the options below."/>
        <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />
      {/* <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} /> */}
   {totalVotes > 0 ? (
      <VoteStats 
        votes={votes} 
        totalVotes={totalVotes} 
        positiveRate={positiveRate} 
      />
    ) : (
          <Notifications />
    )}
      </div>  
  );
}
