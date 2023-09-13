import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
`;

export const Logo = styled.a`
  display: inline-block;
  font-size: 0;
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  img {
    display: block;
    width: 100%;
  }
`;

export const NavMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  margin-right: auto;
  margin-left: 25px;
  align-items: center;
  height: 100%;
  & a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      z-index: auto;
      height: 20px;
      width: 20px;
      min-width: 20px;
      padding-bottom: 4px;
    }
    span {
      position: relative;
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
    }
    & :before {
      background-color: rgb(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      height: 3px;
      content: "";
      opacity: 0;
      right: 0;
      left: 0;
      position: absolute;
      transform-origin: right center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      width: auto;
    }
  }
  & :hover {
    span:before {
      transform: scaleY(1.3);
      visibility: visible;
      opacity: 1 !important;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 18px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 50px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #090b13;
    cursor: pointer;
  }
`;
export const UserImg = styled.img`
  height: 100%;
`;
/*export const DropButtons = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    z-index: -1;
  }
`;*/

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 101px;
  opacity: 0;
  & div.signout {
    position: relative;
    top: 20px;
    bottom: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SignOut = styled.div`
  position: relative;
  height: 48px;
  display: flex;
  height: 48px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
      &:hover {
        color: rgb(249, 249, 249);
        background-color: #090b13;
      }
    }
  }
`;
