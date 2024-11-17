/* eslint-disable react/prop-types */
import { useState , useEffect} from "react";
const Card = ({ img , title} ) => {
    
    const [score, setScore] = useState(0);
    const [voted, setVoted] = useState(false); 
    const [showConfirmation, setShowConfirmation] = useState(false);


    useEffect(() => {
        const storedScore = localStorage.getItem("voteScore");
        if (storedScore && parseInt(storedScore, 10) > 0) {
          setScore(parseInt(storedScore, 10));
          setVoted(true); 
        } else {
            setVoted(false)
        }
      }, []);

      const handleVote = () => {
        setShowConfirmation(true);
      };

      const handleConfirm = () => {
        const newScore = score + 1;
        setScore(newScore);
        localStorage.setItem("voteScore", newScore.toString());
        setShowConfirmation(false);
        setVoted(true);
      };

      const handleCancel = () => {
        setShowConfirmation(false);
      };

      const handleChangeVote = () => {
        setScore(0);
        localStorage.removeItem("voteScore");
        setVoted(false);
        setShowConfirmation(false);
      };

  return (

   
      
            <section className="card">

               <div className="img">
                <img src={img} alt={title} />
                </div>

                <h3>{title}</h3>

                {!voted && !showConfirmation &&(<button onClick={handleVote} className="vote" type="button">Vote</button>)}

              { showConfirmation && (  <div>
                <button onClick={handleConfirm} type="button">Im Sure</button>
                <button onClick={handleCancel} type="button">Cancel</button>
                </div >)}

              { voted && !showConfirmation && (<div >
                <button onClick={handleChangeVote} type="button">Change Vote</button>
                </div>)}

                <p className="vote-score">Vote: {score}</p>
            </section>
       


        
    
  )
}

export default Card
