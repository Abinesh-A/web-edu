import "./Mygoalpath.css";
// import pic from "./imgl.png";

const Tagpathdata = ({ data }) => {
  return (
    <>
      {data.map((data) => {
        return (
          <div>
            <li className="goalpathscrollli" style={{ color: data.color }}>
              <p className="goalpathnames">{data.path}</p>
            </li>
            <p className="goalpathnames mt-3">{data.course}</p>
          </div>
        );
      })}
    </>
  );
};

export default Tagpathdata;
