import { createContext, useReducer } from "react";

export const MovieContext = createContext();

const initialState = {
  filmes: [],
  loading: false,
  erro: null
};

function reducer(state, action) {
  switch (action.type) {
    case "BUSCAR":
      return { ...state, loading: true, erro: null };

    case "SUCESSO":
      return { filmes: action.payload, loading: false, erro: null };

    case "ERRO":
      return { ...state, loading: false, erro: action.payload };

    default:
      return state;
  }
}

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const buscarFilmes = async (nome) => {
    // validação (ANTES da API)
    if (!nome.trim()) {
      dispatch({ type: "ERRO", payload: "Digite um nome de filme" });
      return;
    }

    dispatch({ type: "BUSCAR" });

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=SUA_CHAVE&s=${nome}`
      );
      const data = await response.json();

      // erro vindo da API
      if (!data.Search) {
        dispatch({ type: "ERRO", payload: "Nenhum filme encontrado" });
        return;
      }

      dispatch({ type: "SUCESSO", payload: data.Search });
    } catch (error) {
      dispatch({ type: "ERRO", payload: "Erro ao conectar com a API" });
    }
  };

  return (
    <MovieContext.Provider value={{ ...state, buscarFilmes }}>
      {children}
    </MovieContext.Provider>
  );
};