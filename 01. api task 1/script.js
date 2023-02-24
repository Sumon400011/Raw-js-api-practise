

const cardHoler = document.getElementById("card-holer");
for(let per of person.result){
	// console.log("per", per)
	const div = document.createElement("div");
	div.innerHTML = `<div class="card flex flex-col bg-white rounded-md border border-gray-200 drop-shadow">
						<div class="card-header w-100 py-2 px-3 bg-slate-50 border-b border-gray-200">
					   	<p>Person Name : <span id="p-name">${per.name.common}</span></p>
						</div>
						<div class="card-body grow w-100 py-2 px-3">
							<p class="mb-2">Age : <span id="p-age">${per.age}</span></p>
							<p class="mb-2">Street : <span id="p-street">${per.address.street}</span></p>
						</div>
					</div>`;

	cardHoler.appendChild(div);

}
