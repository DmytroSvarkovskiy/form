import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import {
  Form,
  LoginTitle,
  Label,
  InputLoginForm,
  WrapInput,
  LoginButton,
  Visiblebutton,
} from "./LoginForm.styled";
import { Container } from "../Container";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
interface IData {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<IData>();
  const onSubmit: SubmitHandler<IData> = (data: IData) => {
    console.log(data);
    reset();
  };
  const onHandleVisibleClick = () => {
    setVisiblePassword((prevState) => {
      return !prevState;
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LoginTitle>Login</LoginTitle>
        <WrapInput>
          <div>
            <Label htmlFor="email">Email</Label>
            <InputLoginForm
              placeholder="mail@mail.com"
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <InputLoginForm
              placeholder="password"
              type={!visiblePassword ? "password" : "text"}
              id="password"
              {...register("password", { required: true })}
            />
          </div>
          <Visiblebutton type="button" onClick={onHandleVisibleClick}>
            {visiblePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </Visiblebutton>
        </WrapInput>
        <LoginButton type="submit">Login</LoginButton>
      </Form>
    </Container>
  );
};
