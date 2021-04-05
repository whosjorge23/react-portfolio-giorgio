import React from "react";
import imageOverlay from "../img/earth.jpg";
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Checkbox, Form, Input, TextArea,} from 'semantic-ui-react'

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send A Message</h5>
                      </div>
                      <div>
                        {/* <form
                          action="https://formspree.io/mknpwppb"
                          method="POST"
                          className="contactForm"
                        >
                           <div id="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                          <div id="errormessage"></div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                              
                            </div>
                          </div>
                        </form> */}
                        <Form action="https://formspree.io/mknpwppb"
                              method="POST"
                              className="contactForm">
                                <Form.Group widths='equal'>
                                  <Form.Field
                                    control={Input}
                                    label='First name'
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                  />
                                  </Form.Group>
                                  <Form.Group widths='equal'>
                                  <Form.Field
                                    control={Input}
                                    label='Email'
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    data-rule="email"
                                    data-msg="Please enter a valid email"
                                  />
          
                                  </Form.Group>
                                  <Form.Group widths='equal'>
                                  <Form.Field
                                      control={Input}
                                      label='Subject'
                                      name="subject"
                                      id="subject"
                                      placeholder="Subject"
                                      data-rule="minlen:4"
                                      data-msg="Please enter at least 8 chars of subject"
                                    />
                                  </Form.Group>
                                  <Form.Field
                                    control={TextArea}
                                    label='Message'
                                    name="message"
                                    rows="5"
                                    data-rule="required"
                                    data-msg="Please write something for us"
                                    placeholder="Message"
                                  />
                                  <Form.Field
                                    control={Checkbox}
                                    label='I agree to the Terms and Conditions'
                                  />
                                  <Form.Field control={Button}>
                                    <Button.Content><Icon name="send"/> Send Message</Button.Content>
                                  </Form.Field>
                                </Form>
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Whether you want to get in touch, talk about a project
                          collaboration, or just say hi, I'd love to hear from
                          you.
                          <br />
                          Simply fill the from and send me an email.
                        </p>
                          <ul class="list-ico">
                            <li><span class="ion-ios-location"></span> Italy / South Africa</li>
                            {/* <li><span class="ion-ios-telephone"></span> (617) 557-0089</li> */}
                            <li><span class="ion-email"></span> jorge.giannotta@westcostyle.com</li>
                            <li><span class="ion-email"></span> jorge_upa@msn.com</li>
                          </ul>
                      </div>
                      <div className="socials">
                        <ul>

                        <li>
                            <a
                              href="https://github.com/whosjorge23"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button circular icon='github large' />
                            </a>
                          </li>

                          <li>
                            <a
                              href="https://linkedin.com/in/giorgio-maria-giannotta"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button circular icon='linkedin large' />
                            </a>
                          </li>
                          
                          <li>
                            <a
                              href="https://twitter.com/whosjorge23"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button circular icon='twitter large' />
                            </a>
                          </li>
                          
                          <li>
                            <a
                              href="https://instagram.com/whosjorge23"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button circular icon='instagram large' />
                            </a>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                  Created by <a href="https://westcostyle.com" style={{color: 'white'}} target="_blank" rel="noopener noreferrer">Giorgio Giannotta</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
