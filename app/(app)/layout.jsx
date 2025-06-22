const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-56px)] bg-gray-600 relative">
      <main className="flex flex-col items-center justify-center w-full gap-4 overflow-y-scroll p-10">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
