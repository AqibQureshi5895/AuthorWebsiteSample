books = [
  {
    bookno: 1,
    name: "The Daily Stoic",
    price: 24.49,
    path: "../Html/details/TheDailyStoic.html",
  },
  {
    bookno: 2,
    name: "The Obstacle Is The Way",
    price: 13.39,
    path: "../Html/details/The ObstacleIstheWay.html",
  },
  {
    bookno: 3,
    name: "Ego Is The enemy",
    price: 22.49,
    path: "../Html/details/egoistheenemy.html",
  },
  {
    bookno: 4,
    name: "Lives Of The Stoics",
    price: 28.0,
    path: "../Html/details/LivesOfStoic.html",
  },
  {
    bookno: 5,
    name: "Stillness Is The Key",
    price: 13.99,
    path: "../Html/details/StillnessIsTheKey.html",
  },
  {
    bookno: 6,
    name: "Trust Me I'm Lying",
    price: 13.99,
    path: "../Html/details/TrustMeI'mLying.html",
  },
  {
    bookno: 7,
    name: "Perrenial Seller",
    price: 13.99,
    path: "../Html/details/PerrenialSeller.html",
  },
  {
    bookno: 8,
    name: "Growth Hacker Marketing",
    price: 13.99,
    path: "../Html/details/GrowthHacker.html",
  },
];

let bookarticle = document.getElementById("book-article");
for (let book of books) {
  let bookName, price, description;

  let section = document.createElement("section");
  let bookNo = book.bookno;

  var img = document.createElement("img");
  img.src = "../images/book/book" + bookNo + ".jpg";

  section.appendChild(img);

  bookName = book.name;
  price = book.price;
  description = book.description;

  let title = document.createElement("h2");
  title.innerHTML = book.name;
  section.appendChild(title);

  let author = document.createElement("span");
  author.innerHTML = "by Ryan Holiday";
  author.style.color = "green";
  author.style.fontSize = "13px";
  section.appendChild(author);

  let money = document.createElement("span");
  money.innerHTML = "Price: " + book.price + " $";
  money.style.color = "red";
  money.style.fontWeight = "500px";
  money.style.fontSize = "16px";

  section.appendChild(money);
  let button = document.createElement("button");
  button.innerHTML = " Buy Now";

  button.setAttribute("onclick", "doSomething();"); // for FF
  button.onclick = function () {
    location.href = book.path;
  };
  section.appendChild(button);

  bookarticle.appendChild(section);
}
