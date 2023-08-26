
import { useState } from "react";


const TwitterFollowCard = ({children , username ,initialIsFollow}) => {
   
   const [isFollowing, setisFollowing] = useState(initialIsFollow)
   // guardando una condicional para guardar el cambio del nombre del boton 
   const text = isFollowing ? 'siguiendo':'seguir'
   // dependendiendo del estado ,cambiara de color
   const buttoClassColor = isFollowing ? 'tw-followCard-button is-following':'tw-followCard-button' 


   const handleClick =()=>{
      setisFollowing(!isFollowing)
   }

   return (
      <article className='tw-followCard'>
         <header className='tw-followCard-header'>
            <img
               className='tw-followCard-avatar'
               src={`https://unavatar.io/${username}`}
               alt='avatar de esteban'
            />
            <div className='tw-followCard-info'>
               <strong>{children}</strong>
               <span className='tw-followCard-infoUserName'>@{username}</span>
            </div>
         </header>
         <aside>
            <button onClick={handleClick} className={buttoClassColor}>
               <span className="tw-followCard-text" >{text}</span>
               <span className="tw-followCard-stopFollow"> Dejar de Seguir</span>
            </button>
         </aside>
      </article>
   );
};
export default TwitterFollowCard;
