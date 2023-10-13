import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTripInfo } from "../reducers/tripReducer";

const Autocomplete = ({ openModal }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const getSuggestions = async (inputValue) => {
    try {
      const response = await axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=${inputValue}`
      );
      const data = response.data;
      const addresses = data.features.map(
        (feature) => feature.properties.label
      );
      setSuggestions(addresses);
    } catch (error) {
      console.error(error);
    }
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    getSuggestions(value);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setSelectedAddress(suggestion);
  };

  const calculateDistance = async () => {
    if (selectedAddress) {
      try {
        const origin = "25 Rue Claude Tillier, 75012 Paris";
        const destination = selectedAddress;
        const apiKey = "1CPvhL7FG7Q4Z7UFevthEeR49dXxytU9";

        const response = await axios.get(
          `http://www.mapquestapi.com/directions/v2/route?key=${apiKey}&from=${origin}&to=${destination}`
        );
        const data = response.data.route;

        const distance = (data.distance * 1.60934).toFixed(2);
        const duration = data.formattedTime;

        let textForModal, icon, backgroundColor;

        if (distance <= 10) {
          textForModal =
            "Super ! Vous êtes Prêt(e) à Recevoir Notre Livraison !";
          icon = "CheckIcon";
          backgroundColor = "bg-green-100";
        } else {
          textForModal =
            "Désolé, la Livraison n'est pas Disponible pour votre Emplacement";
          icon = "XMarkIcon";
          backgroundColor = "bg-red-100";
        }

        dispatch(
          setTripInfo({
            distance,
            duration,
            icon,
            textForModal,
            backgroundColor,
          })
        );
        openModal();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Veuillez d'abord sélectionner une adresse.");
    }
  };

  const getSuggestionValue = (suggestion) => suggestion;

  const renderSuggestion = (suggestion) => (
    <div className="bg-white p-2 border-b-2 max-w-96 w-96">{suggestion}</div>
  );

  const inputProps = {
    placeholder: "Saisissez l'adresse de livraison.",
    value,
    onChange,
    className:
      "w-96 py-4 text-gray-900 border-none border-0 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",
  };

  return (
    <div className="flex flex-col py-8 sm:flex-col md:flex-row">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSuggestionSelected}
      />
      <div className="md:ml-5 ml-0 md:mt-0 mt-5">
        <select
          id="location"
          name="location"
          className="block w-full border-0 py-4 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue="Livrer maintenant"
        >
          <option>Livrer maintenant</option>
          <option>Planifier pour plus tard</option>
        </select>
      </div>
      <div className="md:ml-5 ml-0 md:mt-0 mt-5">
        <button
          className="bg-slate-800 px-6 py-4 text-white rounded-md"
          onClick={calculateDistance}
        >
          Calculer la distance
        </button>
      </div>
    </div>
  );
};

export default Autocomplete;
