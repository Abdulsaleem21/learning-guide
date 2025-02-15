import React from 'react';
import Navbar from './Navbar';
import bgimg from "../images/htmlcss.png";

let mystyle = {
  backgroundImage: `url(${bgimg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 85%",
  backgroundSize: "35rem",
  backgroundAttachment: "fixed",
};

const style2 = {
  color: "#2254c9",
  textShadow: '3px 4px 3px #e44d26'
};
function Htmlcss() {
  return (
    <div>
        <>
        <Navbar />
      <div className="mt-2" style={mystyle} id="changeComponent">
        <center>
          <h1 className="mt-3" style={style2}>
            Html &amp; Css
          </h1>
        </center>

        <div className="row p-4" id="rowDiv1">

          {/* ------------------Editors Block---------------------------------- */}
          <div className="col-md-6 offset-md-3">
            <div className="row" id="editorBlock">
              <center>
                <h2>Edi <i className="fas fa-terminal"></i>tor</h2>
              </center>
              <hr />
              <h4>1. Complete Series for VSCode download and setup :</h4>
              <a
                href="https://youtu.be/fWzp5lZ5CEA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the playlist (English)
                </button>
              </a>
              <a
                href="https://youtu.be/fWzp5lZ5CEA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the  (English)
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
              <h4>1. Complete html and css playlist:</h4>
              <a
                href="https://youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to watch the video (HINDI)
                </button>
              </a>

              <center>
                <h3>or</h3>
              </center>
              <h4>2. Complete Lecture html and css Video  : </h4>
              <a
                href="https://youtu.be/G3e-cpL7ofc"
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
              <h4>1. Learn html and css :</h4>
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
                href="https://www.w3schools.com/html/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website for html
                </button>
              </a>
              <a
                href="https://www.w3schools.com/css/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info m-2">
                  Click here to open Website for css
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
              <hr />

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
              <h4>1. 200+ Html Css Questions to practice: </h4>
              <a
                href="https://www.w3resource.com/html-css-exercise/index.php"
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
    </div>
  )
}

export default Htmlcss