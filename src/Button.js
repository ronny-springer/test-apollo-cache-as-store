import React from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const GET = gql`
  query {
    number
  }
`;

const ADD = gql`
  mutation ADD($number: Int) {
    add(number: $number) {
      number
    }
  }
`;

const Button = () => {
  const { data } = useQuery(GET);

  const [add] = useMutation(ADD, {
    update: (cache, { data }) => {
      cache.writeData({
        data: data.add,
      });
    },
  });

  if (!data || !data.number) return null;

  return (
    <button onClick={() => add({ variables: { number: data.number } })}>
      Click on me
    </button>
  );
};

export default Button;
