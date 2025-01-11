import { useContext, useEffect, useReducer, useState } from "react";
import { VideosContext } from "./VideosContext";
//token para usar b1d30cba-625f-4a6e-9b36-b467706e05ea

const urlBase='https://alura-cinema-api-five.vercel.app';
const urlJsonBin='https://api.jsonbin.io/v3/b/';
const tokenVideo='6781c08fe41b4d34e4758772';
const tokenCategoria='67818e44e41b4d34e4757799';

const key='$2a$10$UN0bhI9hjQe1AzpDD54HC.c8Df92qtsJqCqc9VODUj5uuYbhxOaba';
// const urlBase='http://localhost:5000';
// comienzo de reducer
// Tipos de acciones
const ACTIONS = {
  MAKE_REQUEST: 'MAKE_REQUEST',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  SET_DATA: 'SET_DATA',
  ADD_DATA: 'ADD_DATA',
  REMOVE_DATA: 'REMOVE_DATA',
  UPDATE_DATA:'UPDATE_DATA',
};

// 1)estado inicial
const initialState={
  loading: false,
  error: null,
  videos:[],
  
}
// 2) acciones que ejecutaran en los eventos
const reducer=(state,action)=>{
switch (action.type) {
  case ACTIONS.MAKE_REQUEST:
    return { ...state, loading: true };
    
  case ACTIONS.SUCCESS:
    return { 
      ...state, 
      loading: false, 
      error: null 
    };
    
  case ACTIONS.ERROR:
    return { 
      ...state, 
      loading: false, 
      error: action.payload.error 
    };
    
  case ACTIONS.SET_DATA:
    return { 
      ...state, 
      videos: action.payload
    };
    
  case ACTIONS.ADD_DATA:
    return { 
      ...state, 
      videos: [...state.videos, action.payload.videos] 
    };
  case ACTIONS.UPDATE_DATA:
    return{
      ...state,
      videos: state.videos.map(item => 
        item.id === action.payload.id ? action.payload.videos : item
      )
    };  
  case ACTIONS.REMOVE_DATA:
    return { 
      ...state, 
      videos: state.videos.filter(item => item.id !== action.payload.id) 
    };
    
  default:
    return state;
  }
}
//fin de reducer


export const VideosProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    // Función para GET
    const getData = async () => {
      dispatch({ type: ACTIONS.MAKE_REQUEST });
      try {
         const response = await fetch(`${urlJsonBin}${tokenVideo}`, {
          method: 'GET',
          headers: {
            'X-Master-Key': key
          }
        });
        const data = await response.json();
        dispatch({ type: ACTIONS.SET_DATA, payload:  data.record.videos});
        dispatch({ type: ACTIONS.SUCCESS });
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: { error } });
      }
    };
  
    // Función para POST
    const postData = async ( newData) => {
      dispatch({ type: ACTIONS.MAKE_REQUEST });
       try {
        getData()
         // 2. Modificar los datos (ejemplo asumiendo que tienes un array de videos)
        const upData = {
      ...state,
      videos: [...state.videos, newData]
    };
   
        updateData(upData.videos)

        // const response = await fetch(`${urlJsonBin}${tokenVideo}`, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
           
        //   body: JSON.stringify(newData)
        // });
        
        // const data = await response.json();
        // dispatch({ type: ACTIONS.ADD_DATA, payload: { videos:data } });
        // getData()
        dispatch({ type: ACTIONS.SUCCESS });
        // return data;
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: { error } });
        throw error;
      }
    };
/////



    // Función de actualización
const updateData = async (updatedData,id=null) => {
  dispatch({ type: ACTIONS.MAKE_REQUEST });
  console.log(updatedData)
  try {
    const response = await fetch(`${urlJsonBin}${tokenVideo}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': key,
        'X-Bin-Versioning': 'false'
      },
      body: JSON.stringify({videos:updatedData})
    });
    // const data = await response.json();
    // dispatch({ type: ACTIONS.UPDATE_DATA, payload: { id, videos:data } });
    getData()
    dispatch({ type: ACTIONS.SUCCESS });
    // return data;
  } catch (error) {
    dispatch({ type: ACTIONS.ERROR, payload: { error } });
    throw error;
  }
}
    // Función para DELETE
    const deleteData = async (id) => {
      dispatch({ type: ACTIONS.MAKE_REQUEST });
      try {
        await fetch(`${urlJsonBin}${tokenVideo}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': key,
            // 'X-Bin-Versioning': 'false'
          },
        });
        // dispatch({ type: ACTIONS.REMOVE_DATA, payload: { id } });
        getData()
        dispatch({ type: ACTIONS.SUCCESS });
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: { error } });
        throw error;
      }
    };
  const [category, setCategory] = useState([]);
   
    const getCategoria = async() => {
    try{
      const response = await fetch(`${urlJsonBin}${tokenCategoria}`, {
        method: 'GET',
        headers: {
          'X-Master-Key': key
        }
      });
      const data = await response.json();
      setCategory(data.record.categoria);
    }catch(error){
    console.error("Error en la parte de categoria: ",error)
    }
    };
    

  useEffect(()=>{
    getData()
    // getData('https://alura-cinema-api-five.vercel.app/videos')
    getCategoria();
    
  },[])   

  return (
    <VideosContext.Provider value={
      {
        state, 
        category,
        dispatch,
        postData,
        deleteData,
        updateData,
        }}>
      {children}
    </VideosContext.Provider>
  );
};


