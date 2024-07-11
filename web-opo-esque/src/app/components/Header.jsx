import "../components/Header.css"

export default function Header({ url }) {
  return (
    <>
      <header className="Header">
        <span className="Logo">
          <img src={url} />
        </span>
        <div className="Title">
          <h1>Esquemas Oposiciones</h1>
        </div>
      </header>
    </>
  )
}
