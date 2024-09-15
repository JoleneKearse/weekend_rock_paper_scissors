export const Header = () => {
  return (
    <header className="m-8 flex justify-between items-center border rounded-sm md:mx-28 lg:mx-96">
      <h1 className="w-12 leading-[.95rem] text-xl p-6">Rock Paper Scissors</h1>
      <div className="m-3 w-20 h-[72px] bg-gradient-to-b from-neutral-200 to-neutral-100 rounded-sm flex flex-col items-center justify-center">
        <h2 className="text-blue-200">Score</h2>
        <p className="text-[#565468] text-4xl" id="score">12</p>
      </div>
    </header>
  )
}