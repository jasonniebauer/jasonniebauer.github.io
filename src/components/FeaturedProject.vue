<template>
  <li>
    <h2>
      <a href="{{ project.href }}">{{ project.name }}</a>
    </h2>
    {{ project.description }}
  </li>
</template>

<script>
export default {
  name: "FeaturedProject",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

h2 {
  font-size: 18px;
}

h2 a {
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