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
        const abc = "a"
        const offset = 3;
        const limit = 20
        const customerID = "03153526-5b32-4b9a-a4a0-1b1310882a55"
        const response = await fetch(`/api/customer?offset=${offset}`);
        const responseOrders = await fetch(`/api/caarts?offset=${offset}`);
        const response3 = await fetch(`/api/customers?id=${customerID}`);
        const products = await fetch(`/api/products`);

        // setCustomers(data.results);
      } catch (err) {
        console.error("Error fetching customers:", err);
      }
    }
    fetchCustomers()
  }, [])




  const [userData, setUserData] = useState({
    email: "johndoe@exampleszxxxxde32s.com",
    firstName: "John",
    lastName: "Doe",
    password: "secret123",
    isEmailVerified: true
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("userData being sent:", userData);

    try {
      console.log('Sending POST request to /api/customers');
      console.log('Request body:', userData);

      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(result)}`);
      }

      setMessage('User created successfully');
      console.log('Response:', result);
    } catch (error) {
      setMessage(`Error creating user: ${error.message}`);
      console.error('Detailed error:', error);
    }
  };




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
      <button onClick={handleSubmit}>Create User</button>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}
