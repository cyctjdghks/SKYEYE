import { useRecoilState, useRecoilValue } from "recoil";
import { adminState, selectedIdxState } from "@src/store/admin";
import { useState, useEffect } from "react";
import * as style from "@src/present/component/Adminpage/UserTable.style";
import EmployeeData from "@src/present/component/Employeedata/EmployeeData";
import { FindUserAll } from "@src/action/hooks/Admin";

const UserTable = () => {
  const [users, setUsers] = useRecoilState(adminState);
  const [selectedIdx, setSelectedIdx] = useRecoilState(selectedIdxState);

  useEffect(() => {
    setSelectedIdx({ idx: null });
  }, [users]);

  useEffect(() => {
    FindUserAll()
      .then((res) => {
        setUsers({ users: res.result });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelect = (idx: number) => {
    if (selectedIdx.idx === idx) {
      setSelectedIdx({ idx: null });
    } else {
      const newSelectedIdxState = {
        idx,
      };
      setSelectedIdx(newSelectedIdxState);
    }
  };

  return (
    <style.AllDataBox>
      <style.DataBox>
        {users.users.map((user, idx) => (
          <EmployeeData
            key={user.userId}
            number={user.userId}
            name={user.userName}
            job={user.userPosition}
            phone={user.userPhoneNumber}
            imgSrc={user.imageSrc}
            onSelect={() => handleSelect(idx)}
            selected={selectedIdx.idx === idx}
          />
        ))}
      </style.DataBox>
    </style.AllDataBox>
  );
};

export default UserTable;
