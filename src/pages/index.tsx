import { Roboto } from "next/font/google";
import { AddItem, CompletedTodos, UncompletedTodos } from "@/components/todo";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    // The main container of the to-do list page
    <main
      className={`flex min-h-screen flex-col p-4 md:p-10 lg:p-24 ${roboto.className}`}
    >
      <h2 className="font-bold text-2xl md:text-3xl md:font-extrabold capitalize lg:text-4xl">
        To do List
      </h2>

      {/* The completed and uncompleted to-do list items */}
      <CompletedTodos />
      <UncompletedTodos />

      {/* The "Add Item" button that sticks to the bottom of the screen on small screens */}
      <div className="fixed sm:block bottom-0 md:static w-full pr-4 md:pr-0 my-4">
        <AddItem />
      </div>
    </main>
  );
}
