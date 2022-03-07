import { feeds } from "./data/feed";
import FeedTile from "./components/feed/feed-tile";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-4">
        {
          feeds.map(feed => {
            return (
              <FeedTile 
                key={feed.id}
                name={feed.name}
                imageUrl={feed.imageUrl}
                alt={feed.alt}
                description={feed.description}
                />
            )

          })
        }
      </div>
    </>
  );
}

export default App;
