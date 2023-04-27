import { atom } from "recoil";
import localStorageEffect from "@src/constant/localStorage";

interface User {
  id: string;
  name: string;
  type: number;
}

interface Employee {
  number: string;
  name: string;
  job: string;
  phone: string;
}

interface Auth {
  isAuthenticated: boolean;
  user: User | null;
  employees: Employee[];
}

const dummyData: Employee[] = [
  {
    number: "ABCDEF1",
    name: "박재현",
    job: "건축 구조사",
    phone: "010-1234-5678",
  },
  {
    number: "GHIJKL2",
    name: "김민수",
    job: "건축 기술자",
    phone: "010-1234-5679",
  },
  {
    number: "ABCDEF3",
    name: "박재현",
    job: "건축 구조사",
    phone: "010-1234-5678",
  },
  {
    number: "GHIJK4L",
    name: "김민수",
    job: "건축 기술자",
    phone: "010-1234-5679",
  },
  {
    number: "ABCDE5F",
    name: "박재현",
    job: "건축 구조사",
    phone: "010-1234-5678",
  },
  {
    number: "GHIJK6L",
    name: "김민수",
    job: "건축 기술자",
    phone: "010-1234-5679",
  },
  {
    number: "ABCD4E6F",
    name: "박재현",
    job: "건축 구조사",
    phone: "010-1234-5678",
  },
  {
    number: "GHIJK43L",
    name: "김민수",
    job: "건축 기술자",
    phone: "010-1234-5679",
  },
  {
    number: "ABCDE43F",
    name: "박재현",
    job: "건축 구조사",
    phone: "010-1234-5678",
  },
  {
    number: "GHIJ434KL",
    name: "김민수",
    job: "건축 기술자",
    phone: "010-1234-5679",
  },
];

export const authState = atom<Auth>({
  key: "authState",
  default: {
    isAuthenticated: false,
    user: null,
    employees: dummyData,
  },
  effects: [localStorageEffect("auth")],
});
