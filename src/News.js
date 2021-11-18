import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItems from './NewsItems'

export class News extends Component {
    articles= [
            {
            "source": {
            "id": "the-verge",
            "name": "The Verge"
            },
            "author": "Catie Keck",
            "title": "IATSE members vote to ratify contracts that include better streaming pay",
            "description": "IATSE, a major Hollywood union, has voted to ratify a pair of contracts to improve labor conditions for production workers — though narrowly — after previously voting to authorize a strike over stalled negotiations with major studios.",
            "url": "https://www.theverge.com/2021/11/15/22784345/iatse-members-ratify-contracts-following-strike-authorization",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/WZQL9LQ0S-VyVVbXR0hxu7gOh6o=/0x573:4000x2667/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23017629/1236517234.jpg",
            "publishedAt": "2021-11-16T01:29:57Z",
            "content": "The union had previously threatened to strike\r\nA major Hollywood union has voted to ratify a pair of contracts to improve labor conditions for production workers though narrowly after previously voti… [+2544 chars]"
            },
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": null,
            "title": "S.Korea lawmaker says Apple, Google not doing enough to comply with app store law - Reuters",
            "description": "Apple Inc <a href=\"https://www.reuters.com/companies/AAPL.O\" target=\"_blank\">(AAPL.O)</a> and Alphabet's <a href=\"https://www.reuters.com/companies/GOOGL.O\" target=\"_blank\">(GOOGL.O)</a> Google are not doing enough to comply with South Korea's law barring dom…",
            "url": "https://www.reuters.com/technology/skorea-lawmaker-says-apple-google-not-doing-enough-comply-with-app-store-law-2021-11-16/",
            "urlToImage": "https://www.reuters.com/resizer/M8Wrf5e5RGGPqgsh18fj4zeWIYg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6I26V2HL4ZJ3TPAWVXS6D4ET5I.jpg",
            "publishedAt": "2021-11-16T11:12:00Z",
            "content": "A 3D printed Google logo is placed on the Apple Macbook in this illustration taken April 12, 2020. REUTERS/Dado Ruvic/Illustration/File PhotoSEOUL, Nov 16 (Reuters) - Apple Inc (AAPL.O) and Alphabet'… [+2435 chars]"
            },
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": null,
            "title": "Upmarket toaster maker Balmuda launches smartphone in iPhone-dominated Japan - Reuters",
            "description": "High-end Japanese toaster maker Balmuda Inc <a href=\"https://www.reuters.com/companies/6612.T\" target=\"_blank\">(6612.T)</a> unveiled a stripped back smartphone on Tuesday, aiming for a toe-hold in a market dominated by Apple's <a href=\"https://www.reuters.com…",
            "url": "https://www.reuters.com/technology/upmarket-toaster-maker-balmuda-launches-smartphone-iphone-dominated-japan-2021-11-16/",
            "urlToImage": "https://www.reuters.com/resizer/hbqW15p3i955kQtvFHlJuEIdchg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MOEVNVMW35N2LHZCFAOEY2I45Q.jpg",
            "publishedAt": "2021-11-16T09:26:00Z",
            "content": "Balmuda CEO Gen Terao holds the companys new smartphone at a news conference in Tokyo, Japan November 16, 2021. REUTERS/Sam NusseyTOKYO, Nov 16 (Reuters) - High-end Japanese toaster maker Balmuda Inc… [+1414 chars]"
            },
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": null,
            "title": "UK orders in-depth probe of Nvidia's ARM acquisition - Reuters",
            "description": "Britain on Tuesday ordered an in-depth investigation of Nvidia Corp's <a href=\"https://www.reuters.com/companies/NVDA.O\" target=\"_blank\">(NVDA.O)</a> planned $50 billion-plus acquisition of UK-based chip designer Armfrom Japan's SoftBank over antitrust and na…",
            "url": "https://www.reuters.com/technology/uk-orders-in-depth-probe-nvidias-arm-acquisition-2021-11-16/",
            "urlToImage": "https://www.reuters.com/resizer/z4FpQ_jtH92KdnH_81arGIEuERg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/27QDCFVYMNJK5C7S4VVW4NGX2E.jpg",
            "publishedAt": "2021-11-16T13:14:00Z",
            "content": "The logo of technology company Nvidia is seen at its headquarters in Santa Clara, California February 11, 2015. REUTERS/Robert GalbraithLONDON, Nov 16 (Reuters) - Britain on Tuesday ordered an in-dep… [+1975 chars]"
            },
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": null,
            "title": "Net-zero pledges, improved metrics to put pressure on coal power, say investors - Reuters",
            "description": "Ambitions to wind down the world's coal use are likely to be accelerated by corporate net-zero pledges and better ways of measuring where factories in the global supply chain get their power, investors said.",
            "url": "https://www.reuters.com/business/cop/net-zero-pledges-improved-metrics-put-pressure-coal-power-say-investors-2021-11-16/",
            "urlToImage": "https://www.reuters.com/resizer/pfy8-XHddp1jB4U9_GQz9QDo3rQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XXWEOYQ72JOOTIDL5QTAM3KYCU.jpg",
            "publishedAt": "2021-11-16T12:00:00Z",
            "content": "BOSTON / CHICAGO Nov 16 (Reuters) - Ambitions to wind down the world's coal use are likely to be accelerated by corporate net-zero pledges and better ways of measuring where factories in the global s… [+4211 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Android Central"
            },
            "author": "Babu Mohan",
            "title": "Google formed a 'Fortnite Task Force' after Epic bypassed the Play Store",
            "description": "Epic says Google rushed to \"get the word out\" regarding a potential security problem for users sideloading Fortnite.\n\n\n\nWhat you need to know\n\n\nA legal filing by Epic Games has revealed that Google formed a \"Fortnite Task Force\" after the company sidestepped …",
            "url": "https://www.androidcentral.com/google-fortnite-task-force",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2018/08/fortnite-beta-launch-scree-galaxy-note-8.jpg",
            "publishedAt": "2021-11-16T12:38:04Z",
            "content": "Google created a task force after Epic Games launched Fortnite through Samsung's Galaxy Store and its own website in 2018, according to a new legal filing by the game developer (via Bloomberg). Citin… [+1730 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The Guardian"
            },
            "author": "Presented by Max Rushden with Jonathan Wilson, Ed Aarons and Lars Sivertsen. Produced by Joel Grove.",
            "title": "Ten of the best for England but World Cup jeopardy for Italy – Football Weekly",
            "description": "Max Rushden is joined by Jonathan Wilson, Lars Sivertsen and Ed Aarons as England beat San Marino 10-0, Scotland and Northern Ireland record impressive results and Italy are left facing a play-offRate, review, share on Apple Podcasts, Soundcloud, Audioboom, M…",
            "url": "https://www.theguardian.com/football/audio/2021/nov/16/ten-of-the-best-for-england-but-world-cup-jeopardy-for-italy-football-weekly",
            "urlToImage": "https://i.guim.co.uk/img/media/82a7ce63d553912af0a4e7833904cbfa5daa555c/0_147_6048_3628/master/6048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=01cfb32bde8fb0549e36391208a9f9d0",
            "publishedAt": "2021-11-16T12:27:20Z",
            "content": "Rate, review, share on Apple Podcasts, Soundcloud, Audioboom, Mixcloud, Acast and Stitcher, and join the conversation on Facebook, Twitter and email.\r\nMax Rushden is joined by Jonathan Wilson, Lars S… [+705 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNET"
            },
            "author": "Robin Mosley",
            "title": "Walmart Black Friday 2021: Lowest AirPods Pro price ever, official deals and prices out now - CNET",
            "description": "Laptops, TVs, AirPods, wireless headphones and more. Here are the new Walmart Black Friday deals that start Monday, Nov. 22 -- and what you can already get your hands on now.",
            "url": "https://www.cnet.com/tech/home-entertainment/walmart-black-friday-2021-lowest-airpods-pro-price-ever-official-deals-and-prices-out-now/",
            "urlToImage": "https://www.cnet.com/a/img/6qU5RJt0b7Ku9uynqfPBCd98k94=/1200x630/2021/11/15/266c6b3b-3416-4451-bc26-d0eabecd93e2/screen-shot-2021-11-15-at-11-24-53-am.png",
            "publishedAt": "2021-11-16T08:05:04Z",
            "content": "Walmart/Screenshot by John Falcone/CNET\r\nThis story is part of Holiday Gift Guide 2021, our list of ideas, by topic, by recipient and by price, to help you discover the perfect gift.\r\n Walmart's Blac… [+2979 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "MacRumors"
            },
            "author": "Hartley Charlton",
            "title": "Apple Accused of Not Doing Enough to Comply With South Korean App Store Law",
            "description": "Apple is not doing enough to comply with South Korean legislation that forbids app store operators from forcing developers to use their payment systems, according to lawmaker Jo Seoung-lae, Reuters reports.\n\n\n\n\n\nVia an amendment to the Telecommunication Busin…",
            "url": "https://www.macrumors.com/2021/11/16/apple-not-doing-enough-for-south-korean-law/",
            "urlToImage": "https://images.macrumors.com/t/qBJDBui1607DWrBpUYLBy-Xm_6Y=/2250x/article-new/2021/08/General-App-Store-South-Korea-Feature-Feature.jpg",
            "publishedAt": "2021-11-16T13:09:11Z",
            "content": "Apple is not doing enough to comply with South Korean legislation that forbids app store operators from forcing developers to use their payment systems, according to lawmaker Jo Seoung-lae, Reuters r… [+1497 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "'If Apple Keeps Letting Its Software Slip, the Next Big Thing Won't Matter'",
            "description": "If Apple can't improve the reliability of its software, the next big thing won't matter, argues Dan Moren in an opinion piece for Macworld. From the report: Uneven distribution: As sci-fi writer William Gibson famously said, \"the future is already here -- it'…",
            "url": "https://tech.slashdot.org/story/21/11/16/016241/if-apple-keeps-letting-its-software-slip-the-next-big-thing-wont-matter",
            "urlToImage": "https://a.fsdn.com/sd/topics/software_64.png",
            "publishedAt": "2021-11-16T10:00:00Z",
            "content": "Uneven distribution: As sci-fi writer William Gibson famously said, \"the future is already here -- it's just not evenly distributed.\" While Gibson's comment resonates mostly on a socio-economic level… [+3186 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Google Formed 'Fortnite Task Force' in Response To Epic's Moves",
            "description": "Google was so worried about Epic Games sidestepping its app store with Fortnite that it created a task force to confront the issue, according to a legal filing by the game developer. From a report: The task force was created after Epic began offering an Andro…",
            "url": "https://tech.slashdot.org/story/21/11/16/149237/google-formed-fortnite-task-force-in-response-to-epics-moves",
            "urlToImage": "https://a.fsdn.com/sd/topics/topicgoogle_fb.gif",
            "publishedAt": "2021-11-16T14:09:00Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "insider@insider.com (Paul Sandle)",
            "title": "The UK ordered an in-depth antitrust probe into Nvidia's $40 billion acquisition of Arm",
            "description": "The UK's antitrust watchdog will spend six months investigating the deal.",
            "url": "https://www.businessinsider.com/uk-antitrust-probe-nvidia-arm-chips-2021-11",
            "urlToImage": "https://i.insider.com/5f1ae1732618b91b3d4fb04a?width=1200&format=jpeg",
            "publishedAt": "2021-11-16T14:16:51Z",
            "content": "The UK on Tuesday ordered an in-depth investigation of Nvidia Corp's planned $50 billion-plus acquisition of UK-based chip designer Arm from Japan's SoftBank over antitrust and national security conc… [+1699 chars]"
            },
            {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "insider@insider.com (Katherine McLaughlin)",
            "title": "A software engineer turned a $100,000 investment into a $2 million portfolio thanks to 3 smart strategies",
            "description": "Bardan Mainali knew the best way to grow his money was in the stock market, so he altered his lifestyle to save up an initial investment of $100,000.",
            "url": "https://www.businessinsider.com/personal-finance/strategies-software-engineer-used-build-multimillion-portfolio-2021-11",
            "urlToImage": "https://i.insider.com/61928f71d67228001924601c?width=1200&format=jpeg",
            "publishedAt": "2021-11-16T13:43:37Z",
            "content": "Bardan Mainali still remembers the nerves he felt the first time he invested his hard-earned money in the stock market. \"I was a little bit hesitant,\" he said, but still he knew the stock market was … [+6295 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Zacks.com"
            },
            "author": "Zacks Equity Research",
            "title": "Should iShares Russell 1000 ETF (IWB) Be on Your Investing Radar?",
            "description": "Style Box ETF report for IWB",
            "url": "http://www.zacks.com/stock/news/1828144/should-ishares-russell-1000-etf-iwb-be-on-your-investing-radar?cid=CS-ENTREPRENEUR-FT-style_box_etf-1828144",
            "urlToImage": "https://assets.entrepreneur.com/providers/zacks/hero-image-zacks-397383.jpeg",
            "publishedAt": "2021-11-16T11:20:10Z",
            "content": "Launched on 05/15/2000, the iShares Russell 1000 ETF (IWB) is a passively managed exchange traded fund designed to provide a broad exposure to the Large Cap Blend segment of the US equity market.\r\nTh… [+4188 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Zacks.com"
            },
            "author": "Zacks Equity Research",
            "title": "Should Invesco FTSE RAFI US 1000 ETF (PRF) Be on Your Investing Radar?",
            "description": "Style Box ETF report for PRF",
            "url": "http://www.zacks.com/stock/news/1828140/should-invesco-ftse-rafi-us-1000-etf-prf-be-on-your-investing-radar?cid=CS-ENTREPRENEUR-FT-style_box_etf-1828140",
            "urlToImage": "https://assets.entrepreneur.com/providers/zacks/hero-image-zacks-397391.jpeg",
            "publishedAt": "2021-11-16T11:20:05Z",
            "content": "Looking for broad exposure to the Large Cap Value segment of the US equity market? You should consider the Invesco FTSE RAFI US 1000 ETF (PRF), a passively managed exchange traded fund launched on 12… [+4460 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Devdiscourse"
            },
            "author": "ANI",
            "title": "'Astronaut' Snoopy set to blast off into Space for NASA's Moon Mission next year - Devdiscourse",
            "description": "<ol><li>'Astronaut' Snoopy set to blast off into Space for NASA's Moon Mission next year  Devdiscourse\r\n</li><li>Snoopy is heading to space on NASA’s Artemis I moon mission  Digital Trends\r\n</li><li>Snoopy is Headed to Space With One Very Important Job  Gizmo…",
            "url": "https://www.devdiscourse.com/article/international/1809497-astronaut-snoopy-set-to-blast-off-into-space-for-nasas-moon-mission-next-year",
            "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/16_11_2021_09_32_01_1945235.jpg?width=920&format=jpeg",
            "publishedAt": "2021-11-16T09:32:20Z",
            "content": "The well-known character from creator Charles M. Schulz's comic strip Peanuts, Snoopy will be flying aboard US space agency NASA's Artemis mission in early 2022. \"NASA has shared an association with … [+1886 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "VentureBeat"
            },
            "author": "Dean Takahashi",
            "title": "How Apple’s privacy changes affected mobile game revenues in Q3",
            "description": "Apple's changes to the Identifier for Advertisers (IDFA) had a big impact on mobile game revenues in the third quarter.",
            "url": "https://venturebeat.com/2021/11/16/how-apples-privacy-changes-affected-mobile-game-revenues-in-q3/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2021/11/consumer-acquisition.jpg?w=1200&strip=all",
            "publishedAt": "2021-11-16T14:30:24Z",
            "content": "Join gaming leaders online at GamesBeat Summit Next this upcoming November 9-10. Learn more about what comes next. \r\nApples shift from targeted advertising to privacy earlier this year had a big impa… [+1069 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Hipertextual"
            },
            "author": "Alberto Martín",
            "title": "10 trucos para ahorrar batería en el iPhone",
            "description": "Aunque la llegada de los iPhone 13 y 13 Pro Apple ha sido un golpe en la mesa en cuanto autonomía se refiere, todos sabemos que la batería es un componente que se va desgastando, y con el tiempo, perdiendo autonomía. Apple ha ido introduciendo funcionalidades…",
            "url": "https://hipertextual.com/2021/11/trucos-para-ahorrar-bateria-en-el-iphone",
            "urlToImage": "https://hipertextual.com/wp-content/uploads/2019/02/hipertextual-2019843721.jpg",
            "publishedAt": "2021-11-16T08:06:40Z",
            "content": "Aunque la llegada de los iPhone 13 y 13 Pro Apple ha sido un golpe en la mesa en cuanto autonomía se refiere, todos sabemos que la batería es un componente que se va desgastando, y con el tiempo, per… [+8936 chars]"
            },
    ]
    
        constructor(){
            super()
            console.log("hrll")
            this.state={
                articles:this.articles,
                loading:false
            }
        }

    

    render() {
        return (
            <div className="container my-3">
                <h1>TOP HEADLINES</h1>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return  <div className="col-md-3 my-4"  key={element.url}>
                        <NewsItems title={element.title} description={element.description.slice(0,88)}imgurl={element.urlToImage} newsurl= {element.url}/>
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default News
