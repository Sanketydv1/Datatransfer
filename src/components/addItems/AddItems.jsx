import React, { useState, useEffect } from "react";
import JewelleryForm from "./JewelleryForm";
import GemstoneForm from "./GemstoneForm";
import RudrakshForm from "./RudrakshForm";
import WatchForm from "./WatchForm";

const AddItems = ({ handleSave, selectedItemType, handleClose }) => {
  const [formData, setFormData] = useState(null);
  const [gemstoneData, setGemstoneData] = useState(null);

  // Reset form data when item type changes
  useEffect(() => {
    setFormData(null);
    setGemstoneData(null);
  }, [selectedItemType]);

  // Handle the save action
  const handleSaveData = (data) => {
    const finalData = {
      ...data,
      gemstone: gemstoneData, // Add gemstone data to final data
    };
    console.log("Final data received in AddItems:", finalData);
    handleSave(selectedItemType, finalData); // Pass selected type and data to parent
    if (handleClose) handleClose(); // Close form after save, if handleClose exists
  };

  const handleGemstoneData = (gemstoneData) => {
    setGemstoneData(gemstoneData);
    console.log("Gemstone data received in AddItems:", gemstoneData);
  };

  const handleFormDataChange = (formData) => {
    setFormData(formData);
    console.log("Current form data:", formData);
  };

  // Render the correct form based on the selected item type
  const renderForm = () => {
    switch (selectedItemType) {
      case "Jewellery":
        return (
          <JewelleryForm
            onFormDataChange={handleFormDataChange}
            handleSave={handleSaveData}
            handleClose={handleClose} // Pass handleClose to the form
          />
        );
      case "Gemstone":
        return (
          <GemstoneForm
            onFormDataChange={handleFormDataChange}
            handleSave={handleSaveData}
            handleClose={handleClose} // Pass handleClose to the form
          />
        );
      case "Rudraksh":
        return (
          <RudrakshForm
            onFormDataChange={handleFormDataChange}
            handleSave={handleSaveData}
            handleClose={handleClose} // Pass handleClose to the form
          />
        );
      case "Watch":
        return (
          <WatchForm
            onFormDataChange={handleFormDataChange}
            handleSave={handleSaveData}
            handleClose={handleClose} // Pass handleClose to the form
            handleGemstoneData={handleGemstoneData} // Pass gemstone handler to WatchForm
          />
        );
      default:
        return <p>Please select an item type to add.</p>;
    }
  };

  return (
    <div className="container mt-5">
      <div className="position-relative">
        <h2 className="text-center mb-4">
          {selectedItemType ? `Add New ${selectedItemType}` : "Add New Item"}
        </h2>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="btn btn-danger position-absolute"
          style={{
            top: '1px',
            right: '1px',
            padding: '0', // Remove padding for a compact icon
            fontSize: '40px', // Increase font size for a larger cross
            backgroundColor: 'transparent', // Remove background
            border: 'none', // Remove border
            color: 'gray', // Set color to red for the close icon
            cursor: 'pointer',
          }}

        >
          &times; {/* Larger cross icon */}
        </button>


        <div className="card">
          <div className="card-body">
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
