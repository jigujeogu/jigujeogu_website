document.addEventListener('DOMContentLoaded', () => {
  // Chrome Web Store URL for JIGUGEOJU Extension
  const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/%EC%B6%A9%EB%8F%99%EA%B5%AC%EB%A7%A4-%EB%B0%A9%EC%A7%80%ED%84%B1/ecdidmcioncgambjjngjbpchfkpngfgj';

  // 1. Device Viewport Frame Mode Switcher
  const ipadContainer = document.getElementById('ipad-container');
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
      window.open(CHROME_STORE_URL, '_blank', 'noopener,noreferrer');
    });
  }

  if (btnDownload2) {
    btnDownload2.addEventListener('click', () => {
      window.open(CHROME_STORE_URL, '_blank', 'noopener,noreferrer');
    });
  }

  if (btnExtension) {
    btnExtension.addEventListener('click', () => {
      alert('⚡ 지구저구 크롬 확장프로그램 기능: 다크패턴 마스킹, 넛지 메시지, 흑백 모드, 탄소 발자국 계산 장바구니');
    });
  }

  // 3. Mouse Eye Tracking for Jeogu Mascot (Page 1), Page 2 Earth, & Page 7 Jeogu Mascot
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // A. Jeogu Mascot Eye Tracking (Page 1)
    const jeoguHeroSvg = document.getElementById('jeogu-hero-svg');
    if (jeoguHeroSvg) {
      const rect = jeoguHeroSvg.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const scaleX = rect.width / 309;
        const scaleY = rect.height / 136;

        const eyeCenterLeft = { x: 141.378, y: 43.0874 };
        const eyeCenterRight = { x: 167.394, y: 43.0874 };

        const leftPupil = jeoguHeroSvg.querySelector('.left-pupil');
        const rightPupil = jeoguHeroSvg.querySelector('.right-pupil');

        if (leftPupil) {
          const eyeX = rect.left + eyeCenterLeft.x * scaleX;
          const eyeY = rect.top + eyeCenterLeft.y * scaleY;
          const dx = mouseX - eyeX;
          const dy = mouseY - eyeY;
          const dist = Math.hypot(dx, dy);
          const angle = Math.atan2(dy, dx);
          const maxMove = 7 * scaleX;
          const r = Math.min(maxMove, dist / 18);
          const moveX = r * Math.cos(angle);
          const moveY = r * Math.sin(angle);
          leftPupil.style.transform = `translate(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px)`;
        }

        if (rightPupil) {
          const eyeX = rect.left + eyeCenterRight.x * scaleX;
          const eyeY = rect.top + eyeCenterRight.y * scaleY;
          const dx = mouseX - eyeX;
          const dy = mouseY - eyeY;
          const dist = Math.hypot(dx, dy);
          const angle = Math.atan2(dy, dx);
          const maxMove = 7 * scaleX;
          const r = Math.min(maxMove, dist / 18);
          const moveX = r * Math.cos(angle);
          const moveY = r * Math.sin(angle);
          rightPupil.style.transform = `translate(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px)`;
        }
      }
    }

    // B. Page 2 Earth Mascot Pupil Tracking (sec2-earth-svg)
    const sec2EarthSvg = document.getElementById('sec2-earth-svg');
    if (sec2EarthSvg) {
      const rect = sec2EarthSvg.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const scaleX = rect.width / 653;
        const scaleY = rect.height / 653;

        const eyeCenterLeft = { x: 301.65, y: 223.89 };
        const eyeCenterRight = { x: 352.42, y: 223.89 };

        const leftPupil = sec2EarthSvg.querySelector('.left-pupil');
        const rightPupil = sec2EarthSvg.querySelector('.right-pupil');

        if (leftPupil) {
          const eyeX = rect.left + eyeCenterLeft.x * scaleX;
          const eyeY = rect.top + eyeCenterLeft.y * scaleY;
          const dx = mouseX - eyeX;
          const dy = mouseY - eyeY;
          const dist = Math.hypot(dx, dy);
          const angle = Math.atan2(dy, dx);
          const maxMove = 14 * scaleX;
          const r = Math.min(maxMove, dist / 15);
          const moveX = r * Math.cos(angle);
          const moveY = r * Math.sin(angle);
          leftPupil.style.transform = `translate(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px)`;
        }

        if (rightPupil) {
          const eyeX = rect.left + eyeCenterRight.x * scaleX;
          const eyeY = rect.top + eyeCenterRight.y * scaleY;
          const dx = mouseX - eyeX;
          const dy = mouseY - eyeY;
          const dist = Math.hypot(dx, dy);
          const angle = Math.atan2(dy, dx);
          const maxMove = 14 * scaleX;
          const r = Math.min(maxMove, dist / 15);
          const moveX = r * Math.cos(angle);
          const moveY = r * Math.sin(angle);
          rightPupil.style.transform = `translate(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px)`;
        }
      }
    }

    // C. Page 7 Jeogu Mascot Pupil Tracking (sec7-jeogu-svg)
    const sec7JeoguSvg = document.getElementById('sec7-jeogu-svg');
    if (sec7JeoguSvg) {
      const rect = sec7JeoguSvg.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const scaleX = rect.width / 238;
        const scaleY = rect.height / 103;

        const eyeCenterLeft = { x: 111.051, y: 26.0286 };
        const eyeCenterRight = { x: 137.871, y: 26.0286 };

        const leftPupil = sec7JeoguSvg.querySelector('.left-pupil');
        const rightPupil = sec7JeoguSvg.querySelector('.right-pupil');

        if (leftPupil) {
          const eyeX = rect.left + eyeCenterLeft.x * scaleX;
          const eyeY = rect.top + eyeCenterLeft.y * scaleY;
          const dx = mouseX - eyeX;
          const dy = mouseY - eyeY;
          const dist = Math.hypot(dx, dy);
          const angle = Math.atan2(dy, dx);
          const maxMove = 6.5 * scaleX;
          const r = Math.min(maxMove, dist / 16);
          const moveX = r * Math.cos(angle);
          const moveY = r * Math.sin(angle);
          leftPupil.style.transform = `translate(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px)`;
        }

        if (rightPupil) {
          const eyeX = rect.left + eyeCenterRight.x * scaleX;
          const eyeY = rect.top + eyeCenterRight.y * scaleY;
          const dx = mouseX - eyeX;
          const dy = mouseY - eyeY;
          const dist = Math.hypot(dx, dy);
          const angle = Math.atan2(dy, dx);
          const maxMove = 6.5 * scaleX;
          const r = Math.min(maxMove, dist / 16);
          const moveX = r * Math.cos(angle);
          const moveY = r * Math.sin(angle);
          rightPupil.style.transform = `translate(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px)`;
        }
      }
    }
  });

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
          card.classList.remove('active-front-card', 'behind-card-1', 'behind-card-2');
          return;
        }

        card.classList.remove('active-front-card', 'behind-card-1', 'behind-card-2');

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
            card.className = 'value-card reset-prepare-left';
          });

          void valueCardDeck.offsetWidth;

          step = 0;
          cards.forEach((card, idx) => {
            setTimeout(() => {
              card.className = `value-card reset-fly-in ${idx === 0 ? 'active-front-card' : idx === 1 ? 'behind-card-1' : 'behind-card-2'}`;
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
            card.className = 'value-card reset-prepare-left';
          });
          void valueCardDeck.offsetWidth;
          step = 0;
          cards.forEach((card, idx) => {
            setTimeout(() => {
              card.className = `value-card reset-fly-in ${idx === 0 ? 'active-front-card' : idx === 1 ? 'behind-card-1' : 'behind-card-2'}`;
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
  const sec7VideoElem = document.getElementById('sec7-monitor-video');

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

      if (sec7VideoElem) {
        const config = sec7VideoConfigs[sec7Step];
        if (config) {
          const targetSrc = config.src;
          const isSameSrc = sec7VideoElem.getAttribute('src') === targetSrc;

          if (!isSameSrc) {
            sec7VideoElem.src = targetSrc;
            const handleCanPlay = () => {
              sec7VideoElem.removeEventListener('canplay', handleCanPlay);
              if (config.startTime > 0) {
                try { sec7VideoElem.currentTime = config.startTime; } catch (err) {}
              }
              sec7VideoElem.play().catch(() => {});
            };
            sec7VideoElem.addEventListener('canplay', handleCanPlay, { once: true });
            sec7VideoElem.load();
          } else {
            if (config.startTime > 0 && Math.abs(sec7VideoElem.currentTime - config.startTime) > 0.5) {
              try { sec7VideoElem.currentTime = config.startTime; } catch (err) {}
            }
            sec7VideoElem.play().catch(() => {});
          }
        }
      }
    }

    if (sec7VideoElem) {
      sec7VideoElem.addEventListener('timeupdate', () => {
        const config = sec7VideoConfigs[sec7Step];
        if (config && config.startTime > 0) {
          if (sec7VideoElem.currentTime < 0.25 && !sec7VideoElem.seeking) {
            try {
              sec7VideoElem.currentTime = config.startTime;
            } catch (e) {}
          }
        }
      });
    }

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

    goToSec7Step(0);
  }

  // 6. PAGE 8 EXTENSION DEMO VIDEO INTERACTION, SEEK BAR & VOLUME CONTROL
  const sec8DemoVideo = document.getElementById('sec8-demo-video');
  const sec8VideoContainer = document.getElementById('sec8-video-container');
  const sec8PlayBtn = document.getElementById('sec8-play-btn');
  const sec8PauseBtn = document.getElementById('sec8-pause-btn');

  // Bottom Video Playback Seek Bar Elements
  const sec8RewindBtn = document.getElementById('sec8-rewind-btn');
  const sec8ForwardBtn = document.getElementById('sec8-forward-btn');
  const sec8SeekTrack = document.getElementById('sec8-seek-track');
  const sec8SeekFill = document.getElementById('sec8-seek-fill');
  const sec8SeekHandle = document.getElementById('sec8-seek-handle');
  const sec8TimeDisplay = document.getElementById('sec8-time-display');

  // Top Right Volume Control Elements
  const sec8VolumeWrapper = document.getElementById('sec8-volume-wrapper');
  const sec8MuteBtn = document.getElementById('sec8-mute-btn');
  const sec8VolumeTrack = document.getElementById('sec8-volume-track');
  const sec8VolumeFill = document.getElementById('sec8-volume-fill');

  if (sec8DemoVideo && sec8VideoContainer) {
    let lastVolume = 1.0;
    let isSeeking = false;

    function formatTime(seconds) {
      if (isNaN(seconds) || seconds < 0) return '00:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
    }

    function playSec8Video() {
      sec8DemoVideo.play().then(() => {
        sec8VideoContainer.classList.add('is-playing');
      }).catch((e) => {
        console.log('Video play error:', e);
      });
    }

    function pauseSec8Video() {
      sec8DemoVideo.pause();
      sec8VideoContainer.classList.remove('is-playing');
    }

    // Play & Pause button handlers
    if (sec8PlayBtn) {
      sec8PlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playSec8Video();
      });
    }

    if (sec8PauseBtn) {
      sec8PauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        pauseSec8Video();
      });
    }

    // Click anywhere on video container (outside control bar) to toggle play / pause
    sec8VideoContainer.addEventListener('click', (e) => {
      if (e.target.closest('#sec8-pause-btn') || e.target.closest('#sec8-bottom-control-bar')) return;

      if (sec8DemoVideo.paused) {
        playSec8Video();
      } else {
        pauseSec8Video();
      }
    });

    // Reset layout when video ends
    sec8DemoVideo.addEventListener('ended', () => {
      pauseSec8Video();
      sec8DemoVideo.currentTime = 0;
    });

    // --- VIDEO PLAYBACK PROGRESS & SEEKING LOGIC ---
    function updateVideoProgressUI() {
      if (!sec8DemoVideo.duration) return;
      const cur = sec8DemoVideo.currentTime;
      const dur = sec8DemoVideo.duration;
      const pct = (cur / dur) * 100;

      if (sec8SeekFill) sec8SeekFill.style.width = pct + '%';
      if (sec8SeekHandle) sec8SeekHandle.style.left = pct + '%';
      if (sec8TimeDisplay) sec8TimeDisplay.textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
    }

    sec8DemoVideo.addEventListener('timeupdate', () => {
      if (!isSeeking) {
        updateVideoProgressUI();
      }
    });

    sec8DemoVideo.addEventListener('loadedmetadata', () => {
      if (sec8DemoVideo.currentTime === 0) {
        sec8DemoVideo.currentTime = 1.0;
      }
      updateVideoProgressUI();
    });
    if (sec8DemoVideo.readyState >= 1 && sec8DemoVideo.currentTime === 0) {
      sec8DemoVideo.currentTime = 1.0;
    }

    // 10s Rewind / Fast Forward Buttons
    if (sec8RewindBtn) {
      sec8RewindBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sec8DemoVideo.currentTime = Math.max(0, sec8DemoVideo.currentTime - 10);
        updateVideoProgressUI();
      });
    }

    if (sec8ForwardBtn) {
      sec8ForwardBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const maxTime = sec8DemoVideo.duration || 0;
        sec8DemoVideo.currentTime = Math.min(maxTime, sec8DemoVideo.currentTime + 10);
        updateVideoProgressUI();
      });
    }

    // Seek Track Drag / Click
    function seekFromEvent(e) {
      if (!sec8SeekTrack || !sec8DemoVideo.duration) return;
      const rect = sec8SeekTrack.getBoundingClientRect();
      if (rect.width === 0) return;
      let pct = (e.clientX - rect.left) / rect.width;
      pct = Math.max(0, Math.min(1, pct));
      sec8DemoVideo.currentTime = pct * sec8DemoVideo.duration;
      updateVideoProgressUI();
    }

    if (sec8SeekTrack) {
      sec8SeekTrack.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        isSeeking = true;
        seekFromEvent(e);
      });

      document.addEventListener('mousemove', (e) => {
        if (isSeeking) {
          seekFromEvent(e);
        }
      });

      document.addEventListener('mouseup', () => {
        isSeeking = false;
      });
    }

    // --- MUTE & VOLUME CONTROL LOGIC ---
    if (sec8MuteBtn && sec8VolumeWrapper) {
      sec8MuteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sec8DemoVideo.muted = !sec8DemoVideo.muted;
        updateVolumeUI();
      });
    }

    function updateVolumeFromEvent(e) {
      if (!sec8VolumeTrack) return;
      const rect = sec8VolumeTrack.getBoundingClientRect();
      if (rect.width === 0) return;
      let pct = (e.clientX - rect.left) / rect.width;
      pct = Math.max(0, Math.min(1, pct));

      sec8DemoVideo.volume = pct;
      if (pct === 0) {
        sec8DemoVideo.muted = true;
      } else {
        sec8DemoVideo.muted = false;
        lastVolume = pct;
      }
      updateVolumeUI();
    }

    if (sec8VolumeTrack) {
      let isDraggingVolume = false;

      sec8VolumeTrack.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        isDraggingVolume = true;
        updateVolumeFromEvent(e);
      });

      document.addEventListener('mousemove', (e) => {
        if (isDraggingVolume) {
          updateVolumeFromEvent(e);
        }
      });

      document.addEventListener('mouseup', () => {
        isDraggingVolume = false;
      });
    }

    function updateVolumeUI() {
      if (!sec8VolumeWrapper || !sec8VolumeFill) return;
      const isMuted = sec8DemoVideo.muted || sec8DemoVideo.volume === 0;

      sec8VolumeWrapper.classList.toggle('is-muted', isMuted);
      if (sec8MuteBtn) {
        sec8MuteBtn.classList.toggle('is-muted', isMuted);
      }

      if (isMuted) {
        sec8VolumeFill.style.width = '0%';
      } else {
        const pct = Math.round(sec8DemoVideo.volume * 100);
        sec8VolumeFill.style.width = pct + '%';
      }
    }

    // Initial setup
    updateVolumeUI();
    updateVideoProgressUI();
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
    setTimeout(triggerReceiptPrint, 350);

    if (sec9PrinterSlot) {
      sec9PrinterSlot.addEventListener('click', triggerReceiptPrint);
    }
    if (sec9ReprintBtn) {
      sec9ReprintBtn.addEventListener('click', triggerReceiptPrint);
    }
  }
});

