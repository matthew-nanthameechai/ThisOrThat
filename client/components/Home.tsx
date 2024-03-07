import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <div className="header" >
        <h1><Link to="/">Home</Link></h1>
      </div>
    </>
  )
}

export default Home
