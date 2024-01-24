export default function Item({name, quantity, category}){
    return  (
    <section className ="border-y-gray-500 border-2 p-2 mb-3 w-80">
        <h2 className ="text-teal-600 text-xl font-bold">{name}</h2>
        <p>Buy {quantity} in {category}</p>
    </section>
    //  className ="text-teal-600"
    //  <h2 className ="text-pink-500">{name}</h2>
    );
}
