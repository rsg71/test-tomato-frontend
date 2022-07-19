import Masonry from 'react-masonry-css'


export default function MasonryComp() {

    

    const sources = [
        "/images/Tomato/bowl_green.jpg",
        "/images/Tomato/fruits.jpg",
        "/images/Tomato/ice_cream.jpg",
        "/images/Tomato/pancakes.jpg",
        "/images/Tomato/pasta_salad.jpg",
        "/images/Tomato/salad.jpg",
        "/images/Tomato/steak.jpg",
    ]

    

    return (
        <div>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}
                {sources.map((item, index) => (
                        <img key={sources[index]} src={sources[index]} alt="blah" className="myImageClass"/>
                ))}
            </Masonry>
        </div>
    )
}
