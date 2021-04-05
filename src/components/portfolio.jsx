import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Icon, Button, Label } from 'semantic-ui-react'
import '../back-top.css'

//import stock
import weather from "../img/weather.png";
import videoPlayer from "../img/video-player.png";
import memoryGame from "../img/memory-game.png";
import caesarCipher from "../img/caesarcipher.png";
import jokeTeller from "../img/joke-teller.png";
import flappyBird from "../img/flappy-bird.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Some of the latest and exciting work.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://whosjorge23.github.io/weather/" target="_blank" rel="noopener noreferrer">
                  <div className="work-img">
                    <img src={weather} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Weather App</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Javascript
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <Icon circular name='eye' size='tiny' />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://whosjorge23.github.io/caesarcipher/" target="_blank" rel="noopener noreferrer">
                  <div className="work-img">
                    <img src={caesarCipher} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Caesar Cipher</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Javascript
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <Icon circular name='eye' size='tiny' />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://elastic-clever-cosmonaut.glitch.me/" target="_blank" rel="noopener noreferrer">
                  <div className="work-img">
                    <img src={flappyBird} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Flappy Bird Multiplayer</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Node Javascript
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <Icon circular name='eye' size='tiny' />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://whosjorge23.github.io/joke-teller/" target="_blank" rel="noopener noreferrer">
                  <div className="work-img">
                    <img src={jokeTeller} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Joke Teller</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Javascript
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <Icon circular name='eye' size='tiny' />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://whosjorge23.github.io/memory-game/" target="_blank" rel="noopener noreferrer">
                  <div className="work-img">
                    <img src={memoryGame} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Memory Game</h2>
                        <div className="w-more">
                          <span className="w-ctegory">HTML5 CSS3 Javascript</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <Icon circular name='eye' size='tiny' />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://whosjorge23.github.io/video-player/" target="_blank" rel="noopener noreferrer">
                  <div className="work-img">
                    <img src={videoPlayer} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Custom Video Player</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Javascript
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                        <Icon circular name='eye' size='tiny' />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="title-box text-center back-to-top-animation">
              <a href="https://github.com/whosjorge23" target='_blank' rel="noopener noreferrer">
              <Button as='div' labelPosition='right'  role="button" >
                <Button basic color='blue'><Icon name='github'/>GitHub</Button>
                  <Label as='a' basic color='blue' pointing='left'>Repositories</Label>
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
