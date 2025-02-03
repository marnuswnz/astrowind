// lib/fetchGraphQL.js
import dotenv from 'dotenv';
dotenv.config();

console.log("HYGRAPH_API_URL:", process.env.HYGRAPH_API_URL);
console.log("HYGRAPH_AUTH_TOKEN:", process.env.HYGRAPH_AUTH_TOKEN);

export async function fetchGraphQL(query) {
  const response = await fetch(process.env.HYGRAPH_API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data;
}
