import { useState, useRef, useEffect } from 'react';

export default (defaultState) => {
  const [value, setValue] = useState(defaultState);

  const firstMount = useRef(true);
  const callback = useRef();
  const setState = (state, fn) => {
    setValue(state);
    callback.current = fn;
  };

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }

    if (typeof callback.current === 'function') {
      callback.current(value);
    }
  }, [value]);

  return [value, setState];
};
