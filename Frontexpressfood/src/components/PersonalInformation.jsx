import React from "react";

const PersonalInformation = (props) => {
  
  return (
    <div className="mx-auto max-w-4xl py-16 sm:px-6 sm:py-24">
      <div className="px-4 sm:px-0">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Mes informations
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Explorez votre profil, vérifiez vos coordonnées, gérez vos
          préférences.
        </p>
      </div>
      <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8 mt-8">
        <dl className="flex-auto space-y-4 divide-y divide-gray-200 text-sm text-gray-600 md:grid md:grid-cols-3 md:gap-x-6 md:space-y-0 md:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
          <div className="flex justify-between md:block">
            <dt className="font-medium text-gray-900">Nom & Prénom</dt>
            <dd className="md:mt-1">{props.items.firstname}{' '}{props.items.name}</dd>
          </div>
          <div className="flex justify-between pt-4 md:block md:pt-0">
            <dt className="font-medium text-gray-900">Adresse</dt>
            <dd className="md:mt-1">
              <dd className="md:mt-1">{props.items.address}</dd>
            </dd>
          </div>
          <div className="flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0">
            <dt>N° de téléphone</dt>
            <dd className="md:mt-1">{props.items.phone}</dd>
          </div>
        </dl>
        <div className="mt-6 space-y-4 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 md:w-auto"
          >
            Supprimer mon compte
            <span className="sr-only">for order XX</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
