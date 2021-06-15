import { request, gql } from 'graphql-request';
import {   
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

// Installera https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql så blir "gql" 
// medveten om schemat och kommer att markera i felaktiga queries/mutations
// Detta p.g.a. att .graphqlconfig i roten definerar det genererade schemat schema.graphql. 
const query = gql`
  query ListAllCountries {
    countries {
      name
      capital
      code
      continent {
        name
      }
    }
  }
`

const ENDPOINT = "https://countries.trevorblades.com"

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <List />
      </QueryClientProvider>
    </div>
  );
}

function useCountries() {
  return useQuery("countries", async () => {
    const data = await request(ENDPOINT, query)

    return data;
  })
}

function List() {
  const {data, status, error} = useCountries();

  const isLoading = status === "loading";
  const isError = status === "error";

  return (
    <div>
      {isLoading && "...Loading"}
      {isError && <span>Error: {error.message}</span>}
      {!(isLoading || isError) &&  (
        <div>
          {data.countries.map(country => <div key={country.code}>
            <h2>{country.name} ({country.continent.name})</h2>
            <div>Capital: {country.capital}</div>
          </div>)}
        </div>)
      }
      
    </div>
  )
}

export default App;
