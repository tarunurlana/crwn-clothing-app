import './category-item.style.scss';

function CategoryItem({category}) { 
    const { imageUrl, title } = category;
    return (
      <div className="category-container">
        <div
          className="background-img"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="category-body">
          <h1> {title} </h1>
          <p>Shop Now</p>
        </div>
      </div>
    );

};

export default CategoryItem;