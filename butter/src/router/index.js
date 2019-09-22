import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BeersHome from '@/components/BeersHome'
import StylesHome from '@/components/StylesHome'
import TypeHome from '@/components/TypeHome'
import LocationHome from '@/components/LocationHome'
import BlogHome from '@/components/BlogHome'
import BlogPost from '@/components/BlogPost'
import RssAtomSitemap from '@/components/RssAtomSitemap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/beers/',
      name: 'beers-home',
      component: BeersHome
    },
    {
      path: '/location/',
      name: 'location-home',
      component: LocationHome
    },
    {
      path: '/styles/',
      name: 'styles-home',
      component: StylesHome
    },
    {
      path: '/types/',
      name: 'types-home',
      component: TypeHome
    },
    {
      path: '/blog/',
      name: 'blog-home',
      component: BlogHome
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost
    },
    {
      path: '/rss',
      name: 'rss',
      component: RssAtomSitemap
    },
  ]
})
