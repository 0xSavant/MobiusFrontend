import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import FormField from "./FormField";
import { MobiusClient } from "utils/mobius.client";
import CreateFundraiser from "pages/create";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Program, Provider, web3 } from "@project-serum/anchor";
import { getProvider } from "../../utils/utils";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  location: Yup.string().required().label("Location"),
  description: Yup.string().required().label("Description"),
});

function StepTwo() {
  const denominations = ["SOL"]; //Add in USDC later
  const { connection } = useConnection();
  const { wallet } = useWallet();
  const provider = getProvider();

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
        try {
          // @ts-ignore
          const client = new MobiusClient(connection, wallet);
          //client.createFundraiser
          //
        } catch (error) {
          console.log("error", error);
        }
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
