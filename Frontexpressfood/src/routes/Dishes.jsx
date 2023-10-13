import Navbar from "../components/Navbar";
import Dish from "../components/Dish";
import Footer from "../components/Footer";

const plats = [
  {
    id: 1,
    name: "Brochette de poulet",
    price: 9.8,
    ingredients: [
      "poulet",
      "piments antillais",
      "oignons (ciselés)",
      "poivre",
      "concentré de tomates",
    ],
    ChoiceTypeImg: "cuisse-de-poulet.png",
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1913&q=80",
  },
  {
    id: 2,
    name: "Brochette de poisson",
    price: 9.7,
    ingredients: [
      "saumon",
      "piments antillais",
      "oignons (ciselés)",
      "poivre",
      "concentré de tomates",
    ],
    ChoiceTypeImg: "poisson.png",
    img: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
];

const Dishes = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 mt-5">
        <div className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <a href="/" className="border-2 border-slate-800 px-4 py-3 mb-12">
              Vérifier mon éligibilité
            </a>
            <h1 className="text-3xl mb-8 mt-12">
              Sélection Gourmande du Jour : Laissez-vous Surprendre !
            </h1>
            <div className="flex sm:flex-row flex-col mb-8">
              <button className="border-2 border-slate-800 px-4 py-3">
                Menu viande
              </button>
              <button className="border-2 border-slate-800 sm:ml-5 mt-5 sm:mt-0 px-4 py-3">
                Menu poisson
              </button>
              <button className="border-2 border-slate-800 sm:ml-5 mt-5 sm:mt-0 px-4 py-3 bg-slate-800 text-white">
                Les deux
              </button>
            </div>
            {plats.map((item) => (
              <Dish key={item.id} items={item} />
            ))}
            <div className="mt-8">
              <a
                href="/desserts"
                className="mt-8 border-2 border-slate-800 px-4 py-3 bg-slate-800 text-white rounded-md"
              >
                Découvrir les Desserts
              </a>
              <a
                href="/panier"
                className="mt-8 border-2 border-slate-800 px-4 py-3 bg-slate-800 text-white rounded-md ml-8"
              >
                Consulter mon panier
              </a>
            </div>
          </div>
          {/* Hello */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dishes;
