import * as style from "@src/present/component/employeedata/EmployeeData.style";
import { useState } from "react";

type dataProps = {
  no: number;
  number: string;
  name: string;
  job: string;
  phone: string;
  onSelect: () => void;
  selected: boolean;
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
  // const [selected, setSelected] = useState<boolean>(false);

  // const selectClick = () => {
  //   setSelected(!selected);
  // };

  const handleClick = () => {
    onSelect();
  };

  return (
    <style.dataBox selected={selected} onClick={handleClick}>
      <style.no>{no}</style.no>
      <style.number>{number}</style.number>
      <style.name>{name}</style.name>
      <style.job>{job}</style.job>
      <style.phone>{phone}</style.phone>
    </style.dataBox>
  );
};

export default EmployeeData;
