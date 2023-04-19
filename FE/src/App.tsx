import "./App.css";
import accountCircle from "@assets/accountCircle.png"
import * as button from "@common/Button";
import * as sidebar from "@common/SideBar";

function App() {
  return (
    <div className="App">
      <sidebar.SidBar>
        <div>
          <img src={accountCircle} alt="" />
        </div>
      </sidebar.SidBar>
    </div>
  );
}

export default App;
