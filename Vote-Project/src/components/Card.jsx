/* eslint-disable react/prop-types */
import { useState , useEffect} from "react";
const Card = ({ img , title , index , votedCardIndex , setVotedCardIndex } ) => {
    
    const [score, setScore] = useState(0);
    // const [voted, setVoted] = useState(false); 
    const [showConfirmation, setShowConfirmation] = useState(false);


    useEffect(() => {
      const storedScore = localStorage.getItem(`voteScore-${index}`);
      if (storedScore && parseInt(storedScore, 10) > 0) {
        setScore(parseInt(storedScore, 10));
      }
    }, [index]);

      const handleVote = () => {
        setShowConfirmation(true);
      };

      const handleConfirm = () => {
        const newScore = score + 1;
        setScore(newScore);
        localStorage.setItem(`voteScore-${index}`, newScore.toString());
        setShowConfirmation(false);
        setVotedCardIndex(index); 
      };

      const handleCancel = () => {
        setShowConfirmation(false);
      };

      const handleChangeVote = () => {
        setScore(0);
        localStorage.removeItem(`voteScore-${index}`); 
        setVotedCardIndex(null); 
      };

  return (

   
      
            <section className="card">

               <div className="img">
                <img src={img} alt={title} />
                </div>

                <h3>{title}</h3>

                {votedCardIndex === null && !showConfirmation && (<button onClick={handleVote} className="vote" type="button">Vote</button>)}

              { showConfirmation && (  <div>
                <button onClick={handleConfirm} type="button">Im Sure</button>
                <button onClick={handleCancel} type="button">Cancel</button>
                </div >)}

              { votedCardIndex === index && !showConfirmation &&  (<div >
                <button onClick={handleChangeVote} type="button">Change Vote</button>
                </div>)}

                <p className="vote-score">Vote: {score}</p>
            </section>
       


        
    
  )
}

export default Card
