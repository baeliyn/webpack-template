import User from './user.js'

async function showComments() {
  try {
    const user = await User.getUser(123);
    const courses = await User.getCourses(user.name);
    const comment = await User.getComments(courses[0]);
    console.log(comment);
  } catch (error) {
    console.log(error);
  }
}

showComments()