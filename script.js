const now = new Date();
const year = now.getFullYear();
const footerText = document.querySelector('.site-footer p');
if (footerText) {
  footerText.textContent = `© ${year} LearnStep. 初学者向け学習サービス。`;
}
