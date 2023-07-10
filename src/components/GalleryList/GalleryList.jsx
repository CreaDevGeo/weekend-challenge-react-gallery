// - IMPORTS -
import GalleryItem from "../GalleryItem/GalleryItem.jsx";

// - COMPONENT FUNCTION -
function GalleryList({ galleryList, getGalleryList }) {
  return (
    <>
      {galleryList.map((galleryItem) => {
        /* galleryItem = {
                id:
                path:
                description:
                likes:
            } */

        {
          /* Returning a component that will use 
            galleryItem and getGalleryList as props */
        }
        return <GalleryItem key={galleryItem.id} galleryItem={galleryItem} getGalleryList={getGalleryList}/>;
      })}
    </>
  );
} // end GalleryList

// - EXPORTING COMPONENT -
export default GalleryList;
