import { handleLogout } from "@/app/actions/auth";
import { cn } from "@/lib/utils";

export default function LogoutButton({ className, ...props }) {
  return (
    // <form
    //   action={handleLogout}
    //   className={cn(
    //     className,
    //     "w-full text-left cursor-pointer hover:bg-red-400 focus:bg-red-400 focus-visible:bg-red-400 active:bg-red-400"
    //   )}
    // >
    <button
      onClick={handleLogout}
      type="submit"
      className="w-full text-left cursor-pointer hover:bg-red-400 focus:bg-red-400 focus-visible:bg-red-400 active:bg-red-400"
      {...props}
    >
      Logout
    </button>
    // </form>
  );
}
