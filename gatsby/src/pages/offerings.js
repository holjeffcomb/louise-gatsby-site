import React from 'react';
import { graphql } from 'gatsby';
import OfferingList from '../components/OfferingList';

export default function OfferingsPage({ data }) {
  const offerings = data.offerings.nodes;
  return (
    <>
      <OfferingList offerings={offerings} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    offerings: allSanityPizza {
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
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
