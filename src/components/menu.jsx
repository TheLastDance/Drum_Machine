import { useEffect } from "react";


export function Menu({ power, setPower, bank, setBank, display, setDisplay, volume, setVolume }) {

    function volumeFunc(e) {
        power && setVolume(e.target.value);
    }

    useEffect(() => {
        setDisplay('Volume: ' + volume + '%');
        setTimeout(() => {
            setDisplay('');
        }, 1000)
    }, [volume, setDisplay]); //ok I dont like this solution with >= renders,but there was an issue with true/false useRef states,so for now I will use this.

    return (
        <div className="menu-div p-4 text-center">
            <div className='power-btn mt-4'>
                <div><h5 className=''>Power</h5></div>
                <div className='switch'><div style={power ? { float: 'right' } : { float: 'left' }} className='switch-btn' onClick={() => { setPower(prev => !prev) }} ></div></div>
            </div>
            <div id='display' className='display mt-2'><p>{power && display}</p></div>
            <div className='volume-div slidecontainer mt-2'> <input onChange={volumeFunc} onClick={volumeFunc} type="range" min="0" max="100" value={volume} className="slider" id="myRange" /></div>
            <div className='power-btn mt-2'>
                <div><h5 className=''>Bank</h5></div>
                <div className='switch'><div style={bank ? { float: 'right' } : { float: 'left' }} className='switch-btn' onClick={() => { setBank(prev => !prev) }} ></div></div>
            </div>
        </div>
    )
}