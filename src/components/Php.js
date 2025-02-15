import React from "react";
import Navbar from "./Navbar";
import bgimg from "../images/phpelephant.png";

let mystyle = {
  backgroundImage: `url(${bgimg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 100%",
  backgroundSize: "30rem",
  backgroundAttachment: "fixed",
};

const style2 = {
  color: "#505e9b",
  textShadow: '3px 4px 2px black',
  fontSize:"6rem"
};
function Php() {
  return (
    <>
      <Navbar />
      <div className="mt-2" style={mystyle} id="changeComponent">
        <center>
          <h1 className="mt-3" style={style2}>
            Php
          </h1>
        </center>

        <div className="row p-4" id="rowDiv1">

          {/* ------------------Editors Block---------------------------------- */}
          <div className="col-md-6 offset-md-3">
            <div className="row" id="editorBlock">
              <center>
                <h2>Edi <i class="fas fa-terminal"></i>tor</h2>
              </center>
              <hr />
              <h4>1. Complete Neso Academy C Language Video Series :</h4>
              <a
                href="https://youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist (English)
                </button>
              </a>
            </div>
          </div>

          {/* ----------------------empty------------------------------------ */}
          <div className="w-100 m-3"></div> 


          {/* ----------------------youtube block------------------------------------ */}
          <div className="col-md-6">
            <div className="row p-2" id="youtubeblock">
              <center>
                <h2>
                  You<i className="fab fa-youtube"></i>Tube:
                </h2>
              </center>
              <hr />
              <h4>1. Complete Neso Academy C Language Video Series :</h4>
              <a
                href="https://youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist (English)
                </button>
              </a>

              <center>
                <h3>or</h3>
              </center>
              <h4>2. Complete Jenny's Lectures C Language Video Series : </h4>
              <a
                href="https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist
                </button>
              </a>

              <center>
                <h3>or</h3>
              </center>
              <h4>3. Basic C Language concepts from Telusko : </h4>
              <a
                href="https://youtube.com/playlist?list=PLsyeobzWxl7oBxHp43xQTFrw9f1CDPR6C"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist
                </button>
              </a>
            </div>
          </div>

          {/* ------------------website block---------------------------- */}
          <div className="col-md-5  offset-md-1 ">
            <div className="row p-2" id="websiteblock">
              <center>
                <h2>
                  Web<i className="fas fa-laptop-code"></i>sites:
                </h2>
              </center>
              <hr />
              <h4>1. Learn C Programming :</h4>
              <a
                href="https://www.programiz.com/c-programming"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

              <h4>2. W3 Schools :</h4>
              <a
                href="https://www.w3schools.com/c/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

              <h4>
                3. CISCO Netcat Academy :
                <small style={{ fontWeight: "400" }}>
                  Request to
                  <mark className="bg-warning">HOD of C.S.E Dept</mark> to make
                  enroll in this course
                </small>
              </h4>
              <hr />
              <center>
                <h2>
                  Comp<i className="fas fa-file-code"></i>iler:
                </h2>
              </center>
              <hr />
              <h4> &nbsp; C online Compiler</h4>
              <a
                href="https://www.programiz.com/c-programming/online-compiler/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open online C compiler
                </button>
              </a>
            </div>
          </div>

          <div className="1-100"></div>

          <div className="col-md-6 mt-3">
            <div className="row" id="practiceQuestionBlock">
              <center>
                <h2>
                  Questions<i className="fas fa-question-circle"></i>practice:
                </h2>
              </center>
              <hr />
              <h4>1. 200+ C Questions to practice: </h4>
              <a
                href="https://techstudy.org/clanguage/c-programming-example-and-solutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to start practining
                </button>
              </a>
            </div>
          </div>

          {/* -----------------interview block------------------------------- */}
          <div className="col-md-5  offset-md-1 ">
            <div className="row p-2 mt-3" id="websiteblock">
              <center>
                <h2>
                  interview<i className="fas fa-star"></i>Questions:
                </h2>
              </center>
              <hr />
              <h4>1. Learn C Programming :</h4>
              <a
                href="https://www.programiz.com/c-programming"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>

              <h4>2. W3 Schools :</h4>
              <a
                href="https://www.w3schools.com/c/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website
                </button>
              </a>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default Php;
