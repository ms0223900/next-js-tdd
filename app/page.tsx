import { redirect } from "next/navigation";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  // redirect to home page
  redirect('/home');
}
