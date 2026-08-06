/**
 * 疯人月官网 - 交互脚本
 */

document.addEventListener('DOMContentLoaded', () => {
  initStarfield();
  initNav();
  initScrollEffects();
});

/* ---- 星空粒子 ---- */
function initStarfield() {
  const container = document.getElementById('starfield');
  if (!container) return;

  const count = 80;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 2.5 + 0.8;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const opacity = Math.random() * 0.6 + 0.15;
    const twinkleDur = Math.random() * 4 + 2;
    const twinkleDelay = Math.random() * 5;

    Object.assign(star.style, {
      position: 'absolute',
      left: x + '%',
      top: y + '%',
      width: size + 'px',
      height: size + 'px',
      borderRadius: '50%',
      background: '#d0c0f0',
      opacity: opacity,
      animation: `twinkle ${twinkleDur}s ${twinkleDelay}s ease-in-out infinite`,
    });

    frag.appendChild(star);
  }

  container.appendChild(frag);
}

/* ---- 移动端菜单 ---- */
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // 点击链接后关闭菜单
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });

  // 点击外部关闭
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
    }
  });
}

/* ---- 滚动效果 ---- */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
      navbar.style.boxShadow = '';
    }
  });
}

/* 注入闪烁动画的关键帧 */
const twinkleStyle = document.createElement('style');
twinkleStyle.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: inherit; }
    50% { opacity: 0.1; }
  }
`;
document.head.appendChild(twinkleStyle);
