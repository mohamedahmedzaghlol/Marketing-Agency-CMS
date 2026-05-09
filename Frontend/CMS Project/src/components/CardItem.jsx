export default function CardItem({ post }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={post.image} className="card-img-top" alt={post.title} />

        <div className="card-body">
          <span className="badge bg-warning text-dark mb-2">
            {post.category}
          </span>

          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>

          <button className="btn btn-warning btn-sm">Read More</button>
        </div>

        <div className="card-footer text-muted">
          {post.date}
        </div>
      </div>
    </div>
  );
}