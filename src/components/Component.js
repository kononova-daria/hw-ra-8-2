import React from 'react';
import useJsonFetch from './useJsonFetch';

export default function Component({url}) {
  const [data, loading, error] = useJsonFetch(url);


  return (
    <div>
      {data && <div>{`Данные загружены: ${data.status}`}</div>}
      {loading && <progress/>}
      {error && <div>{JSON.stringify(error)}</div>}
    </div>
  )
};