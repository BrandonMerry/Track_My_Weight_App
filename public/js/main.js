const cells = document.querySelectorAll('.cell');
const weightItem = document.querySelectorAll('span.not');
const weightComplete = document.querySelectorAll('span.completed');

Array.from(cells).forEach((el) => {
  el.addEventListener('click', deleteWeight);
});

// Array.from(weightItem).forEach((el) => {
//   el.addEventListener('click', markComplete);
// });

// Array.from(weightComplete).forEach((el) => {
//   el.addEventListener('click', markIncomplete);
// });

async function deleteWeight() {
  const weightId = this.dataset.id;
  try {
    const response = await fetch('weights/deleteWeight', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        weightIdFromJSFile: weightId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const weightId = this.parentNode.dataset.id;
  try {
    const response = await fetch('weights/markComplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        weightIdFromJSFile: weightId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const weightId = this.parentNode.dataset.id;
  try {
    const response = await fetch('weights/markIncomplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        weightIdFromJSFile: weightId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

$('.message a').click(function () {
  $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
});
