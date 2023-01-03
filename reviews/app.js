const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img: "./person-2.jpeg",
      text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi adipisci numquam magni aliquid ipsa iusto assumenda voluptate ab temporibus!',
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "./person-1.jpeg",
      text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi adipisci numquam magni aliquid ipsa iusto assumenda voluptate ab temporibus!',
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "./person-3.jpg",
      text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi adipisci numquam magni aliquid ipsa iusto assumenda voluptate ab temporibus!',
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "./person-4.jpg",
      text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi adipisci numquam magni aliquid ipsa iusto assumenda voluptate ab temporibus!',
    },
  ];

  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');

  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentItem = 0; 

  window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem); 
  })

  function showPerson(person){
    const item = reviews [person];
    img.src = item.img;
    author.textContent = item.name; 
    job.textContent = item.job;
    info.textContent = item.text; 
  }

  nextBtn.addEventListener('click', function(){
    currentItem++; 
    if(currentItem>3){
        currentItem = 0; 
    }
    showPerson(currentItem); 
  })
  prevBtn.addEventListener('click', function(){
    currentItem--; 
    if(currentItem < 0){
        currentItem = 3; 
    }
    showPerson(currentItem); 
  })