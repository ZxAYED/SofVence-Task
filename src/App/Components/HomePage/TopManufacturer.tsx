// components/TopRatedManufacturers.jsx
// import ManufacturerCard from "./ManufacturerCard";

import ManufacturerCard from "./ManufacturerCard";

const manufacturers =[
  {
    id: 1,
    shopName: "Samsung Electronics",
    name: "Samsung",
    rating: 4.9,
    totalReviews: 1200,
    images: [
      "https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-s24/gallery/in-galaxy-s24-s921-5g-sm-s921bzajins-thumb-538611066",
      "https://images.samsung.com/is/image/samsung/p6pim/in/galaxy-tab-s9/gallery/in-tab-s9-wifi-sm-x710nzaainu-thumb-537858171",
      "https://images.samsung.com/is/image/samsung/p6pim/in/smart-tv-qled/gallery/in-qled-q70c-qn55q70cawkxxl-thumb-536765496",
      "https://images.samsung.com/is/image/samsung/p6pim/in/refrigerator-rt37/thumb-531768917"
    ]
  },
  {
    id: 2,
    shopName: "Apple Store",
    name: "Apple",
    rating: 4.8,
    totalReviews: 1500,
    images: [
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692826751971",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-13-15-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684340883013",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-ultra2-202309?wid=600&hei=600&fmt=jpeg&qlt=90&.v=1692825542411",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-finish-select-202207?wid=470&hei=556&fmt=png-alpha&.v=1661373028815"
    ]
  },
  {
    id: 3,
    shopName: "Sony Corporation",
    name: "Sony",
    rating: 4.7,
    totalReviews: 980,
    images: [
      "https://www.sony-asia.com/image/0ff0a5fcbff1bb6e3aaea1b6f2fa14d0?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
      "https://www.sony-asia.com/image/cefc44e51bdc94a295a86e73a6ff27fa?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
      "https://www.sony-asia.com/image/038efc1d7c576e620e4a4e18cdd616e1?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
      "https://www.sony-asia.com/image/933aeea1058c5f4a1466ee12130bc360?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
    ]
  },
  {
    id: 4,
    shopName: "LG Electronics",
    name: "LG",
    rating: 4.6,
    totalReviews: 875,
    images: [
      "https://www.lg.com/in/images/washing-machines/md07514366/gallery/FHM1207SDM-Washing-Machines-Front-View-D-01.jpg",
      "https://www.lg.com/in/images/tvs/md07503550/gallery/43UR7500PSC-DZ-01.jpg",
      "https://www.lg.com/in/images/refrigerators/md07518153/gallery/GL-T322RPZY-Refrigerators-Front-View-D-01.jpg",
      "https://www.lg.com/in/images/air-conditioners/md07518723/gallery/PS-Q19WNZF-Air-Conditioners-Front-View-D-01.jpg"
    ]
  }
]
;

const TopRatedManufacturers = () => {
  return (
    <section className="py-10 max-w-[1520px] !mx-auto">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-start">Top Rated Manufacturers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8">
          {manufacturers.map((mfg) => (
            <ManufacturerCard
              key={mfg.id}
              name={mfg.name}
              shopName={mfg.shopName}
              image={mfg.images}
              rating={mfg.rating}
              totalReviews={mfg.totalReviews}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


export default TopRatedManufacturers;