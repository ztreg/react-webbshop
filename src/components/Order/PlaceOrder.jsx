import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import firebase from "../../firebaseConfig";
import DiscountCode from "./DiscountCode";
import OrderSuccess from "./OrderSuccess";

export default function PlaceOrder(props) {
  // Get all context for placing a order
  const { codes, currentUser, totalPrice, setTotalPrice, cartData } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false)

  let totalTest = totalPrice * 1
  const database = firebase.database();

  const orderURL = `orders`;
  const ordersREF = database.ref(orderURL);

   function checkCodeValidation() {
       // eslint-disable-next-line array-callback-return
       Object.entries(codes).map((code) => {
         if (discountCode === code[0]) {
           console.log(code[0]);
           setTotalPrice(totalPrice * code[1].discount);
           totalTest = totalTest * code[1].discount
         }
       });
       postOrder();
   }

  function postOrder() {
    setTotalPrice(totalTest)
    let test123 = ordersREF.push({
      name: currentUser,
      orderPrice: totalTest,
      orderItems: cartData,
    });
    if(test123.key) {
      setOrderPlaced(true)
    }
  }

  return (
    <div>
      {orderPlaced === true ? <OrderSuccess setOrderPlaced={setOrderPlaced} orderPlaced={orderPlaced}/>
      : <DiscountCode setDiscountCode={setDiscountCode} 
          checkCodeValidation={checkCodeValidation} 
        /> 
      }

    </div>
  );
}
