import React from 'react'

function Names({handleSubmitTwo, handleSubmitOne, name}) {
  return (
    <div className="enter-names">
    <form>
      <input defaultValue={'playerOne'} value={name} onSubmit={handleSubmitOne} id="name-one" aria-label='Player One' name='player-one' type="text"/>
      <input value={name} onSubmit={handleSubmitTwo}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    mit={(e) => setName(e.target.value)} id="name-two" aria-label='Player Two' name='player-two' type="text"/>
      <input onClick={ } type="submit" />
        </form>
        </div>
    </div>
  )
}

export default Names
