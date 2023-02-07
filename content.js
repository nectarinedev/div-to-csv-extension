document.body.addEventListener('mouseover', function (e) {
  e.target.style.backgroundColor = 'yellow';
});

document.body.addEventListener('mouseout', function (e) {
  e.target.style.backgroundColor = '';
});
