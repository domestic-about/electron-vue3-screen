import { createRouter, createWebHashHistory } from "vue-router";
// import disclaimers from "@/pages/home/disclaimers.vue";
const routes = [
  {
    path: "",
    name: "home",
    meta: { header: false, footer: false },
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/intro",
    name: "intro",
    redirect: "/intro/history",
    component: () => import("@/pages/intro/index.vue"),
    children: [
      {
        path: "/intro/history",
        name: "intro-history",
        component: () => import("@/pages/intro/history.vue"),
      },
      {
        path: "/intro/agency",
        name: "intro-agency",
        component: () => import("@/pages/intro/agency.vue"),
      },
      {
        path: "/intro/dean",
        name: "intro-dean",
        component: () => import("@/pages/intro/dean.vue"),
      },
      {
        path: "/intro/clerk",
        name: "intro-clerk",
        component: () => import("@/pages/intro/clerk.vue"),
      },
      {
        path: "/intro/lead",
        name: "intro-lead",
        component: () => import("@/pages/intro/lead.vue"),
      },
    ],
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/pages/contact/index.vue"),
  },
  {
    path: "/party",
    name: "party",
    component: () => import("@/pages/party/index.vue"),
  },
  {
    path: "/research",
    name: "research",
    redirect: "/research/project",
    component: () => import("@/pages/research/index.vue"),
    children: [
      {
        path: "/research/project",
        name: "research-project",
        component: () => import("@/pages/research/project.vue"),
      },
      {
        path: "/research/area",
        name: "research-area",
        component: () => import("@/pages/research/area.vue"),
      },
      {
        path: "/research/platform",
        name: "research-platform",
        component: () => import("@/pages/research/platform.vue"),
      },
      {
        path: "/research/team",
        name: "research-team",
        component: () => import("@/pages/research/team.vue"),
      },
      {
        path: "/research/result",
        name: "research-result",
        component: () => import("@/pages/research/result.vue"),
      },
    ],
  },
  {
    path: "/service",
    name: "service",
    component: () => import("@/pages/service/index.vue"),
  },
  {
    path: "/subject",
    name: "subject",
    redirect: "/subject/subject",
    component: () => import("@/pages/subject/index.vue"),
    children: [
      {
        path: "/subject/subject",
        name: "subject-subject",
        component: () => import("@/pages/subject/subject.vue"),
      },
      {
        path: "/subject/major",
        name: "subject-major",
        component: () => import("@/pages/subject/major.vue"),
      },
    ],
  },
  {
    path: "/talent",
    name: "talent",
    redirect: "/talent/system",
    component: () => import("@/pages/talent/index.vue"),
    children: [
      {
        path: "/talent/system",
        name: "talent-system",
        component: () => import("@/pages/talent/system.vue"),
      },
      {
        path: "/talent/condition",
        name: "talent-condition",
        component: () => import("@/pages/talent/condition.vue"),
      },
      {
        path: "/talent/course",
        name: "talent-course",
        component: () => import("@/pages/talent/course.vue"),
      },
      {
        path: "/talent/result",
        name: "talent-result",
        component: () => import("@/pages/talent/result.vue"),
      },
      {
        path: "/talent/award",
        name: "talent-award",
        component: () => import("@/pages/talent/award.vue"),
      },
    ],
  },
  {
    path: "/teacher",
    name: "teacher",
    component: () => import("@/pages/teacher/index.vue"),
  },
  {
    path: "/thought",
    name: "thought",
    component: () => import("@/pages/thought/index.vue"),
  },
  {
    path: "/alumni",
    name: "alumni",
    redirect: "/alumni/north",
    component: () => import("@/pages/alumni/index.vue"),
    children: [
      {
        path: "/alumni/north",
        name: "alumni/north",
        component: () => import("@/pages/alumni/north.vue"),
      },
      {
        path: "/alumni/south",
        name: "alumni/south",
        component: () => import("@/pages/alumni/south.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
