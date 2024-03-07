import { readFile, writeFile } from "../../helpers/file-helpers";
const DATABASE_PATH = "/src/database.json";

function HitCounter() {
  const currentObject = JSON.parse(readFile(DATABASE_PATH));
  currentObject.hits++;
  writeFile(DATABASE_PATH, JSON.stringify(currentObject));

  return currentObject.hits;
}

export default HitCounter;
