import FloatingIcon from "@/components/custom_components/FloatingIcon";

const AppLayout = ({ children }) => {
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-[calc(100vh-56px)] gap-4 overflow-y-scroll p-10 bg-gray-600 relative">
      {children}
      <FloatingIcon />
    </main>
  );
};

export default AppLayout;
