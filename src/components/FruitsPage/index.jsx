import { useSelector } from "react-redux";
import {Container, Card} from './style'
import {GiBananaBunch, GiStrawberry, GiShinyApple} from 'react-icons/gi';

const FruitsPage = () => {

    const fruits = useSelector(state => state.fruits);

    return (
        <Container>
            {fruits.map((item, index)=>{
                return (
                    <Card key={index}>
                        <p >{item}</p>
                        {item === 'Banana' && <GiBananaBunch style={{color : "#c3c307"}}></GiBananaBunch>}
                        {item === 'Morango' && <GiStrawberry style={{color : "#d40f0f"}}></GiStrawberry>}
                        {item === 'Maçã' && <GiShinyApple style={{color: '#d40f0f'}}></GiShinyApple>}
                    </Card>
                )
            })}
        </Container>
    )
}

export default FruitsPage;