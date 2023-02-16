import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b2c2d7c07emsh93ebaec37048b16p182ce1jsnc280695d2460',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  

    export const shazamCoreApi = createApi({
        reducerPath:'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers)=>{
                headers.set('X-RapidAPI-Key','b2c2d7c07emsh93ebaec37048b16p182ce1jsnc280695d2460')
                return headers;
            },
        }),
        endpoints:(builder)=>({
            getTopCharts: builder.query({query:()=>'/charts/world'}),
        }),
    });
    export const {
        useGetTopChartsQuery,
    }=shazamCoreApi;