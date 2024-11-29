// Surprise button functionality
document.getElementById('surpriseButton').addEventListener('click', () => {
    Swal.fire({
      title: 'I Love You! 💕',
      text: 'Every moment with you is a treasure.',
      imageUrl: 'pic2.jpg',
      imageWidth: 300,
      imageHeight: 400,
      imageAlt: 'Cute kitten',
      confirmButtonText: 'Aww, I love you too!'
    });
  });
  
  // Rate button functionality
  document.getElementById('rateButton').addEventListener('click', () => {
    Swal.fire({
      title: 'Rate This Anniversary Celebration!',
      text: 'How would you rate this special day?',
      icon: 'question',
      input: 'range',
      inputAttributes: {
        min: 1,
        max: 5,
        step: 1
      },
      inputValue: 5,
      confirmButtonText: 'Submit Rating!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Thank You! 💖',
          text: `You rated this day ${result.value} out of 5 stars!`,
          icon: 'success',
          confirmButtonText: 'Aww, you’re the best!'
        });
      }
    });
  });
  