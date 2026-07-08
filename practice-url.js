const myUrl = new URL("https://example.com");

myUrl.pathname = "products";
myUrl.search = "?category=laptops";
myUrl.searchParams.set("page", "2");
myUrl.hash = "#reviews";
console.log(myUrl.href);
