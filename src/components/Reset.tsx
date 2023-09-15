import Reset from '@/types/props/ResetProps';

function ResetButton({reset}: Reset) {
  
    return (
    <div className="sub-container reset-container">
      <button className="btn reset-btn" onClick={reset}> </button>
    </div>
  )
}

export default Reset;