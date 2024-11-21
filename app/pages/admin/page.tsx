import Card1 from "./dashboard/components/Card1"
import Card2 from "./dashboard/components/Card2"
import Card3 from "./dashboard/components/Card3"

export default function Dashboard() {
  return (
    <main className="flex flex-col gap-[1rem]">
      <h1 className="text-xl">Dashboard</h1>
      
      <div className="flex items-center gap-[1rem] flex-wrap">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </main>
  )
}
