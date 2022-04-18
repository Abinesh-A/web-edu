import "./Scrollbartutor";
// import pic from "./imgl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";

const Tagtutor = ({ data }) => {
  return (
    <>
      {data.map((data) => {
        return (
          <div className="mb-3">
            <li className="scrollli">
              <img className="dp" src={data.img} alt="profilepicture" />
              <div className="d-flex">
                <div>
                  <p>Tutor&nbsp;ID&nbsp;&nbsp;</p>
                  <p>Name&nbsp;&nbsp;</p>
                  <p>Course&nbsp;&nbsp;</p>
                </div>
                <div className="ml-5">
                  <p>{data.id}</p>
                  <p>{data.name}</p>
                  <p>{data.course}</p>
                </div>
              </div>
              <div className="ml-4">
                <FontAwesomeIcon
                  icon={data.rating >= 1 ? fasStar : faStar}
                  className="starcolor"
                />{" "}
                <FontAwesomeIcon
                  icon={data.rating >= 2 ? fasStar : faStar}
                  className="starcolor"
                />{" "}
                <FontAwesomeIcon
                  icon={data.rating >= 3 ? fasStar : faStar}
                  className="starcolor"
                />{" "}
                <FontAwesomeIcon
                  icon={data.rating >= 4 ? fasStar : faStar}
                  className="starcolor"
                />{" "}
                <FontAwesomeIcon
                  icon={data.rating >= 5 ? fasStar : faStar}
                  className="starcolor"
                />{" "}
              </div>
            </li>
          </div>
        );
      })}
    </>
  );
};

export default Tagtutor;
