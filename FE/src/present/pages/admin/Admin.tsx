import * as style from "@pages/admin/Admin.style";
import EmployeeData from "@src/present/common/EmployeeData/EmployeeData";

const Admin = () => {
  return (
    <style.pageBox>
      <style.pageName>사원 정보</style.pageName>
      <style.dataTitle>
        <style.no>No</style.no>
        <style.number>직원 번호</style.number>
        <style.name>이름</style.name>
        <style.job>직책</style.job>
        <style.phone>연락처</style.phone>
      </style.dataTitle>
      <style.hrLine></style.hrLine>
      <style.dataBox>
        <EmployeeData
          no="1"
          number="ABCDEF"
          name="박재현"
          job="건축 구조사"
          phone="010-1234-5678"
        />
        <EmployeeData
          no="1"
          number="ABCDEF"
          name="박재현"
          job="건축 구조사"
          phone="010-1234-5678"
        />
        <EmployeeData
          no="1"
          number="ABCDEF"
          name="박재현"
          job="건축 구조사"
          phone="010-1234-5678"
        />
      </style.dataBox>
    </style.pageBox>
  );
};

export default Admin;
