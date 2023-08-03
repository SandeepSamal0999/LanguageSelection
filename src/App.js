import React, { useState } from "react";
import "./App.css";
import { flagList } from "./Constant/Constant";
import { Drawer } from "@mui/material";
import DrawerDatas from "./Component/DrawerData";

function App() {
  const [selectedImg, setSelectedImg] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const onImageClick = (e) => {
    setSelectedImg(e.target.alt);
    const newData = flagList.filter((data) => data.valueName === e.target.alt);
    const seleObj = flagList.filter((data) => data.valueName === selectedImg);
    const oldIndex = flagList.indexOf(newData[0]);
    seleObj[0].size = newData[0].size;
    newData[0].size = 50;
    const center = Math.floor(flagList.length / 2);
    flagList[oldIndex] = seleObj[0];
    flagList[center] = newData[0];
  };
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
                onClick={(e) => onImageClick(e)}
                style={{ height: flags.size, width: flags.size }}
                className={`flagImg flagImg${flags.size}`}
                alt={flags.valueName}
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
