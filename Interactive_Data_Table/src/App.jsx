import "./App.css";
import DataTable from "./DataTable";

function App() {
  const data = [
    { id: 1, name: "John Doe", age: 30, city: "New York" },
    { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
    { id: 3, name: "Michael Brown", age: 42, city: "Chicago" },
    { id: 4, name: "Alice Johnson", age: 28, city: "Houston" },
    { id: 5, name: "David Williams", age: 37, city: "Phoenix" },
    { id: 6, name: "Emily Garcia", age: 22, city: "San Diego" },
    { id: 7, name: "Charles Miller", age: 50, city: "Dallas" },
    { id: 8, name: "Amanda Hernandez", age: 35, city: "San Antonio" },
    { id: 9, name: "Robert Moore", age: 48, city: "San Jose" },
    { id: 10, name: "Elizabeth Walker", age: 21, city: "Austin" },
    { id: 11, name: "Christopher Lewis", age: 33, city: "Jacksonville" },
    { id: 12, name: "Sarah Johnson", age: 29, city: "Indianapolis" },
    { id: 13, name: "William Jones", age: 45, city: "Columbus" },
    { id: 14, name: "Jennifer Garcia", age: 27, city: "Charlotte" },
    { id: 15, name: "Daniel Hernandez", age: 39, city: "Detroit" },
    { id: 16, name: "Margaret Miller", age: 52, city: "El Paso" },
    { id: 17, name: "Joseph Moore", age: 41, city: "Seattle" },
    { id: 18, name: "Susan Walker", age: 19, city: "Denver" },
    { id: 19, name: "Richard Lewis", age: 31, city: "Baltimore" },
    { id: 20, name: "Catherine Johnson", age: 26, city: "Milwaukee" },
  ];

  return <DataTable data={data} />;
}

export default App;
