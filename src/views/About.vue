<template>
  <main>
    <h1>About</h1>
    <p>
      <img class="headshot" src="../assets/img/Jason-Niebauer.jpg" alt="Jason Niebauer" />
    </p>
    <!-- <p>A little bit about me...</p> -->
    <div class="programming-languages">
      <div>
        <p><b>Programming Languages</b></p>
        <ul>
          <li>CSS</li>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>Python</li>
        </ul>
      </div>
      <div>
        <p><b>Frameworks</b></p>
        <ul>
          <li>Django</li>
          <li>FastAPI</li>
          <li>Vue.js</li>
        </ul>
      </div>
      <div>
        <p><b>Other Tools</b></p>
        <ul>
          <li>Cryptography</li>
          <li>Git</li>
          <li>Pandas</li>
          <li>SQL / MySQL</li>
        </ul>
      </div>
    </div>
    <h2>Volunteer Experience</h2>
    <div class="volunteer-experience">
      <ul>
        <li>
          <h2>
            <a href="https://www.torproject.org">The Tor Project</a>
          </h2>
          Relay Operator
        </li>
        <li>
          <h2>
            <a href="http://www.operationturkey.com">Operation Turkey</a>
          </h2>
          Delivery Driver
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>

.headshot {
  max-width: 100%;
  max-height: 400px;
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}

.programming-languages {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fit,minmax(256px,1fr));
}

.volunteer-experience ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-gap: 32px;
    grid-template-columns: repeat(auto-fit,minmax(256px,1fr));
}

.volunteer-experience h2 {
  font-size: 18px;
}

.volunteer-experience h2 a {
    text-transform: uppercase;
    -webkit-letter-spacing: 0.2em;
    -moz-letter-spacing: 0.2em;
    -ms-letter-spacing: 0.2em;
    letter-spacing: 0.2em;
    color: inherit;
    -webkit-text-decoration: none;
    text-decoration: none;
}

h2 a:hover {
    color: #2424ff;
}

</style>