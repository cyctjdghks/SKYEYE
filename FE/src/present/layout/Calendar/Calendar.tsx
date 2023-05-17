import React, { memo, useState } from "react";
import * as Style from "./Calendar.style";

import SubTitle from "@src/present/common/SubTitle/SubTitle";
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  subMonths,
  parse,
  isSameMonth,
} from "date-fns";

import Next from "@assets/button/next.png";
import PrimaryButton from "@src/present/common/Button/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selected = selectedDate.toString().split(" ").slice(0, 4);

  const Y = format(selectedDate, "yyyy");
  const M = format(selectedDate, "MM");
  const D = format(selectedDate, "dd");
  const dateTitle = [Y, M, D].join("/");

  /* Handler */
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const moveTo = () => {
    navigate("/picture/all", { state: selected });
  };

  /* Component */
  //   day of weeks
  const days = ["일", "월", "화", "수", "목", "금", "토"].map((elem, idx) => {
    return <Style.Day key={idx}>{elem}</Style.Day>;
  });

  // days
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const weeks = [];
  let day = startDate;
  let dayRow = new Array(7);
  let formattedDate = "";
  const selectedForComparison = JSON.stringify(selected);

  //   그 달 처음부터 끝까지
  while (day <= endDate) {
    // 일주일 날짜
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");

      const cloneday = day;
      const classList = [];

      const dayForComparison = JSON.stringify(
        day.toString().split(" ").slice(0, 4)
      );

      if (!isSameMonth(day, monthStart)) {
        classList.push("disabled");
      } else if (dayForComparison == selectedForComparison) {
        classList.push("selected");
      }

      dayRow[i] = (
        <Style.Day
          key={formattedDate}
          className={`days ${classList.join(" ")}`}
          onClick={() => onDateClick(cloneday)}
        >
          <span>{formattedDate}</span>
        </Style.Day>
      );

      day = addDays(day, 1);
    }
    weeks.push(<Style.Days key={day.toString()}>{dayRow}</Style.Days>);
    dayRow = [];
  }

  return (
    <Style.Container>
      <Style.Wrapper>
        {/* Header */}
        <Style.Header>
          <SubTitle content="날짜 선택" />
          <SubTitle content={dateTitle} />
        </Style.Header>

        {/* Body - Calender */}
        <Style.Body>
          {/* Month */}
          <Style.SelectMonth>
            <img src={Next} alt={"Prev"} className="Prev" onClick={prevMonth} />
            <div>
              {format(currentMonth, "MMMM")} {format(currentMonth, "yyyy")}
            </div>
            <img src={Next} alt={"Next"} className="Next" onClick={nextMonth} />
          </Style.SelectMonth>

          {/* Day of Week */}
          <Style.Days>{days}</Style.Days>
          {weeks}
          {/* DayCells */}
        </Style.Body>

        {/* Footer */}
        <Style.Footer>
          <PrimaryButton
            content={"사진 보기"}
            isArrow={true}
            handler={moveTo}
          />
        </Style.Footer>
      </Style.Wrapper>
    </Style.Container>
  );
};

export default memo(Calendar);
