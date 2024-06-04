import { useState, useEffect } from 'react';

const useFetchByCategory = (endpoint) => {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const encodedEndpoint = encodeURIComponent(endpoint);
        const response = await fetch(`${baseUrl}/api/v1/fooditem/${encodedEndpoint}`, {
          method: 'GET'
        });

        if (!response.ok) {
          setMessage("Couldn't get the response okay");
          return;
        }
        
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData.catezorizedFood);
        setMessage('Wow data is here');
      } catch (error) {
        console.error(error);
        setMessage('An error occurred while fetching data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, message, isLoading };
};

export default useFetchByCategory;
