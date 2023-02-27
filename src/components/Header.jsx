

const Header = ({title, image, children}) => {
  return (
    <header className="header">
      <div className="headertocontainer">
        <div className="headertocontainer-bg">
          <img src={image} alt="Header BG Image" />
        </div>
        <div className="headertocontent">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
