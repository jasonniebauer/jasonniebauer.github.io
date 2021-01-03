<template>
  <li>
    <a href="{{ project.href }}">{{ project.name }}</a>
  </li>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

a {
  text-transform: uppercase;
    -webkit-letter-spacing: 0.2em;
    -moz-letter-spacing: 0.2em;
    -ms-letter-spacing: 0.2em;
    letter-spacing: 0.2em;
    color: inherit;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-weight: 700;
}

a:hover {
  color: #2424ff;
}

</style>