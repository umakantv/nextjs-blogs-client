import { useEffect, useState } from "react";

export default function useDebounce(value: any) {
  let [returnValue, setReturnValue] = useState(value);

  useEffect(() => {
    let t = setTimeout(() => {
      setReturnValue(value);
    }, 1000);

    return () => clearTimeout(t);
  }, [value]);

  return [returnValue, setReturnValue];
}
