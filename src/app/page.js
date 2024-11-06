import Heading from "@/components/Heading";
import TodoLogic from "@/components/TodoLogic";

export default function Home() {
  return (
    <main className='bg-white w-full min-h-screen py-10'>
      <Heading />
      <TodoLogic />
    </main>

  );
}
