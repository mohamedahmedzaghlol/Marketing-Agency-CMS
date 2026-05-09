import CardItem from "./CardItem";
import posts from "../data/posts";

export default function CardList() {
  return (
    <div className="container">
      <div className="row">
        {posts.map((post, index) => (
          <CardItem key={index} post={post} />
        ))}
      </div>
    </div>
  );
}