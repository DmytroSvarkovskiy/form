import styled from "styled-components";

export const Form = styled.form`
  width: 454px;
  height: 454px;
  box-shadow: 0px 10px 20px rgba(129, 129, 129, 0.15);
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginTitle = styled.p`
  display: flex;
  justify-content: center;
  margin: 0 0 32px;
  font-size: 24px;
  line-height: 1.33;
`;
export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.43;
  width: 335px;
  display: block;
`;
export const InputLoginForm = styled.input`
  width: 335px;
  display: block;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  padding: 11px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
`;
export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 60px;
  position: relative;
`;
export const LoginButton = styled.button`
  width: 335px;
  height: 44px;
  background: #2bb54b;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.43;
  border: none;
  color: #ffffff;
  cursor: pointer;
`;
export const Visiblebutton = styled.button`
  position: absolute;
  top: 142px;
  left: 300px;
  border: none;
  background-color: transparent;
  svg {
    color: #9e9e9e;
    width: 20px;
    height: 20px;
  }
`;
