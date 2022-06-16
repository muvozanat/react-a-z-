import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Qidiruv"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue={"Saralash"}
        options={[
          { value: "title", name: "Ism bo'yicha" },
          { value: "body", name: "Ma'lumot bo'yicha" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
