import React from "react";
import { render } from "@testing-library/react";
import  RegistrationForm  from "../components/RegistrationForm";

describe("<RegistrationForm />", () => {
  const users = [
    {    username:"abdsc",
    password:"abddc",
    email:"yexaf46581@othao.com",
    phone:"abc",
    DoB:"2020-10-21" },
  ];
  test("renders Registration component", () => {
    const { container } = render(<RegistrationForm users={users} />);
    expect(container).toMatchSnapshot();
  });
});