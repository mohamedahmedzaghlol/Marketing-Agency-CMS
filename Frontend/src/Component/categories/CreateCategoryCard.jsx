import './CreateCategoryCard.css';
import Icon22 from '../../assets/Icon22.png';

function CreateCategoryCard({ onClick }) {
  return (
    <div className="create-category-card" onClick={onClick}>
      <div className="create-category-card__icon-wrap">
        <img src={Icon22} alt="Create" width="28" height="28" />
      </div>
      <h3 className="create-category-card__title">Create Category</h3>
      <p className="create-category-card__sub">Setup a new organizational bucket</p>
    </div>
  );
}

export default CreateCategoryCard;