import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import OrderHistory from "../components/OrderHistory";
import PersonalInformation from "../components/PersonalInformation";
import Footer from "../components/Footer";
import axios from "axios";
import { useSelector } from "react-redux";

const Account = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  // console.log(user)
  useEffect(() => {
    if (!user) {
      window.location.href = "/connexion";
    }
    console.log(user);
    // Effectue une requête GET au chargement de la page
    axios
      .get(
        `https://expressfood-46144fc92b8b.herokuapp.com/api/orders/${user.id}`
      )
      .then((response) => {
        // Met à jour l'état avec les données de la réponse
        setOrders(response.data);
        console.log(response.data);
        // console.log(response.data)
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);
  return (
    <div className="bg-white">
      <Navbar />
      <PersonalInformation items={user} />
      <div className="mx-auto max-w-4xl py-16 sm:px-6 sm:py-24">
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Commande(s) en cours
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Découvrez où en est votre festin, de la cuisine à votre porte.
          </p>
        </div>
      </div>
      <OrderHistory items={orders} />
      <Footer />
    </div>
  );
};

export default Account;
