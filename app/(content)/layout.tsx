import MainHeader from "@/components/MainHeader/MainHeader";
import { ReactNode } from "react";

export const metadata = {
  title: "Next.js Content Layout",
  description: "This is the content layout for the app.",
};

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div id="page">
      <MainHeader />
      {children}
    </div>
  );
}
