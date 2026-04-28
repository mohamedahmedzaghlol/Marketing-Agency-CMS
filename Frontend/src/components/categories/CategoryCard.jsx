
import './CategoryCard.css';

function CategoryCard({ category }) {
  const { name, slug, postCount, icon } = category;

  return (
    <div className="category-card">
      <div className="category-card__icon-wrap">
        <img src={icon} alt={name} width="18" height="18" />
      </div>
      <h3 className="category-card__name">{name}</h3>
      <p className="category-card__slug">{slug}</p>
      <div className="category-card__footer">
        <span className="category-card__post-label">Post Count</span>
        <span className="category-card__badge">{postCount}</span>
      </div>
    </div>
  );
}

export default CategoryCard;