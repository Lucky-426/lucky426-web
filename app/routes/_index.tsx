import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Lucky 426" },
    { name: "description", content: "Welcome to Lucky 426!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="font-custom text-custom-text text-5xl">Lucky 426</h1>
    </div>
  );
}
