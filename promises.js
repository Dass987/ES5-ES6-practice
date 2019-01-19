
// --- Promises explanation
// --- ES6 code

function requestHandler(request, response) {

  // --- This is a asynchronus function with a promise

  User.findById(request.user.id)
    /* This is the promise --> */ .then(function (user) {
      return Tasks.findById(user.task.id);
    })
    /* A promise again --> */ .then(function (tasks) {
      tasks.completed = true;
      tasks.save();
    })
    /* Another promise --> */ .then(function () {
      response.send('Tasks Completed');
    })
    .catch(function (errors) {
      response.send(errors);
    });

}
