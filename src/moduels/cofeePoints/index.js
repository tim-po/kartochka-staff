import React, {useState} from 'react';
import "./index.scss"

function CoffeePointsScreen(props) {

  const [points, setPoints] = useState(0)

  const stackSize = 5

  let pointMarks = []
  let pointStacks = []

  for (let i = 0; i < points%stackSize; i++) {
    pointMarks.push(
      <div className={"point mark"}>
        ☕️
      </div>
    )
  }

  for (let i = 0; i <= (points/stackSize)-1; i++) {
    pointStacks.push(
      <div className={"point stack"} onClick={() => setPoints(points-stackSize)}>
        ☕️
      </div>
    )
  }

  return ([
    <div className={"coffee-points-screen"}>
      <div className={"coffee-points"}>
        <div className={"unary"}>
          {pointMarks}
        </div>
        <div className={"stacks"}>
          {pointStacks}
        </div>
      </div>
      <div className={"buttons-flex"}>
        <button className={"interaction-button"} onClick={() => setPoints(points+1)}>
          +
        </button>
        <button className={"interaction-button"} onClick={() => setPoints(points-1)}>
          -
        </button>
      </div>
    </div>
  ]);
}

export default CoffeePointsScreen;
