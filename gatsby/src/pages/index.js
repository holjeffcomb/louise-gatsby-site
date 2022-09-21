import React from 'react';
import styled from 'styled-components';
import Image from '../components/Image';

const ImageStyle = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

export default function IndexPage() {
  return (
    <>
      <h1>Louise Holcomb</h1>
      <ImageStyle>
        <Image src="louise-pose.jpg" className="" alt="Louise backbend" />
      </ImageStyle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tempor commodo
        ullamcorper a lacus vestibulum sed arcu. Arcu non odio euismod lacinia
        at quis risus. Gravida arcu ac tortor dignissim convallis aenean et
        tortor at. Pulvinar elementum integer enim neque volutpat. Sit amet est
        placerat in egestas erat imperdiet. Eros donec ac odio tempor orci
        dapibus ultrices.
      </p>
    </>
  );
}
