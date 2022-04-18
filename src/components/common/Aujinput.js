/**
 * author: saranya software developer
 * date: 8/9/21
 */
const Aujinput = (props) => {
  let htmlelement = (
    <input
      type={props.type}
      className={props.class}
      style={props.style}
      id={props.id}
      placeholder={props.placeholder}
      required={props.required}
      pattern={props.pattern}
      onChange={props.onChange}
      onBlur={props.onBlur}
      list={props.list}
    />
  );
  
  return <div>{htmlelement}</div>;
};

export default Aujinput;