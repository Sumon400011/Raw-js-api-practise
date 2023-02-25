
console.log(data)


const cardHolder = document.getElementById("card-holder");
for(let car of data){
	// console.log("per", per)
	const div = document.createElement("div");
	div.innerHTML = `<div class="card flex flex-col bg-white rounded-md border border-gray-200 drop-shadow">
						<div class="">
							<img src="${car.imageURL}" alt="" class="max-w-full h-auto">
						</div>

						<div class="card-body grow w-100 py-2 px-3">
							<h1 class="text-xl mt-4 mb-6 font-bold">Car Name: ${car.name}</h1>
							<p class="mb-2">Street : <span id="p-detail">${car.description}</span></p>
							<button class="py-2 px-4 text-white bg-sky-600 hover:bg-sky-700 rounded-md">Car Price ${car.price}</button>
						</div>
					</div>`;

	cardHolder.appendChild(div);

}
