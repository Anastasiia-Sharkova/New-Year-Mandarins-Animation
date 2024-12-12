const body = document.body;

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  snowflake.style.left = Math.random() * 100 + 'vw';

  const duration = 4 + Math.random() * 3;
  snowflake.style.animationDuration = duration + 's';

  snowflake.style.animationDelay = Math.random() * 5 + 's';

  body.appendChild(snowflake);

  setTimeout(() => snowflake.remove(), duration * 1000);
}

setInterval(createSnowflake, 100);

const wrapper = document.getElementById('wrapper');
wrapper.addEventListener('click', function (e) {
  const newMandarin = document.createElement('div');
  newMandarin.classList.add('item');
  if (Math.random() > 0.5) newMandarin.classList.add('no-leaf');

  newMandarin.style.top = e.clientY - 35 + 'px';
  newMandarin.style.left = e.clientX - 35 + 'px';
  newMandarin.style.setProperty('--angle', `${Math.random() * 40 - 20}deg`);
  wrapper.appendChild(newMandarin);
});