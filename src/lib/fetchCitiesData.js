// This is your utility function to fetch cities based on region slug
export async function fetchCitiesData(regionSlug) {
  const query = `
    query {
      cities(where: { region: { slug: "${regionSlug}" } }) {
        cityName
        cityTagline
        citySlug
        cityImages {
          url
        }
      }
    }
  `;
  
  const response = await fetch(import.meta.env.HYGRAPH_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${import.meta.env.HYGRAPH_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  
  const data = await response.json();
  return data.data.cities;
}
