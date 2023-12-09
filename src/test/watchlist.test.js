import React from "react";
import { render } from "@testing-library/react";
import  Watchlist  from "../components/Watchlist";

describe("<Watchlist />", () => {
  const userData = [
    {    
        allowLogin: true,
        id: 1,
        email: "yexaf4658112@othao.com",
        username: "test1",
        funds_available: 0
     },
  ];
  test("renders Watchlist component", () => {
    const { container } = render(<Watchlist user={userData}/>);
    expect(container).toMatchSnapshot();
  });
});