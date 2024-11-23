import React, { useState } from "react";
import { Table, Button, Container, DropdownButton, Dropdown, Modal, Form, Row, Col } from "react-bootstrap";
import AddItems from "../addItems/AddItems";

const Items = () => {
  const initialData = {
    mainInventory: [
      { srno: 1, items: "Jewellery", number: "4", group: "group A", description: "....", altcode: "Alt-1", types: "jewellery", date: "12/12/2024" },
      { srno: 2, items: "Gemstone", number: "8", group: "group B", description: "....", altcode: "Alt-2", types: "jewellery", date: "13/12/2024", gemstoneDetails: { color: "Red", carat: "2", clarity: "VVS1" } },
      { srno: 3, items: "Watch", number: "1", group: "group C", description: "....", altcode: "Alt-3", types: "electronics", date: "14/12/2024" },
    ],
  };

  const [inventory, setInventory] = useState(initialData.mainInventory);
  const [selectedItemType, setSelectedItemType] = useState("");
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const [filters, setFilters] = useState({
    items: "",
    number: "",
    group: "",
    description: "",
    altcode: "",
    types: "",
    date: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filteredData = inventory.filter((row) => {
    return (
      row.items.toLowerCase().includes(filters.items.toLowerCase()) &&
      row.number.toString().toLowerCase().includes(filters.number.toLowerCase()) &&
      row.group.toLowerCase().includes(filters.group.toLowerCase()) &&
      row.description.toLowerCase().includes(filters.description.toLowerCase()) &&
      row.altcode.toLowerCase().includes(filters.altcode.toLowerCase()) &&
      row.types.toLowerCase().includes(filters.types.toLowerCase()) &&
      row.date.toLowerCase().includes(filters.date.toLowerCase())
    );
  });

  const addEmptyRows = (data, rowCount = 8) => {
    const emptyRow = {
      srno: "",
      items: "",
      number: "",
      group: "",
      description: "",
      altcode: "",
      types: "",
      date: "",
    };

    while (data.length < rowCount) {
      data.push({ ...emptyRow, srno: `` });
    }
    return data;
  };

  const displayedRows = addEmptyRows([...filteredData]);

  const handleShowAddItem = (type) => {
    setSelectedItemType(type);
    setIsAddingItem(true);
  };

  const handleCloseAddItem = () => {
    setIsAddingItem(false);
  };

  const handleSaveNewItem = (type, data) => {
    if (!data) {
      alert("No data to save.");
      return;
    }
    const newItem = { ...data, srno: inventory.length + 1, types: type, date: data.entryDateTime };
    setInventory([...inventory, newItem]);
    console.log('Now data in table ', data)
    alert(`Item saved! Type: ${type}`);
  };

  const handleEditItem = (row) => {
    setCurrentItem(row);
    setIsEditMode(true);
  };

  const handleDeleteItem = (row) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${row.items}?`);
    if (confirmDelete) {
      setInventory(inventory.filter((i) => i.srno !== row.srno));
    }
  };

  const handleItemClick = (row) => {
    setCurrentItem(row);
    setIsEditMode(false);
  };

  const handleModalClose = () => {
    setCurrentItem(null);
    setIsEditMode(false);
  };

  const handleSaveEdit = () => {
    if (currentItem) {
      const updatedInventory = inventory.map((item) => (item.srno === currentItem.srno ? currentItem : item));
      setInventory(updatedInventory);
      alert("Item updated successfully!");
      handleModalClose();
    }
  };

  const renderModalContent = () => {
    if (!currentItem) return null;

    const renderDetails = (item, editable = false) => {
      const entries = Object.entries(item).filter(([key]) => key !== "gemstoneDetails");
      return (
        <Row>
          {entries.map(([key, value], index) => (
            <Col md={6} className="mb-3" key={index}>
              {editable ? (
                <Form.Group>
                  <Form.Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Form.Label>
                  <Form.Control
                    type="text"
                    value={value}
                    onChange={(e) => setCurrentItem({ ...currentItem, [key]: e.target.value })}
                  />
                </Form.Group>
              ) : (
                <>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                </>
              )}
            </Col>
          ))}
        </Row>
      );
    };

    const renderGemstoneDetails = (details, editable = false) => {
      if (!details) return null;
      const entries = Object.entries(details);
      return (
        <>
          <h5 className="mt-4">Gemstone Details</h5>
          <Row>
            {entries.map(([key, value], index) => (
              <Col md={6} className="mb-3" key={index}>
                {editable ? (
                  <Form.Group>
                    <Form.Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Form.Label>
                    <Form.Control
                      type="text"
                      value={value}
                      onChange={(e) =>
                        setCurrentItem({
                          ...currentItem,
                          gemstoneDetails: { ...currentItem.gemstoneDetails, [key]: e.target.value },
                        })
                      }
                    />
                  </Form.Group>
                ) : (
                  <>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                  </>
                )}
              </Col>
            ))}
          </Row>
        </>
      );
    };

    return isEditMode ? (
      <Form>
        {renderDetails(currentItem, true)}
        {renderGemstoneDetails(currentItem.gemstoneDetails, true)}
        <Button variant="primary" onClick={handleSaveEdit}>
          Save
        </Button>
      </Form>
    ) : (
      <>
        {renderDetails(currentItem)}
        {renderGemstoneDetails(currentItem.gemstoneDetails)}
      </>
    );
  };

  const renderTable = (data) => {
    return (
      <div style={{ maxHeight: "400px", overflowY: "auto" }}>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {["Sr.no", "Items", "number", "Group", "Description", "Alternative Code", "Types", "Date"].map((header, idx) => (
                <th key={idx}>
                  {header}
                  <input
                    type="text"
                    name={header.toLowerCase().replace(/ /g, "")}
                    value={filters[header.toLowerCase().replace(/ /g, "")]}
                    onChange={handleFilterChange}
                    placeholder="Filter"
                    style={{ width: "100%" }}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.srno}</td>
                <td>
                  <Button variant=" " className="text-primary" onClick={() => handleItemClick(row)}>
                    {row.items}
                  </Button>
                </td>
                <td>{row.number}</td>
                <td>{row.group}</td>
                <td>{row.description}</td>
                <td>{row.altcode}</td>
                <td>{row.types}</td>
                <td>{row.date}</td>
                <td>
                  {row.srno !== "--" && (
                    <DropdownButton variant="primary" title="Actions" id={`actions-dropdown-${row.srno}`}>
                      <Dropdown.Item onClick={() => handleEditItem(row)}>Edit</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDeleteItem(row)}>Delete</Dropdown.Item>
                    </DropdownButton>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <Container className="mt-3 pt-5">
      {isAddingItem ? (
        <AddItems handleSave={handleSaveNewItem} handleClose={handleCloseAddItem} selectedItemType={selectedItemType} />
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
            <h3>Main Inventory</h3>
            <DropdownButton
              variant="primary"
              title="Add Item Type"
              onSelect={(eventKey) => handleShowAddItem(eventKey)}
            >
              <Dropdown.Item eventKey="Jewellery">Jewellery</Dropdown.Item>
              <Dropdown.Item eventKey="Gemstone">Gemstone</Dropdown.Item>
              <Dropdown.Item eventKey="Rudraksh">Rudraksh</Dropdown.Item>
              <Dropdown.Item eventKey="Watch">Watch</Dropdown.Item>
            </DropdownButton>
          </div>
          {renderTable(displayedRows)}
          <Modal show={!!currentItem} onHide={handleModalClose} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>{isEditMode ? "Edit Item" : "Item Details"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{renderModalContent()}</Modal.Body>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default Items;
