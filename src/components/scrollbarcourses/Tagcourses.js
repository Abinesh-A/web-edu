import "./Scrollbarcourses";
// import pic from "./imgl.png";

const Tagtutor = ({ data }) => {
  return (
    <>
      {data.map((data) => {
        return (
          <div>
            <li className="coursescrollli">
              <img className="coursedp" src={data.img} alt="profilepicture" />
              <p className="coursenames">{data.course}</p>
            </li>
          </div>
        );
      })}
    </>
  );
};

export default Tagtutor;
