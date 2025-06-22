"use server";

import { redirect } from "next/navigation";

export async function handleSearch(formData) {
  const searchQuery = formData.get("search");

  if (!searchQuery) {
    redirect("/");
  }

  // Only use server-side redirect if we need to update the URL with search params
  redirect(`/?search=${encodeURIComponent(searchQuery)}`);
}
