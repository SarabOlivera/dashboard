import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function FormularyProduct() {
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");
  const [inputStock, setInputStock] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const navigate = useNavigate();

  const submitCheck = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/products", {
        name: inputName,
        description: inputDescription,
        photo: inputPhoto,
        stock: inputStock,
        price: inputPrice,
      });
      navigate("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            className="InputPass"
            type="text"
            placeholder="Your name"
            onChange={(e) => setInputName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Desription</Form.Label>
          <Form.Control
            className="InputPass"
            type="text"
            placeholder=" InputDescription"
            onChange={(e) => setInputDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            className="InputPass"
            type="Photo"
            placeholder="Photo Price"
            onChange={(e) => setInputPhoto(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>StocksetInputStock</Form.Label>
          <Form.Control
            className="InputPass"
            type="StocksetInputStock"
            placeholder="StocksetInputStock"
            onChange={(e) => setInputStock(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            className="InputPass"
            type="text"
            placeholder="Price"
            onChange={(e) => setInputPrice(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default FormularyProduct;
