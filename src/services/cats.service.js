import { axiosInstance } from "./axios.service";
import { MOCCats } from "./mocData";

class CatsService {
  instance = axiosInstance("cats");

  constructor() {
    this.instance.interceptors.response.use((response) => response.data);
  }

  getAllCats(page, limit) {
    return this.instance.get(``, { params: { page, limit } });
    // return new Promise((resolve, reject) => resolve(MOCCats));
  }

  getOneCat(id) {
    return this.instance.get(`/${id}`);
  }

  getBookedCats() {
    return this.instance.get(`/get/booked_cats`);
  }

  getNotBookedCats() {
    return this.instance.get(`/get/not_booked_cats`);
  }

  getAllBreeds() {
    return this.instance.get(`/get/get_all_breeds`);
  }

  createCat(name, price, color, nameBreed, age) {
    return this.instance.post(`/create_cat`, {
      name,
      price,
      color,
      nameBreed,
      age,
    });
  }

  addImageToCat(id) {
    return this.instance.post(`/add_image/${id}`);
  }

  createBreed(nameBreed) {
    return this.instance.post(`/create_breed`, { nameBreed });
  }

  updateCat(id, name, price, color, nameBreed) {
    return this.instance.put(`/update_cat/${id}`, {
      name,
      price,
      color,
      nameBreed,
    });
  }

  bookCat(id) {
    return this.instance.put(`/book_cat/${id}`);
  }

  unbookCat(id) {
    return this.instance.put(`/unbook_cat/${id}`);
  }

  deleteCat(id) {
    return this.instance.delete(`/delete_cat/${id}`);
  }
}

const catsService = new CatsService();

export default catsService;
