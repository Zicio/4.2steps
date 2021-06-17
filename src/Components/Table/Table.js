import Form from "../Form/Form";
import { nanoid } from "nanoid";
import { useState } from "react";

const Table = () => {
  const [table, setTable] = useState([]);

  console.log(table);

  const onAddToTable = (form) => {
    setTable((table) => [
      ...table,
      {
        id: nanoid(),
        date: form.date,
        km: form.km,
      },
    ]);
  };

  const onDeleteItem = (id) => {
    console.log(id);

    const newTable = table.filter((item) => item.id !== id);

    setTable(newTable);
  };

  const onEditItem = (e) => {
    console.log(e);
  };

  return (
    <>
      <Form onAddToTable={onAddToTable} />
      <div className="table">
        <table>
          <tbody>
            {table.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.km}</td>
                <td>
                  {" "}
                  <button onClick={onEditItem}>edit</button>{" "}
                </td>
                <td>
                  {" "}
                  <button onClick={() => onDeleteItem(t.id)}>x</button>
                </td>
              </tr>
            )).sort().reverse()}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
