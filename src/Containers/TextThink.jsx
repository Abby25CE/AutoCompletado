import { useRef, useState } from "react";
import YoAsset from "../assets/Yo.jpeg";
import getActiveToken from "../Utils/GetToken.js";
import { useSearchBox } from "react-instantsearch";
import Autocomplete from "./Autocomplete.jsx";

export const ThextThink = () => {
  const inputRef = useRef();
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const { search } = useSearchBox();
  console.log("TextThink");

  const handleInput = () => {
    const { value, selectionEnd = 0 } = inputRef.current;

    const { word } = getActiveToken(value, selectionEnd);
    const shoulOpenAutocomplete = /^@\w{1,15}$/.test(word);
    setShowAutocomplete(shoulOpenAutocomplete);
    shoulOpenAutocomplete && search(word.slice(1));
    console.log("HandleInput");
  };

  return (
    <main className="w-100% flex justify-center ">
      <section className="flex flex-col items-center justify-center w-5/12 mt-5 border-2 rounded-2xl border-slate-500 bg-slate-800 ">
        <div className="p-5">
          <div className="flex items-start justify-start gap-x-3 w-96">
            <figure className="">
              <img
                className="rounded-full"
                src={YoAsset}
                alt="Perfil"
                width={50}
              />
            </figure>

            <div className="">
              <form>
                <textarea
                  placeholder="¿Qué estás pensando?"
                  className="w-[20rem] bg-transparent h-[7rem] resize-none bg-slate-800 text-white
                  focus:outline-offset-[2px] focus:outline-none "
                  onKeyUp={handleInput}
                  ref={inputRef}
                  onClick={() => {}}
                />
              </form>

              {showAutocomplete && (
                <>
                  {console.log("Autocomplete llamada")}
                  <Autocomplete />
                </>
              )}
            </div>
          </div>
          <hr className=" border-slate-300 w-[30rem]" />
          <footer className="flex items-end justify-end p-5 ">
            <button
              type="submit"
              className="px-2 py-1 text-white bg-blue-500 border-2 border-blue-500 hover:bg-blue-300 hover:border-solid hover:border-2 hover:border-blue-100 focus:border-blue-500 rounded-xl "
            >
              Twittear
            </button>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default ThextThink;
