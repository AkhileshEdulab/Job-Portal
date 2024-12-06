
import {Anchor,Button,Checkbox,Group,LoadingOverlay,PasswordInput,Radio,rem,TextInput,} from "@mantine/core";
import { showNotification } from "@mantine/notifications"; 
import { IconAt, IconLock, IconCheck, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../Services/UserServices";

const Form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
  acceptTerms: false,
};

const SignUp = () => {
  const [data, setData] = useState(Form);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const navigate = useNavigate()
  const [loading,setLoding]=useState(false);

  const handleChange = (event: any) => {
    if (typeof event === "string") {
      setData({ ...data, accountType: event });
    } else {
      const { name, value, type, checked } = event.target;
      setData({
        ...data,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleBlur = (event: any) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
    validateField(name);
  };

  const validateField = (fieldName: string) => {
    let error = "";
    switch (fieldName) {
      case "name":
        if (!data.name.trim()) error = "Name is required.";
        break;
      case "email":
        if (!data.email.trim()) error = "Email is required.";
        else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)
        )
          error = "Enter a valid email address.";
        break;
      case "password":
        if (!data.password) error = "Password is required.";
        else if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
            data.password
          )
        )
          error =
            "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one digit, and one special character.";
        break;
      case "confirmPassword":
        if (data.password !== data.confirmPassword)
          error = "Passwords do not match.";
        break;
      case "acceptTerms":
        if (!data.acceptTerms)
          error = "You must accept the terms and conditions.";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
  };

  const validateForm = () => {
    const fields = Object.keys(data);
    fields.forEach(validateField);
    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      showNotification({
        title: "Form Error",
        message: "Please fix the highlighted errors before submitting.",
        color: "red",
        icon: <IconX />,
      });
      return;
    }
    setLoding(true);

    registerUser(data)
      .then((res) => {
        showNotification({
          title: "Success",
          message: "You have registered successfully!",
          color: "green.8",
          icon: <IconCheck />,
        });
        setTimeout(()=>{
          navigate('/login');
        })
      })
      
      .catch((err) => {
        showNotification({
          title: "Registration Failed",
          message: "An error occurred during registration. Please try again.",
          color: "red.8",
          icon: <IconX />,
        });
        setLoding(false);
        console.error("Registration failed:", err);
      });
  };
  
  return (
    <>  
    <LoadingOverlay
    visible={loading}
    className="translate-x-1/2"
    zIndex={1000}
    overlayProps={{ radius: 'sm', blur: 2 }}
    loaderProps={{ color: 'green.8', type: 'bars' }}
  />
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
      <TextInput
        name="name"
        value={data.name}
        onChange={handleChange}
        onBlur={handleBlur}
        withAsterisk
        label="Your Name"
        placeholder="Enter your name"
        error={touched.name && errors.name}
      />
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
      <PasswordInput
        name="confirmPassword"
        value={data.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        withAsterisk
        leftSection={
          <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
        }
        label="Confirm Password"
        placeholder="Confirm your password"
        error={touched.confirmPassword && errors.confirmPassword}
      />
      <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        label="Who are you?"
        withAsterisk
      >
        <Group mt="xs">
          <Radio
            autoContrast
            className="p-4 hover:border-2 hover:border-bright-sun-400 rounded-lg"
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            autoContrast
            className="p-4 hover:border-2 hover:border-bright-sun-400 rounded-lg"
            value="EMPLOYER"
            label="Employer"
          />
        </Group>
      </Radio.Group>
      <Checkbox
        autoContrast
        name="acceptTerms"
        checked={data.acceptTerms}
        onChange={handleChange}
        onBlur={handleBlur}
        label={
          <>
            I accept{" "}
            <Anchor href="/terms-and-conditions" target="_blank">
              terms & conditions
            </Anchor>
          </>
        }
        error={touched.acceptTerms && errors.acceptTerms}
      />
      <Button autoContrast variant="filled" loading={loading} onClick={handleSubmit}>
        Sign-up
      </Button>
      <div className="mx-auto">
        Have an account?{" "}
        <Link to="/login" className="text-bright-sun-400 hover:underline">
          Login
        </Link>
      </div>
    </div>
    </>
  );
};

export default SignUp;
