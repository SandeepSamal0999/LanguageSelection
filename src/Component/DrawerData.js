import { MenuItem, Select } from "@mui/material";
import setIcon from "../assets/setIcon.svg";
import "./drawerdata.css";
import { circleButton, flagList, font, settingdata } from "../Constant/Constant";
import { useState } from "react";

const DrawerDatas = ({ selectedImg, setSelectedImg }) => {
  const [selectedCircle, setSelectedCircle] = useState(3);

  const selected = (e) => {
    setSelectedImg(e.target.value);
    const newData = flagList.filter((data) => data.valueName === e.target.value)
    const seleObj = flagList.filter((data) => data.valueName === selectedImg)
    const oldIndex = flagList.indexOf(newData[0])
    seleObj[0].size = newData[0].size;
    newData[0].size = 50;
    const center =Math.floor(flagList.length / 2);
    flagList[oldIndex] = seleObj[0];
    flagList[center] = newData[0]
  };

  return (
    <div className="drawer_body">
      <div className="drawer_head">
        <img style={{ marginRight: "10px" }} alt="" src={setIcon} />
        <span style={{ display: "flex", alignItems: "center" }}>Settings</span>
      </div>
      <div className="table_container">
        {settingdata.map((value, index) => {
          return (
            <div className="table_data">
              <div className="settings_name">{value.listName}</div>
              <Select
                id="grouped-select"
                label=""
                defaultValue={
                  index === 0 ? selectedImg : value.list[0].valueName
                }
                onChange={(e) => selected(e)}
              >
                {value.list.map((listValue) => {
                  return (
                    <MenuItem value={listValue.valueName}>
                      {listValue.valueName}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
          );
        })}
      </div>
      <div className="circle_container">
        {circleButton.map((circle) => {
          return (
            <div
              className={
                circle.key === selectedCircle
                  ? "selected_circle_button"
                  : "circle_button"
              }
              onClick={() => setSelectedCircle(circle.key)}
            ></div>
          );
        })}
      </div>

      <div className="font_container">
        {font.map((fonts) => {
          return <div style={{ fontSize: fonts }}>Aa</div>;
        })}
      </div>
    </div>
  );
};

export default DrawerDatas;
