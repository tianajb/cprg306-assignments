import Dog from "./dog";

export default function Page() {
 const dog1 = {
    name: "Frankie",
    breed: "Poodle",
    age: 5,

 };
 const dog2 = {
    name: "Jia",
    breed: "Pug",
    age: 4,

 };
 const dog3 = {
    name: "Coco",
    breed: "Corgi",
    age: 2,

 };
 return (
    <main className="m-4">
        <h1 className="text-4xl font-bold text-slate-300 mb-3">My Favorite Dogs</h1>
        <Dog name={dog1.name} breed={dog1.breed} age={dog1.age} />
        <Dog name={dog2.name} breed={dog2.breed} age={dog2.age} />
        <Dog name={dog3.name} breed={dog3.breed} age={dog3.age} />
        {/* <section className ="border-y-rose-400 border-2 p-2">
            <h2>{dog1.name}</h2>
            <p className ="text-teal-600">Breed: {dog1.breed}</p>
            <p className ="text-lime-500">Age: {dog1.age}</p>
        </section> 
        
        <section className ="border-y-rose-400 border-2 p-2 mt-3">
            <h2>{dog2.name}</h2>
            <p className ="text-teal-600">Breed: {dog2.breed}</p>
            <p className ="text-lime-500">Age: {dog2.age}</p>
        </section>

        <section className ="border-y-rose-400 border-2 p-2 mt-3">
            <h2>{dog3.name}</h2>
            <p className ="text-teal-600">Breed: {dog3.breed}</p>
            <p className ="text-lime-500">Age: {dog3.age}</p> 
        </section>*/}
    </main>
 )
}