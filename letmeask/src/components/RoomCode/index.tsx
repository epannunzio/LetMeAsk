import copyImg from '../../assets/images/copy.svg';

import { IRoomCodeProps } from './@interfaces';

import './room-code.scss';

export function RoomCode({ code }: IRoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{code}</span>
    </button>
  )
}