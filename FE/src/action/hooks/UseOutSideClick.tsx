import { useEffect } from "react";

// useOutSideClick 커스텀 훅
// ref로 지정한 요소의 밖을 클릭 시 callback 함수를 실행시켜 줌

const useOutSideClick = (ref, callback) => {
  useEffect(()=> {
    const handleClick = (event) => {
      if(ref.current && !ref.current.contains(event.target)){
        callback?.();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}

export default useOutSideClick;