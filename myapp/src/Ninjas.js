import React from 'react';

const Ninjas = ({ ninjas, deleteNinja}) => {
  //const  { ninjas } = props; // if we had props in arguments

/*   const ninjaList = ninjas.map(ninja => {
    return(
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
    ) 
  });     */

  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 24 ? (      
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        {/* IF WE CALL THE deleteNinja function LIKE THIS IT DOESN'T INVOKE ITSELF AUTOMATICALY AFTER LOADING THE PAGE. deleteNinja(ninja.id) -> wrong way */}
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
      </div>
    ) : null;
  }); 
  
  return(
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}

export default Ninjas;
