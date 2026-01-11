import { ReactNode } from 'react'
interface ContainerProps{
    children:ReactNode;
    classname?:string

}

const Container = ({children,classname}:ContainerProps) => {
  return (
    <div className={`w-11/12 mx-auto px-4  ${classname}`}>
      {children}
    </div>
  )
}

export default Container
