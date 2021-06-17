import { useState } from "react";

const INIT_FORM = {
   
    date: new Date(),
    km: "",
  }

const Form = ({onAddToTable}) => {
  const [form, setForm] = useState(INIT_FORM);
  console.log(form);

  const onFormSubmit = (e) => {
    e.preventDefault();
    onAddToTable(form);
    setForm(INIT_FORM);
    //отправить в табл
  };

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form" >
        <div>
          <label>Дата </label>
          <input
            type="date"
            value={form.date}
            id="date"
            name="date"
            onChange={onFieldChange}
            required
          />
        </div>
        <div>
          <label>Км </label>
          <input 
          value={form.km} 
          id="km" 
          name="km" 
          onChange={onFieldChange} 
          required/>
        </div>
        <button>OK</button>
      </div>
    </form>
  );
};

export default Form;
