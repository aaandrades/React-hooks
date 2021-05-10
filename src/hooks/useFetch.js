import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const initialState = {
    data: null,
    loading: true,
    error: null,
  };

  const isMounted = useRef(true);
  const [data, setData] = useState(initialState);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    // Restart the loading while new service
    setData({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setData({
            ...data,
            loading: false,
            error: null,
            data,
          });
        }
      });

    // return () => {
    //   cleanup;
    // };
  }, [url]);

  return data;
};
