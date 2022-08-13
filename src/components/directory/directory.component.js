import DirectoryItem from "../directory-item/directory-item.component";

import { CategoriesContainer } from "./directory.styles";

const Directory = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </CategoriesContainer>
  );
};

export default Directory;
