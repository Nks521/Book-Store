const sequelize = require("./config/db");
const Book = require("./models/Book");

const genres = ["Romance", "Thriller", "Science Fiction", "Fantasy", "Mystery", "Biography", "Historical", "Horror", "Adventure"];
const titles = [
  "Whispers of the Heart", "Shadows in the Dark", "The Timekeeper's Secret", "Empire of Ashes", "Silent Truths",
  "Beyond the Horizon", "Echoes of the Past", "Dreamfall", "Crimson Vow", "The Lost Island"
];
const authors = ["A. Roy", "J. Smith", "L. Winters", "T. Harris", "K. Mitchell", "P. Das", "R. Kapoor", "M. Sengupta", "D. Hall", "N. Verma"];

function getRandomFloat(min, max) {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
}

async function seedBooks() {
  try {
    await sequelize.sync({ force: true }); // WARNING: Clears all existing data

    const books = [];

    for (let i = 1; i <= 100; i++) {
      const title = `${titles[Math.floor(Math.random() * titles.length)]} ${i}`;
      const author = authors[Math.floor(Math.random() * authors.length)];
      const genre = genres[Math.floor(Math.random() * genres.length)];
      const rating = getRandomFloat(3.0, 5.0);
      const price = getRandomFloat(199, 599);
      const image = `https://placehold.co/200x280?text=Book+${i}`;
      const description = `A captivating ${genre.toLowerCase()} novel that keeps you hooked from start to finish.`;

      books.push({ title, author, description, price, image });
    }

    await Book.bulkCreate(books);
    console.log("✅ 100 books inserted successfully.");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding books:", error);
    process.exit(1);
  }
}

seedBooks();
