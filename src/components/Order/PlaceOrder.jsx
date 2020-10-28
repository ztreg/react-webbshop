import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import firebase from "../../firebaseConfig";
import DiscountCode from "./DiscountCode";

export default function PlaceOrder(props) {
  // Get all context for placing a order
  const { currentUser, totalPrice, setTotalPrice, cartData } = useContext(CartContext);
  const [discountCode, setDiscountCode] = useState(null);
  const [allCodes, setAllCodes] = useState([]);
  let totalTest = totalPrice * 1
  const database = firebase.database();

  const discountURL = `couponCodes`;
  const discountREF = database.ref(discountURL);

  const orderURL = `orders`;
  const ordersREF = database.ref(orderURL);

   function checkCodeValidation() {
     discountREF.on("value", (snapshot) => {
       setAllCodes(snapshot.val());

       // eslint-disable-next-line array-callback-return
       Object.entries(allCodes).map((code) => {
         if (discountCode === code[0]) {
           setTotalPrice(totalPrice * code[1].discount);
           totalTest = totalTest * code[1].discount
           postOrder();
         }
       });
     });
   }

  function postOrder() {
    ordersREF.push({
      name: currentUser,
      orderPrice: totalTest,
      orderItems: cartData,
    });
  }

  return (
    <div>
      <DiscountCode setDiscountCode={setDiscountCode} />
      <button className="btn btn-primary" onClick={checkCodeValidation}>
        Place order
      </button>
    </div>
  );
}
