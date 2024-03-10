import { useState, FormEvent, FC } from "react";

interface FormProps {
  handleSubmitAddProject: (name: string, number: string) => void;
}

const CreateProject: FC<FormProps> = ({ handleSubmitAddProject }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("name", name);
    handleSubmitAddProject(name, number);

    setName("");
    setNumber("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-[300px] bg-box-bg"
    >
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
