(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    // 2.1.2
    answer.innerText = "Loading...";
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        // 2.1.1
        answer.innerText = JSON.stringify(array, null, 4);
      })
  })

  // 2.1.3
  cw1.addEventListener("click", function () {
    answer.innerText = "Loading...";
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerText = JSON.stringify(array, null, 4);
      })
  })

  // 2.1.4
  cw2.addEventListener("click", function () {
    answer.innerText = "Processing...";
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: "sent_title",
        body: "sent_body",
        userId: 12351445234
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerText = JSON.stringify(array, null, 4);
      })
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
