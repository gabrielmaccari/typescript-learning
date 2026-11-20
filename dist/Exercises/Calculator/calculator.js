"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestments(value) {
}
async function doCalculation(value) {
    const funds = await getFunds();
    const price = funds.regularMarketPrice;
    const calc = price * value;
    printResults(calc);
}
function printResults(calc) {
    console.log(calc);
}
async function getFunds() {
    const token = process.env.BRAPI_API_KEY;
    const ticker = 'PETR4';
    const response = await fetch(`https://brapi.dev/api/quote/${ticker}`, { headers: { 'Authorization': `Bearer ${token}` } });
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    const fund = data.results[0];
    if (!fund) {
        throw new Error(`No results found for ticker: ${ticker}`);
    }
    console.log(fund);
    return fund;
}
doCalculation(10);
//# sourceMappingURL=calculator.js.map