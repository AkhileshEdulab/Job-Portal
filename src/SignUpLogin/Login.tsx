import { Button,  LoadingOverlay,  PasswordInput, rem, TextInput } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconAt, IconLock, IconCheck, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Services/UserServices";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/UserSlice";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [touched, setTouched] = useState<{ email?: boolean; password?: boolean }>({});
  const [loading,setLoding]= useState(false);
  
  const navigate = useNavigate();
  const dispatch= useDispatch()
  const [opened, { open, close }] = useDisclosure(false);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!data.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
    if (!data[name as keyof typeof data]) {
      setErrors({
        ...errors,
        [name]: name === "email" ? "Email is required" : "Password is required",
      });
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      showNotification({
        title: "Validation Error",
        message: "Please correct the errors in the form",
        color: "red.8",
        icon: <IconX />,
      });
      return;
    }
    setLoding(true);
    try {
      const res = await loginUser(data);
       showNotification({
        title: "Login Successful",
        message: "Welcome back!",
        color: "green.8",
        icon: <IconCheck />,
      });
      dispatch(setUser(res)); 
      navigate("/");
    } catch (error: any) {
      showNotification({
        title: "Login Failed",
        message: error.response?.data?.message || "An error occurred. Please try again.",
        color: "red.8",
        icon: <IconX />,
      });
    } finally {
      setLoding(false);
    }
  };

  return (
   <>
    <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'green.8', type: 'bars' }}
        />
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Login to Your Account</div>
      <TextInput
        name="email"
        value={data.email}
        onChange={handleChange}
        onBlur={handleBlur}
        withAsterisk
        label="Your Email"
        placeholder="Enter your email"
        leftSection={<IconAt size={16} />}
        error={touched.email && errors.email}
      />
      <PasswordInput
        name="password"
        value={data.password}
        onChange={handleChange}
        onBlur={handleBlur}
        withAsterisk
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Password"
        placeholder="Enter your password"
        error={touched.password && errors.password}
      />
      <Button
        autoContrast
        variant="filled"
        onClick={handleSubmit}
        loading={loading}
      >
        Login
      </Button>
      <div className="mx-auto">
        Don't have an account?{" "}
        <Link to={"/sign-up"} className="text-bright-sun-400 hover:underline">
          Sign Up
        </Link>
      </div>
      <div onClick={open} className="text-bright-sun-400 hover:underline cursor-pointer text-center">Forgot Password</div>
    </div>
    <ResetPassword opened={opened} close={close}/>
   </>
  );
};

export default Login;
