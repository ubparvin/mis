import { gql } from "@apollo/client";

export const USER_SIGNIN = gql`
  mutation Signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      errors {
        field
        message
      }
      user {
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
          id
          code
          name
        }
        beneficiaries {
          id
          name
          dateOfBirth
          relationToEmployee
        }
      }
      token
    }
  }
`;
