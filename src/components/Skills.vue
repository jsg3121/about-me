<template>
  <div class="skills-container">
    <div class="skills-content">
      <h2>SKILLS</h2>
      <div class="inner-container">
        <div class="container-section">
          <h1 class="container-title">Advanced Skills </h1>
          <div class="container-list">
            <ul class="skill-list">
              <li class="list-item" v-for='item in advanced' :key='item.id'>
                <figure class="img-container">
                  <img :src="item.icon"/>
                </figure>
                <p class="item-description">{{item.description}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="container-section">
            <h1 class="container-title">Intermediate Skills </h1>
          <div class="container-list">
            <ul class="skill-list">
              <li class="list-item" v-for='item in intermediate' :key='item.id'>
                <figure class="img-container">
                  <img :src="item.icon"/>
                </figure>
                <p class="item-description">{{item.description}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="container-section">
          <h1 class="container-title">Beginner Skills</h1>
          <div class="container-list">
            <ul class="skill-list">
              <li class="list-item" v-for='item in beginner' :key='item.id'>
                <figure class="img-container">
                  <img :src="item.icon"/>
                </figure>
                <p class="item-description">{{item.description}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {},
  data () {
    return {
      mouseOver: false,
      advanced: [
        {
          id: 1,
          description: 'HTML',
          icon: require('../assets/image/html.png')
        },
        {
          id: 2,
          description: 'CSS',
          icon: require('../assets/image/css.png')
        },
        {
          id: 3,
          description: 'JavaScript',
          icon: require('../assets/image/javascript.png')
        }
      ],
      intermediate: [
        {
          id: 1,
          description: 'TypeScript',
          icon: require('../assets/image/typscript.png')
        },
        {
          id: 2,
          description: 'Vue',
          icon: require('../assets/image/vue.png')
        },
        {
          id: 3,
          description: 'Vuex',
          icon: require('../assets/image/vue.png')
        },
        {
          id: 4,
          description: 'Vuetify',
          icon: require('../assets/image/vuetify.png')
        },
        {
          id: 5,
          description: 'React',
          icon: require('../assets/image/react.png')
        },
        {
          id: 6,
          description: 'Redux',
          icon: require('../assets/image/redux.png')
        },
        {
          id: 7,
          description: 'RxJS',
          icon: require('../assets/image/rxjs.png')
        },
        {
          id: 8,
          description: 'Node.js',
          icon: require('../assets/image/nodejs.png')
        },
        {
          id: 9,
          description: 'Express.js',
          icon: require('../assets/image/express.png')
        }
      ],
      beginner: [
        {
          id: 1,
          description: 'Docker',
          icon: require('../assets/image/docker.png')
        },
        {
          id: 2,
          description: 'MySQL',
          icon: require('../assets/image/mysql.png')
        },
        {
          id: 3,
          description: 'GraphQL',
          icon: require('../assets/image/graphql.png')
        },
        {
          id: 4,
          description: 'Prisma',
          icon: require('../assets/image/prisma.png')
        },
        {
          id: 5,
          description: 'Storybook',
          icon: require('../assets/image/storybook.png')
        },
        {
          id: 6,
          description: 'MobX',
          icon: require('../assets/image/mobx.png')
        },
        {
          id: 7,
          description: 'Tailwind CSS',
          icon: require('../assets/image/tailwind.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.skills-container {
  width: 100%;
  background-color: #eceef0;
  padding-top: 8.125rem;
  padding-bottom: 7.6875rem;

  .skills-content {
    max-width: 1280px;
    margin: 0 auto;

    h2 {
      width: 100%;
      font-family: "Montserrat";
      font-size: 2.875rem;
      font-weight: bold;
      text-align: center;
      color: #000f2a;
      margin-bottom: 2rem
    }

    .inner-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      .container-section {
        width: 100%;
        padding: 0 2rem;

        .container-title {
          height: 3.5rem;
          font-family: "Montserrat";
          color: #000f2a;
          font-size: 3rem;
          font-weight: 700;
          border-bottom: 1px solid #333333;
        }

        .container-list {
          width: 100%;

          .skill-list {
            display:flex;
            flex-wrap: wrap;
            align-items: center;
            flex: 0;
            margin-top: 1rem;
            margin-bottom: 3rem;

            .list-item {
              width: 6.25rem;
              height:8rem;
              margin-top: 1rem;
              margin-bottom: 1rem;
              margin-right: 1.5rem;

              .img-container {
                width: 6.25rem;
                height: 6.25rem;
                text-align: center;

                img {
                  height: 100%;
                  width: 100%;
                  object-fit: contain;
                }
              }

              .item-description {
                margin-top: 0.5rem;
                width: 100%;
                text-align: center;
                font-weight: 700;
                font-size: 1rem;
                height: 1.2rem;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 640px) {
  .skills-container {
    padding-top: 3rem;

    .inner-container {
      padding: 0 2rem;
    }
  }
}
</style>
