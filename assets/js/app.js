import { data } from "./data.js";
// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.

const btn = document.querySelector("#remove-btn");
btn.addEventListener("click", () => {
	btn.remove();
});
// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:  https://picsum.photos/id/180/2000/1600  ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).
const section = document.querySelector("#dom-changes");
const createdImg = document.createElement("img");
createdImg.setAttribute("src", "https://picsum.photos/id/180/2000/1600");
section.append(createdImg);

// 3. html-ში შექმენით <section id="products-list"></section>
const productsSection = document.querySelector("#products-list");
// 4.
//     4.1 რეპოზიტორში => data.js ფაილში ნახეთ data   მასივი რომელიც შედგება 4 ობიექტისგან. ეს მასივი გადააკოპირეთ თქვენთან, ან შემოიტანეთ ისე, როგორც ლექციაზე გავაკეთეთ.
//     4.2. data    მასივიდან .map ის საშულებით შექმენით html სტრინგი (როგორც ლექციაზე გავაკეთეთ) დიზაინი უნდა იყოს ქვემოთ ატვირთული ფოტოს მსგავსი (სტილები დაადეთ css ის საშუალებით, კლასები ჯავასკრიპტიდან).  ფოტოზე 2 ელემენტია, თქვენ ყველა უნდა გამოიტანოთ
//     4.3 ეს html სტრინგი ჩასვით ამ სექციაში: <section  id="products-list"></section  >.
//     4.4 დიზაინში  product card ზე არის სურათი, პროდუქტის სახელი, აღწერა და ფასი (ასევე ღილაკები რომელიც ბოლო დავალებისთვის გვჭირდება), თქვენ უნდა ჩასვათ  title  , stripped_descr ,   price რომელიც არის მასივის ობიექტ ელემენტში.
function renderHTML(data) {
	const forematedData = data.map(
		(el) =>
			`<div class="card">
        <img class="rounded" src='${el.photos[0].large}' alt="${el.title}" />
        <h2>${el.title}</h2>
        <div>
          <p>
            ${el.stripped_descr}
          </p>
        </div>
        <div class="wrapp price">
          <p class="">ფასი: ${el.price} ₾</p>
          <div>
            <button class="show-more">Show More</button>
            <button class="delete-card">Delete</button>
          </div>
        </div>
        <div class='category-list'>
          ${el.category_tree.map((el) => `<p>${el.title}</p>`).join("")}
        </div>
      </div>`
	);

	return forematedData.join("");
}

// const fitleredData = data.filter((el) => el.price < 100);
productsSection.innerHTML = renderHTML(data);

// 5.  (optional) #4 დავალებაში შექმნილ product   card - ზე დავამატოთ ღილაკები (წაშლა და ინფო -  ჯავასკრიპტიდან, წინა დავალებაში შექმნილ სტრინგთან ერთად, ფოტოზე როგორცაა), წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი  product card-ი, ინფო ღილაკზე დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ პროდუქტის კატეგორიები (category_tree ელემენტის title მნიშვნელობები)

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
	const deleteBtn = card.querySelector(".delete-card");
	const showMoreBtn = card.querySelector(".show-more");
	const categoryList = card.querySelector(".category-list");

	deleteBtn.addEventListener("click", () => {
		card.remove();
	});

	showMoreBtn.addEventListener("click", () => {
		categoryList.classList.toggle("active");
	});
});

const deleteBtns = document.querySelectorAll(".delete-card");

const showMoreBtns = document.querySelectorAll(".show-more");

// deleteBtns.forEach((btn, index) => {
// 	btn.addEventListener("click", (e) => {
// 		console.log("delete", btn.closest(".card"));
// 		btn.closest(".card").remove();
// 		// btn.parentElement.parentElement.parentElement.remove();
// 	});
// });

// showMoreBtns.forEach((btn, index) => {
// 	btn.addEventListener("click", (e) => {
// 		btn
// 			.closest(".card")
// 			.querySelector(".category-list")
// 			.classList.toggle("active");
// 	});
// });
