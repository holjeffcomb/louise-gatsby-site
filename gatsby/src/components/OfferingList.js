import React from 'react';
import { Link } from 'gatsby';

function SingleOffering({ offering }) {
  return (
    <div>
      <Link to={`/offering/${offering.slug.current}`}>
        <h2>
          <span className="mark">{offering.name}</span>
        </h2>
        <p>{offering.toppings.map((topping) => topping.name).join(', ')}</p>
      </Link>
    </div>
  );
}

export default function OfferingList({ offerings }) {
  console.log(offerings);
  return (
    <>
      <h2>Offering List</h2>
      {offerings.map((offering) => (
        <SingleOffering offering={offering} key={offering.id} />
      ))}
    </>
  );
}
