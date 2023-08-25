//
export default function Gif({ id, title, url }) {
   return (
      <div>
         <small>{id}:</small>
         <h4>{title}</h4>
         <img alt={title} src={url} />
      </div>
   );
}
