import { Navigate, useParams } from "react-router-dom"

type paramsProps = {
  id: string  
}

export function Room(){
  const params = useParams<paramsProps>()

  if(!params.id){
    return <Navigate replace to="/"/>
  }
  
  return (
    <div>Room details{JSON.stringify(params)}</div>
  )
}