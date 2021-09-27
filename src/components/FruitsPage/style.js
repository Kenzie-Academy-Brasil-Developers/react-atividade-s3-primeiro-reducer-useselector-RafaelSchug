import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

`

export const Card = styled.div`

    border: 1px solid #c8c8c8;
    box-shadow: 0 0 2px 1px #bbbbbb;
    border-radius: 10px;
    max-width: 300px;
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 20px;
    transition: .2s linear;

    :hover {
        background: #809eef;
        color: white;
    }

`

