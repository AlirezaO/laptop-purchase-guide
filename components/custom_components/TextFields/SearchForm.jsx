import { PlusIcon, SearchCheckIcon } from "lucide-react";
import { handleSearch } from "../../../app/actions/search";
import { SearchResultDisplay } from "../SearchResultDisplay";
import { SubmitButton } from "../Buttons/SubmitButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function SearchForm({ search }) {
  return (
    <div className="flex flex-col gap-2">
      <form action={"/"} className="flex gap-2">
        <input
          type="text"
          name="search"
          className="border-2 border-gray-800 rounded-md p-2 text-gray-800 bg-gray-100 h-44px"
          placeholder={"search"}
          defaultValue={search}
        />
        <Button type="submit" className="submit-button-class">
          Submit
          <SearchCheckIcon />
        </Button>

        {/* <SubmitButton type="submit" /> */}
      </form>

      {/* <SearchResultDisplay /> */}
    </div>
  );
}
