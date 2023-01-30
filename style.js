import styled from 'styled-components'

export const NumberCell = styled.div < { active: boolean } > `
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight:900;
    font-size:2.125em;
    padding: 0.75em 1em;
    border-radius:0.125em;
    max-width: 2.8em;
    transition: all .2s;

    cursor: pointer;

    margin-left: .25em;
    margin-bottom: .25em;

    background-color: ${({ active }) => active ? "#994549" : "#F0EDE0"};
    color: ${({ active }) => active ? "#F0EDE0" : "#994549"};

    :hover{
        background-color: ${({ active }) => active ? "#862D31" : "#E8E1CB"};
    }

    :active {
        transform: scale(0.95);
    }



    @media (max-width:1600px)  { 
        
        font-size: 1.5em;
    }
    @media (max-width:1100px)  { 
                
                font-size: 1em;
            }
@media (max-width:800px)  { 

    font-size: 1.25em;
    }

`


export const NumberRow = styled.div`

display: flex;
align-items: center;
padding: 0.15em 2em;
width: 100%;

@media (max-width:800px)  { 

display: grid;
grid-template-columns: repeat(5,1fr);
padding:  0.5em 2em;


    }

`


export const MainDiv = styled.main`
width: 100vw;
height: 100vh;
overflow-y: auto;
display: flex;
flex-direction: column;
align-items: center;

.content {
    height: fit-content;
    margin-top: 10em;
}

.nav {
    width: 100%;
    padding: 3em 0;
    display: flex;
    align-items: center;
    justify-content: center;
}


@media (max-width:600px)  { 
    .content {
    height: fit-content;
    margin-top: 2em;
}

.nav {
    flex-direction: column;
}
}

`
