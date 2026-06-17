import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <div className="logo">
        Plataforma Solidária
      </div>

      <nav>

        <a href="/dashboard">Dashboard</a>

        <a href="/families">Famílias</a>

        <a href="/ongs">ONGs</a>

        <a href="/donations">Doações</a>

        <a href="/deliveries">Entregas</a>

        <a href="/users">Usuários</a>

        <a href="/reports">Relatórios</a>

        <a href="/settings">Configurações</a>

      </nav>

    </aside>
  );
};

export default Sidebar;