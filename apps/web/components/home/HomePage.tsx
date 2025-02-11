import { redirect } from "next/navigation";

export const HomePage = async () => {
  redirect("/customer");
};
