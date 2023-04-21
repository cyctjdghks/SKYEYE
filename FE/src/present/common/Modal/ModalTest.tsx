const ModalText = () => {
  return(
    <div>
      Test
    </div>
  )
}

export default ModalText;


// import React, { useState } from "react";
// import * as style from "./App.style";
// import Modal from "./present/common/Modal/Modal";

// function App() {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [isOpen2, setIsOpen2] = useState<boolean>(false);

//   const onClickButton = () => {
//     setIsOpen(true);
//   };

//   const onClickButton2 = () => {
//     setIsOpen2(true);
//   };

//   return (
//     <style.AppWrap>
//       <style.Button onClick={onClickButton}>click Me</style.Button>
//       {isOpen && (
//         <Modal
//           onClose={() => {
//             setIsOpen(false);
//           }}
//           width="600px"
//           height="400px"
//           title="로그인"
//         />
//       )}
//       <style.Button onClick={onClickButton2}>click Me</style.Button>
//       {isOpen2 && (
//         <Modal
//           onClose={() => {
//             setIsOpen2(false);
//           }}
//           width="300px"
//           height="200px"
//           title="상세정보"
//         />
//       )}
//     </style.AppWrap>
//   );
// }

// export default App;