const NewsCard = ({ title, description, url }) => {
    return (
      <div className="border p-4 rounded-md shadow-lg">
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Read More
        </a>
      </div>
    );
  };
  
  export default NewsCard;
  