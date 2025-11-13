import { ReactNode } from 'react'
interface ContainerProps{
    children:ReactNode;
    classname?:string

}

const Container = ({children,classname}:ContainerProps) => {
  return (
    <div className={`max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 ${classname}`}>
      {children}
    </div>
  )
}

export default Container
