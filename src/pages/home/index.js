import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <section id="home" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div
                className="h_bg-image order-1 order-lg-2 h-100 "
                style={{ backgroundImage: `url(${introdata.your_img_url})` }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{introdata.title}</h2>
                  <h1 className="fluidz-48 mb-1x typewriter-text">
                    <Typewriter
                        options={{
                          strings: [
                            introdata.animated.first,
                            introdata.animated.second,
                            introdata.animated.third,
                            introdata.animated.fourth,
                            introdata.animated.fifth,
                            introdata.animated.sixth,
                          ],
                          autoStart: true,
                          loop: true,
                          deleteSpeed: 10,
                        }}
                    />
                  </h1>
                  <p className="mb-1x">{introdata.description}</p>
                  <div className="intro_btn-action pb-5">
                    <Link href="/portfolio">
                      <a className="text_2">
                        <div id="button_h" className="ac_btn btn ">
                          Projects
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </a>
                    </Link>
                    <Link href="/about">
                      <a>
                        <div id="button_h" className="ac_btn btn">
                          About Me
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a>
                        <div id="button_h" className="ac_btn btn">
                          Contact Me
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HelmetProvider>
  );
};
