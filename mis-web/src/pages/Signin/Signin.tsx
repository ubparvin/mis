import { useForm } from "react-hook-form";

import logo from "assets/images/logo.png";
import securityFlatline from "assets/images/security_flatline.svg";
import { useEffect, useState } from "react";
import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { userRole } from "apollo/cache";
import { useNavigate } from "react-router-dom";
import { User } from "types";
import { secureLocalStorage } from "utils/localstorage-slim";
import { USER_SIGNIN } from "graphql/mutations/user";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

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

  const [signinMutation] = useMutation<
    { signin: UserResponse },
    { email: string; password: string }
  >(USER_SIGNIN, {
    fetchPolicy: "network-only",
    onCompleted({ signin }) {
      if (signin.errors) {
        setTimeout(() => {
          setSubmitting(false);
          signin.errors?.map((err) => {
            setError(err.field, {
              type: "manual",
              message: err.message,
            });
          });
        }, 3000);

        return null;
      }

      setTimeout(() => {
        secureLocalStorage.set("token", signin.token);
        navigate("dashboard", { replace: true });
      }, 3000);
    },
    onError(err) {
      console.log(err);
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
    let active = true;
    if (active) {
      let token = secureLocalStorage.get("token");
      if (token) {
        navigate("/dashboard", { replace: true });
      }
    }

    return () => {
      active = false;
    };
  }, []);

  const onSubmit = handleSubmit((formData, event) => {
    event?.preventDefault();
    setSubmitting(true);
    signinMutation({ variables: formData });
  });

  return (
    <div className="flex justify-center items-center h-screen w-full flex-col">
      {(errors.email?.type === "manual" ||
        errors.password?.type === "manual") && (
        <div
          className="p-4 w-1/4 mb-4 text-sm  bg-red-100 text-red-700 rounded-lg flex flex-col justify-center items-center"
          role="alert"
        >
          <span className="flex flex-row justify-center items-center">
            <ExclamationCircleIcon className="w-6 h-6 mr-2  " />{" "}
            {errors.email?.message || errors.password?.message?.split(".")[0]}
          </span>
          {errors.password?.type === "manual" && (
            <a
              className={`${
                errors.password?.message?.includes("Invalid")
                  ? "text-primary underline  font-light"
                  : "text-red-700"
              }cursor-pointer mt-2`}
              href="#"
            >
              {errors.password?.message?.split(".")[1]}
            </a>
          )}
        </div>
      )}

      <div className="w-1/4 bg-white rounded-lg border border-gray-200 shadow-md ">
        <form className="text-center px-8 py-8 " onSubmit={onSubmit}>
          <div className="flex justify-center items-center flex-col">
            <img src={logo} className="w-1/3" alt="logo.png" />
            <h2 className="text-2xl text-gray-900 mt-5">Welcome Back!</h2>
            <p className="text-xs text-gray-500">Login to your account</p>
          </div>
          <div>
            <input
              type="email"
              disabled={submitting}
              id="email"
              className={`border mt-10  ${
                errors.email?.type === "manual"
                  ? "border-red-700 text-red-700 hover:ring-red-700 hover:ring-1 hover:border-red-700 focus:ring-red-700 focus:ring-1 focus:border-red-700"
                  : "border-gray-500 text-gray-900 hover:ring-primary hover:ring-1 hover:border-primary  focus:ring-primary focus:ring-1 focus:border-primary"
              } text-sm rounded-lg focus:outline-none block w-full p-3`}
              placeholder="Email Address"
              {...register("email")}
            />
          </div>
          <div>
            <input
              type="password"
              disabled={submitting}
              id="password"
              placeholder="Password"
              className={`border mt-10  ${
                errors.password?.type === "manual"
                  ? "border-red-700 text-red-700 hover:ring-red-700 hover:ring-1 hover:border-red-700 focus:ring-red-700 focus:ring-1 focus:border-red-700"
                  : "border-gray-500 text-gray-900 hover:ring-primary hover:ring-1 hover:border-primary  focus:ring-primary focus:ring-1 focus:border-primary"
              } text-sm rounded-lg focus:outline-none block w-full p-3`}
              {...register("password")}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`w-full mt-10 text-white ${
              submitting ? "bg-primary_shade" : "bg-primary"
            }  hover:bg-primary_shade focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center`}
          >
            {!submitting ? (
              "Signin"
            ) : (
              <div className="flex justify-center">
                <div className="w-5 h-5 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
              </div>
            )}
          </button>
          {/* <div className="flex justify-center mt-2">
            <a
              href="#"
              className="text-gray-500 hover:underline hover:text-primary text-xs "
            >
              Forgot Password
            </a>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Signin;
