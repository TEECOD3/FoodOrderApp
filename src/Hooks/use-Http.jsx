import React from "react";
import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(null);
  const [submitted, setsubmiited] = useState(false);

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

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      setTimeout(() => {
        setsubmiited(true);
      }, 1020);

      usedata(data);
    } catch (error) {
      setError("something went wong");
    }
  }, []);

  return {
    Error,
    isLoading,
    sendrequest,
    submitted,
  };
};

export default useHttp;
