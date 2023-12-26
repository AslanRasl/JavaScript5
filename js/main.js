var elForm = document.querySelector('.form')
var elImg  = document.querySelector('.card__img')
var elName = document.querySelector('.card__name')
var elPrice = document.querySelector('.card__price')



 elForm.addEventListener('submit',function(e) {
e.preventDefault()
elImg.src = e.target.img.value
elName.textContent = e.target.name.value
elPrice.textContent = e.target.price.value

})