import React from "react"

import { render} from '@testing-library/react'

import BubblePage from './BubblePage'

import { fetchColorsApi as mockFetchColorsApi } from '../api/fetchColorsApi'

jest.mock("../api/fetchColorsApi")

const colorList = {
    data:
    [
        {
            color: "aliceblue",
            code: {
                hex:'#f0f8ff'
            },
            id: 1
        },
        {
            color: "red",
            code: {
                hex: '#f0f8ff'
            },
            id: 2
        }
    ]
}

test("gets data and renders some bubbles", async () => {
    mockFetchColorsApi.mockResolvedValueOnce(colorList)

    const { getByText } = render(<BubblePage />);
    const colors = getByText(/colors/i);
    expect(colors).toBeInTheDocument();
  
    const bubbles = getByText(/bubbles/i);
    expect(bubbles).toBeInTheDocument();
})