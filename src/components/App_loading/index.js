import './index.css';


function AppLoading(props) {
    const class_name = props.count === 3?"site-loading site-loading-none":"site-loading"
  return (
    <div className={class_name}>
        <h1 id="mainText">ATTAHZU FARM</h1>
        <div id="loading">Loading...</div>
    </div>
  );
}

export default AppLoading;
