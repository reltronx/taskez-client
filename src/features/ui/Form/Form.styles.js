import styled from "styled-components";
import { Checkbox } from "./Form.component";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : "100%")};
  max-width: 30vw;
  border-radius: 0.5rem;
  height: ${({ height }) => (height ? height : "100%")};
`;

export const StyledBasicInputTitle = styled.input`
border: none;
outline: none;
width: 100%;
font-family: ${({ fontFamily}) => fontFamily ? fontFamily : "Poppins"};
font-style: ${({ fontStyle }) => fontStyle ? fontStyle : "normal"};
font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : "500"};
font-size: ${({ fontSize }) => fontSize ? fontSize : "14px"};
line-height: 137.1%;
color: ${({ color }) => color ? color : "#212121"};
caret-color: #329C89;
caret-shape: block !important;
`;

export const StyledBasicTextArea = styled.textarea`
border: ${({ border }) => border ? border : "1px solid #EEEEEE"};
border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : "6px"};
outline: none;
width: 100%;
font-family: ${({ fontFamily}) => fontFamily ? fontFamily : "Poppins"};
font-style: ${({ fontStyle }) => fontStyle ? fontStyle : "normal"};
font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : "400"};
font-size: ${({ fontSize }) => fontSize ? fontSize : "12px"};
line-height: 137.1%;
resize: none;
height: ${({ height }) => height ? height : "4rem"};
color: ${({ color }) => color ? color : "#6B6B6B"};
caret-color: #329C89;
caret-shape: block !important;
`;

export const StyledInput = styled.input`
  background: #ffffff;
  border: ${({ outline }) =>
    outline === "none" ? "none" : "1px solid #cbdbea"};
  color: ${({ color }) => (color ? color : "#9A9A9A")};
  border-radius: 8px;
  padding: 0 0.6rem;
  margin: ${({ margin }) => (margin ? margin : "1.2rem 1.2rem")};
  width: -webkit-fill-available;
  height: 45px;
  outline: ${({ outline }) => (outline ? outline : "none")};
  font-weight: ${({ weight }) => (weight ? weight : "300")};
  font-size: ${({ size }) => (size ? size : "14px")};
  &::placeholder {
    color: ${({ color }) => (color ? color : "#9A9A9A")};
    font-family: Poppins !important;
    font-style: normal;
    font-weight: ${({ weight }) => (weight ? weight : "300")};
    font-size: ${({ size }) => (size ? size : "14px")};
    line-height ${({ lineHeight }) => (lineHeight ? lineHeight : "103.38%")};
    letter-spacing: 0.05em;
  }
`;

export const CheckboxLabel = styled.label`
  margin: ${({ margin }) => (margin ? margin : "1rem 0 0 3.5rem")};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 15px;
  color: rgba(26, 59, 88, 0.61);
  & input[type="checkbox" i] {
    accent-color: ${({ color }) => (color ? color : " #329c89")};
    margin-right: 6px;
    vertical-align: middle;
  }
`;
