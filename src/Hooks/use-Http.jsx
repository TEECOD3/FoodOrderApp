import React from "react";
import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(null);

  const sendrequest = useCallback(async (requestconfig, usedata) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestconfig.url, {
        method: requestconfig.method ? requestconfig.method : "GET",
        headers: requestconfig.headers ? requestconfig.headers : {},
        body: requestconfig.body ? JSON.stringify(requestconfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("requestfailed");
      }

      const data = await response.json();
      setIsLoading(false);
      usedata(data);
    } catch (error) {
      // setIsLoading(false);
      setError("something went wrong");
    }
  }, []);

  return {
    Error,
    isLoading,
    sendrequest,
  };
};

export default useHttp;
