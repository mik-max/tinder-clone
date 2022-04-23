import React, {useState, useEffect} from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
const baseUrl = ' https://tinder-api-backend.herokuapp.com/' // Hosted api link
function TinderCards() {
     const [people, setPeople] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     useEffect(() => {
       const fetchData = async() => {
          setIsLoading(true)
          try{
               fetch(`${baseUrl}tinder/cards`).then(response =>{return response.json()}).then((data) => {
                    setPeople(data);
                    //console.log(data);
               })
          }
          catch(error){
             setIsLoading(false);
          }
       }
       fetchData();
     }, [])
     

     const swiped = (direction, nameToDelete) =>{
          console.log('removing ' + nameToDelete);
          // setLastDirection(direction)
     }
     const outOfFrame = (name) => {
          console.log(name + " has just left the screen")
     }
  return (
    <div className='tinderCards'>
         <div className = 'tinderCards__cardContainer'>
               {people.map((person) =>(
                    <TinderCard 
                         className='swipe'
                         key={person._id}
                         preventSwipe={['up', 'down']}
                         onSwipe = {dir => swiped(dir, person.name)}
                         onCardLeftScreen = {() => outOfFrame(person.name)}
                    >
                         <div style={{backgroundImage: `url(${person.imgUrl})`}} className = 'card'>
                              <h3>{person.name}</h3>
                         </div>
                    </TinderCard>
               ))}
         </div>
    </div>
    
  )
}

export default TinderCards