const TableActions = ({
  onView,
  onEdit,
  onDelete
}) => {

  return (

    <div className="table-actions">

      <button
        className="btn-view"
        onClick={onView}
      >
        Ver
      </button>

      <button
        className="btn-edit"
        onClick={onEdit}
      >
        Editar
      </button>

      <button
        className="btn-delete"
        onClick={onDelete}
      >
        Excluir
      </button>

    </div>

  );
};

export default TableActions;