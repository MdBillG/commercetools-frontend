'use client'
import Image from "next/image";
// import Token, { getToken } from "./commercetools/token";
import { Children, useEffect, useState } from "react";
import { BASE_URL } from "./commercetools/config";
import { useDispatch, useSelector } from "react-redux";
import { setTotalCarts } from "@/store/cartSlice";
import { get } from "./commercetools/methods";


export default function Home() {
  const [customer, setCustomers] = useState()
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        // const data = await get(`${BASE_URL}/customers`);
        const response = await fetch('/api/customer');
        // setCustomers(data.results);
      } catch (err) {
        console.error("Error fetching customers:", err);
      }
    }
    fetchCustomers()
  }, [])






  const [error, setError] = useState(null);






  useEffect(() => {
    dispatch(setTotalCarts({
      a: 'a'
    }));
  }, [dispatch]);

  const totalcaerte = useSelector((state) => state.cart.totalCarts)

  console.log("totalcaerte", totalcaerte)

  console.log("customer", customer)
  return (
    <div>
      hello
    </div>
  );
}
