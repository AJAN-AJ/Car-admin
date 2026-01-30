function CarList({ cars, onDelete }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Cars</h2>

      <div className="space-y-4">
        {cars.map((car) => {
          const mainPhoto = car.photos?.find(p => p.isMain);

          return (
            <div
              key={car.id}
              className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg"
            >
              {/* Car Image */}
              <div className="w-24 h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                {mainPhoto ? (
                  <img
                    src={mainPhoto.url}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                    No image
                  </div>
                )}
              </div>

              {/* Car Info */}
              <div className="flex-1">
                <p className="font-semibold">
                  {car.brand} {car.model}
                </p>
                <p className="text-sm text-gray-600">
                  {car.year} • MWK{car.price}
                </p>
              </div>

              {/* Actions */}
              <button
                onClick={() => onDelete(car.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CarList;
