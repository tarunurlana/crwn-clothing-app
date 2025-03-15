import CategoryItem from '../category-item/category-item.component';
import './main-menu.style.scss';

function MainMenu({categories}) {
  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryItem key={item.id} category={item}></CategoryItem>
      ))}
    </div>
  );
}

export default MainMenu;
