interface NewsCardItems {
  news_image: string;
  news_title: string;
  news_description: string;
  news_publisher: string;
  news_publishedAt: string;
  news_details_url: string;
}

function NewsCard(props: NewsCardItems) {
  return (
    <div className="border p-2">
      <img
        className="rounded-md w-full h-[200px]"
        src={props.news_image}
        alt={props.news_title}
      />
      <h2 className="text-lg font-semibold my-4">
        <a href={props.news_details_url} target="_blank">
          {props.news_title}
        </a>
      </h2>
      <p className="text-gray-500 font-light">{props.news_description}</p>
      <div className="flex justify-between my-2">
        <p className="text-sm font-semibold">{props.news_publisher}</p>
        <p className="text-sm font-semibold tracking-wide">
          {new Date(props.news_publishedAt).toDateString()}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
