//npm install animejs --save
import anime from "animejs";

import "./StaggeringAnimation.css";

function StaggeringAnimation() {
  function handleOnClick() {
    anime({
      targets: ".staggering-grid .el",
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      delay: anime.stagger(200, { grid: [10, 3], from: "center" }),
    });
    return anime;
  }

  return (
    <>
      <div class="staggering-content staggering-grid" onClick={handleOnClick}>
        <div class="grid-square">
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
        </div>
      </div>
    </>
  );
}

export default StaggeringAnimation;