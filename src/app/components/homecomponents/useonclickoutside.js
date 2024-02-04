import { useEffect } from "react";
export default function Useonclickoutside(ref, handler) {
  useEffect(() => {
    function listener(e) {
      //   console.log("clicked on the screen mate,", e.target);
      if (!ref.current || ref.current.contains(e.target)) return;
      handler();
    }
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
}
