function Carusel() {
    return(
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://wallpapers.com/images/featured/imagenes-de-gatitos-hjlx7wqz73ofa0ss.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFJ_4GMIvK5WhwSvzwdZ782lRn8uPjga7qQw&s" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://bestfriends.org/sites/default/files/styles/image_mobile_square/public/image/WaffleLove1384sak_1.jpg?h=ebb7fe6c&itok=LPFwsJ-A" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
);
}

export default Carusel; 