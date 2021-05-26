import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "./examples.css";

export const MultipleCustomHooks = () => {
  const { state: counter, increment } = useCounter(1);
  const request = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { loading, data } = request;
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h3>BreakingBad Quotes</h3>
      {loading ? (
        <div className="alert alert-info text-center">Loading ...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer padding">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={ increment }>
        Next Quote
      </button>
    </>
  );
};
