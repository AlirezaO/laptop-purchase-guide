const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-56px)] bg-gray-600 relative">
      {children}
    </div>
  );
};

export default AppLayout;
