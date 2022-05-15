import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    // artices = [
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "U.N. Security Council, including Russia, expresses concern about Ukraine - Reuters.com",
    //         "description": "The U.N. Security Council, including Russia, on Friday expressed \"deep concern regarding the maintenance of peace and security of Ukraine\" and backed efforts by the U.N. chief to find a peaceful solution in the body's first statement since Moscow's invasion.",
    //         "url": "https://www.reuters.com/world/un-security-council-including-russia-express-concern-about-ukraine-2022-05-06/",
    //         "urlToImage": "https://www.reuters.com/resizer/oJf6DN_9wmXcipNAf5pHF5PbrNQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MGZWZIVU7ZI4DB7WXS3F7SBOCM.jpg",
    //         "publishedAt": "2022-05-07T07:47:00Z",
    //         "content": "UNITED NATIONS, May 6 (Reuters) - The U.N. Security Council, including Russia, on Friday expressed \"deep concern regarding the maintenance of peace and security of Ukraine\" and backed efforts by the … [+2798 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "Musk's $44 billion Twitter buyout challenged in shareholder lawsuit - Reuters",
    //         "description": "Elon Musk and Twitter Inc <a href=\"https://www.reuters.com/companies/TWTR.N\" target=\"_blank\">(TWTR.N)</a> were sued on Friday by a Florida pension fund seeking to stop Musk from completing his $44 billion takeover of the social media company before 2025.",
    //         "url": "https://www.reuters.com/business/musk-twitter-are-sued-by-shareholder-over-44-bln-takeover-2022-05-06/",
    //         "urlToImage": "https://www.reuters.com/resizer/eXZtjHwcMwCJ-F0DHLW50fmc1Fk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OXBPJOTOFNNGXBRO6HCM43NFIY.jpg",
    //         "publishedAt": "2022-05-07T05:34:00Z",
    //         "content": "May 6 (Reuters) - Elon Musk and Twitter Inc (TWTR.N) were sued on Friday by a Florida pension fund seeking to stop Musk from completing his $44 billion takeover of the social media company before 202… [+2382 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "ABC15 Arizona"
    //         },
    //         "author": "Courtney Holmes",
    //         "title": "AZ water future uncertain as leaders deal with severe shortages on Colorado River - ABC15 Arizona in Phoenix",
    //         "description": "Arizona will have to learn to live with less water from the Colorado River.",
    //         "url": "https://www.abc15.com/weather/impact-earth/az-water-future-uncertain-as-leaders-deal-with-severe-shortages-on-colorado-river",
    //         "urlToImage": "https://ewscripps.brightspotcdn.com/dims4/default/af13140/2147483647/strip/true/crop/3000x1575+0+57/resize/1200x630!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Ff6%2F46%2Fe4c40db84ae09a93f9513c61e8be%2Fap22123595438394.jpeg",
    //         "publishedAt": "2022-05-07T05:12:00Z",
    //         "content": "Arizona will have to learn to live with less water from the Colorado River.\r\nThat was the message from managers of the Central Arizona Project (CAP) which distributes river water that flows to users … [+2579 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "Luka Doncic (26 points) Highlights vs. Phoenix Suns - Dallas Mavericks",
    //         "description": "Luka Doncic (26 points) Highlights vs. Phoenix Suns#dallasmavericks #phoenixsuns #dallasmavericksJoin Club Maverick!Check out the Mavs 2022-23 season tickets...",
    //         "url": "https://www.youtube.com/watch?v=XK2TuUJcaOI",
    //         "urlToImage": "https://i.ytimg.com/vi/XK2TuUJcaOI/hqdefault.jpg",
    //         "publishedAt": "2022-05-07T04:29:53Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Vulture"
    //         },
    //         "author": "Charu Sinha",
    //         "title": "Fred Savage Fired From Wonder Years Reboot After Misconduct Complaints - Vulture",
    //         "description": "Following an investigation into inappropriate conduct.",
    //         "url": "http://www.vulture.com/2022/05/fred-savage-fired-from-wonder-years-reboot.html",
    //         "urlToImage": "https://pyxis.nymag.com/v1/imgs/785/7d5/31b1ee00f757974d7a79d81033f2659e62-fred-savage.1x.rsocial.w1200.jpg",
    //         "publishedAt": "2022-05-07T04:18:01Z",
    //         "content": "Fred Savage has been fired as executive producer and director of ABCs The Wonder Years reboot following allegations of misconduct, 20th Television confirmed on Friday. Savage starred in the original … [+1001 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NDTV News"
    //         },
    //         "author": null,
    //         "title": "In Elon Musk's Twitter Bid, A Role For CEO Parag Agrawal's Wife - NDTV",
    //         "description": "A move by Andreessen Horowitz to join Elon Musk's bid for Twitter Inc. threatens to create a conflict for firm co-founder Marc Andreessen, who sits on the board of social-networking rival Meta Platforms Inc.",
    //         "url": "https://www.ndtv.com/world-news/in-elon-musks-twitter-bid-a-role-for-ceo-parag-agrawals-wife-2952186",
    //         "urlToImage": "https://c.ndtvimg.com/2022-05/vhrnui8k_vineeta-agarwala_625x300_06_May_22.jpg",
    //         "publishedAt": "2022-05-07T03:45:00Z",
    //         "content": "Vineeta Agarwala is a general partner at Andreessen Horowitz\r\nA move by Andreessen Horowitz to join Elon Musk's bid for Twitter Inc. threatens to create a conflict for firm co-founder Marc Andreessen… [+3270 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "Protesters rally in Grand Rapids for abortion rights - WOOD TV8",
    //         "description": "More than 250 people rallied for abortion rights Friday evening in downtown Grand Rapids outside the Kent County Courthouse. It comes in the wake of the leak...",
    //         "url": "https://www.youtube.com/watch?v=huMaRfz2GC8",
    //         "urlToImage": "https://i.ytimg.com/vi/huMaRfz2GC8/maxresdefault.jpg",
    //         "publishedAt": "2022-05-07T03:32:59Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MMA Fighting"
    //         },
    //         "author": "MMA Fighting Newswire",
    //         "title": "UFC 274 preview show: Will Charles Oliveira’s weight miss have massive impact vs. Justin Gaethje? - MMA Fighting",
    //         "description": "Charles Oliveira’s historic weight miss cost him the UFC lightweight title before UFC 274, but he still has the chance to make sure Justin Gaethje doesn’t get it either.",
    //         "url": "https://www.mmafighting.com/2022/5/6/23060931/ufc-274-preview-show-will-charles-oliveiras-weight-miss-have-massive-impact-vs-justin-gaethje",
    //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/zQC1mQZkeAd5dSOusoxrhc54FDg=/0x0:3660x1916/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23444083/1395820060.jpg",
    //         "publishedAt": "2022-05-07T03:18:10Z",
    //         "content": "Charles Oliveiras weight miss led to him being stripped of the lightweight title before facing Justin Gaethje. Will Fridays drama have a significant impact on the result of the UFC 264 main event?\r\nM… [+485 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Jesse O’Neill",
    //         "title": "$700M superyacht linked to Putin seized by Italy - New York Post ",
    //         "description": "A $700 million luxury yacht linked to Russian President Vladimir Putin was impounded by Italy Friday, authorities said.",
    //         "url": "https://nypost.com/2022/05/06/700m-superyacht-linked-to-vladimir-putin-seized-by-italy/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/05/scheherazade-seized-index.jpg?quality=75&strip=all&w=1024",
    //         "publishedAt": "2022-05-07T02:39:00Z",
    //         "content": "A $700 million luxury yacht linked to Russian President Vladimir Putin was impounded by Italy Friday, authorities said. \r\nThe government order to seize the luxurious six-deck Scheherazade came as it … [+1615 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "WLS-TV"
    //         },
    //         "author": "Leah Hope, Eric Horng",
    //         "title": "Illinois COVID Update Today: IL reports 7,709 new cases, 7 deaths; CDPH recommends masks in public indoor spaces - WLS-TV",
    //         "description": "Illinois reported 7,709 new COVID cases and 7 deaths Friday. CDPH is recommending masks in public indoor spaces.",
    //         "url": "https://abc7chicago.com/covid-19-stats-illinois-cases-test/11823321/",
    //         "urlToImage": "https://cdn.abcotvs.com/dip/images/11824559_050622-wls-eric-covid-medium-6p-vid.jpg?w=1600",
    //         "publishedAt": "2022-05-07T02:26:15Z",
    //         "content": "CHICAGO (WLS) -- Illinois reported 7,709 new COVID cases and 7 deaths Friday as the CDC said 9 Chicago-area counties have reached a \"medium\" risk of transmission.There have been at least 3,169,315 to… [+4651 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "ESPN"
    //         },
    //         "author": "Tim Bontemps",
    //         "title": "Joel Embiid shows immediate impact in Game 3, but Philadelphia 76ers still have 'a long way to go' - ESPN",
    //         "description": "Philadelphia's Joel Embiid returned after missing more than a week with a facial fracture and concussion to play 36 minutes, score 18 points and grab 11 rebounds in leading his 76ers to a 99-79 victory over the Miami Heat in Game 3 Friday night.",
    //         "url": "https://www.espn.com/nba/story/_/id/33870302/joel-embiid-shows-immediate-impact-game-3-philadelphia-76ers-long-way-go",
    //         "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0507%2Fr1009450_1296x729_16%2D9.jpg",
    //         "publishedAt": "2022-05-07T01:56:00Z",
    //         "content": "PHILADELPHIA -- The Phantom of the Process is back -- and, for the Philadelphia 76ers, not a moment too soon.\r\nJoel Embiid returned after missing more than a week with a facial fracture and concussio… [+6448 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "COVID forecast: Cases expected to rise for another month then decline - KGW News",
    //         "description": "Cases are spiking in Oregon and Southwest Washington, but the good news is that hospitalizations remain well below the pandemic peak.Watch more The Story vid...",
    //         "url": "https://www.youtube.com/watch?v=2z2AEBg6Bqg",
    //         "urlToImage": "https://i.ytimg.com/vi/2z2AEBg6Bqg/maxresdefault.jpg",
    //         "publishedAt": "2022-05-07T01:47:02Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Eonline.com"
    //         },
    //         "author": "Gabrielle Chung",
    //         "title": "Selling Sunset's Chrishell Stause Makes \"Closet\" Joke After Debuting G Flip Romance - E! NEWS",
    //         "description": "In a new video, Selling Sunset star Chrishell Stause made a joke about how she's \"gonna come out\" of the closet after confirming her relationship with Australian singer G Flip.",
    //         "url": "https://www.eonline.com/news/1330061/selling-sunsets-chrishell-stause-makes-closet-joke-after-debuting-g-flip-romance",
    //         "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202227/rs_1200x1200-220307042150-1200-chrishell-Stause-bangs-030722.jpg?fit=around%7C1080:566&output-quality=90&crop=1080:566;center,top",
    //         "publishedAt": "2022-05-07T01:45:00Z",
    //         "content": "Chrishell Stause is feeling right at home amid her relationship with G Flip.\r\nThe Selling Sunset star, who shared on the Netflix series' season five reunion special that she's now dating the Australi… [+916 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "politico",
    //             "name": "Politico"
    //         },
    //         "author": null,
    //         "title": "Alito skips conference appearance after draft opinion disclosure - POLITICO",
    //         "description": "The justice was scheduled to speak at the Fifth Circuit’s Annual Conference but instead recorded a brief video for attendees.",
    //         "url": "https://www.politico.com/news/2022/05/06/alito-skips-appearance-draft-opinion-roe-v-wade-00030826",
    //         "urlToImage": "https://static.politico.com/6d/ad/bc39ea5d4fee9aff26fa70d61dee/https-delivery.gettyimages.com/downloads/1232480944",
    //         "publishedAt": "2022-05-07T01:08:24Z",
    //         "content": "The draft opinion published by POLITICO sparked outrage across the country this week, as Americans anticipated the courts reversal of the 1973 landmark decision. Fifty percent of voters oppose overtu… [+1629 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "YouTube"
    //         },
    //         "author": null,
    //         "title": "Russian Forces Try To Break Ukrainian Resistance in Mariupol - NBC News",
    //         "description": "Another 50 civilians were evacuated from Mariupol’s steel plant to Russian-controlled territory. This comes after NBC News reports that U.S. intelligence sha...",
    //         "url": "https://www.youtube.com/watch?v=KiQEalwhrfo",
    //         "urlToImage": "https://i.ytimg.com/vi/KiQEalwhrfo/maxresdefault.jpg",
    //         "publishedAt": "2022-05-07T00:30:02Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Detroit Free Press"
    //         },
    //         "author": "Kristen Jordan Shamus, Detroit Free Press",
    //         "title": "2 Michigan kids suspected of having rare form of severe hepatitis under CDC investigation - Detroit Free Press",
    //         "description": "Two Michigan children had suspected cases of a rare, severe form of hepatitis that's now believed to have sickened at least 109 kids in the U.S.",
    //         "url": "https://www.freep.com/story/news/health/2022/05/06/cdc-investigates-2-michigan-kids-hepatitis-adenovirus/9681035002/",
    //         "urlToImage": "https://www.gannett-cdn.com/presto/2018/08/15/PCIN/e9c601a6-964a-4eb8-9e60-aa2b352bfd2c-hepatitis_a.jpg?auto=webp&crop=1943,1093,x0,y682&format=pjpg&width=1200",
    //         "publishedAt": "2022-05-07T00:24:07Z",
    //         "content": "Two Michigan children had suspected cases of a rare, severe form of hepatitis that's now believed to have sickened at least 109 kids in the U.S. and may be linked to adenovirus infection. \r\nBoth Mich… [+5432 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "marca",
    //             "name": "Marca"
    //         },
    //         "author": "LW",
    //         "title": "Amber Heards old interview resurfaces, contradicts her testimony vs Johnny Depp - Marca English",
    //         "description": "Either Amber Heard suffers memory loss or her legal team is actually feeding her a fake script to benefit her against Johnny Depp in the trial. On her initial statement, Heard desc",
    //         "url": "https://www.marca.com/en/lifestyle/celebrities/2022/05/07/6275aae522601db5288b456d.html",
    //         "urlToImage": "https://phantom-marca.unidadeditorial.es/072eef81a57b140d5418b96a122907e7/resize/1200/f/jpg/assets/multimedia/imagenes/2022/05/07/16518772219073.jpg",
    //         "publishedAt": "2022-05-06T23:12:53Z",
    //         "content": "Either Amber Heard suffers memory loss or her legal team is actually feeding her a fake script to benefit her against Johnny Depp in the trial. On her initial statement, Heard described not really kn… [+1683 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": "https://www.facebook.com/bbcnews",
    //         "title": "Elections 2022: No breakdown or big breakthrough in uncomfortable night for big parties - BBC",
    //         "description": "These elections were a valuable measure of the battle of the two main parties who seek to govern us.",
    //         "url": "https://www.bbc.com/news/uk-politics-61359522",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5962/production/_124628822_mediaitem124628821.jpg",
    //         "publishedAt": "2022-05-06T22:53:13Z",
    //         "content": "Laura KuenssbergPolitical editor@bbclaurakon Twitter\r\nThe local elections don't hold up a perfect mirror to the whole country's desires, or exactly what would happen if a general election had just ha… [+4434 chars]"
    //     }
    // ]

    // CapitlizeString = (String) => {
    //     return String.charAt(0).toUpperCase() + String.slice(1);
    // }


    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        // console.log("Hello i am a constructor from news component");
        this.state = {
            // articles: this.artices,
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=777141f8b21942b8aa9b20901da91a98&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(50);
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);

    }

    async componentDidMount() {
        // console.log("cmd");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=777141f8b21942b8aa9b20901da91a98&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // });
        this.updateNews();
    }


    // handleNextClick = async () => {
    //     console.log("next clicked");
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=777141f8b21942b8aa9b20901da91a98&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         this.setState({ loading: true });
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         console.log(parsedData);
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedData.articles,
    //             loading: false
    //         });
    //     }
    //     // this.setState({ page: this.state.page + 1 });
    //     // this.updateNews();
    // }

    // handlePreviousClick = async () => {
    //     console.log("previous clicked");
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=777141f8b21942b8aa9b20901da91a98&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     });
    //     // this.setState({ page: this.state.page - 1 })
    //     // this.updateNews();

    // }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=777141f8b21942b8aa9b20901da91a98&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: true
        });
    };

    render() {
        // console.log("render");

        return (
            <>
                <h1 className="text-center" style={{ margin: '35px' }}> NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {/* {this.state.loading && <Spinner />}  */}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    // loader={(this.state.articles.length !== this.state.totalResults) ? <Spinner/> : " "}
                >

                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 80) : ""}
                                        imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}

                        </div>

                    </div>

                </InfiniteScroll>



            </>

        )
    }
}