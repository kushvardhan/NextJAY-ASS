"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();

  return <div>page {params.id}</div>;
}
