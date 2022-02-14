import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Outlet, useNavigate } from "react-router-dom";

import logo from "assets/images/logo.png";
import password_monochromatic from "assets/images/password_monochromatic.svg";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";

const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      errors {
        field
        message
      }
      success
    }
  }
`;

type FieldError = {
  field: "email";
  message: string;
};

type ForgotPasswordResponse = {
  errors: FieldError[];
  success: boolean;
};

const ForgotPassword = () => {
  const {
    register,
    reset,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm<{ email: string }>();
  const [isSubmitting, setSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const [forgotPassword] = useMutation<
    { forgotPassword: ForgotPasswordResponse },
    { email: string }
  >(FORGOT_PASSWORD, {
    fetchPolicy: "network-only",
    onCompleted({ forgotPassword }) {
      if (forgotPassword.errors) {
        setError("email", {
          type: "manual",
          message: forgotPassword.errors[0].message,
        });
      }
      setSubmitting(false);
      setIsModalOpen(true);
    },
  });

  const onSubmit = handleSubmit((formData) => {
    setSubmitting(true);
    forgotPassword({ variables: formData });
  });

  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <div className="bg-white py-5 md:px-10 lg:px-20 xl:px-36 grid">
          <div className="w-full fixed">
            <img src={logo} width={135} height={40} alt="logo" />
          </div>
          <div className="self-center">
            <div>
              <p className="text-4xl">Reset Your Password</p>
              <p className="text-sm text-gray-400 mt-2">
                To reset your password, enter your company email below and
                submit. An email will be sent to you with the instructions about
                how to complete the process.
              </p>
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
                {errors.email?.type === "manual" && (
                  <p className="text-rose-600 text-xs mt-2 ml-2">
                    {errors.email.message}
                  </p>
                )}
                <label
                  htmlFor="email"
                  className="absolute left-5 top-2 text-sky-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-sky-600 peer-placeholder-shown:top-4  peer-focus:top-2 peer-focus:text-sky-600 peer-focus:text-sm"
                >
                  Email address
                </label>
              </div>

              <button
                type="submit"
                className="mt-12 px-4 py-4 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:bg-sky-300 text-white font-semibold text-center block w-full focus:outline-none cursor-pointer"
              >
                {!isSubmitting ? (
                  "Reset Password"
                ) : (
                  <div className="flex justify-center">
                    <div className="w-6 h-6 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="bg-sky-600 grid">
          <div className="self-center place-self-center">
            <img
              src={password_monochromatic}
              width={406}
              height={306}
              alt="password_monochromatic"
            />
          </div>
        </div>
      </div>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => navigate("/", { replace: true })}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Reset Password instruction sent
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    We’ve sent an email to {getValues("email")} for the
                    instructions on how to reset your password.
                  </p>
                </div>

                <div className="mt-12">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-semibold text-white bg-sky-600 border border-transparent rounded-md hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => navigate("/", { replace: true })}
                  >
                    Go back to signin
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Outlet />
    </>
  );
};

export default ForgotPassword;
