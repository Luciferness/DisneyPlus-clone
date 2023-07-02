import React from "react";
import {
  Container,
  Content,
  BgImg,
  CTA,
  CTAlogoOne,
  SignUp,
  Description,
  CTAlogoTwo,
} from "./StyledComponents/StyledLogin";
import ctone from "../assets/images/cta-logo-one.svg";
import cttwo from "../assets/images/cta-logo-two.png";

const Login = (props: any) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTAlogoOne src={ctone} placeholder="logo1" />
          <SignUp>CLICK HERE</SignUp>
          <Description>
            Stream Disney+ Originals, latest series & blockbuster movies
          </Description>
          <CTAlogoTwo src={cttwo} alt="logog2" />
        </CTA>
        <BgImg />
      </Content>
    </Container>
  );
};

export default Login;
