import React, {useState}from 'react';


function Slides({slides}) {
   const [currentIdx, setCurrentIdx]=useState(0);

   function handleNext(){
     setCurrentIdx(currentIdx+1)
   }

   function handlePrivous(){
     setCurrentIdx(currentIdx-1)
   }

   function handleRestart(){
     setCurrentIdx(0)
   }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={handleRestart} disabled={currentIdx===0} >Restart</button>
                <button data-testid="button-prev" className="small" onClick={handlePrivous} disabled={currentIdx===0}>Prev</button>
                <button data-testid="button-next" className="small" onClick={handleNext} disabled={currentIdx===slides.length-1}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentIdx].title}</h1>
                <p data-testid="text">{slides[currentIdx].text}</p>
            </div>
        </div>
    );

}

export default Slides;
