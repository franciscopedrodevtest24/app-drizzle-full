import Todos from "@/components/todos";
import { getData } from "@/repository/todo";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}
