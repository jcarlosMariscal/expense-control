export const LogoComponent = () => {
  return (
    <div className="h-10 px-2 flex fixed top-10">
      <div className="size-12 rounded-full color-bg-reverse color-text-reverse relative">
        <span className="text-2xl absolute left-2">Ex</span>
        <span className="text-xs text-right absolute font-bold right-3 bottom-2">
          C
        </span>
      </div>
      <div className="color-text text-center ml-3">
        <span className="block text-2xl md:text-3xl">Expense</span>
        <span className="block text-md md:text-lg text-right">Control</span>
      </div>
    </div>
  );
};
