
function calculateInvestments(value : number) {

}

type resultFunds = {
    results : result[]
    requestedAt : string,
    took: number
}
type result = {
  symbol: string;
  shortName: string;
  longName: string;
  currency: string;
  regularMarketPrice: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  regularMarketDayRange: string;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketTime: string; 
  marketCap: number | null;
  regularMarketVolume: number;
  regularMarketPreviousClose: number;
  regularMarketOpen: number;
  fiftyTwoWeekRange: string;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
  priceEarnings: number | null;
  earningsPerShare: number | null;
  logourl: string;
}

async function doCalculation(value : number) : Promise<void> {
    const funds : result = await getFunds()
    const price = funds.regularMarketPrice
    const calc =  price * value
    printResults(calc)

}
function printResults(calc : number) : void {
    console.log(calc)
}

async function getFunds() : Promise<result> {
    const token = process.env.BRAPI_API_KEY;
    const ticker = 'PETR4'

    const response = await fetch(
    `https://brapi.dev/api/quote/${ticker}`,
    { headers: { 'Authorization': `Bearer ${token}` } }
  );

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }

    const data : resultFunds = await response.json()
    const fund = data.results[0]
    if (!fund) {
      throw new Error(`No results found for ticker: ${ticker}`)
    }
    console.log(fund)
    return fund
}


doCalculation(10)