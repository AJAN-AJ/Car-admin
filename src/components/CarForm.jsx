import { useState } from "react";

function CarForm({ onAdd }) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData for file upload
    const formData = new FormData();
    formData.append("brand", brand);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("price", price);

    // Append multiple files
    for (let i = 0; i < photos.length; i++) {
      formData.append("photos", photos[i]);
    }

    onAdd(formData);

    setBrand("");
    setModel("");
    setYear("");
    setPrice("");
    setPhotos([]);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">Add New Car</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="file"
          multiple
          onChange={(e) => setPhotos(e.target.files)}
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Car
      </button>
    </form>
  );
}

export default CarForm;
