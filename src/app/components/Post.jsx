const Post = ({ post }) => {
  const { title, author, date, image, description, category } = post;

  return (
    <div className="card bg-green-200 flex flex-col gap-4 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-green-800">{title}</h2>

        <p>By {author} on {date}</p>

        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <p>Category: {category}</p>

        <p>{description}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Post;