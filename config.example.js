// Copy this file to config.js and fill in your Airtable Personal Access Token
// Get your token at: https://airtable.com/account
const AIRTABLE_TOKEN = 'YOUR_AIRTABLE_PERSONAL_ACCESS_TOKEN_HERE';
const AIRTABLE_BASE_ID = 'appPCZFun0Rfqi7sq';

async function airtableFetch(table, params = '') {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(table)}${params}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` }
  });
  if (!res.ok) throw new Error(`Airtable error: ${res.status}`);
  return res.json();
}
