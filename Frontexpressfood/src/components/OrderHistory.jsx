import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const orders = [
  {
    number: "WU88191111",
    date: "1 Janvier 2023",
    datetime: "2021-01-22",
    href: "#",
    invoiceHref: "#",
    total: "€35.00",
    products: [
      {
        id: 1,
        name: "Nomad Tumbler",
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you're weird like that, this bottle is ready for your next adventure.",
        href: "#",
        price: "€35.00",
        status: "delivered",
        date: "13 octobre 2023",
        datetime: "2021-01-05",
        imageSrc:
          "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2865&q=80",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      // More products...
    ],
  },
  // More orders...
];

const OrderHistory = (props) => {
  console.log(props.items);
  !props.items ? console.log("C nul") : console.log("C pas nul");
  return (
    <div className="mx-auto max-w-4xl py-16 sm:px-6 sm:py-24">
      <div className="px-4 sm:px-0">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Historique des commandes
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Découvrez l'historique de vos commandes passées sur notre site.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="sr-only">Recent orders</h2>

        <div className="space-y-16 sm:space-y-24">
          {orders.map((order) => (
            <div key={order.number}>
              <h3 className="sr-only">
                Order placed on{" "}
                <time dateTime={order.datetime}>{order.date}</time>
              </h3>

              <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                <dl className="flex-auto space-y-4 divide-y divide-gray-200 text-sm text-gray-600 md:grid md:grid-cols-3 md:gap-x-6 md:space-y-0 md:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
                  <div className="flex justify-between md:block">
                    <dt className="font-medium text-gray-900">Commande n°</dt>
                    <dd className="md:mt-1">{order.number}</dd>
                  </div>
                  <div className="flex justify-between pt-4 md:block md:pt-0">
                    <dt className="font-medium text-gray-900">Date</dt>
                    <dd className="md:mt-1">
                      <time dateTime={order.datetime}>{order.date}</time>
                    </dd>
                  </div>
                  <div className="flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0">
                    <dt>Montant total</dt>
                    <dd className="md:mt-1">{order.total}</dd>
                  </div>
                </dl>
                <div className="mt-6 space-y-4 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0"></div>
              </div>

              <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
                <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
                  {order.products.map((product) => (
                    <div key={product.id} className="flex py-6 sm:py-10">
                      <div className="min-w-0 flex-1 lg:flex lg:flex-col">
                        <div className="lg:flex-1">
                          <div className="sm:flex">
                            <div>
                              <h4 className="font-medium text-gray-900">
                                {product.name}
                              </h4>
                              <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                                {product.description}
                              </p>
                            </div>
                            <p className="mt-1 font-medium text-gray-900 sm:ml-6 sm:mt-0">
                              {product.price}
                            </p>
                          </div>
                        </div>
                        <div className="mt-6 font-medium">
                          {product.status === "delivered" ? (
                            <div className="flex space-x-2">
                              <CheckIcon
                                className="h-6 w-6 flex-none text-green-500"
                                aria-hidden="true"
                              />
                              <p>
                                En cours
                                <span className="hidden sm:inline">
                                  {" "}
                                  le{" "}
                                  <time dateTime={product.datetime}>
                                    {product.date}
                                  </time>
                                </span>
                              </p>
                            </div>
                          ) : product.status === "out-for-delivery" ? (
                            <p>Out for delivery</p>
                          ) : product.status === "cancelled" ? (
                            <p className="text-gray-500">Cancelled</p>
                          ) : null}
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0 sm:order-first sm:m-0 sm:mr-6">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="col-start-2 col-end-3 h-20 w-20 rounded-lg object-cover object-center sm:col-start-1 sm:row-span-2 sm:row-start-1 sm:h-40 sm:w-40 lg:h-52 lg:w-52"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
