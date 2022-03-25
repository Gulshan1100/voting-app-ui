import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import LoginPage from "../components/LoginPage";
import ProfileHome from "../components/ProfileHome";
import VotingPage from "../components/VotingPage";
import AddCampaignPage from "../components/AddCampaignPage";

Vue.use(VueRouter);
const NotFound = { template: "<div>Page not found</div>" };

export const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home",
      description: "ExampleROute",
    },
  },
  {
    path: "/login",
    component: LoginPage,
    meta: {
      title: "Login",
      description: "ExampleROute",
    },
  },
  {
    path: "/profilehome",
    component: ProfileHome,
    meta: {
      title: "ProfileHome",
      description: "ExampleROute",
    },
  },
  {
    path: "/votingpage",
    component: VotingPage,
    meta: {
      title: "VotingPage",
      description: "ExampleROute",
    },
  },
  {
    path: "/addcampaign",
    component: AddCampaignPage,
    meta: {
      title: "AddCampaignPage",
      description: "ExampleROute",
    },
  },
  { path: "*", component: NotFound },
];
export const router = new VueRouter({
  routes,
});

export default router;
