import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

export default function ProductCard() {
  const items = useSelector((state) => state.allCart.items);

  return (
    <div className="m-4">
      <MDBContainer>
        <MDBRow className="mb-3">
          {items.map((item) => (
            <MDBCol key={item.id} size="4">
              <MDBCard>
                <MDBCardImage src={item.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>Price: {item.price}</MDBCardText>
                  <MDBCardText>Quantity: {item.quantity}</MDBCardText>
                  <MDBBtn href="#">Add to Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
