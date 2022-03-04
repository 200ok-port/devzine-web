// PWA 버튼 만들기 (IOS 제외)
// https://jcon.tistory.com/172

import { useEffect, useRef } from "react";

export const useApp = () => {
  const installApp = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const deferredPrompt = useRef<any>(null);

    if (!deferredPrompt.current) return false;

    useEffect(() => {
      console.log("Listening for Install prompt");
      window.addEventListener("beforeinstallprompt", e => {
        e.preventDefault();
        deferredPrompt.current = e;
      });

      //설치가 되어있다면 버튼은 숨긴다
      if (!deferredPrompt.current) {
        return dispatch({
          type: "HIDE_BUTTON",
        });
      }

      //버튼을 보여줌
      dispatch({
        type: "SHOW_BUTTON",
      });
    }, []);

    //홈화면의 추가를 실행시킨다
    deferredPrompt.current.prompt();

    //실행 후 유저가 설치를 했는지 안했는지를 알 수 있다
    deferredPrompt.current.userChoice.then(
      (choiceResult: { outcome: string }) => {
        //설치 했을 때
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
          dispatch({
            type: "HIDE_BUTTON",
          });
        } else {
          //설치 하지 않았을 때
          console.log("User dismissed the A2HS prompt");
        }
      },
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function dispatch(_arg0: { type: string }) {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <button onClick={installApp}>다운로드</button>
    </>
  );
};
