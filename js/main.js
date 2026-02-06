document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var links = document.querySelectorAll('a[href^="http"]');
  links.forEach(function (link) {
    var isSameHost = link.href.indexOf(window.location.hostname) !== -1;
    if (!isSameHost) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
