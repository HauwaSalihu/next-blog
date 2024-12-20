import NewsList from "@/components/news/NewsList";

export default function Home() {
  return (
    <section className="container mx-auto p-2">
      <div className="text-center my-10 max-w-[900px] mx-auto">
        <h1 className="text-5xl font-bold ">Welcome to my blog website</h1>
        <p className="mt-5 text-xl font-light text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          libero voluptates exercitationem architecto dolorem! Architecto non
          dolorem similique magnam blanditiis laborum, quas, iusto tempore
          veritatis corrupti libero, at est. Distinctio?
        </p>
      </div>
      <NewsList />
    </section>
  );
}
