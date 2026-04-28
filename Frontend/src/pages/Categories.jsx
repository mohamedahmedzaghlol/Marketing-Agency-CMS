import './Categories.css';
import CategoryCard from '../components/categories/CategoryCard';
import { categoriesData } from '../components/data/categoriesData';
import Icon9 from '../assets/Icon (9).png';

function Categories() {
  return (
    <div className="categories-page">
      <div className="categories-page__header">
        <div>
          <h2 className="categories-page__title">Categories</h2>
          <p className="categories-page__subtitle">
            Manage content taxonomy and hierarchies.
          </p>
        </div>
        <button className="categories-page__add-btn">
          <img src={Icon9} alt="" width="12" height="12" />
          Add New Category
        </button>
      </div>

      <div className="categories-page__grid">
        {categoriesData.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Categories;