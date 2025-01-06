import { createContext, useContext, useState } from "react";

export const VideosContext = createContext();

VideosContext.displayName = "Videos";

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
};

export function useVideoContext() {
  const { video, setVideo } = useContext(VideosContext);
  const agregarVideo = (nuevoVideo) => {
    const videoRepetido = video.some(
      (item) => item.id === nuevoVideo.id
    );
    let nuevaLista = [...video];
    if (!videoRepetido) {
      nuevaLista.push(nuevoVideo);
     
    }
    nuevaLista= nuevaLista.filter((item)=> item.id !== nuevoVideo.id)
    return setVideo(nuevaLista)
};
return { video, agregarVideo };
}
