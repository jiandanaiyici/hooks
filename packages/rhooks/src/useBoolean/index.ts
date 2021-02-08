import { useState, useCallback } from 'react';

const useBoolean = (initBol?: boolean) => {
  const [state, setState] = useState(!!initBol);
  const toggle = useCallback(() => {
    setState(prevBol => !prevBol);
  }, [setState]);

  const setTrue = useCallback(() => {
    setState(true)
  }, [setState]);

  const setFalse = useCallback(() => {
    setState(false);
  }, [setState])


  return [state, { toggle, setTrue, setFalse }] as const;
}

export default useBoolean;