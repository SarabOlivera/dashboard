import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function FormularyProduct() {
  const [inputName, setInputName] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");
  const [inputStock, setInputStock] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        const product = response.data;
        setInputName(product.name);
        setInputDescription(product.description);
        setInputPhoto(product.photo);
        setInputStock(product.stock);
        setInputPrice(product.price);
      } catch (error) {
        console.log("Falla la entrada a Api", error);
      }
    };

    fetchProduct();
  }, [id]);

  const submitCheck = async (e) => {
    e.preventDefault();

    const productData = {
      name: inputName,
      description: inputDescription,
      photo: inputPhoto,
      stock: inputStock,
      price: inputPrice,
    };

    try {
      if (id) {
        await axios.patch(`http://localhost:3000/products/${id}`, productData);
      } else {
        console.log("Creando producto:", productData);
        await axios.post("http://localhost:3000/products", productData);
      }
      navigate("/");
    } catch (error) {
      console.error("Error real:", error.message, error);
    }
  };

  return (
    <Form className="form-container" onSubmit={submitCheck}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>URL de la Foto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter photo URL"
          value={inputPhoto}
          onChange={(e) => setInputPhoto(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Stock</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter stock quantity"
          value={inputStock}
          onChange={(e) => setInputStock(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio ($)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter price"
          step="0.01"
          value={inputPrice}
          onChange={(e) => setInputPrice(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {id ? "Actualizar" : "Crear"}
      </Button>
    </Form>
  );
}

export default FormularyProduct;
