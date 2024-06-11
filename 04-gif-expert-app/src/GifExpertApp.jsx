import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories((cat) => [...cat, category]);
  };

  return (
    <>
      {/*Titulo*/}
      <h1>GifExpertApp</h1>

      {/*Input*/}
      <AddCategory onNewValue={onAddCategory} />

      {/*Listado*/}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
