<template>
  <div class="theme-container" :class="[{'theme-light': theme=='light'}, {'theme-dark': theme=='dark'}]">
    <header>
      <router-link to="/">Home</router-link>
      <!-- <router-link to="/blog">Blog</router-link> -->
      <router-link to="/about">About</router-link>
      <div class="spacer"></div>
      <button title="Cycle Color Mode" class="theme-button" @click="cycleColorMode">
        <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor" class="css-13o7eu2">
          <circle cx="16" cy="16" r="14" fill="none" stroke="currentcolor" stroke-width="4"></circle>
          <path d="
            M 16 0
            A 16 16 0 0 0 16 32
            z
          "></path>
        </svg>
      </button>
    </header>
    <router-view />
    <footer>
      <div class="social">
        <a href="https://github.com/jasonniebauer" title="GitHub" class="github-icon">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" size="24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/jasonniebauer/" title="LinkedIn" class="linkedin-icon">
          <svg style="width:30px;height:30px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
          </svg>
        </a>
      </div>
      <div class="footer-nav">
        <router-link to="/">Home</router-link>
        <!-- <router-link to="/blog">Blog</router-link> -->
        <router-link to="/about">About</router-link>
        <div class="spacer"></div>
        <div class="copyright">© {{ copyrightYear }} Jason Niebauer</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'light'
    }
  },
  beforeMount() {
    const colorMode = localStorage.getItem('theme-ui-color-mode')

    this.theme = colorMode ? colorMode : 'light'
  },
  methods: {
    cycleColorMode() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'

      localStorage.setItem('theme-ui-color-mode', this.theme)
    }
  },
  computed: {
    copyrightYear() {
      let d = new Date();
      return d.getFullYear();
      
    }
  }
}
</script>

<style>

* { box-sizing: border-box; }

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.theme-container {
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  transition-property: background-color;
  transition-timing-function: ease-out;
  transition-duration: 0.4s;
}

body {
  margin: 0px;
  font-family: system-ui, sans-serif;
  line-height: 1.625;
  font-size: 18px;
  /* transition-property: background-color;
  transition-timing-function: ease-out;
  transition-duration: 0.4s; */
}

h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

a {
  text-decoration: none;
}

a:hover {
  cursor: pointer;
  color: #2424ff;
}

header {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
}

header a {
  text-transform: uppercase;
  -webkit-letter-spacing: 0.2em;
  -moz-letter-spacing: 0.2em;
  -ms-letter-spacing: 0.2em;
  letter-spacing: 0.2em;
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  margin-right: 16px;
}

.theme-button {
  display: inline-block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  color: inherit;
  padding: 4px;
  margin: 0;
  border: 0;
  border-radius: 9999px;
  height: 32px;
}

.theme-button:hover {
  cursor: pointer;
}

.theme-button:hover, .theme-button:focus {
  color: var(--theme-ui-colors-primary);
  box-shadow: 0px 0px 0px 3px;
  outline: none;
}

.spacer {
  margin: 0 auto;
}

main {
  width: 100%;
  max-width: 1280px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

footer {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 64px;
  padding-bottom: 64px;
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}

.social {
  padding-top: 32px;
  padding-bottom: 32px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.social-inner {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-color: white;
}

.github-icon {
  text-transform: uppercase;
  -webkit-letter-spacing: 0.2em;
  -moz-letter-spacing: 0.2em;
  -ms-letter-spacing: 0.2em;
  letter-spacing: 0.2em;
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 700;
  margin-left: 8px;
  margin-right: 16px;
}

.linkedin-icon {
  text-transform: uppercase;
  -webkit-letter-spacing: 0.2em;
  -moz-letter-spacing: 0.2em;
  -ms-letter-spacing: 0.2em;
  letter-spacing: 0.2em;
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 700;
}

.footer-nav {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14px;
}

.footer-nav a {
  text-transform: uppercase;
  -webkit-letter-spacing: 0.2em;
  -moz-letter-spacing: 0.2em;
  -ms-letter-spacing: 0.2em;
  letter-spacing: 0.2em;
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 700;
  margin-right: 16px;
}

.footer-nav a:last-of-type {
  margin-right: 32px;
}

.footer-nav a:hover {
  color: #2424ff;
}

.copyright {
  margin-top: 8px;
  margin-bottom: 8px;
}

a {
  color: inherit;
}

.theme-light a:hover {
  color: var(--theme-ui-colors-primary);
}

.theme-dark {
  background-color: var(--theme-ui-colors-background);
  color: var(--theme-ui-colors-text);
}

:root {
  --theme-ui-colors-text: #fff;
  --theme-ui-colors-background: #000;
  --theme-ui-colors-primary: #2424ff;;
}

</style>
