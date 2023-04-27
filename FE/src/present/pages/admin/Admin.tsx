import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "@store/auth";

import EmployeeData from "@src/present/component/employeedata/EmployeeData";
import Modal from "@src/present/common/Modal/Modal";
import AdimModalContent from "../../component/adminpage/AdminModalContent";

import * as style from "@pages/admin/Admin.style";
import right from "@assets/main/right.png";

const Admin = () => {
  const employees = useRecoilValue(authState).employees;
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  //모달
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setSelectedIdx(null);
  }, [employees]);

  const handleSelect = (idx: number) => {
    if (selectedIdx === idx) {
      setSelectedIdx(null);
    } else {
      setSelectedIdx(idx);
    }
  };

  return (
    <style.pageBox>
      <style.topBox>
        <style.pageName>사원 정보</style.pageName>
        {selectedIdx !== null ? (
          <style.editButton onClick={onClickButton}>
            <style.editText>회원 정보 수정</style.editText>
            <style.editRight src={right}></style.editRight>
          </style.editButton>
        ) : (
          <style.editButtontmp>
            <style.editText>회원 정보 수정</style.editText>
            <style.editRight src={right}></style.editRight>
          </style.editButtontmp>
        )}
        {isOpen && (
          <Modal
            onClose={() => {
              setIsOpen(false);
            }}
            width="50vw"
            height="60vh"
            title="회원 정보 수정"
            content={<AdimModalContent />}
          />
        )}
      </style.topBox>
      <style.dataTitle>
        <style.no>No</style.no>
        <style.number>직원 번호</style.number>
        <style.name>이름</style.name>
        <style.job>직책</style.job>
        <style.phone>연락처</style.phone>
      </style.dataTitle>
      <style.hrLine></style.hrLine>
      <style.dataBox>
        {employees.map((employee, idx) => (
          <EmployeeData
            key={employee.number}
            no={idx + 1}
            number={employee.number}
            name={employee.name}
            job={employee.job}
            phone={employee.phone}
            onSelect={() => handleSelect(idx)}
            selected={selectedIdx === idx}
          />
        ))}
      </style.dataBox>
    </style.pageBox>
  );
};

export default Admin;
