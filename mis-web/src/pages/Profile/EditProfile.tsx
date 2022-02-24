import { useState } from "react";
import PageOne from "../Users/pageone";
import PageTwo from "../Users/pagetwo";
import PageThree from "../Users/pagethree";
import { useFieldArray, useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { User } from "types";
import moment from "moment";
import ProfileModal from "./modal";
import { gql, useMutation } from "@apollo/client";
import { options } from "pages/Dashboard/adminchart";

type ContextType = User;

const UPDATE_USER = gql`
  mutation UpdateUser($options: UpdateUserInput!) {
    updateUser(options: $options) {
      id
      firstName
      middleName
      lastName
      suffix
      email
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
        id
        name
        dateOfBirth
        relationToEmployee
      }
    }
  }
`;

const EditProfile = () => {
  const user = useOutletContext<ContextType>();
  const {
    register,
    reset,
    handleSubmit,
    setError,
    control,
    formState: { errors, dirtyFields, isDirty },
  } = useForm<User>({
    defaultValues: {
      ...user,
      dateHired: moment(user.dateHired).format("YYYY-MM-DD"),
      dateOfBirth: moment(user.dateOfBirth).format("YYYY-MM-DD"),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "beneficiaries",
  });

  const [submitting, setSubmitting] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [choices] = useState(["Male", "Female", "Others"]);
  const [step, setstep] = useState(1);
  const [updateUser] = useMutation<{
    updateUser: User;
    options: User;
  }>(UPDATE_USER, {
    fetchPolicy: "network-only",
    onCompleted(data) {
      if (data) {
        setSubmitting(false);
        setModalOpen(true);
        setTimeout(() => {
          window.location.href = "/profile";
        }, 3000);
      }
    },
  });

  const nextStep = () => {
    setstep(step + 1);
  };

  const prevStep = () => {
    setstep(step - 1);
  };

  const onSubmit = handleSubmit((formData) => {
    setSubmitting(true);
    let newFormData = {};
    for (const [fkey, fValue] of Object.entries(formData)) {
      for (const dfKey of Object.keys(dirtyFields)) {
        if (fkey === dfKey) {
          (newFormData as any)[fkey] = fValue;
        }
      }
    }
    updateUser({ variables: { options: newFormData } });
  });

  const renderPages = () => {
    switch (step) {
      case 1:
        return (
          <PageOne
            nextStep={nextStep}
            choices={choices}
            gender={user.gender}
            register={register}
          />
        );
      case 2:
        return (
          <PageTwo
            nextStep={nextStep}
            prevStep={prevStep}
            register={register}
          />
        );
      case 3:
        return (
          <PageThree
            nextStep={nextStep}
            prevStep={prevStep}
            register={register}
            fields={fields}
            append={append}
            submitting={submitting}
            setSubmitting={setSubmitting}
            remove={remove}
          />
        );

      default:
        break;
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>{renderPages()}</form>
      <ProfileModal isModalOpen={isModalOpen} />
    </>
  );
};

export default EditProfile;
