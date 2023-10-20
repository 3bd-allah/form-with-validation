import React, { useState } from "react";

const FeedbackComponent = () => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if(Number(score)<5 && comment.length <10){
        alert("this products is poor")
    }else{
        alert("this product is good")
    }

    console.log("Form submitted!")
    setScore("10")
    setComment("")
  };
  return (
    <div>
      <form className="border border-3 w-50 m-auto" onSubmit={handleSubmit} >
        <h2>Feedback Form</h2>
        <fieldset>
          <div>
            <label>
              Score:{score} <span></span>
              <br />
              <input
                type="range"
                onChange={(e) => setScore(e.target.value)}
                value={score}
                min={0}
                max={10}
              />
            </label>
          </div>
          <div>
            <label>Comment:
                <br/>
                <textarea value={comment} onChange={e => setComment(e.target.value)}/>

                
            </label>

          </div>
          <div>
            <button className="btn btn-primary">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FeedbackComponent;
