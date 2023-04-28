


const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


// const movies = [
//   {
//     title : "Ant-man and the Wasp: Quantumania",
//     img : "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
//     year : 2023,
//     url : "./files/movies/antman_3.html"
//   }
// ]

 let search_result_box = document.getElementsByClassName('search-result-box')[0];
 let search_input = document.getElementById('search-input');


// window.addEventListener('load', ()=>{
//   movies.forEach(element => {
//     const {img, title, year, url } = element ;

//     let card = document.createElement('a');
//     card.href = url;
//     card.innerHTML = `<img src="${img}" alt="">
//     <div class="details">
//       <h6>${title}</h6>
//       <p>${year}</p>
//     </div>` ;

//     search_result_box.appendChild(card);
//   })
// })


let json_url = "./files/js/search-movie.json"

fetch(json_url).then(Response => Response.json())
  .then((data) => {

    //serch data load
    data.forEach(element => {
      let { title, year, poster, url } = element;
      let card = document.createElement('a');
      card.classList.add('card');
      card.href = url;
      card.innerHTML = `
      <img src="${poster}" alt="">
                    <div class="details">
                      <h6>${title}</h6>
                      <p>${year}</p>
                    </div>`

      search_result_box.appendChild(card);
    });

    //search filter
    search_input.addEventListener('keyup', ()=>{
      let filter = search_input.value.toUpperCase();
      let a = search_result_box.getElementsByTagName('a');

      for (let index = 0; index < a.length; index++) {
        let b = a[index].getElementsByClassName('details')[0];
        // console.log(a.textContent)
        let TextValue = b.textContent || b.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1){
          a[index].style.display = "flex";
          search_result_box.style.visibility = "visible";
          search_result_box.style.opacity = 1;
        } else{
          a[index].style.display = "none";
        }
        if (search_input.value == 0) {
          search_result_box.style.visibility = "hidden";
          search_result_box.style.opacity = 0;
        }
      }

    })

  });