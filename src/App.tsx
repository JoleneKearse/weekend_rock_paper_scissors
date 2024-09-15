import { Action } from "./components/Action"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <Action img={"/paper.svg"} className="bg-blue-100 shadow-[0_6px_0_#2A45C2]" />
      <Action img={"/rock.svg"} className="bg-red-100 shadow-[0_6px_0_#9D1634]" />
      <Action img={"/scissors.svg"} className="bg-yellow-100 shadow-[0_6px_0_#C76C1B]" />
    </>
  )
}

export default App
