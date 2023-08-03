import React, { useState } from "react";
import "./App.css";
import { flagList } from "./Constant/Constant";
import { Drawer } from "@mui/material";
import DrawerDatas from "./Component/DrawerData";

function App() {
  const [selectedImg, setSelectedImg] = useState("English");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <div className={isOpen ? "top_container" : "middle_cont"}>
          <div>Welcome</div>
          <div style={{ marginTop: "20px" }}>Select Language</div>
        </div>
        <div className="flagList">
          {flagList.map((flags) => {
            return (
              <img
                style={
                  { height: flags.size, width: flags.size }
                }
                className={`flagImg flagImg${flags.size}`}
                alt=""
                src={flags.flag}
              />
            );
          })}
        </div>
        <div style={{ marginTop: "20px" }}>{selectedImg}</div>
        <div className="settings" onClick={() => setIsOpen(true)}>
          Settings
        </div>
        <Drawer anchor="bottom" open={isOpen} onClose={() => setIsOpen(false)}>
          <DrawerDatas
            setSelectedImg={setSelectedImg}
            selectedImg={selectedImg}
          />
        </Drawer>
      </header>
    </div>
  );
}

export default App;
