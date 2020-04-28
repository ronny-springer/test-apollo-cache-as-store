import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET = gql`
  query {
    number
  }
`;

const Display = () => {
  const { data } = useQuery(GET, {
    onCompleted: () => console.log("on complete"),
  });

  if (!data || !data.number) return null;

  return <span>{data.number}</span>;
};

export default Display;
