import { Button } from "./components/Button"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <Button text="Rules" onClick={console.log("clicked")} className="hover:bg-neutral-100 hover:text-neutral-800" />
      <Button text="Play Again" onClick={console.log("clicked")} className="bg-neutral-100 text-neutral-800 hover:text-red-100" />
    </>
  )
}

export default App
