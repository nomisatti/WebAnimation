import React, { useRef, useLayoutEffect } from 'react';
import './Style.css';

function App() {

  const aliceAnimation = useRef(null);
  const foreGroundAnimation = useRef(null);
  const backGroundAnimation = useRef(null);

  useLayoutEffect(() => {
    var spriteFrames = [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' },
    ];

    var alice = aliceAnimation.current.animate(
      spriteFrames, {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 500,
      playbackRate: 1,
      iterations: Infinity
    });

    setInterval(function () {
      if (alice.playbackRate > .4) {
        alice.playbackRate -= .1;
        adjustSceneryPlayback();
      }
    }, 3000);

    var sceneryFrames = [
      { transform: 'translateX(30%)' },
      { transform: 'translateX(-100%)' }
    ];

    var sceneryTimingBackground = {
      duration: 36000,
      iterations: Infinity
    };

    var sceneryTimingForeground = {
      duration: 12000,
      iterations: Infinity
    };

    var foregroundMovement = foreGroundAnimation.current.animate(sceneryFrames, sceneryTimingForeground);
    var backgroundMovement = backGroundAnimation.current.animate(sceneryFrames, sceneryTimingBackground);

    var sceneries = [foregroundMovement, backgroundMovement];

    var adjustSceneryPlayback = function () {
      console.log(alice.playbackRate)
      if (alice.playbackRate < .8) {
        sceneries.forEach(function (anim) {
          anim.playbackRate = alice.playbackRate / 2 * -1;
        });
      } else if (alice.playbackRate > 1.2) {
        sceneries.forEach(function (anim) {
          anim.playbackRate = alice.playbackRate / 2;
        });
      } else {
        sceneries.forEach(function (anim) {
          anim.playbackRate = 0;
        });
      }
    }
    adjustSceneryPlayback();

    const goFaster = () => {
      alice.playbackRate += 0.1;
      adjustSceneryPlayback();
    }

    window.addEventListener("click", goFaster);
  })



  return (
    <div className="container">
      <div className="sky"></div>

      <div className="earth">
        <div className="alice">
          <img className="alicesprite" ref={aliceAnimation} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" alt=" " />

        </div>
      </div>

      <div className="scenery" id="foreground" ref={foreGroundAnimation}>
      <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
      <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
      <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
      
      </div>

      <div className="scenery" ref={backGroundAnimation}>
        <img id="pawn2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" alt=" " />
        <img id="treeback" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" alt=" " />
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/> 
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
      </div>
    </div>


  );
}


export default App;

