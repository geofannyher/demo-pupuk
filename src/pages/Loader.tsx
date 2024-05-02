import ai from "../assets/ai.jpg";
const LoadingComponent = () => {
  return (
    <>
      <div className="flex items-end gap-2">
        <div className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 text-black lg:h-10 lg:w-10">
          <img
            src={ai}
            className="h-10  border-2 w-10 items-center justify-center rounded-full object-cover"
          />
        </div>
        <div className="loader"></div>
      </div>
    </>
  );
};

export default LoadingComponent;
