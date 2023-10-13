import Navbar from "../components/Navbar";
import Dish from "../components/Dish";
import Footer from "../components/Footer";

const desserts = [
  {
    id: 3,
    name: "Gateau au chocolat",
    price: 7.8,
    ingredients: ["chocolat", "cacao", "framboise", "fraise", "chantille"],
    ChoiceTypeImg: "dessert.png",
    img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2003&q=80",
  },
  {
    id: 4,
    name: "Gâteau à la framboise",
    price: 5.7,
    ingredients: ["framboise", "crème", "chantille"],
    ChoiceTypeImg: "dessert.png",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
  },
];

const Desserts = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 mt-5">
        <div className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <h1 className="text-3xl mb-8">
              Sélection Gourmande du Jour : Laissez-vous Surprendre !
            </h1>
            {desserts.map((item) => (
              <Dish key={item.id} items={item} />
            ))}
            <div className="mt-8">
              <a
                href="/plats"
                className="mt-8 border-2 border-slate-800 px-4 py-3 bg-slate-800 text-white rounded-md"
              >
                Revenir sur les Plats
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

export default Desserts;
