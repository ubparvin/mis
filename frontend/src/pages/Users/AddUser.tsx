import { useState } from "react";
import PageOne from "./pageone";
import PageTwo from "./pagetwo";
import PageThree from "./pagethree";

const Add = () => {
  const [choices] = useState(["Male", "Female", "Others"]);
  const [gender, setGender] = useState("");

  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  // const handleInputData = (input) => (e) => {
  // input value from the form
  // const { value } = e.target;

  //updating for data state taking previous state and then adding new value to create new object
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [input]: value,
  //   }));
  // };

  const renderPages = () => {
    switch (step) {
      case 1:
        return (
          <PageOne
            nextStep={nextStep}
            choices={choices}
            gender={gender}
            setGender={setGender}
          />
        );
      case 2:
        return <PageTwo nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <PageThree nextStep={nextStep} prevStep={prevStep} />;

      default:
        break;
    }
  };

  return <>{renderPages()}</>;
};

export default Add;
