// function openPopup(event) {
//     event.preventDefault(); // Biar gak scroll ke atas
//     document.getElementById('popupOverlay').style.display = 'block';
//     document.getElementById('card-pop').style.display = 'block';
// }

// function closePopup() {
//     document.getElementById('popupOverlay').style.display = 'none';
//     document.getElementById('card-pop').style.display = 'none';
// }


function openPopup(id) {
    document.getElementById('popupOverlay').style.display = 'block';
    document.querySelectorAll('.popup-card').forEach(popup => popup.style.display = 'none');
    document.getElementById(id).style.display = 'block';
  }

  function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
    document.querySelectorAll('.popup-card').forEach(popup => popup.style.display = 'none');
  }