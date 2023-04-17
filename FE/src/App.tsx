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
      <div>
        <button.BulidingButton>소담빌</button.BulidingButton>
        <button.CrackButton>콘크리트 균열</button.CrackButton>
      </div>
    </div>
  );
}

export default App;
