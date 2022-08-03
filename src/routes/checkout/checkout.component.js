import { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckOutContainer,
  CheckOutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>Total: ${cartTotal}</Total>
    </CheckOutContainer>
  );
};

export default CheckOut;
