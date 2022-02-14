import { useForm } from "react-hook-form";

import logo from "assets/images/logo.png";
import securityFlatline from "assets/images/security_flatline.svg";
import { useEffect, useState } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { userRole } from "cache";
import { useNavigate } from "react-router-dom";
import { User } from "types";

const SIGNIN = gql`
  mutation Signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      errors {
        field
        message
      }
      token
    }
  }
`;

const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    me {
      id
      firstName
      middleName
      lastName
      email
      suffix
      telephone
      mobile
      homeAddress
      provincialAddress
      gender
      civilStatus
      dateOfBirth
      placeOfBirth
      position
      dateHired
      contactPerson
      contactPersonNumber
      SSS
      philHealth
      HDMF
      TIN
      role {
        code
      }
      beneficiaries {
        name
        dateOfBirth
        relationToEmployee
      }
    }
  }
`;

type FieldError = {
  field: "email" | "password";
  message: string;
};

type UserResponse = {
  errors: FieldError[];
  token: string;
};

type FormData = {
  email: string;
  password: string;
};

const Signin = () => {
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();

  const [getCurrentUser, { loading, data }] = useLazyQuery<{ me: User }>(
    GET_CURRENT_USER,
    {
      fetchPolicy: "network-only",
      onCompleted({ me }) {
        if (me) {
          navigate("/dashboard", { replace: true });
        }
      },
    }
  );

  const [signinMutation] = useMutation<
    { signin: UserResponse },
    { email: string; password: string }
  >(SIGNIN, {
    onCompleted({ signin }) {
      if (signin.errors) {
        return signin.errors?.map((err) => {
          setError(err.field, {
            type: "manual",
            message: err.message,
          });
        });
      }

      localStorage.setItem("token", signin.token);
      // reset({ email: "", password: "" });
      window.location.replace("/dashboard");
    },
  });

  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    getCurrentUser();
  }, []);

  const onSubmit = handleSubmit((formData) => {
    setSubmitting(true);
    signinMutation({ variables: formData });
  });

  if (loading) {
    return <div />;
  }

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-white py-5 md:px-10 lg:px-20 xl:px-36 grid">
        <div className="w-full fixed">
          <img src={logo} width={135} height={40} alt="logo" />
        </div>
        <div className="self-center">
          <div>
            <p className="text-4xl">Welcome Back</p>
            <p className="text-sm text-gray-400 mt-2">Login to your account</p>
          </div>
          <form className="mt-12" onSubmit={onSubmit}>
            <div className="relative">
              <input
                id="email"
                type="text"
                className="peer h-14 px-5 pt-5 rounded-xl placeholder-shown:pt-0 w-full bg-sky-50 text-gray-900 placeholder-transparent focus:outline-sky-600 focus:pt-5"
                placeholder="john@doe.com"
                {...register("email")}
              />
              <label
                htmlFor="email"
                className="absolute left-5 top-2 text-sky-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-sky-600 peer-placeholder-shown:top-4  peer-focus:top-2 peer-focus:text-sky-600 peer-focus:text-sm"
              >
                Email address
              </label>

              {errors.email?.type === "manual" && (
                <p className="text-rose-600 text-xs mt-2 ml-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mt-10 relative">
              <input
                id="password"
                type="password"
                className="peer h-14 px-5 pt-5 rounded-xl placeholder-shown:pt-0 w-full bg-sky-50 text-gray-900 placeholder-transparent focus:outline-sky-600 focus:pt-5"
                placeholder="Password"
                {...register("password")}
              />
              <label
                htmlFor="password"
                className="absolute left-5 top-2 text-sky-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-sky-600 peer-placeholder-shown:top-4  peer-focus:top-2 peer-focus:text-sky-600 peer-focus:text-sm"
              >
                Password
              </label>
              {errors.password?.type === "manual" && (
                <p className="text-rose-600 text-xs mt-2 ml-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-20 px-4 py-4 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:bg-sky-700 text-white font-semibold text-center block w-full focus:outline-none cursor-pointer"
            >
              {!submitting ? (
                "Sign in"
              ) : (
                <div className="flex justify-center">
                  <div className="w-6 h-6 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
                </div>
              )}
            </button>
          </form>
          <a
            href="/forgot-password"
            className="mt-4 block text-sm text-center font-medium text-sky-600 hover:text-sky-700 focus:outline-none"
          >
            Forgot your password?
          </a>
        </div>
      </div>
      <div className="bg-sky-600 grid">
        <div className="self-center place-self-center">
          <img
            src={securityFlatline}
            width={406}
            height={306}
            alt="security_flatline"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
