import { useContext, useEffect, useReducer, useState } from "react";
import { VideosContext } from "./VideosContext";
//token para usar b1d30cba-625f-4a6e-9b36-b467706e05ea


// comienzo de reducer
// Tipos de acciones
const ACTIONS = {
  MAKE_REQUEST: 'MAKE_REQUEST',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  SET_DATA: 'CONSULTA',
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
    
  case ACTIONS.CONSULTA:
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
    
    const url='https://alura-cinema-api-five.vercel.app/videos';
    const [state, dispatch] = useReducer(reducer, initialState);

    // Función para GET
    const getData = async (url) => {
      dispatch({ type: ACTIONS.MAKE_REQUEST });
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: ACTIONS.CONSULTA, payload:  data });
        dispatch({ type: ACTIONS.SUCCESS });
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: { error } });
      }
    };
  
    // Función para POST
    const postData = async (url, newData) => {
      dispatch({ type: ACTIONS.MAKE_REQUEST });
      
      console.log("Datos recibidos:",newData)
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
           
          body: JSON.stringify(newData)
        });
        
        const data = await response.json();
        dispatch({ type: ACTIONS.ADD_DATA, payload: { data } });
        dispatch({ type: ACTIONS.SUCCESS });
        return data;
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: { error } });
        throw error;
      }
    };
    // Función de actualización
const updateData = async (url, id, updatedData) => {
  dispatch({ type: ACTIONS.MAKE_REQUEST });
  try {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });
    const data = await response.json();
    dispatch({ type: ACTIONS.UPDATE_DATA, payload: { id, data } });
    dispatch({ type: ACTIONS.SUCCESS });
    return data;
  } catch (error) {
    dispatch({ type: ACTIONS.ERROR, payload: { error } });
    throw error;
  }
}
    // Función para DELETE
    const deleteData = async (url, id) => {
      dispatch({ type: ACTIONS.MAKE_REQUEST });
      try {
        await fetch(`${url}/${id}`, {
          method: 'DELETE'
        });
        dispatch({ type: ACTIONS.REMOVE_DATA, payload: { id } });
        dispatch({ type: ACTIONS.SUCCESS });
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: { error } });
        throw error;
      }
    };
  
  useEffect(()=>{
    getData('http://localhost:5000/videos')
    // getData('https://alura-cinema-api-five.vercel.app/videos')
  },[])   

  return (
    <VideosContext.Provider value={{state, dispatch,postData,deleteData,updateData}}>
      {children}
    </VideosContext.Provider>
  );
};


