import Chinese from '../assets/Chinese.png'
import English from '../assets/English.png'
import Hindi from '../assets/Hindi.png'
import Spanish from '../assets/Spanish.jpg'
import Korean from '../assets/korean.png'

export const flagList = [
    {valueName: 'Hindi', flag: Hindi, size: 20},
    {valueName: 'Chinese', flag: Chinese, size:35},
    {valueName: 'English', flag: English, size:50},
    {valueName: 'Spanish', flag: Spanish, size:35},
    {valueName: 'Korean', flag: Korean, size:20},
]

export const settingdata = [
    { listName: "language", data: "English", list: flagList },
    { listName: "Text Color", data: "White", list: [{ valueName: "White" }] },
    {
      listName: "Text Size",
      data: "X-Large",
      list: [{ valueName: "X-Large" }],
    },
    { listName: "Theme", data: "Custom", list: [{ valueName: "Custom" }] },
  ];

  export const circleButton = [{ key: 0 }, { key: 1 }, { key: 2 }, { key: 3 }];

  export const font = ["larger", "x-large", "xx-large", "xxx-large"];