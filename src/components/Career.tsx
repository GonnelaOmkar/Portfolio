import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>Keshav Memorial Institute of Technology, Hyderabad</h5>
              </div>
              <h3>2023 – 2027</h3>
            </div>
            <p>
              Currently pursuing B.Tech in CSE with a CGPA of 7.98/10. Focused on
              AI/ML, full-stack development, and data structures & algorithms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Board of Intermediate Education</h4>
                <h5>Sri Chaitanya Junior College, Hyderabad</h5>
              </div>
              <h3>2021 – 2022</h3>
            </div>
            <p>
              Completed Intermediate education with a CGPA of 9.16/10.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Board of Secondary Education</h4>
                <h5>Vijay High School, Nizamabad</h5>
              </div>
              <h3>2019 – 2020</h3>
            </div>
            <p>
              Completed secondary education with a perfect GPA of 10.0/10.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
