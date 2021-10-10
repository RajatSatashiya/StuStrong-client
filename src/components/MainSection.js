import "./mainSection.css";

function Mainsection() {
  return (
    <>
      <div className="main">
        <div className="students tagline">
          Learn the less boring way. chat and make new friends and learn
          together
        </div>
        <img
          className="students"
          src="./images/students.png"
          alt="Student illustration"
        ></img>
        <div className="the-gif">
          <img src="./images/bored.png" alt="bored student"></img>
          <div>JOIN CHAT ROOMS AND LEARN...</div>
        </div>
      </div>
    </>
  );
}
export default Mainsection;
