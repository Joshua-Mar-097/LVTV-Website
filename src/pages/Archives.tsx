import Header from "../components/Header";

function Archives() {
  let items = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div>
      <h1 className=" text-4xl">Welcome to the Archives page!</h1>
      <div className="p-20">
        <p className="text-gray-50 text-3xl font-bold flex justify-center">
          Archives
        </p>
        <div className="grid grid-cols-2 ">
          <div className=" justify-content-center">
            <h1 className="text-gray-50 text-2xl font-bold justify-center flex">
              Weekly Broadcast
            </h1>

            {items.length === 0 && <p>No item found</p>}
            <div>
              {
                <ul className="flex flex-col gap-3 justify-items-center p-10 w-80 mx-5">
                  {items.map((item) => (
                    <li className="flex rounded-sm w-100 bg-white shadow p-10 hover:shadow-lg transition delay-100 duration-100 ease-in-out hover:scale-105 transform ">
                      <li className="flex justify-items-center" key={item}>
                        {item}
                      </li>
                    </li>
                  ))}
                </ul>
              }
            </div>
          </div>

          <div className=" gap-2 justify-items-center">
            <h1 className="text-gray-50 text-2xl font-bold  justify-center flex">
              Past Broadcast
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archives;
