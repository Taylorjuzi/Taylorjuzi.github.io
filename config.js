// ==========================================
// 网站全局配置文件 (在这里修改你的图片路径和文字)
// ==========================================

const siteConfig = {
    heroBg: "./images/hero-bg.jpg",
    // 1. 基础联系方式配置
    contact: {
        phone: "+86 18612700173",
        email: "1658116541@qq.com",
        wechat: "18612700173",
        location_zh: "📍 北京",
        location_en: "📍 Beijing"
    },

    // 2. 首屏 4 张卡片图片配置 (推荐放在 images 文件夹下)
    heroCards: [
        "./images/hero-1.jpg", // 第1张图
        "./images/hero-2.jpg", // 第2张图
        "./images/hero-3.jpg", // 第3张图
        "./images/hero-4.jpg"  // 第4张图
    ],

    // 3. 精选作品集 (6个封面及点开后的内页大图)
    portfolioCovers: [
        { 
            img: "./images/port-1.jpg", 
            title_zh: "品牌设计", title_en: "Brand Design", 
            desc_zh: "品牌视觉识别系统设计", desc_en: "Brand Identity System Design",
            // 点开模块1后展示的图片列表，加几张填几张
            images: [
                "./images/port-1-detail1.jpg", 
                "./images/port-1-detail2.jpg", 
                "./images/port-1-detail3.jpg"
            ]
        },
        { 
            img: "./images/port-2.jpg", 
            title_zh: "视觉 KV ", title_en: "Key Visual Design", 
            desc_zh: "品牌主视觉 KV", desc_en: "Brand Core Key Visual Design",
            // 点开模块2后展示的图片列表
            images: [
                "./images/port-2-detail1.jpg",
                "./images/port-2-detail2.jpg"
            ]
        },
        { 
            img: "./images/port-3.jpg", 
            title_zh: "创意海报", title_en: "Creative Poster", 
            desc_zh: "品牌创意海报设计", desc_en: "Brand creative poster design",
            images: [
                "./images/port-3-detail1.jpg"
            ]
        },
        { 
            img: "./images/port-4.jpg", 
            title_zh: "包装设计", title_en: "Packaging Design", 
            desc_zh: "快消品包装全案设计", desc_en: "FMCG Packaging Full-Case Design",
            images: [
                "./images/port-4-detail1.jpg"
            ]
        },
        { 
            img: "./images/port-5.jpg", 
            title_zh: "手绘插画", title_en: "Hand-drawn illustration", 
            desc_zh: "插画设计", desc_en: "illustration design",
            images: [
                "./images/port-5-detail1.jpg"
            ]
        },
        { 
            img: "./images/port-6.jpg", 
            title_zh: "AIGC 创作", title_en: "AIGC & AI-Generated Design", 
            desc_zh: "AIGC 商业视觉生成", desc_en: "AIGC Commercial Visual Generation",
            images: [
                "./images/port-6-detail1.jpg"
            ]
        }
    ],

    // 4. 瀑布流散装作品配置 (传多少显示多少)
    masonry: [
        "./images/calculator_on_table.jpg", // 你的第1张散图
        "./images/my-design2.jpg",          // 你的第2张散图
        "./images/my-design3.jpg"           // 你的第3张散图
        // ... 想加多少张就继续往下写（注意最后一行不用加逗号）
    ]
};