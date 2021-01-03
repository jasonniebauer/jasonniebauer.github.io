<template>
  <main>
    <div class="intro">
      <h1>Jason Niebauer</h1>
      <p>Full-Stack Developer at <a href="https://exencialwealth.com">Exencial Wealth</a>. Based in Frisco, TX</p>
      <ul>
        <!-- <li>
          <a href="/blog">Blog</a>
        </li> -->
        <li>
          <a href="https://github.com/jasonniebauer">GitHub</a>
        </li>
      </ul>
    </div>
    <!-- <h2>Projects</h2>
    <div class="featured-projects">
      <ul>
        <FeaturedProject v-for="project in featuredProjects" :project="project" :key="project.id"/>
      </ul>
    </div>
    <div class="projects">
      <ul>
        <Project v-for="project in projects" :project="project" :key="project.id"/>
      </ul>
    </div> -->
  </main>
</template>

<script>
// import FeaturedProject from "@/components/FeaturedProject"
// import Project from "@/components/Project"

export default {
  name: "Home",
  components: {
    // FeaturedProject,
    // Project
  },
  data() {
    return {
      // featuredProjects: [
      //   {
      //     id: 1,
      //     name: 'SpeedView',
      //     description: 'Track your speed while traveling',
      //     href: '#'
      //   },
      //   {
      //     id: 2,
      //     name: 'PasswordHero',
      //     description: 'Generate secure passwords you can remember',
      //     href: '#'
      //   },
      //   {
      //     id: 3,
      //     name: 'Click Encrypt',
      //     description: 'Communicate in private',
      //     href: '#'
      //   },
      //   {
      //     id: 4,
      //     name: 'Powerline',
      //     description: 'Monitor uptime status',
      //     href: '#'
      //   }
      // ],
      // projects: [
      //   {
      //     id: 1,
      //     name: 'NMAP Cheatsheet',
      //     href: '#'
      //   },
      //   {
      //     id: 2,
      //     name: 'Python strftime',
      //     href: '#'
      //   },
      //   {
      //     id: 3,
      //     name: 'Python strptime',
      //     href: '#'
      //   },
      //   {
      //     id: 4,
      //     name: 'Title',
      //     href: '#'
      //   },
      //   {
      //     id: 5,
      //     name: 'Title',
      //     href: '#'
      //   },
      //   {
      //     id: 6,
      //     name: 'Title',
      //     href: '#'
      //   },
      //   {
      //     id: 7,
      //     name: 'Title',
      //     href: '#'
      //   },
      //   {
      //     id: 8,
      //     name: 'Title',
      //     href: '#'
      //   }
      // ]
    }
  }
};
</script>

<style scoped>
.intro {
  padding-bottom: 32px;
}

@media screen and (min-width: 40em) {
  .intro {
    padding-bottom: 64px;
  }
}

@media screen and (min-width: 52em) {
  .intro {
    padding-bottom: 128px;
  }
}

p {
  font-weight: 700;
}

.intro ul {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0;
  margin: 0;
}

.intro li {
  margin-right: 16px;
  font-weight: 700;
}

.featured-projects ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fit,minmax(256px,1fr));
}

.projects {
  padding-top: 64px;
  padding-bottom: 64px;
  font-size: 14px;
}

.projects ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(256px,1fr));
  grid-gap: 32px;
}

</style>