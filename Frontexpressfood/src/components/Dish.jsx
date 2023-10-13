import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartSlice";

import {
  SparklesIcon,
  ArrowLongRightIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

const Dish = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    console.log("Début");
    // Créez un objet représentant l'article à ajouter au panier
    const itemToAdd = {
      id: props.items.id,
      name: props.items.name,
      price: props.items.price.toFixed(2),
      img: props.items.img,
      quantity: meatNumber, // Vous pouvez ajuster la quantité ici si nécessaire
    };
    console.log("Milieu");
    // Dispatchez l'action addToCart avec l'objet à ajouter au panier
    dispatch(addToCart(itemToAdd));
    console.log("Fin");
  };

  const [meatNumber, setMeatNumber] = useState(1);
  const [meatBag, setMeatBag] = useState(props.items.price);
  const meatPrice = props.items.price;
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10); // Parse la valeur en entier
    setMeatNumber(newValue); // Met à jour meatNumber avec la nouvelle valeur
    const newValueMeatBag = newValue * meatPrice;
    setMeatBag(newValueMeatBag);
  };
  return (
    <>
      <div className="sm:flex sm:items-baseline sm:justify-between mt-8">
        <img
          src={props.items.ChoiceTypeImg}
          alt={props.items.ChoiceTypeImg}
          className="w-14 h-14"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <img
            src={props.items.img}
            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
            className="object-cover object-center group-hover:opacity-75"
          />
          <div
            aria-hidden="true"
            className="bg-gradient-to-b from-transparent to-black opacity-50"
          />
          <div className="flex items-end p-6">
            <div>
              <h3 className="font-semibold text-white">
                <a href="#">
                  <span className="absolute inset-0" />
                  {props.items.name}
                </a>
              </h3>
              <p aria-hidden="true" className="mt-1 text-sm text-white">
                Plat viande du jour
              </p>
            </div>
          </div>
        </div>
        <div className="group aspect-h-1 aspect-w-2 rounded-lg sm:aspect-none sm:relative sm:h-full">
          <p>
            <span className="text-xl">{props.items.name}</span>
            <span className="flex">
              Ingrédients <SparklesIcon className="w-4 h-4 text-yellow-400" />
            </span>
            {props.items.ingredients.map((ing) => (
              <span key={ing} className="flex items-center">
                <ArrowLongRightIcon className="w-4 h-3" /> {ing}
              </span>
            ))}

            <small>
              Chez nous, la fraîcheur est notre priorité. Nous utilisons
              uniquement des ingrédients de la plus haute qualité pour créer des
              plats exceptionnels qui éveilleront vos papilles. Découvrez
              l'authenticité des saveurs dans chaque bouchée.
            </small>
          </p>
        </div>
        <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
          <div className="">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 mt-5"
              >
                Quantité
              </label>
              <div className="mt-2 flex rounded-md shadow-sm">
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <UsersIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    min="1"
                    max="100"
                    defaultValue={1}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <button
                className="bg-slate-800 text-white rounded-md w-full mt-4 p-4 hover:bg-slate-900"
                onClick={handleAddToCart}
              >
                En ajouter {meatNumber} à la commande - {meatBag.toFixed(2)}€
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dish;
