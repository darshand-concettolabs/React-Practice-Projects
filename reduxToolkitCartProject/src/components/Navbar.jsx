import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Navbar() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>ALL PRODUCTS</span>
        <MDBBtn color="dark">Cart(0)</MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
