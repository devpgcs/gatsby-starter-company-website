import MemberOne from "../../src/images/member-one.png"

export const MENU_ITEMS = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "How it works",
    path: "/",
  },
],

export const BANNER = [
  {
    id: [1, 2, 3],
    logo: "source",
    title: "title",
    titleStrong: "span",
    subtitle: "subtitle",
    note: "note",
    noteLink: "label",
    noteContinue: "note",
    image: "source",
  },
],

export const FEATURES = [
  {
    id: 1,
    image: 'source',
    text: 'description'
  }
],

export const industries_FEATURES = [
  {
    id: 1,
    text: "Some explanation text"
  }
]

export const INDUSTRIES = [
  {
    id: 1,
    image: 'source',
    text: 'description'
  }
],

export const OPINIONS = [
  {
    id: 1,
    photo: 'source',
    name: 'some name',
    profession: 'some profession'
  }
],

export const FOOTER_LINKS = [
  {
    id: 1,
    link: [
      {
        id: 1,
        title: "Reviews",
        path: "/",
      },
      {
        id: 2,
        title: "Features",
        path: "/",
      },
    ],
  },
  {
    id: 2,
    link: [
      {
        id: 1,
        title: "Blog",
        path: "/",
      },
      {
        id: 2,
        title: "How it works",
        path: "/",
      },
    ],
  },
]

export const FOOTER_MEMBERS = [
  {
    id: 1,
    class: "main-col one",
    img: [
      {
        id: 1,
        source: "../../images/member-one.png",
      },
      {
        id: 2,
        source: "../../images/member-two.png",
      },
    ],
  },
  {
    id: 2,
    class: "main-col two",
    img: [
      {
        id: 1,
        source: { MemberOne },
      },
      {
        id: 2,
        source: "../../images/member-four.png",
      },
    ],
  },
],
