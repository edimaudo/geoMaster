// --- 1. Static Geographic Data (Compiled from countries.ts) ---
const COUNTRIES = [
  { code: 'ca', name: 'Canada', capital: 'Ottawa', gdp: '$2.38 trillion', pop: '38.9 million', beer: '57 liters' },
  { code: 'us', name: 'United States', capital: 'Washington, D.C.', gdp: '$25.46 trillion', pop: '333.3 million', beer: '73 liters' },
  { code: 'mx', name: 'Mexico', capital: 'Mexico City', gdp: '$1.41 trillion', pop: '126.7 million', beer: '68 liters' },
  { code: 'br', name: 'Brazil', capital: 'Brasília', gdp: '$1.92 trillion', pop: '214.3 million', beer: '60 liters' },
  { code: 'ar', name: 'Argentina', capital: 'Buenos Aires', gdp: '$632 billion', pop: '45.8 million', beer: '41 liters' },
  { code: 'co', name: 'Colombia', capital: 'Bogotá', gdp: '$343 billion', pop: '51.8 million', beer: '44 liters' },
  { code: 'cl', name: 'Chile', capital: 'Santiago', gdp: '$300 billion', pop: '19.6 million', beer: '45 liters' },
  { code: 'pe', name: 'Peru', capital: 'Lima', gdp: '$242 billion', pop: '34.0 million', beer: '45 liters' },
  { code: 'uy', name: 'Uruguay', capital: 'Montevideo', gdp: '$71 billion', pop: '3.4 million', beer: '30 liters' },
  { code: 'gb', name: 'United Kingdom', capital: 'London', gdp: '$3.07 trillion', pop: '67.0 million', beer: '70 liters' },
  { code: 'fr', name: 'France', capital: 'Paris', gdp: '$2.78 trillion', pop: '67.8 million', beer: '33 liters' },
  { code: 'de', name: 'Germany', capital: 'Berlin', gdp: '$4.07 trillion', pop: '83.2 million', beer: '92 liters' },
  { code: 'it', name: 'Italy', capital: 'Rome', gdp: '$2.01 trillion', pop: '59.1 million', beer: '31 liters' },
  { code: 'es', name: 'Spain', capital: 'Madrid', gdp: '$1.40 trillion', pop: '47.4 million', beer: '50 liters' },
  { code: 'se', name: 'Sweden', capital: 'Stockholm', gdp: '$585 billion', pop: '10.4 million', beer: '50 liters' },
  { code: 'cz', name: 'Czechia', capital: 'Prague', gdp: '$290 billion', pop: '10.5 million', beer: '140 liters' },
  { code: 'ie', name: 'Ireland', capital: 'Dublin', gdp: '$529 billion', pop: '5.0 million', beer: '95 liters' },
  { code: 'be', name: 'Belgium', capital: 'Brussels', gdp: '$578 billion', pop: '11.6 million', beer: '65 liters' },
  { code: 'nl', name: 'Netherlands', capital: 'Amsterdam', gdp: '$991 billion', pop: '17.5 million', beer: '69 liters' },
  { code: 'ch', name: 'Switzerland', capital: 'Bern', gdp: '$807 billion', pop: '8.7 million', beer: '55 liters' },
  { code: 'ru', name: 'Russia', capital: 'Moscow', gdp: '$2.24 trillion', pop: '143.4 million', beer: '58 liters' },
  { code: 'pl', name: 'Poland', capital: 'Warsaw', gdp: '$688 billion', pop: '38.0 million', beer: '97 liters' },
  { code: 'at', name: 'Austria', capital: 'Vienna', gdp: '$471 billion', pop: '9.0 million', beer: '103 liters' },
  { code: 'gr', name: 'Greece', capital: 'Athens', gdp: '$218 billion', pop: '10.4 million', beer: '28 liters' },
  { code: 'pt', name: 'Portugal', capital: 'Lisbon', gdp: '$253 billion', pop: '10.3 million', beer: '51 liters' },
  { code: 'dk', name: 'Denmark', capital: 'Copenhagen', gdp: '$395 billion', pop: '5.9 million', beer: '60 liters' },
  { code: 'fi', name: 'Finland', capital: 'Helsinki', gdp: '$281 billion', pop: '5.5 million', beer: '74 liters' },
  { code: 'no', name: 'Norway', capital: 'Oslo', gdp: '$579 billion', pop: '5.4 million', beer: '55 liters' },
  { code: 'hu', name: 'Hungary', capital: 'Budapest', gdp: '$178 billion', pop: '9.6 million', beer: '73 liters' },
  { code: 'ro', name: 'Romania', capital: 'Bucharest', gdp: '$301 billion', pop: '19.0 million', beer: '78 liters' },
  { code: 'jp', name: 'Japan', capital: 'Tokyo', gdp: '$4.23 trillion', pop: '124.6 million', beer: '38 liters' },
  { code: 'in', name: 'India', capital: 'New Delhi', gdp: '$3.41 trillion', pop: '1.41 billion', beer: '2 liters' },
  { code: 'cn', name: 'China', capital: 'Beijing', gdp: '$17.96 trillion', pop: '1.41 billion', beer: '29 liters' },
  { code: 'kr', name: 'South Korea', capital: 'Seoul', gdp: '$1.67 trillion', pop: '51.7 million', beer: '39 liters' },
  { code: 'id', name: 'Indonesia', capital: 'Jakarta', gdp: '$1.31 trillion', pop: '275.5 million', beer: '1 liter' },
  { code: 'th', name: 'Thailand', capital: 'Bangkok', gdp: '$495 billion', pop: '71.6 million', beer: '27 liters' },
  { code: 'vn', name: 'Vietnam', capital: 'Hanoi', gdp: '$408 billion', pop: '98.1 million', beer: '43 liters' },
  { code: 'ph', name: 'Philippines', capital: 'Manila', gdp: '$404 billion', pop: '115.5 million', beer: '19 liters' },
  { code: 'my', name: 'Malaysia', capital: 'Kuala Lumpur', gdp: '$406 billion', pop: '33.9 million', beer: '11 liters' },
  { code: 'sa', name: 'Saudi Arabia', capital: 'Riyadh', gdp: '$1.10 trillion', pop: '36.4 million', beer: '0 liters' },
  { code: 'tr', name: 'Turkey', capital: 'Ankara', gdp: '$905 billion', pop: '85.3 million', beer: '13 liters' },
  { code: 'il', name: 'Israel', capital: 'Jerusalem', gdp: '$522 billion', pop: '9.3 million', beer: '14 liters' },
  { code: 'pk', name: 'Pakistan', capital: 'Islamabad', gdp: '$348 billion', pop: '235.8 million', beer: '0.1 liters' },
  { code: 'sg', name: 'Singapore', capital: 'Singapore', gdp: '$466 billion', pop: '5.6 million', beer: '20 liters' },
  { code: 'za', name: 'South Africa', capital: 'Pretoria', gdp: '$405 billion', pop: '59.3 million', beer: '60 liters' },
  { code: 'ng', name: 'Nigeria', capital: 'Abuja', gdp: '$477 billion', pop: '213.4 million', beer: '12 liters' },
  { code: 'eg', name: 'Egypt', capital: 'Cairo', gdp: '$476 billion', pop: '109.3 million', beer: '0.2 liters' },
  { code: 'ke', name: 'Kenya', capital: 'Nairobi', gdp: '$113 billion', pop: '54.0 million', beer: '12 liters' },
  { code: 'et', name: 'Ethiopia', capital: 'Addis Ababa', gdp: '$126 billion', pop: '123.3 million', beer: '4 liters' },
  { code: 'ma', name: 'Morocco', capital: 'Rabat', gdp: '$134 billion', pop: '37.4 million', beer: '1 liter' },
  { code: 'dz', name: 'Algeria', capital: 'Algiers', gdp: '$191 billion', pop: '44.9 million', beer: '1 liter' },
  { code: 'gh', name: 'Ghana', capital: 'Accra', gdp: '$72 billion', pop: '33.4 million', beer: '10 liters' },
  { code: 'tz', name: 'Tanzania', capital: 'Dodoma', gdp: '$75 billion', pop: '65.4 million', beer: '8 liters' },
  { code: 'au', name: 'Australia', capital: 'Canberra', gdp: '$1.69 trillion', pop: '25.7 million', beer: '71 liters' },
  { code: 'nz', name: 'New Zealand', capital: 'Wellington', gdp: '$248 billion', pop: '5.1 million', beer: '61 liters' },
  { code: 'fj', name: 'Fiji', capital: 'Suva', gdp: '$5 billion', pop: '0.9 million', beer: '30 liters' }
];

