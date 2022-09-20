import { bankOne, bankTwo } from "../banksStore/banks";

export function DrumPads({ bank, click }) {

    return (
        <div className="keys-div">
            <div className='p-4'>
                {bank ? bankOne.map((item, index) => <button id={item.id} key={index} className={item.keyTrigger + '-div drum-pad btn btn-dark'} onClick={() => click(item.keyTrigger, item.id)}>{item.keyTrigger} <audio className="clip" id={item.keyTrigger} src={item.url}></audio></button>) : bankTwo.map((item, index) => <button id={item.id} key={index} className={item.keyTrigger + '-div drum-pad btn btn-dark'} onClick={() => click(item.keyTrigger, item.id)}>{item.keyTrigger} <audio className="clip" id={item.keyTrigger} src={item.url}></audio></button>)}
            </div>
        </div>
    )
}