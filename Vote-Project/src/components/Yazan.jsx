import Card from "./Card"
import NavBar from "./NavBar"
import { useState } from "react"

const Yazan = () => {

    const [votedCardIndex, setVotedCardIndex] = useState(null);

  return (
    <section className="vote-page">
      <NavBar/>
      <h1>Vote Page</h1>
      <section className="cards">
      <Card index={0} votedCardIndex={votedCardIndex} 
      setVotedCardIndex={setVotedCardIndex}
      title="Attack On Titan" img="images\Attack-on-Titan.jpg"/>

      <Card 
      index={1} 
      votedCardIndex={votedCardIndex}
      setVotedCardIndex={setVotedCardIndex}
      title="Naruto" img="images\Naruto-Shippuden.jpg"/>

      <Card 
      index={2} 
      votedCardIndex={votedCardIndex}
      setVotedCardIndex={setVotedCardIndex}
      title="One Piece" img="images\One-Piece.jpg"/>

      <Card
      index={3} 
      votedCardIndex={votedCardIndex}
      setVotedCardIndex={setVotedCardIndex}
      title="Attack On Titan" img="images\Demon-Slayer.jpg"/>
      </section>
    </section>
  )
}

export default Yazan
