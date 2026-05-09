export default function Filter() {
  const categories = ["All Posts", "Hatchback Cars", "SUV Cars", "Sedan Cars", "Sports Cars"];

  return (
    <div className="container my-4 text-center">
      {categories.map((cat, index) => (
        <button key={index} className="btn btn-outline-secondary mx-1">
        
          {cat}
        </button>
      ))}
    </div>
  );
}