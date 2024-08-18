 function ListGroup(){
   const items = [
   ]
   const getMessage = () => {
    return items.length === 0 ? <p>No item found </p> : null
   }

   return (
     <>
     {getMessage}
     <h1>List</h1>
     <ul className="list-group">
     {items.map(item=> <li key={item}>{item}</li>)}
</ul>
</>
   )
 }

 export default ListGroup;
