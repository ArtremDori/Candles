
/* проверка на загрузку контента */
document.addEventListener('DOMContentLoaded',() => {

      /* подложка для всплывающего меню */
      // document.querySelector('.menu__btn').addEventListener('click',function (e) {
      //       e.preventDefault();
      //       document.querySelector('.menu__inner').classList.toggle('active');
      //       document.querySelector('body').classList.toggle('fixed');
      // });




      /* запускаю считывание попадания в экран */

      const hiddenBlock = document.querySelector('.grid-item');
      const sections = document.querySelectorAll('section');




      const options = {
            root: null,
            threshold:0.3,
            rootMargin: "0px"
      };


      const observer = new IntersectionObserver(function (entries,observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                      entry.target.classList.remove('hidden');
                      console.log(entry);
                      return;}
            });
      },options);

      sections.forEach(hiddenBlock => {
            observer.observe(hiddenBlock);
      });


     //
     //  /* внутренний процент скролла */
     //  const wrapper = document.querySelector('.wrapper');
     //  const rocket = document.querySelector('#rocket');
     //
     //
     //  wrapper.addEventListener('scroll',() => {
     //        scTopPr = wrapper.scrollTop / (wrapper.offsetHeight * 6);
     //        console.log(scTopPr);
     //
     //        /* передача координат в css */
     //        if(scTopPr>0,16,() => {
     //        /* rocket.style.top = (70 * (0.2 + scrollTopPr) / 0.4) & '%' */
     //              console.log('works');
     //        });
     //  });
     //
     // /*  document.querySelector('#rocket').style.top='30' && '%'; */


    // let modalParameter= document.querySelectorAll()
    // let priceModified = 350;
    // let modalColor=0;
    // let modalPreps=0;
    //
    //
    // switch (modalColor){
    //     case 'monochrome':
    //         priceModified=parceInt(priceModified * 1,3);
    //         break;
    //
    //
    //     case 'several colors':
    //         priceModified=parceInt(priceModified * 1,5);
    //         break;
    // }


});





let items=document.getElementsByClassName("production_img");


for (let item of items) {
    item.addEventListener("click", function(){
        let selectedImage=document.getElementById("selectedImage");
        let url=item.querySelectorAll(".image")[0].src;
        selectedImage.src=url;



        let priceText=item.querySelectorAll(".product_price")[0].textContent;
        let price = parseInt(priceText);

        let modal = document.getElementById("modal");
        let priceContent=modal.querySelectorAll("#price")[0];
        priceContent.value=price;



        modal.style.display="flex";
    });
}


document.getElementById("modal__closer").addEventListener("click", ()=>{
    console.log(document.calc.modal__clr);
    document.getElementById("modal").style.display="none";
});







