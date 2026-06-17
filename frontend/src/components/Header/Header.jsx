import "./Header.css";

const Header = () => {
  return (

    <header className="header">

      <input
        type="text"
        placeholder="Pesquisar..."
      />

      <div className="profile">

        <img
          src="/avatar.png"
          alt="Avatar"
        />

        <span>
          Administrador
        </span>

      </div>

    </header>

  );
};

export default Header;