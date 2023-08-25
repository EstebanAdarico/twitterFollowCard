import "./App.css";
import TwitterFollowCard from "./components/TwiteerFollowCard";
function App() {

   // const esteban ={ isFollowing :false , username : 'estebanadarico'}

   return (
      <section className='App'>
         {/* haciendo un del rest operator o spread operator */}
         {/* lo que esta haciendo es pasar cada una de las porpiedades del objeto como  prop al componente TwitterFollowCard  */}
         <TwitterFollowCard username='esteban' initialIsFollow = {true} >
            esteban
         </TwitterFollowCard>      
         <TwitterFollowCard  username='midudev'>
            midudev
         </TwitterFollowCard>

         <TwitterFollowCard  username='pedro'>
            pedro
         </TwitterFollowCard>
         <TwitterFollowCard  username='pheralb'>
            Pablo hernandez
         </TwitterFollowCard>
      </section>
   );
}

export default App;
