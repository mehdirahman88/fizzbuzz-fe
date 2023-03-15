import axios from 'axios';
import React from 'react';
import {render, screen, waitFor, act} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

describe('FizzBuzz Page',() => {
    let response;

    jest.mock('axios');

    beforeEach(() => {
        let response = {
            isSuccess: true,
            data: {
                data: "-",
            }
        }

        axios.get=  jest.fn().mockResolvedValue( Promise.resolve(response) );

    })

    it('should render correctly first time', async () => {
        render(<App />);

        expect(screen.getByText(/Your count/i)).toBeInTheDocument();
        expect(screen.getByText(/2/i)).toBeInTheDocument();
        expect(screen.getByText(/CLICK ME/i)).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText("-")).toBeInTheDocument();
        });
    })

    it('should increment counter after button click', async () => {
        render(<App />);

        const fizzValue = "Fizz";
        response = {
            isSuccess: true,
            data: {
                data: fizzValue,
            }
        }
        axios.get=  jest.fn().mockResolvedValue( Promise.resolve(response) );

        const button = screen.getByRole('button');
        userEvent.click(button);

        expect(screen.queryByText(/2/i)).not.toBeInTheDocument();
        expect(screen.getByText(/3/i)).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText(fizzValue)).toBeInTheDocument();
        });
    })
})