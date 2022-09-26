import React from 'react';
import { graphql } from 'gatsby';
import OfferingList from '../components/OfferingList';

export default function OfferingsPage({ data }) {
  const offerings = data.pizzas.nodes;
  return (
    <>
      <OfferingList offerings={offerings} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
