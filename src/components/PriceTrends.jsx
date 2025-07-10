import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const generatePriceData = (prices) => {
  return prices.map((price, index) => ({
    day: index + 1,
    price,
    growth:
      index === 0
        ? 0
        : parseFloat(
            (((price - prices[index - 1]) / prices[index - 1]) * 100).toFixed(2)
          ),
  }));
};

const product1Prices = [
  28.0, 27.96, 28.36, 28.16, 27.87, 29.74, 31.08, 27.69, 29.84, 30.39, 29.26,
  29.46, 30.96, 30.15, 33.53, 31.5, 31.19, 33.44, 32.74, 32.96, 30.95, 32.26,
  34.54, 33.77, 34.67, 35.22, 34.19, 33.91, 35.26, 35.21, 34.99,
];

const product2Prices = [
  43.0, 43.02, 37.34, 35.99, 36.19, 33.01, 35.49, 33.39, 31.73, 31.83, 25.37,
  27.21, 30.44, 29.97, 27.32, 31.19, 25.73, 31.96, 32.19, 28.46, 28.49, 30.62,
  30.8, 34.51, 32.96, 36.04, 33.65, 35.57, 37.54, 37.22, 40.13,
];

const product3Prices = [
  41.58, 41.11, 40.88, 40.44, 38.49, 39.44, 42.49, 40.31, 42.65, 40.31, 40.55,
  42.43, 42.53, 39.47, 40.68, 42.13, 41.92, 42.97, 44.9, 43.29, 45.15, 45.76,
  46.07, 48.11, 45.9, 48.02, 48.49, 52.8, 49.32, 49.2,
];

const products = [
  { name: "Braun Wall Clock", data: generatePriceData(product1Prices) },
  { name: "Valet Tray Bundle", data: generatePriceData(product2Prices) },
  { name: "The Analog Complete Kit", data: generatePriceData(product3Prices) },
];

export default function PriceTrends() {
  return (
    <div className="page-container">
      <h2 className="page-title">Price Trends & Growth</h2>
      <p className="page-subtitle">
        Visualización del historial de precios con interpolación lineal y
        cálculo de tasa de crecimiento.
      </p>

      {products.map((product, idx) => (
        <div key={idx} style={{ marginBottom: "40px" }}>
          <h3>{product.name}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={product.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                label={{ value: "Día", position: "insideBottom", offset: -5 }}
              />
              <YAxis
                domain={["dataMin - 2", "dataMax + 2"]}
                label={{
                  value: "Precio (USD)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#3b82f6"
                name="Precio"
              />
              <Line
                type="monotone"
                dataKey="growth"
                stroke="#10b981"
                name="% Crecimiento"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
}
