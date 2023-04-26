import * as style from "@common/EmployeeData/EmployeeData.style";
import { useState } from "react";

type dataProps = {
  no: string;
  number: string;
  name: string;
  job: string;
  phone: string;
};

const EmployeeData = ({ no, number, name, job, phone }: dataProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  const selectClick = () => {
    setSelected(!selected);
  };

  return (
    <style.dataBox selected={selected} onClick={selectClick}>
      <style.no>{no}</style.no>
      <style.number>{number}</style.number>
      <style.name>{name}</style.name>
      <style.job>{job}</style.job>
      <style.phone>{phone}</style.phone>
    </style.dataBox>
  );
};

export default EmployeeData;
