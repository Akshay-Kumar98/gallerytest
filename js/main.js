"use strict"

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $('.header').addClass('sticky');
    }

    else {
      $('.header').removeClass('sticky');

    }

  });
});

$(document).ready(function () {
  $('.click-btn').click(function () {
    $('ul.sub-menu').slideToggle('slow');
    $(this).toggleClass('click-toggle')
  })

  $('.click-btn2').click(function () {
    $('ul.search-menu').toggle();
    $(this).toggleClass('click-toggle')
  })

  $(document).ready(function () {
    $('.click-btn3').click(function () {
      var submenu = $(this).next('.filter-menu');

      // Toggle the visibility of the submenu with slideDown/slideUp animation
      submenu.slideToggle();

      // Close other submenus
      $('.filter-menu').not(submenu).slideUp();
    });
  });

})

$(document).ready(function () {
  $('.filter-menu li a').click(function () {
    var value = $(this).attr('data-filter');

    if (value) {
      $('.gallery').not('.' + value).fadeOut('3000');
      $('.gallery').filter('.' + value).fadeIn('3000');
    }
    else {
      $('.gallery').fadeIn('3000');
    }
  })
})

$(document).ready(function() {
  let currentIndex = 0;
  const galleries = $('.gallery');

  $(document).on('click', '.open-modal', function(e) {
    e.preventDefault();
    const gallery = $(this).closest('.gallery');
    currentIndex = galleries.index(gallery);
    showPopup(currentIndex);
  });

  $(document).on('click', '.close-btn', function() {
    $('#imagePopup').removeClass('show');
  });

  $(document).on('click', '.prev-btn', function() {
    if (currentIndex > 0) {
      currentIndex--;
      showPopup(currentIndex);
    }
  });

  $(document).on('click', '.next-btn', function() {
    if (currentIndex < galleries.length - 1) {
      currentIndex++;
      showPopup(currentIndex);
    }
  });

  function showPopup(index) {
    const gallery = galleries.eq(index);
    const imgSrc = gallery.find('img').attr('src');
    const galleryClass = gallery.attr('class').split(' ')[1]; 

    $('#popupImage').attr('src', imgSrc);
    $('#popupHeading').text('Photo/Template Heading');
    $('#popupCategories span').text(galleryClass.charAt(0).toUpperCase() + galleryClass.slice(1));
    $('#popupSize span').text('800 x 1024 px');

    // Generate "More like this" images
    const moreImages = $('.more-images');
    moreImages.empty();
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * galleries.length);
      const randomImg = galleries.eq(randomIndex).find('img').clone();
      randomImg.removeAttr('class');
      moreImages.append(randomImg);
    }

    $('#imagePopup').addClass('show');
  }
});


