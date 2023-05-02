import * as style from "@src/present/component/Employeedata/EmployeeData.style";
import { useState } from "react";

type dataProps = {
  no: number;
  number: string;
  name: string;
  job: string;
  phone: string;
  onSelect: () => void;
  selected: boolean;
  imgSrc: string;
};

const EmployeeData = ({
  no,
  number,
  name,
  job,
  phone,
  onSelect,
  selected,
}: dataProps) => {
  const handleClick = () => {
    onSelect();
  };

  return (
    <style.DataBox selected={selected} onClick={handleClick}>
      <style.No>{no}</style.No>
      <style.Number>{number}</style.Number>
      <style.Name>{name}</style.Name>
      <style.Job>{job}</style.Job>
      <style.Phone>{phone}</style.Phone>
    </style.DataBox>
  );
};

export default EmployeeData;
