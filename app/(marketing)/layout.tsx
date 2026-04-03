
export const metadata = {
title: "Next.js Marketing Layout",
description: "This is the marketing layout for the app.",
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
