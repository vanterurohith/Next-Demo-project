import styled, {createGlobalStyle, css} from "styled-components"

const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }
     
    body{
        font-family: Arial, Helvetica, sans-serif;
        background: linear-gradient(to top,lightblue , #e1eec3);
        height: 100%;
        margin: 0;
        color: black;
    }
`
const SharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`
const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 30%;
    margin-top: 10%;

    h2 {
        margin-left: 30%;
        padding-bottom: 10px;
    }
`
const StyledForm = styled.form`
    width: 550px;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`
const StyledInput = styled.input`
    display: block;
    width: 100%;
    ${SharedStyles}
`
const StyledButton = styled.button`
    display: block;
    background-color: lightblue;
    color: #fff;
    font-size: .9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
`
const StyledFieldset = styled.div`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;

    legend{
        padding: 0 10px;
    }

    label {
        padding-right: 20px;
        padding: 5px;
    }

    input {
        margin-right: 10px;
    }
`

export default function Form() {
  return (
    <>
    <GlobalStyle/>
    <StyledFormWrapper>
        <StyledForm>
            <h2>Student Form</h2>
            <lable htmlFor="name">Name</lable>
            <StyledInput type="text" name="name" />
            <lable htmlFor="email">Email</lable>
            <StyledInput type="email" name="email"/>
            <StyledFieldset>
                <legend>Department</legend>
                <lable>
                    <input type="radio" value="CSE" name="department"/>
                    CSE
                </lable>
                <lable>
                    <input type="radio" value="IT" name="department"/>
                    IT
                </lable>
                <lable>
                    <input type="radio" value="ECE" name="department"/>
                    ECE
                </lable>
            </StyledFieldset>
            <StyledButton>Send Data</StyledButton>
        </StyledForm>
    </StyledFormWrapper>
    </>
  ) 
}
