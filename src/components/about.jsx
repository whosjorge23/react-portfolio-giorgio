import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Progress} from 'semantic-ui-react'

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "PHP_skill", content: "PHP", porcentage: "50%", value: "50" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Swift_skill",
          content: "Swift",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Anguler_skill",
          content: "Angular",
          porcentage: "55%",
          value: "55"
        },
        {
          id: "Flutter_skill",
          content: "Flutter",
          porcentage: "60%",
          value: "60"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hello,"
        },
        {
          id: "second-p-about",
          content:
            "My name is Giorgio Giannotta, and I am a self-taught Web and iOS developer. At the moment I'm living between Italy and South Africa."
        },
        {
          id: "third-p-about",
          content:
            "Since August 2019 I'm a co-founder of SOFTBAY X, a South African company specialized in iOS Apps, Websites and Web Applications for business. We also use the latest technologies like Augmented Reality & Machine Learning.",
        },
        {
          id: "fouth-p-about",
          content:
            "I am of the idea that when you develop an app/website you have to develop with the same passion and high quality that you use for your own personal projects. That's why with my company we develop just hight quality products.",
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                  {/* <div className="title-box-2">
                        <h5 className="title-left">My Skills</h5>
                      </div> */}
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              {/* <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div> */}
                              <Progress style={{backgroundColor: "#cde1f8"},{width:"100%"}} color='blue' percent={skill.value} active></Progress>
                            </div>
                            {/* <Progress style={{backgroundColor: "#cde1f8"}} color='blue' percent={skill.value} active></Progress> */}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
