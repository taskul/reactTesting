import { render, fireEvent } from "@testing-library/react";
import CoinFlip from "./CoinFlip";


beforeEach(function () {
    jest
        .spyOn(Math, "random")
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.75);
});

afterEach(function () {
    Math.random.mockRestore();
});


// smoke test
it('renders without crashing', () => {
    render(<CoinFlip />)
})

// snapshot test
it('it should match snapshot', () => {
    const { asFragment } = render(<CoinFlip />);
    expect(asFragment()).toMatchSnapshot();
})

it('should flip a coin when clicked', () => {
    const { queryByAltText, queryByTestId, debug } = render(<CoinFlip />)

    expect(queryByAltText('heads')).toBeInTheDocument();

    const coin = queryByTestId('coin')
    fireEvent.click(coin)

    expect(queryByAltText('heads')).toBeInTheDocument();

    fireEvent.click(coin)

    expect(queryByAltText('tails')).toBeInTheDocument();
})