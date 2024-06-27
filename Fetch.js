import React, { useEffect, useState } from "react";

function Fetch() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAdvice(data.slip.advice); // Assuming the API response structure has 'slip' object containing 'advice'
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Random Advice:</h1>
      <p>{advice}</p>
    </div>
  );
}

export default Fetch;
