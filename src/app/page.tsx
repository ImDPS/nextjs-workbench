import { MainLayout } from "@/components/layout/MainLayout";
import { RenderTable } from "@/components/RenderTable";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold">Home</h1>
      <RenderTable />
      {/* <Image
        src="/images/nextjs.svg"
        alt="Next.js logo"
        width={500}
        height={500}
      /> */}
    </MainLayout>
  );
}
