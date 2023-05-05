import {render,screen} from '@testing-library/react'
import { Greet } from '../components/greet/greet'

describe('Greet', ()=>{
    test('Greet render correctly',()=>{
        render(<Greet/>)
        const textElement = screen.getByText(/hello/i)
        expect(textElement).toBeInTheDocument();
    })
    
    test('Greet render with name',()=>{
        render(<Greet name='Vishwas'/>)
        const textElement = screen.getByText("Hello Vishwas")
        expect(textElement).toBeInTheDocument();
    })    
})

