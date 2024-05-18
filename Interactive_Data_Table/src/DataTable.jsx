import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const DataTable = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const filtered = sortedData.filter((row) => {
      return Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, sortedData]);

  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = Math.min(start + pageSize, filteredData.length);
    setPaginatedData(filteredData.slice(start, end));
  }, [currentPage, filteredData]);

  const handleSort = (column, direction) => {
    const sortFunction = (a, b) => {
      if (a[column] < b[column]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    };
    setSortedData([...sortedData].sort(sortFunction));
    setCurrentPage(1); // Reset to first page on sort
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderHeader = () => {
    return (
      <thead>
        <tr>
          {Object.keys(data[0]).map((column) => (
            <th key={column}>
              {column}
              <button onClick={() => handleSort(column, "asc")}>↑</button>
              <button onClick={() => handleSort(column, "desc")}>↓</button>
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderBody = () => {
    return (
      <tbody>
        {paginatedData.map((row) => (
          <tr key={row.id}>
            {Object.values(row).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(filteredData.length / pageSize);
    return (
      <div>
        {[...Array(totalPages)].map((_, page) => (
          <button key={page + 1} onClick={() => handlePageChange(page + 1)}>
            {page + 1}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        {renderHeader()}
        {renderBody()}
      </table>
      {renderPagination()}
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DataTable;
