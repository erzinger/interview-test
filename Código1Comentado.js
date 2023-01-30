import { useState } from "react";
import { MainDiv, NumberCell, NumberRow } from "./style";


const GAME_NUMBERS = [
    { row: 'B', numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
    { row: 'I', numbers: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] },
    { row: 'N', numbers: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
    { row: 'G', numbers: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60] },
    { row: 'O', numbers: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75] },
] // define o array com as linhas e seus numeros

export default function Bingo() {

    const [pickedNumbers, setPicked] = useState([]) // criando uma variavel dos numeros escolhidos e uma função para setar a variavel com o useState

    const updatePickedNumbers = (number) => {

        if (pickedNumbers.length > 0)
            if (pickedNumbers.includes(number)) {
                setPicked((curr) => curr.filter((a) => a !== number)) //se o numero ja esta eslhido, o if seta a variavel e tira ele da lista
            }
            else {
                setPicked((curr) => [...curr, number]) // inclui o numero escolhido a lista de escolhidos
            }
        else {
            setPicked((curr) => [...curr, number]) // inclui o numero escolhido a lista de escolhidos
        }
    }

    return <MainDiv>
        <div className="content">
            {GAME_NUMBERS.map((row, index) => <NumberRow key={index + 'columns'}>
                {row.numbers.map((number, index) =>
                    <NumberCell onClick={() => { updatePickedNumbers(number) }} key={index + 'item'} active={pickedNumbers?.includes(number)}>
                        {number.toString().padStart(2, '0')}
                    </NumberCell>)}
            </NumberRow>)} 
        </div>


    </MainDiv>
}// retorna todos os numeros, e quando clicado, fica selecionado como escolhido, e se clicado novamente, é desmarcado da lista dos escolhidos
// o layout dessa aplicação deve aparecer da seguinte maneira: Os numeros das linhas um do lado do outro de 15 e 15, seguindo o array com as linhas