import React,{useState} from 'react'
import './Card.css';
import TinderCard from 'react-tinder-card';
function Card() {
    const [people,setPeople] = useState(
        [{
            name:'',
            url:'https://i.pinimg.com/originals/16/1c/7e/161c7e0ed927efdb43a6991542c9d791.gif',
            Age:25,
        },
            { name: 'ryan reynolds',
                Age:33,
              url:'https://smartcdn.prod.postmedia.digital/vancouversun/wp-content/uploads/2020/04/1139260133.jpg'
            },
           { name: 'Will Smith',
             Age:40,
            url:'https://media.wired.com/photos/5d960eba01e4a4000826137c/master/pass/Culture_Monitor_WillSmith-465783654.jpg'
          },
          { name: 'Gal Gadot',
          Age:35,
         url:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIirpD2vGdLM9tHnIoY0sv-PXxtHLy8Jz_1g&usqp=CAU'
       },
       { name: 'Tom Cruise',
       Age:45,
      url:'https://media.npr.org/assets/img/2020/05/05/gettyimages-693140990_custom-96572767b03e0e649349fdb6d38d649e6ccaed75.jpg'
    },
    { name: 'Dwayne Johnson',
    Age:39,
   url:'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/931/524/dwayne-johnson-45a.jpg?ve=1&tl=1'
 },
             { name: 'emily blunt',
             Age:33,
            url:'https://media1.popsugar-assets.com/files/thumbor/H55NTt0CjO6zP_EzMgaenh27VKQ/13x215:3516x3718/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/03/981/n/1922398/1c6ba0085e5edb2ca06156.71452790_/i/Emily-Blunt.jpg'
          }
 
        ]
    );
    const swiped =(direction, nameToDelete)=>{
        console.log("removing"+nameToDelete);
        //setLastDirection(direction);
    };
    const outOfFrame=(name)=>{
        console.log(name+"left the screen");
    }
    return (
        <div className="card">
            {people.map((person)=> (
                <TinderCard
                className='card__tinderCardContainer'
                key={person.name}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={()=> outOfFrame(person.name)}  preventSwipe={['up', 'down']}>
                    <div className="card__image"
                        style={{ backgroundImage: `url(${person.url})`}}>
                                        <h3>{person.name} ({person.Age})</h3>

                    </div>
                </TinderCard>
            ))}
        </div>
    );
}

export default Card
