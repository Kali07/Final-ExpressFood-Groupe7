import { PlusIcon, UserIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../reducers/userSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(userLoggedOut());
  };
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 w-full overflow-hidden">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden"></div>
            <div className="flex flex-shrink-0 items-center">
              <a href="/" className="h-8 w-auto text-2xl">
                Express <span className="font-semibold">Food</span>
              </a>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8"></div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {user ? (
                <a
                  href="/mon-compte"
                  type="button"
                  className="relative inline-flex items-center gap-x-1.5 rounded-full bg-slate-900 px-5 py-4 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-4"
                >
                  Mon Compte
                </a>
              ) : (
                <a
                  href="/connexion"
                  type="button"
                  className="relative inline-flex items-center gap-x-1.5 rounded-full bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-4"
                >
                  <UserIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                  Connexion
                </a>
              )}
              {user ? (
                <a
                  href="/inscription"
                  type="button"
                  className="relative inline-flex items-center gap-x-1.5 rounded-full bg-red-900 px-5 py-4 text-sm font-semibold text-slate-50 shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleChange}
                >
                  Déconnexion
                </a>
              ) : (
                <a
                  href="/inscription"
                  type="button"
                  className="relative inline-flex items-center gap-x-1.5 rounded-full bg-slate-900 px-5 py-4 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                  Inscription
                </a>
              )}
            </div>
            <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}
