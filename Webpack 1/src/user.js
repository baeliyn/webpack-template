export default class User {
    static getUser(id) {
    console.log(`user ${id}'s informations are fetching`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "bera", id: id });
      }, 2000);
    });
  }

  static getCourses(username) {
    console.log(`${username}'s courses are fetching`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(["java", "js", "flutter"]);
      }, 2000);
    });
  }

  static getComments(course) {
    console.log(`${course} comments`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("great!");
      }, 2000);
    });
  }
}
