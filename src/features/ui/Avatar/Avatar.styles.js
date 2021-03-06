import styled from "styled-components";

export const StyledSearchDropownWrapper = styled.div`
  position: absolute;
  right: 15px;
  border: 1px solid #ededed;
  box-shadow: -4px 6px 17px rgb(216 216 216 / 59%);
  border-radius: 8px;
  z-index: 11;
  background: #fff;
  min-width: 18rem;
`;

export const StyledAvatar = styled.img`
  width: ${({ width }) => (width ? width : "10px")};
  height: ${({ height }) => (height ? height : "10px")};
  margin: ${({ margin }) => (margin ? margin : "")};
  border-radius: ${({ radius }) => (radius ? radius : "")};
`;

export const StyledAvatars = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  &:hover {
    div {
      margin-right: 3px;
    }
  }
`;

export const StytledAvatarItem = styled.div`
  background-color: #E2E2E2;
  border-radius: 50%;
  color: background: #9A9A9A;

  display: block;
  font-size: 12px;
  font-weight: 100;
  height: ${({ height }) => (height ? height : "26px")};
  width: ${({ width }) => (width ? width : "26px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "26px")};
  text-align: center;
  transition: margin 0.1s ease-in-out;
  overflow: hidden;
  margin-left: -5px;

  &:first-child {
    z-index: 5;
  }
  &:nth-child(2) {
    z-index: 4;
  }
  &:nth-child(3) {
    z-index: 3;
  }
  &:nth-child(4) {
    z-index: 2;
  }
  &:nth-child(5) {
    z-index: 1;
  }
  &:last-child {
    z-index: 0;
  }
  img {
    
    object-fit: contain;
  }
`;
