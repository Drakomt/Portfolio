import "./Loading.css";
function Loading(props) {
  return <div id={props.load ? "loading" : "loading-none"}></div>;
}

export default Loading;
