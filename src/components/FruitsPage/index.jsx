import { useSelector } from "react-redux";
import {Container, Card} from './style'

const FruitsPage = () => {

    const fruits = useSelector(state => state.fruits);

    return (
        <Container>
            {fruits.map((item, index)=>{
                return (
                    <Card>
                        <p key={index}>{item}</p>
                    </Card>
                )
            })}
        </Container>
    )
}

export default FruitsPage;