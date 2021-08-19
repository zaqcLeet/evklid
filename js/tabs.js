document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.how-do__list-item-link').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path;

      // Изменение цвета

      document.querySelectorAll('.how-do__list-item-link').forEach(function(tabColor) {
        tabColor.classList.remove('enabled-step')
      })
      event.currentTarget.classList.add('enabled-step')

      // Изменение текста

      document.querySelectorAll('.how-do__content-container').forEach(function(tabContent) {
        tabContent.classList.remove('enabled')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('enabled')

      // Изменение картинки

      document.querySelectorAll('.how-do__img-container').forEach(function(tabImg) {
        tabImg.classList.remove('enabled')
      })
      document.querySelector(`[data-target-img="${path}"]`).classList.add('enabled')
    })
  })
})
