
// --- Asycn-await explanation
// --- ES6 code

async function requestHandler(request, response) {

  // --- This is a asynchronus function with async-await

  try{

    const user await User.findById(request.userid);

    const tasks = await Tasks.findById(user.tasksId);

    tasks.completed = true;
    await tasks.save();

    response.send('Tasks Completed');

  } catch(e) {

    response.send(e);

  }

}
