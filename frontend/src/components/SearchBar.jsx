import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MovieContext } from "../contexts/MovieContext";

function SearchBar() {
  // Importando as ferramentas do react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const { buscarFilmes, erro } = useContext(MovieContext);

  // A função onSubmit agora recebe os dados já validados pelo form
  const onSubmit = (data) => {
    buscarFilmes(data.filme);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Digite o nome do filme"
        // O register conecta esse input ao React Hook Form e já aplica a regra de campo obrigatório
        {...register("filme", { required: "O nome do filme é obrigatório!" })}
        style={{
          padding: "10px",
          width: "300px",
          marginRight: "10px",
        }}
      />

      <button type="submit">
        Buscar
      </button>

      {/* 1. Mensagem de erro ANTES do envio (Validação do input vazio) */}
      {errors.filme && (
        <p style={{ color: "orange", marginTop: "5px" }}>
          {errors.filme.message}
        </p>
      )}

      {/* 2. Mensagem de erro DEPOIS do envio (Erro vindo da API/Contexto) */}
      {erro && (
        <p style={{ color: "red", marginTop: "5px" }}>
          {erro}
        </p>
      )}
    </form>
  );
}

export default SearchBar;