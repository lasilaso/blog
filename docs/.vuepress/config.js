const algorithmArr = [
    "algorithm1"
];

const javaArr = [
    "java1"
];

const openArr = [
    "how-to-build-redis-cluster",
    "how-to-build-blog"
];

const interviewArr = [
    "Java",
    "JVM",
    "Spring",
    "Spring-bean-life-cycle",
    "Spring-bean-circular-dependency",
    "Mybatis",
    "MySQL",
    "Redis",
    "MongoDB",
    "MQ",
    "ElasticSearch",
    "Docker",
    "设计模式",
    "排序算法",
    "经典数据结构"
    
];

module.exports = {
    title: 'IT Forever Young',
    description: 'IT Forever Young',
    base: "/",
    head: [

    ],
    locales: {
        "/": {
            lang: "简体中文",
            selectText: "Languages",
            title: "",
            description: ""
        }
    },
    themeConfig: {
        // logo: "./public/logo.png",
        // 这里定义的是导航栏
        nav: [
            /**
            {
                text: "Java",
                link: "/java/"
            },
            {
                text: "算法",
                link: "/algorithm/"
            },
            {
                text: "分享",
                link: "/open/"
            },
            **/
            {
                text: "面试专题",
                link: "/interview/"
            },
            {
                text: "Github",
                link: "https://github.com/itForeverYoung/ItForeverYoung"
            },
            {
                text: "404",
                link: "https://www.google.com"
            }
            /*,
            {
                text: "选择语言",
                items: [
                    {
                        text: "简体中文",
                        link: "/"
                    },
                    {
                        text: "不支持English",
                        link:"/en/"
                    }
                ]
            }
            */
        ],
        // 这里定义的是侧边栏
        sidebar: {
            /**    
            '/java/': [
                {
                    title: "这里是Java",
                    collapsable: true,
                    children: javaArr
                }
            ],
            '/algorithm/': [
                {
                    title: "这里是算法",
                    collapsable: false,
                    children: algorithmArr
                }
            ],
            '/open/': [
                {
                    title: "这里是随便分享",
                    collapsable: false,
                    children: openArr
                }
            ],
             */
            '/interview/': [
                {
                    title: "这里是面试专题",
                    collapsable: false,
                    children: interviewArr
                }
            ]
        },
        // 1: 提取到h2级别标题，2: 提取到h3级别标题
        sidebarDepth: 1
    },
    markdown: {
        lineNumber: true

    }
}
