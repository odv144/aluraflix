import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";

export const FavoritoProvider = ({ children }) => {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export function useFavoritosContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);
  const agregarFavorito = (nuevoFavorito) => {
    const FavoritoRepetido = favorito.some(
      (item) => item.id === nuevoFavorito.id
    );
    let nuevaLista = [...favorito];
    if (!FavoritoRepetido) {
      nuevaLista.push(nuevoFavorito);
     
    }
    nuevaLista= nuevaLista.filter((item)=> item.id !== nuevoFavorito.id)
    return setFavorito(nuevaLista)
};
return { favorito, agregarFavorito };
}
