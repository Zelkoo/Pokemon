import {from, Observable, throwError} from "rxjs";
import {url} from "./graph-query";

export const execute = (
  type: 'query',
  query: string,
  vars: any = {}
): Observable<any> => {
  return from(
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [type]: query, variables: vars }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data.data.pokemons.results)
        const result = data.data.pokemons.results;
        if (result && Array.isArray(result)) {
          return result;
        } else {
          throw new Error('Invalid response format');
        }
      })
      .catch(throwError)
  );
};

export const executeMoves = (
  type: 'query',
  query: string,
  vars: any = {}
): Observable<any> => {
  return from(
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ [type]: query, variables: vars }),
    })
      .then((data: Response) => data.json())
      .then((data) => data['data'])
      .catch(throwError)
  );
};
