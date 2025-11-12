import React, { useState, useEffect } from 'react';

const DataFetch = () => {
  // State to hold the fetched data
  const [data, setData] = useState(null);
  // State for loading and error handling
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your backend when the component mounts
    fetch('http://localhost:5000/api/data')  // Replace with your backend API URL
      .then((response) => response.json())  // Convert to JSON
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);  // Empty array to run only once on component mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data from Backend</h1>
      {/* Display fetched data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetch;
