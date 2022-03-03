import { Data } from "./data"
import styled from "styled-components"
import {IconContext} from 'react-icons'
import {FiPlus, FiMinus}  from 'react-icons/fi'
import { useState } from "react"

const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    background:#E8E8E8;
`
const Container = styled.div`
    position: absolute;
    top: 30%;
`

const Wrap = styled.div`
    background: #808080;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;
    border-radius: 15px;
    margin: 10px;
h1 {
    padding : 2rem ;
    font-size : 2rem;
}

span{
    margin-right: 1.5rem;
}
`

const Dropdown = styled.div`
    background: #263238;
    color: #FFEDBB;
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #00ffb9;
    border-top: 1px solid #00ffb9;
    margin: 12px;
    margin-top: 25px;
    border-radius: 15px;

h1{
    background-color: #90A4AE;
    margin-bottom: 10px;
    width: 100%;
    border-radius: 15px;
    padding: 8px;
    padding-left: 30%;
}
p{
    font-size: large;
    padding: 10px;
}
`
const Btn = styled.button`
    background-color: #90A4AE;
    box-shadow: #90A4AE;
    margin-top: 1px;
    margin-bottom: 15px;
    width: 100%;
    border-radius: 15px;
    padding: 10px;
    color: antiquewhite;
    cursor: pointer;
    :hover{
        color: #455A64;
        background: antiquewhite;
    }
`

export default function Accordion(props) {
    const [clicked, setClicked] =useState(false)

    const toggle =index =>{
        if(clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }
  return (
          <IconContext.Provider value={{color:'#00FFB9', size: '20px'}}>
            <AccordionSection>
                <Container>
                    {Data.map((item, index) =>{
                        return(
                        <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                                <h1>{item.title}</h1>
                                <span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
                            </Wrap>
                            {clicked === index ? (
                            <Dropdown>  
                            <h1>{item.name}</h1>
                            <p>{item.phno}</p>
                            <p>{item.Hno}</p>
                            <p>{item.street}</p>
                            <p>{item.email}</p>
                            <Btn>More Details</Btn>
                            </Dropdown>) : null}
                        </>
                        )
                    })}
                </Container>   
            </AccordionSection>  
          </IconContext.Provider>
  )
}
