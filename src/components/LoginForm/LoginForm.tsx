import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  LoginTitle,
  Label,
  InputLoginForm,
  WrapInput,
  LoginButton,
} from "./LoginForm.styled";
import { Container } from "../Container";

interface IData {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<IData>();
  const onSubmit: SubmitHandler<IData> = (data: IData) => {
    console.log(data);
    reset();
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
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
          </div>
        </WrapInput>
        <LoginButton type="submit">Login</LoginButton>
      </Form>
    </Container>
  );
};
