import { gql, useLazyQuery } from "@apollo/client";
import Breadcrumb from "components/Breadcrumb.tsx/Breadcrumb";
import Header from "components/Header/Header";
import SideBar from "components/Sidebar/Sidebar";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Route } from "routes";
import { User } from "types";

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

type LayoutProps = {
  route: Route;
};

const Layout: React.FC<LayoutProps> = ({ route }) => {
  const navigate = useNavigate();

  const [getCurrentUser, { loading, data }] = useLazyQuery<{ me: User }>(
    GET_CURRENT_USER,
    {
      onCompleted({ me }) {
        if (!me) {
          navigate("/", { replace: true });
        }
      },
    }
  );

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (loading) {
    return <div />;
  }

  return (
    <div className="flex w-full">
      {data?.me && (
        <>
          <SideBar />
          <div className="w-10/12 overflow-auto" style={{ height: "100vh" }}>
            <Header
              email={data.me.email}
              firstName={data.me.firstName}
              lastName={data.me.lastName}
            />
            <Breadcrumb route={route} />
            <div className="p-8">
              <Outlet context={{ ...data.me }} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
