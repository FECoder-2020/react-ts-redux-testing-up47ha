
import { addArticle } from '../actions/index';
import {Quote} from '../constants/quote-def';

interface QuoteResponse {
  quotes: Quote[];
}


var currentId = 0;

const nextId = () => {
  return currentId++;
}

const  corsProxy = 'https://cors-anywhere.herokuapp.com/'
const url = "https://opinionated-quotes-api.gigalixirapp.com/v1/quotes";



export async function getRandomFact() : Promise<Quote> {

  const response = await fetch(`${corsProxy + url}`);
  if (response.ok) {
    const json = await response.json() as QuoteResponse;
    if (json.quotes && json.quotes.length){
        json.quotes[0].id = nextId();
        return json.quotes[0]; 

    }
        // addArticle({ title: json.quotes[0].quote, id: nextId() });
  }
  else {
    console.warn(response);
    return null;
  }
}