import * as uuid from "uuid";
import * as path from "path";

class FileService {
  saveFile(file) {
    try {
      if (!file) {
        throw new Error("file not found");
      }
      if (Array.isArray(file)) {
        const fileNames = [];
        file.forEach((el) => {
          const fileName = uuid.v4() + ".jpg";
          const filePath = path.resolve("static", fileName);
          el.mv(filePath);
          fileNames.push(fileName);
        });
        return fileNames;
      } else {
        const fileName = uuid.v4() + ".jpg";
        const filePath = path.resolve("static", fileName);
        file.mv(filePath);
        return fileName;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FileService();
