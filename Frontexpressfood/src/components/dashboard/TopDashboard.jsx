import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
  BanknotesIcon,
  NoSymbolIcon,
  CheckIcon
} from "@heroicons/react/24/outline";

const stats = [
  {
    id: 1,
    name: "Total des ventes en €",
    stat: "20 500",
    icon: BanknotesIcon,
    change: "122",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Livreur Dispo.",
    stat: "25",
    icon: CheckIcon,
    change: "23",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Livreur Occupé",
    stat: "5",
    icon: NoSymbolIcon,
    change: "3.2%",
    changeType: "decrease",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TopDashboard = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 w-full overflow-hidden mt-8">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Last 30 days
      </h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {item.stat}
              </p>
              
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default TopDashboard;
