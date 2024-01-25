import React from "react";
import './index.scss'
const Welcome = () => {
  return (
    <>
      <section id="Welcome">
        <div className="WelcomeArea">
          <div className="WelcomeLeft">
            <div className="WelcomeText">
              <h3>Italian Restaurant</h3>
              <h1>WELCOME</h1>
              <p>
                Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
                Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
                ac facilisis ligula sem id neque.
              </p>
            </div>
          </div>
          <div className="WelcomeRight">
            <div className="WelcomeImg">
                <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
