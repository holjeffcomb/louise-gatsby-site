import React from 'react';
import { graphql } from 'gatsby';

export default function OfferingsPage() {
  return <p>Offerings</p>;
}

// export const query = graphql`
//   query PizzaQuery {
//     pizzas: allSanityPizza {
//       nodes {
//         name
//         id
//         slug {
//           current
//         }
//         toppings {
//           id
//           name
//         }
//         image {
//           asset {
//             fluid(maxWidth: 400) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
