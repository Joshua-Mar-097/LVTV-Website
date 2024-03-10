function Home()  {
  return (
    <div className="px-10">
      <div className="divide-y-8 divide-yellow-400 px-10 text-white">
        <div className="flex justify-center mx-auto p-20">
          <div className="mx-auto flex justify-center flex flex-col space-x-80">
            <div>
              <h1 className="text-4xl">LV.TV</h1><br/>
              <h2 className="text-2xl">Lorem, ipsum dolor sit <br />
              amet consectetur <br />
              adipisicing elit.</h2>
            </div>
          </div>
          <div className="mx-auto flex rounded-sm w-1/2 h-96 bg-white shadow p-20 hover:shadow-lg">
          </div>
        </div>
        <div className="p-20 flex justify-center">
          <div>
            <h1 className="text-2xl">About LV.tv</h1><br />
            <p className="indent-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tortor nisl, dictum id pulvinar ut, fringilla
            bibendum elit. Morbi auctor lectus erat,
            a interdum magna lobortis vitae. Donec sapien purus, mattis id sollicitudin in, dapibus volutpat elit. Quisque sed dignissim urna. Interdum et malesuada 
            fames ac ante ipsum primis in faucibus. Suspendisse blandit pharetra sapien at fringilla. Vivamus sed auctor justo, vel congue orci. Donec vehicula
            congue libero at condimentum. Donec tincidunt arcu non laoreet varius. Nunc hendrerit risus quis vestibulum tempor. Donec eleifend, quam ut rutrum 
            porttitor, urna nibh iaculis leo, eu viverra justo velit vel dolor. Maecenas sed fermentum quam. Curabitur tempor vitae sapien euismod egestas.Aenean 
            ut scelerisque sapien. Curabitur posuere mauris eu felis vehicula tempor. Proin tempus leo mi, in rutrum leo euismod in.</p>
          </div>
        </div>
        <div className="flex justify-center mx-auto p-10">
          <div className="mx-auto flex justify-center flex flex-col space-y-4">
            <h1 className="text-2xl">Schedules & Programs</h1><br/>
            <div className="flex rounded-sm w-96 h-16 bg-white shadow p-10 hover:shadow-lg">
              <h1 className="text-black">Sample</h1>
            </div>
            <div className="flex rounded-sm w-96 h-24 bg-white shadow p-10 hover:shadow-lg">
              <h1 className="text-black">Sample</h1>
            </div>
            <div className="flex rounded-sm w-96 h-24 bg-white shadow p-10 hover:shadow-lg">
              <h1 className="text-black">Sample</h1>
            </div>
          </div> 
          <div className="mx-auto flex justify-center flex flex-col space-y-4">
            <h1 className="text-2xl">Recent Programs</h1><br/>
            <div className="flex rounded-sm w-96 h-24 bg-white shadow p-20 hover:shadow-lg">
            </div>
            <div className="flex rounded-sm w-96 h-24 bg-white shadow p-20 hover:shadow-lg">
            </div>
          </div>
        </div>
        <div className="flex justify-center mx-auto p-20 flex-col">
          <div className="mx-auto flex justify-center flex flex-col space-x-80">
            <div>
              <h1 className="text-4xl">School News and Upcoming Events</h1><br/>
            </div>
          </div>
          <div className="space-y-4">
            <div className="mx-auto flex rounded-sm w-5/6 h-80 bg-white shadow p-20 hover:shadow-lg">
            </div>
            <div className="mx-auto flex rounded-sm w-5/6 h-80 bg-white shadow p-20 hover:shadow-lg">
            </div>
          </div>
        </div>
        <div className="p-20 flex justify-center flex-col">
          <div className="pb-8">
            <h1 className="text-2xl">We want to hear from you!</h1><br />
            <p className="indent-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tortor nisl, dictum id pulvinar ut, fringilla
            bibendum elit. Morbi auctor lectus erat,
            a interdum magna lobortis vitae. Donec sapien purus, mattis id sollicitudin in, dapibus volutpat elit. Quisque sed dignissim urna. Interdum et malesuada 
            fames ac ante ipsum primis in faucibus. Suspendisse blandit pharetra sapien at fringilla.</p>
          </div>
          <div className="mx-auto flex rounded-sm w-5/6 h-12 bg-white shadow p-2 hover:shadow-lg">
            <h2>Search Archives</h2>
          </div>
        </div>
      </div>
    </div> 
  );
};
export default Home;