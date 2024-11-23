import React, { useState, useEffect } from "react";
import JewelleryForm from "./JewelleryForm";
import GemstoneForm from "./GemstoneForm";
import RudrakshForm from "./RudrakshForm";
import WatchForm from "./WatchForm";

const AddItems = ({ handleSave, selectedItemType, handleClose }) => {
  const [formData, setFormData] = useState(null);

  // Reset form data when item type changes
  useEffect(() => {
    setFormData(null);
  }, [selectedItemType]);

  // Handle the save action
  const handleSaveData = (data) => {
    console.log("Final data received in AddItems:", data);
    handleSave(selectedItemType, data); // Pass selected type and data to parent
    handleClose(); // Close form after save
  };

  const handleFormDataChange = (formData) => {
    setFormData(formData);
    console.log("Mid-process form data:", formData);
  };

  // Render the correct form based on the selected item type
  const renderForm = () => {
    switch (selectedItemType) {
      case "Jewellery":
        return (
          <JewelleryForm
            onFormDataChange={handleFormDataChange}
            handleSave={handleSaveData}
          />
        );
      case "Gemstone":
        return (
          <GemstoneForm
            onFormDataChange={handleFormDataChange}
            handleSave={handleSaveData}
          />
        );
      case "Rudraksh":
        return (
          <RudrakshForm
            onFormDataChange={handleFormDataChange}
            handleSave={handleSaveData}
          />
        );
      case "Watch":
        return (
          <WatchForm
            onFormDataChange={handleFormDataChange}
            handleSave={handleSaveData}
          />
        );
      default:
        return <p>Please select an item type to add.</p>;
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        {selectedItemType ? `Add New ${selectedItemType}` : "Add New Item"}
      </h2>
      <div className="card">
        <div className="card-body">
          {renderForm()}
        </div>
      </div>
    </div>
  );
};

export default AddItems;
