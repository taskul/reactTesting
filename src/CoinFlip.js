import { useState } from "react";
import heads from './heads.png';
import tails from './tails.png';

const CoinFlip = (props) => {
    const [coin, setCoin] = useState(heads);
    const [coinCaption, setCoinCaption] = useState('heads');
    const [headCount, setHeadCount] = useState(0);
    const [tailCount, setTailCount] = useState(0);
    const [totalFlilps, setTotalFlips] = useState(0);

    const choice = (arr) => {
        const idx = Math.floor(Math.random() * arr.length)
        return arr[idx]
    }
    const flipCoin = () => {
        const coin = choice(props.coin)
        setTotalFlips(totalFlilps + 1)
        if (coin.caption === 'heads') {
            setHeadCount(headCount + 1)
            setCoinCaption('heads')
        } else {
            setTailCount(tailCount + 1)
            setCoinCaption('tails')
        }
        setCoin(coin.src)
    }
    return (
        <div>
            <img src={coin} onClick={flipCoin} alt={coinCaption} data-testid="coin" />
            <p>Out of {totalFlilps}, there have been {headCount} heads and {tailCount} tails.</p>
        </div>
    )
}

CoinFlip.defaultProps = {
    coin: [
        {
            src: heads,
            caption: 'heads'
        },
        {
            src: tails,
            caption: 'tails'
        }
    ]
}

export default CoinFlip;