// --- 2. Web Audio API Engine ---
const AudioSys = {
  enabled: localStorage.getItem('geomaster_sound') !== 'false',

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('geomaster_sound', this.enabled.toString());
    document.getElementById('sound-toggle').innerText = `Sound: ${this.enabled ? 'On' : 'Off'}`;
  },

  play(type) {
    if (!this.enabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;
      
      if (type === 'click') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.1);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'correct') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.linearRampToValueAtTime(140, now + 0.3);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'victory') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(554.37, now + 0.1);
        osc.frequency.setValueAtTime(659.25, now + 0.2);
        osc.frequency.setValueAtTime(880, now + 0.3);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
      }
    } catch (e) {
      console.warn("Audio failed:", e);
    }
  }
};

// --- 3. UI and State Management ---
const UI = {
  isLargeText: false,

  init() {
    const savedTheme = localStorage.getItem('geomaster_theme') || 'dark';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    document.getElementById('theme-toggle').innerText = `Theme: ${savedTheme === 'dark' ? 'Dark' : 'Light'}`;
    
    document.getElementById('theme-toggle').onclick = () => {
      AudioSys.play('click');
      const previousTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      const isDark = document.documentElement.classList.toggle('dark');
      const themeName = isDark ? 'Dark' : 'Light';
      localStorage.setItem('geomaster_theme', themeName.toLowerCase());
      document.getElementById('theme-toggle').innerText = `Theme: ${themeName}`;
      pendo.track("preference_changed", {
        preferenceName: "theme",
        newValue: themeName.toLowerCase(),
        previousValue: previousTheme
      });
    };

    document.getElementById('text-size-toggle').onclick = () => {
      AudioSys.play('click');
      const previousSize = this.isLargeText ? 'large' : 'standard';
      this.isLargeText = !this.isLargeText;
      document.documentElement.style.setProperty('--font-scale-base', this.isLargeText ? '18px' : '16px');
      document.getElementById('text-size-toggle').innerText = `Text Size: ${this.isLargeText ? 'Large' : 'Standard'}`;
      pendo.track("preference_changed", {
        preferenceName: "text_size",
        newValue: this.isLargeText ? "large" : "standard",
        previousValue: previousSize
      });
    };

    document.getElementById('sound-toggle').innerText = `Sound: ${AudioSys.enabled ? 'On' : 'Off'}`;
    document.getElementById('sound-toggle').onclick = () => {
      const previousSound = AudioSys.enabled ? 'on' : 'off';
      AudioSys.toggle();
      AudioSys.play('click');
      pendo.track("preference_changed", {
        preferenceName: "sound",
        newValue: AudioSys.enabled ? "on" : "off",
        previousValue: previousSound
      });
    };

    Game.updateBestTimes();
  },

  showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    document.getElementById(viewId).classList.add('active');
    
    if (viewId === 'settings-view') Game.updateBestTimes();
    if (viewId === 'main-menu') Game.updateBestTimes();
    this.toggleClear(false);
  },

  toggleClear(showConfirm) {
    document.getElementById('clear-prompt-default').classList.toggle('hidden', showConfirm);
    document.getElementById('clear-prompt-confirm').classList.toggle('hidden', !showConfirm);
  }
};

