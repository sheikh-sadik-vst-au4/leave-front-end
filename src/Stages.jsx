import React from "react";
import img1 from "../../assets/images/red-bull-logo.png";
import img2 from "../../assets/images/england-circle-512.png";
import img3 from "../../assets/images/wffa-logo-white.svg";
import img4 from "../../assets/images/2021-thumbnail.png";
import img5 from "../../assets/images/app-store-copy.svg";
import img6 from "../../assets/images/android-app-store-copy.svg";
import img7 from "../../assets/images/RBSS_primarylogo_RGB.svg";

const Stages = () => {
  return (
    <React.Fragment>
      {" "}
      <nav class="header">
        <div class="row">
          <div class="col-md-4">
            <img src={img1} />
          </div>
          <div class="col-md-4 text-center">
            <img src={img2} />
          </div>
          <div class="col-md-4 text-right">
            <img style={{ height: "40px" }} src={img3} />
          </div>
        </div>
      </nav>
      <div class="container-fluid main-d dashboard permision about">
        <div class="row">
          <div class="col-md-12 text-right">
            <select class="selectpicker">
              <option>English</option>
              <option>Español</option>
            </select>
          </div>
        </div>

        <h1>
          United Kingdom (UK) <br />
          Red Bull Street Style 2021 Nationals{" "}
        </h1>
        <h2>Stage 1 Competition May 1 - May 15</h2>
        <h3>Join the Competition</h3>

        <div class="demo">
          <div role="tabpanel">
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active">
                <a
                  class="active"
                  href="#home"
                  aria-controls="home"
                  role="tab"
                  data-toggle="tab"
                >
                  Stage 1
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#profile"
                  aria-controls="profile"
                  role="tab"
                  data-toggle="tab"
                >
                  Stage 2
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div
                role="tabpanel"
                class="tab-pane active text-center"
                id="home"
              >
                <img class="bnr-vid-img" src={img4} />
                <div class="container">
                  <h1 class="mt-5">National Qualifier Details</h1>
                  <ul>
                    <li>
                      Must be 16 years old by <span>date</span> to enter
                    </li>
                    <li>
                      In the case of dual citizenship, an athlete is only
                      allowed to represent 1 country
                    </li>
                    <li>
                      Judging criteria: Difficulty, Originality, Execution,
                      Control and All-Round
                    </li>
                    <li>
                      The national qualifier is managed through the WFFA app
                    </li>
                    <li>Top competitors will advance to Stage 2 BattleZone</li>
                  </ul>
                </div>

                <div class="app-dwd">
                  <h1>Join the Competition</h1>
                  <h3>
                    Already have the WFFA app?
                    <br />
                    Go to your settings and enter invite code{" "}
                    <span>XXXXXX</span> or search for your country.
                  </h3>
                  <div class="app-dwd-btn">
                    <a href="" target="blank">
                      <img src={img5} />
                    </a>
                    <a href="" target="blank">
                      <img src={img6} />
                    </a>
                  </div>
                  <h3>
                    Download the WFFA app.
                    <br />
                    Enter invite code <span>XXXXXX</span> or search for your
                    country.
                  </h3>
                </div>

                <div class="app-dwd-btn app-dwd-btn1">
                  <h3>Brought to you by:</h3>
                  <a href="" target="blank">
                    <img src={img7} />
                  </a>
                  <a href="" target="blank">
                    <img src="images/Ibis-logo.svg" />
                  </a>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane" id="profile">
                Stage 2
              </div>
            </div>
          </div>
        </div>

        <div class="foter">
          <div class="app-dwd-btn">
            <a href="" target="blank">
              Complete Rules
            </a>
            <a href="" target="blank">
              Age Consent Form
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Stages;
