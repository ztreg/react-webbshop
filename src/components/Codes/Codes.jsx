import React, {useEffect, useState, useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import firebase from "../../firebaseConfig";

export default function Codes() {
  const { Codes, setCodes } = useContext(CartContext)

  const database = firebase.database();

  const discountURL = `couponCodes`;
  const discountREF = database.ref(discountURL);

  useEffect(() => {
    console.log('filling context');
    discountREF.on("value", (snapshot) => {
      setCodes(snapshot.val());
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {Codes && (
        console.log('codes fetched in context')
      )}
    </div>
  )
}