// --- 4. Game Logic ---
const Game = {
  state: {
    mode: null,
    questions: [],
    currentIndex: 0,
    startTime: 0,
    penalties: 0,
    timerInterval: null,
    isTransitioning: false
  },

  start(mode) {
    AudioSys.play('click');
    this.state.mode = mode;
    this.state.penalties = 0;
    this.state.currentIndex = 0;
    this.state.isTransitioning = false;

    // Shuffle and pick 7 questions
    const shuffled = [...COUNTRIES].sort(() => 0.5 - Math.random());
    this.state.questions = shuffled.slice(0, 7).map(correct => {
      const wrongs = shuffled.filter(c => c.code !== correct.code).slice(0, 3);
      return { correct, options: [correct, ...wrongs].sort(() => 0.5 - Math.random()) };
    });

    pendo.track("game_started", {
      mode: mode,
      totalQuestions: 7
    });

    UI.showView('game-view');
    document.getElementById('visual-feedback-card').classList.add('hidden');
    
    this.state.startTime = Date.now();
    clearInterval(this.state.timerInterval);
    
    this.state.timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - this.state.startTime) / 1000);
      document.getElementById('timer-display').innerText = `Time: ${elapsed + this.state.penalties}s`;
    }, 100);

    this.renderQuestion();
  },

  renderQuestion() {
    const data = this.state.questions[this.state.currentIndex];
    document.getElementById('question-counter').innerText = `Question: ${this.state.currentIndex + 1}/7`;
    
    const promptArea = document.getElementById('question-area');
    const optionsGrid = document.getElementById('options-grid');
    
    promptArea.innerHTML = '';
    optionsGrid.innerHTML = '';

    if (this.state.mode === 'country') {
      promptArea.innerText = data.correct.name;
      data.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'flag-btn';
        btn.innerHTML = `<img src="https://flagcdn.com/w320/${opt.code.toLowerCase()}.png" 
                      alt="Flag of ${opt.name}" 
                      loading="lazy" 
                      onerror="this.style.display='none'; console.error('Failed to load flag: ${opt.code}')" />`;
        btn.onclick = () => this.handleAnswer(opt.code === data.correct.code, btn, data.correct.code);
        btn.dataset.code = opt.code;
        optionsGrid.appendChild(btn);
      });
    } else if (this.state.mode === 'flag') {
      // Ensure this structure is used in your prompt area or options rendering
      const flagUrl = `https://flagcdn.com/w320/${data.correct.code.toLowerCase()}.png`;
      // If injecting into the DOM:
      promptArea.innerHTML = `<img src="${flagUrl}" alt="Country flag" style="width: 200px; display: block; margin: 0 auto;" />`;
      data.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'pixel-button bg-primary';
        btn.innerText = opt.name;
        btn.onclick = () => this.handleAnswer(opt.code === data.correct.code, btn, data.correct.code);
        btn.dataset.code = opt.code;
        optionsGrid.appendChild(btn);
      });
    } else if (this.state.mode === 'capital') {
      promptArea.innerText = data.correct.capital;
      data.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'flag-btn';
        btn.innerHTML = `<img src="https://flagcdn.com/w320/${opt.code}.png" alt="Flag option" loading="lazy" />`;
        btn.onclick = () => this.handleAnswer(opt.code === data.correct.code, btn, data.correct.code);
        btn.dataset.code = opt.code;
        optionsGrid.appendChild(btn);
      });
    } else if (this.state.mode === 'guesser') {
      promptArea.innerHTML = `
        <div class="clue-box">
          <div class="clue-item">Capital: ${data.correct.capital}</div>
          <div class="clue-item">Population: ${data.correct.pop}</div>
          <div class="clue-item">GDP: ${data.correct.gdp}</div>
          <div class="clue-item">Beer/Year: ${data.correct.beer}</div>
        </div>
      `;
      data.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'pixel-button bg-primary';
        btn.innerText = opt.name;
        btn.onclick = () => this.handleAnswer(opt.code === data.correct.code, btn, data.correct.code);
        btn.dataset.code = opt.code;
        optionsGrid.appendChild(btn);
      });
    }
  },

  handleAnswer(isCorrect, btnElement, correctCode) {
    if (this.state.isTransitioning) return;
    this.state.isTransitioning = true;

    const allButtons = Array.from(document.getElementById('options-grid').children);
    allButtons.forEach(btn => {
      btn.onclick = null;
      btn.classList.add('disabled');
    });

    const feedbackCard = document.getElementById('visual-feedback-card');
    const feedbackText = document.getElementById('visual-feedback-text');
    feedbackCard.classList.remove('hidden');

    if (isCorrect) {
      AudioSys.play('correct');
      btnElement.classList.add('correct-variant');
      feedbackText.innerText = "Correct!";
      feedbackText.className = "font-pixel font-bold text-success text-lg";
    } else {
      AudioSys.play('wrong');
      btnElement.classList.add('wrong-variant');
      this.state.penalties += 60; // Exact 60s penalty
      feedbackText.innerText = "Wrong! +60s Penalty";
      feedbackText.className = "font-pixel font-bold text-error text-lg";
      
      const correctBtn = allButtons.find(b => b.dataset.code === correctCode);
      if (correctBtn) correctBtn.classList.add('correct-variant');
    }

    const currentQuestion = this.state.questions[this.state.currentIndex];
    pendo.track("question_answered", {
      mode: this.state.mode,
      questionNumber: this.state.currentIndex + 1,
      isCorrect: isCorrect,
      penaltySeconds: isCorrect ? 0 : 60,
      correctCountryCode: correctCode,
      correctCountryName: currentQuestion.correct.name
    });

    setTimeout(() => {
      feedbackCard.classList.add('hidden');
      this.state.currentIndex++;
      if (this.state.currentIndex < 7) {
        this.state.isTransitioning = false;
        this.renderQuestion();
      } else {
        this.endGame();
      }
    }, 2000);
  },

  endGame() {
    clearInterval(this.state.timerInterval);
    const elapsed = Math.floor((Date.now() - this.state.startTime) / 1000);
    const finalTime = elapsed + this.state.penalties;
    
    document.getElementById('final-time').innerText = `${finalTime} seconds`;
    
    const key = `geomaster_${this.state.mode}`;
    const best = localStorage.getItem(key);
    const isNewRecord = !best || finalTime < parseInt(best);
    
    document.getElementById('new-record-badge').classList.toggle('hidden', !isNewRecord);

    if (isNewRecord) {
      pendo.track("new_record_achieved", {
        mode: this.state.mode,
        newRecordTimeSeconds: finalTime,
        previousBestTimeSeconds: best ? parseInt(best) : null,
        isFirstRecord: !best
      });

      localStorage.setItem(key, finalTime);
      AudioSys.play('victory');
      if (window.confetti) {
        const end = Date.now() + 2000;
        const colors = ['#2563eb', '#7c3aed', '#f59e0b', '#059669'];
        (function frame() {
          window.confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
          window.confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
          if (Date.now() < end) requestAnimationFrame(frame);
        }());
      }
    }

    pendo.track("game_completed", {
      mode: this.state.mode,
      finalTimeSeconds: finalTime,
      elapsedTimeSeconds: elapsed,
      totalPenaltySeconds: this.state.penalties,
      isNewRecord: isNewRecord
    });

    UI.showView('results-view');
  },

  updateBestTimes() {
    const modes = ['country', 'flag', 'capital', 'guesser'];
    
    const renderScores = (containerId) => {
      const container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = modes.map(mode => {
        const score = localStorage.getItem(`geomaster_${mode}`);
        const display = score ? `${score}s` : '--';
        return `<div class="lb-row"><span>${mode.toUpperCase()}</span><strong>${display}</strong></div>`;
      }).join('');
    };

    renderScores('menu-best-times');
    renderScores('local-leaderboard');
  },

  clearScores() {
    const modes = ['country', 'flag', 'capital', 'guesser'];
    const previousBestCountry = localStorage.getItem('geomaster_country');
    const previousBestFlag = localStorage.getItem('geomaster_flag');
    const previousBestCapital = localStorage.getItem('geomaster_capital');
    const previousBestGuesser = localStorage.getItem('geomaster_guesser');
    const modesWithScores = modes.filter(m => localStorage.getItem(`geomaster_${m}`)).length;

    modes.forEach(mode => {
      localStorage.removeItem(`geomaster_${mode}`);
    });

    pendo.track("scores_cleared", {
      previousBestCountry: previousBestCountry ? parseInt(previousBestCountry) : null,
      previousBestFlag: previousBestFlag ? parseInt(previousBestFlag) : null,
      previousBestCapital: previousBestCapital ? parseInt(previousBestCapital) : null,
      previousBestGuesser: previousBestGuesser ? parseInt(previousBestGuesser) : null,
      modesWithScores: modesWithScores
    });

    AudioSys.play('click');
    this.updateBestTimes();
    UI.toggleClear(false);
  },

  quit() {
    clearInterval(this.state.timerInterval);
    const elapsed = Math.floor((Date.now() - this.state.startTime) / 1000);
    pendo.track("game_quit", {
      mode: this.state.mode,
      questionsCompleted: this.state.currentIndex,
      totalQuestions: 7,
      elapsedTimeSeconds: elapsed,
      totalPenaltySeconds: this.state.penalties
    });
    AudioSys.play('click');
    UI.showView('main-menu');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  UI.init();
});
