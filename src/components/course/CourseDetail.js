import React, { useEffect } from "react";
import {
  AiFillHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineStar,
  AiOutlineRight,
  AiTwotoneStar,
} from "react-icons/ai";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = (props) => {
  const { lessons, swipe } = props;
  const [selectedItem, setSelectedItem] = useState();
  const dates = ["6月", "8月"];
  const [count, setCount] = useState(1);
  const [favClick, setFavClick] = useState(true);
  const a = swipe;
  console.log(a);

  const courseDetail = [
    {
      id: 1,
      material: "製作原料:",
      materialIntro: "111111",
      difficulty: "製作難度:",
      difficultyIntro: [
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
      ],
      teacher: "授課老師:",
      teacherIntro: "陳泓霖老師",
      time: "上課時數:",
      timeIntro: "6小時",
    },
    {
      id: 2,
      material: "製作原料:",
      materialIntro: "222222",
      difficulty: "製作難度",
      difficultyIntro: [<AiTwotoneStar />, <AiTwotoneStar />],
      teacher: "授課老師:",
      teacherIntro: "陳應乳老師",
      time: "上課時數:",
      timeIntro: "10小時",
    },
    {
      id: 3,
      material: "製作原料:",
      materialIntro: "333333",
      difficulty: "製作難度",
      difficultyIntro: [
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
        <AiTwotoneStar />,
      ],
      teacher: "授課老師:",
      teacherIntro: "黃雲韓老師",
      time: "上課時數:",
      timeIntro: "5小時",
    },
  ];

  return (
    <div className="flex mt-5 mb-5 border border-red-500 h-96">
      <div className="w-1/3 ml-10">
        <div className="w-full bg-white">
          <div className="flex items-center justify-between mt-10">
            <p className="h2">{lessons[a].name}</p>
          </div>
          <p className="mt-2 mb-5 h3">$ {lessons[a].price} NTD</p>

          {/* 課程的日期 */}
          {/* 課程的日期 */}
          <div className="flex items-center">
            <p className="m-4 ml-0 p">課程日期</p>
            {/* {dates.map((v, i) => {
              return (
                <button
                  className={`mr-5 px-2 py-1 size-btn-desk ${
                    selectedItem === v ? "bg-sub" : ""
                  }`}
                  onClick={() => {
                    setSelectedItem(v);
                  }}
                >
                  {v}
                </button>
              );
            })} */}
          </div>

          <p className="mt-5 p">參加人數</p>

          {/* 數量和結帳按鈕桌機板 */}
          {/* 數量和結帳按鈕桌機板 */}
          <div className="justify-between mt-5 lg:flex ">
            <div className="flex">
              <AiFillMinusCircle
                className="icon-lg text-secondary"
                onClick={() => {
                  count > 1 && setCount(count - 1);
                }}
              />
              <p className="mx-3">{count}</p>
              <AiFillPlusCircle
                className="icon-lg text-secondary"
                onClick={() => {
                  setCount(count + 1);
                }}
              />
            </div>

            <div className="flex justify-between mt-3 lg:m-0">
              <Button
                className="ml-3 text-white border-2 rounded-none border-warning bg-warning"
                variant="filled"
              >
                <span className="">立即購買</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mx-8 md:mt-16 md:flex">
          <div className="w-full md:pr-10 md:w-1/2">
            <div className="mb-4">
              <h2 className="ml-2 md:ml-0 h3">{courseDetail[a].material}</h2>
              <p className="text-justify p">{courseDetail[a].materialIntro}</p>
            </div>
            <div className="mb-4">
              <h2 className="ml-2 md:ml-0 h3">{courseDetail[a].difficulty}</h2>
              <p className="flex text-justify text-yellow-600 p">
                {courseDetail[a].difficultyIntro}
              </p>
            </div>
            <div className="mb-4">
              <h2 className="ml-2 md:ml-0 h3">{courseDetail[a].teacher}</h2>
              <p className="text-justify p">{courseDetail[a].teacherIntro}</p>
            </div>
            <div className="mb-4">
              <h2 className="ml-2 md:ml-0 h3">{courseDetail[a].time}</h2>
              <p className="text-justify p">{courseDetail[a].timeIntro}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
