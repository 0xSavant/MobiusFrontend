import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import FormField from "./FormField";
import { MobiusClient } from "utils/mobius.client";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  location: Yup.string().required().label("Location"),
  description: Yup.string().required().label("Description"),
  denomination: Yup.string().required().label("Denomination"),
});

function StepTwo() {
  const denominations = ["SOL"]; //Add in USDC later
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        location: "",
        denomination: "",
        description: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        // Create fundraiser codes here...
      }}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <FormField
            label="Name"
            name="name"
            description="The name of your fundraiser"
            required
          />
          <FormField
            label="Contact"
            name="email"
            placeholder="Enter an Email..."
            description="Email where users can reach your fundraiser"
            required
          />
          <FormField
            label="Description"
            name="description"
            placeholder="Enter a Description..."
            description="A short description of your fundraiser and its goals"
            required
            type="textarea"
          />
          <FormField
            label="Location"
            name="location"
            description="Where is your fundraiser based?"
            required
          />
          <FormField
            label="Website"
            name="website"
            description="Where users can find more infomation on your fundraiser"
            placeholder="Enter a URL..."
          />
          <FormField
            label="Beneficiary"
            name="beneficiary"
            description="Wallet that will withdraw funds. Will default to deployer’s wallet."
            placeholder="Enter a Wallet..."
          />
          <FormField
            label="Denomination"
            name="denomination"
            description="Select which crypto you’d like to recieve"
            radioOptions={denominations}
            type="radio"
            required
          />

          <div className="col-span-2 place-content-center">
            <br></br>
            <button
              type="submit"
              className="button-style bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75 font-semibold"
              disabled={isSubmitting}
            >
              Create My Fundraiser
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default StepTwo;
