
// --- Callback explanation
// --- ES5 code

function requestHandler(request, response) {

  // --- This is a asynchronus function with a callback

  User.findById(request.user.id, /* This is the callback --> */ function (error, user) {

    // --- Here goes the handle code to do when function ends. Callback action!

    if (error) {
      response.send(error);
    } else {

      Tasks.findById(user.id, /* A callback again */ function (error, tasks) {

        if (error) {
          response.send(error);
        } else {

          tasks.completed = true;
          tasks.save(/* Another callback */ function (error) {
            if (error) {
              response.send(error);
            } else {
              response.send('Task Completed');
            }
          });

        }

      });

    }

  });
  
}
