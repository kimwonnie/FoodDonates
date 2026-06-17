import "./DataTable.css";
import TableActions from "./TableActions";

const DataTable = ({
  columns,
  data,
  onView,
  onEdit,
  onDelete
}) => {
  return (
    <div className="table-container">

      <table>

        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>
                {column}
              </th>
            ))}

            <th>Ações</th>
          </tr>
        </thead>

        <tbody>

          {data.map((item) => (

            <tr key={item._id}>

              {Object.values(item)
                .slice(1)
                .map((value, index) => (
                  <td key={index}>
                    {value}
                  </td>
                ))}

              <td>

                <TableActions
                  onView={() => onView(item)}
                  onEdit={() => onEdit(item)}
                  onDelete={() => onDelete(item)}
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default DataTable;