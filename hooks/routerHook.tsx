"use client";

import { useRouter } from "next/navigation";

export function useRouterHook() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return { goBack };
}