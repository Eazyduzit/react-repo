import "./App.css";
import { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery(){
  let [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  
  function handleNextClick(){
    setIndex(index + 1);
    if(index === 11){
        setIndex(index = 0);
    }
  }

  function handlePreviousClick(){
    setIndex(index - 1);
    if(index === 0){
        setIndex(index = 11)
    }
  }

  function handleMoreClick(){
    setShowMore(!showMore)
  }

  let sculpture = sculptureList[index];
  return(
    <>
      <button onClick={handlePreviousClick}>
        Previous
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index +1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      {showMore && <p>{sculpture.description}</p>}
    </>
  )
}