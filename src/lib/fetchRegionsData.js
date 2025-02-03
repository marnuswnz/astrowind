// src/lib/fetchRegionsData.js

async function fetchRegionsData() {
    const query = `
    {
      regions {
        regionName
        regionTagline
        regionImages {
          url
        }
      }
    }`;
  
    const response = await fetch(import.meta.env.HYGRAPH_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.HYGRAPH_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
  
    const { data } = await response.json();
    console.log('Fetched Data:', data);  // Log the response to see if it's coming through
    return data.regions;
  }
  
  export { fetchRegionsData };
  