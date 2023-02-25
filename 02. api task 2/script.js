

const cardHolder = document.getElementById("card-holder");
for(let per of person.result){
	// console.log("per", per)
	const div = document.createElement("div");
	div.innerHTML = `<div class="card flex flex-col bg-white rounded-md border border-gray-200 drop-shadow">
						<div class="">
							<img src="https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_960_720.png" alt="" class="max-w-full h-auto">
						</div>
						<div class="card-body grow w-100 py-2 px-3">
							<h1 class="text-xl mt-4 mb-6 font-bold">Car Name: Mazda</h1>
							<p class="mb-2">Age : <span id="p-age">20</span></p>
							<p class="mb-2">Street : <span id="p-detail">Lorem ipsum dolor sit amet</span></p>
							<p class="mb-2">Seats : <span id="p-seats">Lorem ipsum dolor sit amet</span></p>
							<button class="py-2 px-4 text-white bg-sky-600 hover:bg-sky-700 rounded-md">Car Price 120</button>
						</div>
					</div>`;

	cardHolder.appendChild(div);

}
