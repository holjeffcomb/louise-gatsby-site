import React from 'react';
import styled from 'styled-components';
import Image from '../components/Image';

const ImageStyle = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

export default function AboutPage() {
  return (
    <>
      <ImageStyle>
        <Image src="louise-dusk.jpg" className="" alt="Louise at dusk" />
      </ImageStyle>
      <h1>Hi, I'm Louise</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis
        molestie a iaculis at erat. Ut morbi tincidunt augue interdum. Diam in
        arcu cursus euismod quis. Bibendum arcu vitae elementum curabitur vitae
        nunc sed velit. Faucibus turpis in eu mi bibendum neque egestas. A
        scelerisque purus semper eget duis. Ac auctor augue mauris augue neque
        gravida. In arcu cursus euismod quis. Tellus at urna condimentum mattis
        pellentesque id. Ac tincidunt vitae semper quis lectus nulla at
        volutpat. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed
        ullamcorper.
      </p>
      <p>
        Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Consequat
        id porta nibh venenatis cras sed felis eget. Nibh ipsum consequat nisl
        vel pretium lectus. Sem nulla pharetra diam sit. Habitant morbi
        tristique senectus et. Egestas tellus rutrum tellus pellentesque eu
        tincidunt tortor aliquam. Nulla at volutpat diam ut venenatis tellus in
        metus. Eu lobortis elementum nibh tellus. Nisi lacus sed viverra tellus
        in hac habitasse platea dictumst. Mauris sit amet massa vitae tortor
        condimentum. Blandit cursus risus at ultrices mi tempus. Posuere
        sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
        Ullamcorper sit amet risus nullam eget felis eget nunc. Viverra justo
        nec ultrices dui sapien eget mi proin sed. Est velit egestas dui id
        ornare arcu odio ut. Elementum sagittis vitae et leo duis ut diam quam
        nulla. Pharetra massa massa ultricies mi.
      </p>
    </>
  );
}
