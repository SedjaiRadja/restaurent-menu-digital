const Header = () => {
  return (
    <div
      className="relative mx-auto mt-6 h-[70vh] min-h-[500px] w-[90%] max-w-[1900px] rounded-[50px] bg-cover bg-center"
      style={{ backgroundImage: "url('/restau2.jpg')" }}
    >
      <div className="absolute bottom-[2%] left-[2vw] flex max-w-[50%] flex-col gap-[1.5vw]">
        <h1 className="text-[80px] font-bold text-[rgb(240,85,13)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          Welcome to your new favorite restaurant
        </h1>

        <p className="text-[50px] font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          Here you can find the best food ever.
        </p>
      </div>
    </div>
  );
};

export default Header;