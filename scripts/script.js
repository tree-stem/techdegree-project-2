
// Function created to insert and append the necessary elements for student page display

studentsPerPage = 9;

function showPage(list, page) {
   const start = (page * studentsPerPage) - studentsPerPage;
   const end = page * studentsPerPage;

   const studentList = document.getElementsByClassName('student-list')[0];
   studentList.innerHTML = '';

   for ( let i = 0; i < list.length; i++ ) {
      if ( i >=start && i < end ) {
         const html = `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture['large']}" alt="Profile Picture">
           <h3>${list[i].name['first']} ${list[i].name['last']}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">${list[i].registered['date']}</span>
         </div>
       </li>`;

         studentList.innerHTML += html;   
      }    
   }
};


// Function created to insert and append necessary elements for pagination buttons

function addPagination (list) {
   const numberOfButtons = Math.ceil(list.length/studentsPerPage);
   const paginationList = document.querySelector('.link-list');
   paginationList.innerHTML = '';

   for ( let i = 1; i <= numberOfButtons; i++ ) {
      const html = 
         `<li>
            <button type="button">${i}</button>
         </li>`;
      paginationList.insertAdjacentHTML('beforeend', html);
      }
      
paginationList.querySelector('button').classList.add('active');
     
paginationList.addEventListener('click', (e) => {
   const activeButton = paginationList.querySelector('.active');
   const buttonClicked = e.target.closest('button');
      if (activeButton && buttonClicked) {
         activeButton.classList.remove('active');
         }

      if (buttonClicked) {
         buttonClicked.classList.add('active');
         showPage(list, buttonClicked.innerHTML);
         }
      }
)};     

// Functions called 

showPage(data, 1);
addPagination(data);