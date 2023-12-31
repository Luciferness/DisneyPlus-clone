import styled from "styled-components";
import bg from "../../assets/images/login-background.jpg";

export const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
export const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
export const BgImg = styled.div`
  background-image: url(${bg});
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

export const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;

export const CTAlogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

export const SignUp = styled.a`
  font-weight: bold;
  color: white;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border-radius: 5px;
  border: 1px solid transparent;
  &:hover {
    background-color: #1c79c5;
  }
`;
export const Description = styled.h2`
  color: hsla(0, 0.5%, 95.3%, 1);
  font-size: 14px;
  margin: 0 0 24px;
  letter-spacing: 1.5px;
`;

export const CTAlogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
