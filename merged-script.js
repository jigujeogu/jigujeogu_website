document.addEventListener('DOMContentLoaded', () => {
  // Chrome Web Store URL for JIGUGEOJU Extension
  const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/%EC%B6%A9%EB%8F%99%EA%B5%AC%EB%A7%A4-%EB%B0%A9%EC%A7%80%ED%84%B1/ecdidmcioncgambjjngjbpchfkpngfgj';

  // 1. Device Viewport Frame Mode Switcher
  const ipadContainer = document.getElementById('ipad-container-1');
  const toggleFrameBtn = document.getElementById('toggle-frame-btn');

  if (toggleFrameBtn && ipadContainer) {
    toggleFrameBtn.addEventListener('click', () => {
      ipadContainer.classList.toggle('full-screen-mode');
    });
  }

  // 2. Button Action Handlers
  const btnDownload1 = document.getElementById('btn-download-1');
  const btnDownload2 = document.getElementById('btn-download-2');
  const btnExtension = document.getElementById('btn-extension');

  if (btnDownload1) {
    btnDownload1.addEventListener('click', () => {
      const target = document.getElementById('page-section-2');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (btnDownload2) {
    btnDownload2.addEventListener('click', () => {
      const target = document.getElementById('page-section-9');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (btnExtension) {
    btnExtension.addEventListener('click', () => {
      const target = document.getElementById('page-section-7');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 3. Mouse Eye Tracking for Jeogu Mascot (Page 1), Page 2 Earth, & Page 7 Jeogu Mascot
  let eyeTrackingRafPending = false;
  let currentMouseX = 0;
  let currentMouseY = 0;

  document.addEventListener('mousemove', (e) => {
    currentMouseX = e.clientX;
    currentMouseY = e.clientY;
    
    if (!eyeTrackingRafPending) {
      eyeTrackingRafPending = true;
      requestAnimationFrame(updateEyes);
    }
  });

  function updateEyes() {
    eyeTrackingRafPending = false;
    
    // Do not interfere with mobile CSS auto-animations
    if (window.innerWidth <= 768) return;

    const mouseX = currentMouseX;
    const mouseY = currentMouseY;

    // --- BATCH DOM READS (Prevents Layout Thrashing / Lag) ---
    const jeoguHeroSvg = document.getElementById('jeogu-hero-svg');
    const sec2EarthSvg = document.getElementById('sec2-earth-svg');
    const sec7JeoguSvg = document.getElementById('sec7-jeogu-svg');

    const jeoguRect = jeoguHeroSvg ? jeoguHeroSvg.getBoundingClientRect() : null;
    const earthRect = sec2EarthSvg ? sec2EarthSvg.getBoundingClientRect() : null;
    const jeogu7Rect = sec7JeoguSvg ? sec7JeoguSvg.getBoundingClientRect() : null;

    // --- BATCH DOM WRITES ---
    // A. Jeogu Mascot Eye Tracking (Page 1)
    if (jeoguRect && jeoguRect.width > 0 && jeoguRect.height > 0) {
      const scaleX = jeoguRect.width / 309;
      const scaleY = jeoguRect.height / 136;
      const eyeCenterLeft = { x: 141.378, y: 43.0874 };
      const eyeCenterRight = { x: 167.394, y: 43.0874 };

      const leftPupil = jeoguHeroSvg.querySelector('.left-pupil');
      const rightPupil = jeoguHeroSvg.querySelector('.right-pupil');

      if (leftPupil) {
        const eyeX = jeoguRect.left + eyeCenterLeft.x * scaleX;
        const eyeY = jeoguRect.top + eyeCenterLeft.y * scaleY;
        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        const dist = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        const maxMove = 7 * scaleX;
        const r = Math.min(maxMove, dist / 50); // Adjusted sensitivity divisor
        leftPupil.style.transform = `translate(${(r * Math.cos(angle)).toFixed(2)}px, ${(r * Math.sin(angle)).toFixed(2)}px)`;
      }

      if (rightPupil) {
        const eyeX = jeoguRect.left + eyeCenterRight.x * scaleX;
        const eyeY = jeoguRect.top + eyeCenterRight.y * scaleY;
        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        const dist = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        const maxMove = 7 * scaleX;
        const r = Math.min(maxMove, dist / 50); // Adjusted sensitivity divisor
        rightPupil.style.transform = `translate(${(r * Math.cos(angle)).toFixed(2)}px, ${(r * Math.sin(angle)).toFixed(2)}px)`;
      }
    }

    // B. Page 2 Earth Mascot Pupil Tracking (sec2-earth-svg)
    if (earthRect && earthRect.width > 0 && earthRect.height > 0) {
      const scaleX = earthRect.width / 653;
      const scaleY = earthRect.height / 653;
      const eyeCenterLeft = { x: 301.65, y: 223.89 };
      const eyeCenterRight = { x: 352.42, y: 223.89 };

      const leftPupil = sec2EarthSvg.querySelector('.left-pupil');
      const rightPupil = sec2EarthSvg.querySelector('.right-pupil');

      if (leftPupil) {
        const eyeX = earthRect.left + eyeCenterLeft.x * scaleX;
        const eyeY = earthRect.top + eyeCenterLeft.y * scaleY;
        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        const dist = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        const maxMove = 14 * scaleX;
        const r = Math.min(maxMove, dist / 30); // Adjusted sensitivity divisor
        leftPupil.style.transform = `translate(${(r * Math.cos(angle)).toFixed(2)}px, ${(r * Math.sin(angle)).toFixed(2)}px)`;
      }

      if (rightPupil) {
        const eyeX = earthRect.left + eyeCenterRight.x * scaleX;
        const eyeY = earthRect.top + eyeCenterRight.y * scaleY;
        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        const dist = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        const maxMove = 14 * scaleX;
        const r = Math.min(maxMove, dist / 30); // Adjusted sensitivity divisor
        rightPupil.style.transform = `translate(${(r * Math.cos(angle)).toFixed(2)}px, ${(r * Math.sin(angle)).toFixed(2)}px)`;
      }
    }

    // C. Page 7 Jeogu Mascot Pupil Tracking (sec7-jeogu-svg)
    if (jeogu7Rect && jeogu7Rect.width > 0 && jeogu7Rect.height > 0) {
      const scaleX = jeogu7Rect.width / 238;
      const scaleY = jeogu7Rect.height / 103;
      const eyeCenterLeft = { x: 111.051, y: 26.0286 };
      const eyeCenterRight = { x: 137.871, y: 26.0286 };

      const leftPupil = sec7JeoguSvg.querySelector('.left-pupil');
      const rightPupil = sec7JeoguSvg.querySelector('.right-pupil');

      if (leftPupil) {
        const eyeX = jeogu7Rect.left + eyeCenterLeft.x * scaleX;
        const eyeY = jeogu7Rect.top + eyeCenterLeft.y * scaleY;
        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        const dist = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        const maxMove = 6.5 * scaleX;
        const r = Math.min(maxMove, dist / 70); // Adjusted sensitivity divisor (was 16)
        leftPupil.style.transform = `translate(${(r * Math.cos(angle)).toFixed(2)}px, ${(r * Math.sin(angle)).toFixed(2)}px)`;
      }

      if (rightPupil) {
        const eyeX = jeogu7Rect.left + eyeCenterRight.x * scaleX;
        const eyeY = jeogu7Rect.top + eyeCenterRight.y * scaleY;
        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        const dist = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);
        const maxMove = 6.5 * scaleX;
        const r = Math.min(maxMove, dist / 70); // Adjusted sensitivity divisor (was 16)
        rightPupil.style.transform = `translate(${(r * Math.cos(angle)).toFixed(2)}px, ${(r * Math.sin(angle)).toFixed(2)}px)`;
      }
    }
  }

  // 4. PAGE 4 INTERACTIVE CARD DECK SLIDE-OUT DISAPPEARANCE & LEFT-TO-RIGHT RESET
  const valueCardDeck = document.getElementById('value-card-deck');
  const indicatorDots = document.querySelectorAll('.indicator-dot');

  if (valueCardDeck) {
    let step = 0; // 0 (Card 1 front), 1 (Card 2 front), 2 (Card 3 front)
    const cards = Array.from(valueCardDeck.querySelectorAll('.value-card'));
    const totalCards = cards.length;
    let isAnimating = false;

    function updateCardStackClasses() {
      cards.forEach((card, idx) => {
        if (card.classList.contains('slide-out-right') || card.classList.contains('reset-prepare-left')) {
          card.classList.remove('active-front-card', 'active-front', 'behind-card-1', 'behind-card-2', 'card-middle', 'card-back');
          return;
        }

        card.classList.remove('active-front-card', 'active-front', 'behind-card-1', 'behind-card-2', 'card-middle', 'card-back', 'reset-fly-in');

        if (idx === step) {
          card.classList.add('active-front-card');
        } else if (idx === (step + 1) % totalCards) {
          card.classList.add('behind-card-1');
        } else {
          card.classList.add('behind-card-2');
        }
      });
      updateDots(step);
    }

    function updateDots(activeIdx) {
      if (indicatorDots.length > 0) {
        indicatorDots.forEach((dot, idx) => {
          dot.classList.toggle('active-dot', idx === activeIdx);
        });
      }
    }

    function handleDeckClick() {
      if (isAnimating) return;
      isAnimating = true;

      if (step < totalCards - 1) {
        const cardToSlide = cards[step];
        cardToSlide.classList.add('slide-out-right');
        
        step++;
        updateCardStackClasses();

        setTimeout(() => {
          isAnimating = false;
        }, 550);
      } else {
        const lastCard = cards[step];
        lastCard.classList.add('slide-out-right');

        setTimeout(() => {
          cards.forEach((card) => {
            card.classList.remove('slide-out-right', 'active-front-card', 'behind-card-1', 'behind-card-2', 'reset-fly-in');
            card.classList.add('reset-prepare-left');
          });

          void valueCardDeck.offsetWidth;

          step = 0;
          cards.forEach((card, idx) => {
            setTimeout(() => {
              card.classList.remove('reset-prepare-left');
              card.classList.add('reset-fly-in');
              if (idx === 0) card.classList.add('active-front-card');
              else if (idx === 1) card.classList.add('behind-card-1');
              else card.classList.add('behind-card-2');
            }, idx * 90);
          });

          updateDots(0);

          setTimeout(() => {
            isAnimating = false;
          }, 700);
        }, 550);
      }
    }

    valueCardDeck.addEventListener('click', handleDeckClick);

    indicatorDots.forEach((dot, dotIdx) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isAnimating) return;

        if (dotIdx === 0 && step !== 0) {
          isAnimating = true;
          cards.forEach((card) => {
            card.classList.remove('slide-out-right', 'active-front-card', 'behind-card-1', 'behind-card-2', 'reset-fly-in');
            card.classList.add('reset-prepare-left');
          });
          void valueCardDeck.offsetWidth;
          step = 0;
          cards.forEach((card, idx) => {
            setTimeout(() => {
              card.classList.remove('reset-prepare-left');
              card.classList.add('reset-fly-in');
              if (idx === 0) card.classList.add('active-front-card');
              else if (idx === 1) card.classList.add('behind-card-1');
              else card.classList.add('behind-card-2');
            }, idx * 90);
          });
          updateDots(0);
          setTimeout(() => { isAnimating = false; }, 700);
        } else if (dotIdx > step) {
          handleDeckClick();
        }
      });
    });

    updateCardStackClasses();
  }

  // 5. PAGE 7 4-SCREEN INTERACTION
  const sec7Dots = document.querySelectorAll('.sec7-dot');
  const sec7PrevBtn = document.getElementById('sec7-prev-btn');
  const sec7NextBtn = document.getElementById('sec7-next-btn');
  const sec7SubtitleText = document.getElementById('sec7-subtitle-text');
  const sec7SpeechText = document.getElementById('sec7-speech-text');
  const sec7SpeechHidden = document.getElementById('sec7-speech-hidden');
  const sec7VideoElems = [
    document.getElementById('sec7-monitor-video-0'),
    document.getElementById('sec7-monitor-video-1'),
    document.getElementById('sec7-monitor-video-2'),
    document.getElementById('sec7-monitor-video-3')
  ];

  if (sec7Dots.length > 0 || sec7SubtitleText || sec7SpeechText) {
    let sec7Step = 0; // 0 (Screen 1), 1 (Screen 2), 2 (Screen 3), 3 (Screen 4)
    let typingTimeout;

    function playTypingEffect(element, htmlString) {
      clearTimeout(typingTimeout);
      element.innerHTML = '';
      
      const tokens = [];
      let i = 0;
      while (i < htmlString.length) {
        if (htmlString[i] === '<') {
          let tag = '';
          while (i < htmlString.length && htmlString[i] !== '>') {
            tag += htmlString[i];
            i++;
          }
          if (i < htmlString.length) {
            tag += htmlString[i];
            i++;
          }
          tokens.push(tag);
        } else {
          tokens.push(htmlString[i]);
          i++;
        }
      }

      let currentStep = 0;
      function typeNext() {
        if (currentStep < tokens.length) {
          element.innerHTML += tokens[currentStep];
          currentStep++;
          if (tokens[currentStep - 1].startsWith('<')) {
            typeNext();
          } else {
            typingTimeout = setTimeout(typeNext, 30);
          }
        }
      }
      typeNext();
    }

    const sec7Subtitles = [
      '충동구매를 부추기는 다크패턴 문구 마스킹',
      '결제 전 한 번 더 생각하게 만드는 넛지 메시지',
      '담은 만큼 쌓이는 눈에 보이는 장바구니',
      '시각적 자극을 줄여주는 흑백 모드'
    ];

    const sec7Speeches = [
      `'마지막 3일', '재고 한정'처럼<br>소비자를 조급하게 만드는 문구를<br>가려줘요. 내용이 궁금하면<br>커서를 올려 확인할 수 있습니다.`,
      `쇼핑을 시작하면 쇼핑몰에 어떤<br>다크패턴이 존재하는지 알려줘요!<br>결제 직전에는 여러분의 소비가<br>지구에 남길 영향을 알려주며 정말<br>필요한 소비인지 확인시켜줄게요.`,
      `장바구니에 담은 상품 개수에 따라<br>물건이 실시간으로 쌓이는 모습을 보여줘요!<br>소비하는 양을 직관적으로 인식할 수 있죠.<br>쌓인 물건이 결제버튼을 가려도<br>클릭 한 번이면 버튼이 다시 드러나요.`,
      `자극적인 컬러는 판단력을 흐리게 만들죠!<br>이러한 시각 자극을 차단해 더욱<br>신중하게 소비하도록 도와줄게요!<br>클릭 한 번이면 간편하게<br>흑백/컬러 모드를 전환할 수 있어요.`
    ];

    const sec7VideoConfigs = [
      { src: 'assets/video/07-1-darkpattern-masking.mp4', startTime: 4.0 },
      { src: 'assets/video/07-2-nudge.mp4', startTime: 3.0 },
      { src: 'assets/video/07-3-shoppingcart.mp4', startTime: 1.0 },
      { src: 'assets/video/07-4-blackwhite.mp4', startTime: 4.0 }
    ];

    function goToSec7Step(index) {
      sec7Step = (index + 4) % 4;

      if (sec7Dots.length > 0) {
        sec7Dots.forEach((dot, idx) => {
          dot.classList.toggle('active-dot', idx === sec7Step);
        });
      }

      if (sec7SubtitleText) {
        sec7SubtitleText.innerHTML = sec7Subtitles[sec7Step] || '';
      }

      const speechHtml = sec7Speeches[sec7Step] || '';

      if (sec7SpeechHidden) {
        sec7SpeechHidden.innerHTML = speechHtml;
      }

      if (sec7SpeechText) {
        playTypingEffect(sec7SpeechText, speechHtml);
      }

      sec7VideoElems.forEach((vid, idx) => {
        if (!vid) return;
        if (idx === sec7Step) {
          vid.classList.add('active');
          vid.play().catch(() => {});
        } else {
          vid.classList.remove('active');
        }
      });
    }

    sec7VideoElems.forEach((vid, idx) => {
      if (vid) {
        vid.addEventListener('timeupdate', () => {
          const config = sec7VideoConfigs[idx];
          if (config && config.startTime > 0) {
            if (vid.currentTime < 0.25 && !vid.seeking) {
              try { vid.currentTime = config.startTime; } catch (e) {}
            }
          }
        });
      }
    });

    if (sec7PrevBtn) {
      sec7PrevBtn.addEventListener('click', () => {
        goToSec7Step(sec7Step - 1);
      });
    }

    if (sec7NextBtn) {
      sec7NextBtn.addEventListener('click', () => {
        goToSec7Step(sec7Step + 1);
      });
    }

    sec7Dots.forEach((dot, dotIdx) => {
      dot.addEventListener('click', () => {
        goToSec7Step(dotIdx);
      });
    });


    // Set up observer for page 7 animations

    // Trigger typing effect when scrolled into view
    const sec7Observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          goToSec7Step(sec7Step); // Play typing effect for current step
          observer.unobserve(entry.target); // Play only once per load to prevent scroll lag
        }
      });
    }, { threshold: 0.15, rootMargin: "-15% 0px -15% 0px" });
    
    const sec7Section = document.getElementById('page-section-7');
    if (sec7Section) {
      sec7Observer.observe(sec7Section);
    } else {
      goToSec7Step(0); // Fallback
    }

  }

  // ==========================================================================
  // PAGE 9: RECEIPT DISPENSER ANIMATION (NO SOUND EFFECT)
  // ==========================================================================
  const sec9Paper = document.getElementById('sec9-receipt-paper');
  const sec9PrinterSlot = document.getElementById('sec9-printer-slot');
  const sec9ReprintBtn = document.getElementById('sec9-reprint-btn');

  function triggerReceiptPrint() {
    if (!sec9Paper) return;
    sec9Paper.classList.remove('is-printed');
    void sec9Paper.offsetWidth; // Force reflow
    sec9Paper.classList.add('is-printed');
  }

  if (sec9Paper) {
    // Auto-trigger print animation on page load

    const sec9Observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerReceiptPrint();
          observer.unobserve(entry.target); // Play only once per load to prevent scroll lag
        }
      });
    }, { threshold: 0.15, rootMargin: "-15% 0px -15% 0px" });
    
    const sec9Section = document.getElementById('page-section-9');
    if (sec9Section) {
      sec9Observer.observe(sec9Section);
    } else {
      setTimeout(triggerReceiptPrint, 350); // Fallback
    }


    if (sec9PrinterSlot) {
      sec9PrinterSlot.addEventListener('click', triggerReceiptPrint);
    }
    if (sec9ReprintBtn) {
      sec9ReprintBtn.addEventListener('click', triggerReceiptPrint);
    }
  }

  const cssAnimationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-animated');
        observer.unobserve(entry.target); // Play only once per load to prevent scroll lag
      }
    });
  }, { threshold: 0.15, rootMargin: "-15% 0px -15% 0px" });

  // Page 3 is very tall on mobile. 
  // We use the same rootMargin approach so it triggers when it reaches the meaningful middle area.
  const page3AnimationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "-15% 0px -15% 0px" });
  
  const page3 = document.getElementById('page-section-3');
  const page5 = document.getElementById('page-section-5');
  if (page3) page3AnimationObserver.observe(page3);
  if (page5) cssAnimationObserver.observe(page5);

  // ==========================================================================
  // FULLSCREEN TOGGLE (DOUBLE-TAP / DOUBLE-CLICK) FOR IPAD EXHIBITION
  // ==========================================================================
  let lastTapTime = 0;

  function isInteractiveElement(element) {
    if (!element) return false;
    // Check if the target is an interactive element to avoid blocking its default action
    return !!element.closest('button, a, input, select, textarea, [role="button"], .indicator-dot, .nav-btn, .sec8-seek-track, .sec8-volume-track, .sec9-printer-slot-wrapper');
  }

  function toggleFullscreen() {
    console.log('[Fullscreen] Toggle requested!');
    const docEl = document.documentElement;
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;

    if (!isFullscreen) {
      console.log('[Fullscreen] Entering fullscreen mode...');
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().then(() => {
          console.log('[Fullscreen] Successfully entered standard requestFullscreen.');
        }).catch(err => {
          console.error('[Fullscreen ERROR] requestFullscreen failed:', err.message, err.name);
          console.warn('[Fullscreen] Note: Fullscreen API often fails when running locally via "file://". It will work correctly once hosted on HTTPS (like GitHub Pages).');
        });
      } else if (docEl.webkitRequestFullscreen) { // Safari/iPad
        console.log('[Fullscreen] Using webkitRequestFullscreen...');
        docEl.webkitRequestFullscreen();
      } else if (docEl.msRequestFullscreen) { // IE/Edge
        console.log('[Fullscreen] Using msRequestFullscreen...');
        docEl.msRequestFullscreen();
      } else {
        console.warn('[Fullscreen ERROR] No supported fullscreen API found on this browser.');
      }
    } else {
      console.log('[Fullscreen] Exiting fullscreen mode...');
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { // Safari/iPad
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
  }

  // Handle double-click for desktop mouse users
  document.addEventListener('dblclick', (e) => {
    if (isInteractiveElement(e.target)) return;
    console.log('[Fullscreen] Double-click detected on Desktop!');
    toggleFullscreen();
  });

  // Handle double-tap for touch devices (iPad)
  document.addEventListener('touchend', (e) => {
    // If it's an interactive element, ignore the double tap
    if (isInteractiveElement(e.target)) {
      lastTapTime = 0; // Reset tap time to prevent accidental double-tap on subsequent background tap
      return;
    }
    
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapTime;
    
    if (tapLength > 0 && tapLength < 350) {
      // It's a double tap
      console.log('[Fullscreen] Double-tap detected on Touch device!');
      // On some iOS versions, preventDefault avoids the default double-tap-to-zoom behavior
      if (e.cancelable) e.preventDefault(); 
      toggleFullscreen();
    }
    lastTapTime = currentTime;
  });

});
