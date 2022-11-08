import styled from 'styled-components';

interface ContainerProps{
  mt?: string;
  display?: string;
  direction?: string
  gap?: string;
}

export const Container = styled.div<ContainerProps>`
  display: ${props => props.display ? props.display : 'flex'};
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  gap: ${props => props.gap ? props.gap : '.5em'};

  margin-top: ${props => props.mt ? props.mt : '0em'};
  width: 100%;
`

export const Image = styled.img`
    width: 100%;
    margin-top: .5em;

`

export const Card = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  box-shadow: .5em .5em 30px;
  border-radius: 1em;

  background-color: white;

  width: auto;
  padding: 1em 4em;

`
export const Title = styled.span`
  font-size: 30px;
  margin-top: 1em;

  font-family: sans-serif;
`

export const Types = styled(Title)`
  font-size: 17px;
  padding: .3em .6em;
  border-radius: 1em;
  background-color: #62ae62;
`
export const Text = styled(Title)`
  font-size: 15px;
`