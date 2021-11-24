import { Link } from "react-router-dom";
import whoweare from "../components/images/whoweare.png";
import dashboard from "../components/images/dashboard.jpg";
import branch from "../components/images/branch.png";
import mobile from "../components/images/mobile.jpg";
import exercise from "../components/images/exercise.svg";
import mental from "../components/images/mental.svg";
import relax from "../components/images/relax.svg";
import food from "../components/images/food.svg";
import community from "../components/images/community.svg";
import tracker from "../components/images/tracker.svg";
import support from "../components/images/support.svg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { IoIosArrowDown } from "react-icons/io";
import { IoFlowerOutline } from "react-icons/io5";
import { NavLink, Button } from "reactstrap";

import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <NavBar />

      <div style={{ textAlign: "center" }}>
        {/* Hero */}
        <section className="hero">
          <div className="hero-overlay">
            <div className="hero-container">
              <div className="hero-left"></div>
              <div className="hero-right">
                <div className="hero-title">
                  Change your habits, change your life.
                </div>
                {/* <div className="hero-subtext">
              Create a personalized plan to track your pillars of wellness.
            </div> */}
                {/* <NavLink href="/about">
              <Button>Learn More</Button>
            </NavLink> */}
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="main" id="section1">
              <a href="#section2">
                <IoIosArrowDown />
              </a>
            </div>
          </div>
        </section>
        {/* breaker bloom text */}
        <section className="bloom">
          <div className="top-title"></div>
        </section>
        {/* Who We Are */}
        <div className="main" id="section2">
          <a href="#section1"></a>
        </div>
        <section className="product">
          <div className="product-text">
            <div className="product-head">
              Your one-stop shop improved wellness.
            </div>
            <br />
            <p>
              Holistic living isn't one size fits all. We want to be your
              resource to help you create a lifestyle that nourishes you as a
              whole.
            </p>
          </div>
          <div className="dash-girl">
            <img className="dash-img" src={dashboard} />
          </div>
        </section>
        <div className="break"></div>

        {/* Second feature */}
        <section className="definition">
          <div className="mohala">mo•hala</div>
          <div className="mohala-sub">[mo-HAH-lah] Hawaiian</div>
          <div className="mohala-sub-def">
            The metaphorical unfolding of an idea or an initial plan which then
            evolves into a fully realized vision.
          </div>
        </section>

        <div className="break"></div>
        {/* Third feature */}

        <section className="product">
          <div className="product-img">
            <img className="mobile-img" src={mobile} />
          </div>
          <div className="product-text">
            <div className="product-head">
              Dig at the roots instead of hacking at the leaves.
            </div>
            <br />
            <p>
              We help you create a holistic lifestyle by approaching the pillars
              of your health that are interconnected.
            </p>
          </div>
        </section>

        <section className="how-to">
          {/* <div className="categories"> */}

          <div className="pillar">
            <div className="how-title">
              Dashboards built with your vision in mind.
            </div>
            <hr class="solid" />
            <div className="pillar-img-container">
              <div className="box1">
                <div className="pillar-img">
                  <img src={tracker} />
                  <div className="how-subtitle">Track Progress</div>
                </div>
              </div>
              <div className="box1">
                <div className="pillar-img">
                  <img src={community} />
                  <div className="how-subtitle">Connect with Community</div>
                </div>
              </div>
              <div className="box1">
                <div className="pillar-img">
                  <img src={support} />
                  <div className="how-subtitle">Receive Guidance</div>
                </div>
              </div>
            </div>
            <hr class="solid" />
          </div>

          {/* <section className="bloom">
            <div className="title">
              Dig at the roots instead of hacking at the leaves.{" "}
            </div>
          </section> */}
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Landing;
