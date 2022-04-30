import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Wrapper, Result, OrangeButton, WhiteButton, GreyButton, BigButton } from './styles'

 export const Calculator: React.FC = () => {
    const [num, setNum] = useState<any>(0);
    const [oldnum, setOldNum] = useState<any>(0);
    const [operator, setOperator] = useState<any>();

    function inputNum(e: any){
        var input = e.target.value;
        if(num === 0){
            setNum(input);
        }else{
            setNum(num + input);
        }
    }
    function clear(e: any){
        setNum(0);
    }
    function porcentage(){
        setNum(num / 100);
    }
    function changeSign(){
        if(num>0){
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }
    function operatorHandler(e: any){
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }
    function calculate(){
        console.log("calculou!!!");
        console.log(oldnum);
        console.log(operator);
        console.log(num);

        if(operator === "/") {
            setNum(parseFloat(oldnum) / parseFloat(num));
        } else if(operator === "X" ) {
            setNum(parseFloat(oldnum) * parseFloat(num));
        } else if(operator === "-" ) {
            setNum(parseFloat(oldnum) - parseFloat(num));
        } else if(operator === "+" ) {
            setNum(parseFloat(oldnum) + parseFloat(num));
        }   
      }

    return (
      <div>
        <Box m={5}/>
            <Container maxWidth='xs'>
                <Wrapper>
                <Box m={12}/>
                <Result>{num}</Result>
                <WhiteButton onClick={clear}>AC</WhiteButton>
                <WhiteButton onClick={changeSign}>+/-</WhiteButton>
                <WhiteButton onClick={porcentage}>%</WhiteButton>
                <OrangeButton onClick={operatorHandler} value="/">/</OrangeButton>
                <GreyButton onClick={inputNum} value={7}>7</GreyButton>
                <GreyButton onClick={inputNum} value={8}>8</GreyButton>
                <GreyButton onClick={inputNum} value={9}>9</GreyButton>
                <OrangeButton onClick={operatorHandler} value="X">X</OrangeButton>
                <GreyButton onClick={inputNum} value={4}>4</GreyButton>
                <GreyButton onClick={inputNum} value={5}>5</GreyButton>
                <GreyButton onClick={inputNum} value={6}>6</GreyButton>
                <OrangeButton onClick={operatorHandler} value="-">-</OrangeButton>
                <GreyButton onClick={inputNum} value={1}>1</GreyButton>
                <GreyButton className='gray' onClick={inputNum} value={2}>2</GreyButton>
                <GreyButton className='gray' onClick={inputNum} value={3}>3</GreyButton>
                <OrangeButton onClick={operatorHandler} value="+">+</OrangeButton>
                <BigButton onClick={inputNum} value={0}>0</BigButton>
                <GreyButton onClick={inputNum} value={"."}>,</GreyButton>
                <OrangeButton onClick={calculate}>=</ OrangeButton>
                </Wrapper>
            </Container>
       </div>
    )
}