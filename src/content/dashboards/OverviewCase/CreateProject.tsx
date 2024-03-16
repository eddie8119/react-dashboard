import { useState, FormEvent, FC } from 'react';

interface FormProps {
  handleSubmitAddProject: (
    name: string,
    number: string,
    category: string,
  ) => void;
}

const CreateProject: FC<FormProps> = ({ handleSubmitAddProject }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSubmitAddProject(name, number, category);

    setName('');
    setNumber('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[300px] flex-col gap-3 bg-box-bg"
    >
      <h3>創建專案</h3>
      <label>
        專案名稱:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        專案編號:
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>

      <input type="submit" value="創建" />
    </form>
  );
};

export default CreateProject;
