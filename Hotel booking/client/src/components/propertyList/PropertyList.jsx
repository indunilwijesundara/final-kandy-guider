import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
   "https://cf.bstatic.com/xdata/images/hotel/square200/213931482.webp?k=8f9d04c364dc144651b1888246bc70e31548dbe4227c4a74ea528d4aab4dd9f1&o=",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/cb/7f/f6/randholee-resort-spa.jpg?w=300&h=300&s=1",
    "https://cf.bstatic.com/images/hotel/max1024x768/465/465534370.jpg",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/217446288.jpg?k=44c6eb2ba7e4f98742dae559f6c1fa70b71353ac06e2b7a731d2cd0ecbe9b82c&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/342902031.jpg?k=59ebb46e8a1c7be762c0b6022993956cfac1fecfee1f055e2d02f9ace8cbde04&o=&hp=1",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
